import { supabase } from 'components/supabaseClient';

interface AddVimmerResp {
  error: boolean;
  attendeeId: string;
}

const addVimmer = async (email: string): Promise<AddVimmerResp> => {
  const { data, error: attError } = await supabase
    .from('attendees')
    .select()
    .eq('email', email);

  if (attError) {
    return { error: true, attendeeId: '' };
  } else {
    if (data.length) {
      return { error: false, attendeeId: data[0].id };
    }
  }

  const { data: newEntryData, error } = await supabase
    .from('attendees')
    .insert({ email })
    .select()
    .single();
  if (error) {
    return { error: true, attendeeId: '' };
  }

  return { error: false, attendeeId: newEntryData.id };
};

const registerToConf = async (
  email: string,
  conferenceId: String
): Promise<string | null> => {
  const sanitisedEmail = email.trim().toLowerCase();
  const { attendeeId, error } = await addVimmer(sanitisedEmail);
  if (error) {
    return 'error';
  }

  const { data, error: previousRegistrationError } = await supabase
    .from('registrations')
    .select()
    .eq('attendee_id', attendeeId)
    .eq('event_id', conferenceId);

  if (previousRegistrationError) {
    return 'error';
  }

  if (data.length) {
    return null;
  }

  const { error: registrationError } = await supabase
    .from('registrations')
    .insert({
      attendee_id: attendeeId,
      event_id: conferenceId,
    });
  return registrationError ? 'error' : null;
};

export default registerToConf;

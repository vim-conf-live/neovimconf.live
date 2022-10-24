import { MouseEvent } from 'react';
import { useState, useCallback, ChangeEvent } from 'react';
import { supabase } from 'components/supabaseClient';
import RegistrationSuccessMsg from 'components/RegistrationSuccessMsg';
import RegistrationErrorMsg from 'components/RegistrationErrorMsg';

const NEOVIM_CONF_2022_ID = 'adc031c3-9a8b-409c-b487-1ae56b470eb6';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const handleSubmitRegistration = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setError(false);
      setSuccess(false);

      const { data, error: attendee_error } = await supabase
        .from('attendees')
        .insert([
          {
            email,
          },
        ])
        .select();

      if (attendee_error) {
        setError(true);
        return;
      }

      const attendeeId = data[0].id;

      console.log('data', data);
      const { error } = await supabase.from('registrations').insert([
        {
          attendee_id: attendeeId,
          event_id: NEOVIM_CONF_2022_ID,
        },
      ]);
      if (error) {
        setError(true);
        return;
      }
      setSuccess(true);
    },
    [email]
  );

  return (
    <div
      className={`mx-auto mt-20 min-h-screen max-w-screen-sm text-center
       sm:mt-40
    `}
    >
      <h1 className="mb-16 text-4xl">Register to attend the conference</h1>
      <form className="mb-4 flex items-center justify-center">
        <input
          className="w-72 rounded-l p-2 text-gray-800"
          type="text"
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className={`rounded-r bg-gray-300 px-4 py-2 text-blue-900 shadow
            transition hover:bg-gray-400`}
          onClick={handleSubmitRegistration}
        >
          Register
        </button>
      </form>
      <RegistrationErrorMsg show={Boolean(error)} />
      <RegistrationSuccessMsg show={Boolean(success)} />
    </div>
  );
}

export default RegistrationPage;

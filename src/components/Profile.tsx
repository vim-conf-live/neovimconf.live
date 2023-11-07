import { supabase } from "@/lib/auth";
import type { Session } from "@supabase/supabase-js";
import React from "react";
import {
  useState,
  useEffect,
} from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

export default function Profile() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {session ? <ProfileForm session={session} /> : "not logged in"}
    </div>
  );
}

const inputClasses = `block w-full p-2 shadow-inner border rounded-sm placeholder:text-slate-400 dark:bg-slate-800 dark:border-teal-500`;

type ProfileFields = {
  full_name: string;
  username: string;
  job_description: string;
  promo_mails: boolean;
};

const ProfileForm: React.FC<{ session: Session }> = ({ session }) => {
  const { user } = session;
  const { register, handleSubmit } = useForm<ProfileFields>();
  const [formState, setFormState] = useState<"idle" | "loading" | "error" | "saving" | "purge">("loading")
  const [profile, setProfile] = useState<ProfileFields | null>(null);
  const [message, setMessage] = useState<null | string>(null);
  const onSubmit: SubmitHandler<ProfileFields> = (data) => {
    if (formState === "saving") return;
    setFormState("saving")

    supabase
      .from("user_profile")
      .upsert({
        id: user.id,
        ...data,
      })
      .then(({error}) => {
        if (error) {
          setMessage(error.message);
          setFormState("error");
        } else {
          fetch(`/tickets/refresh/${user.id}`).then(() => {
            setFormState("purge")
            window.location.href="/ticket"
          })
        }
      });
  };

  useEffect(() => {
    supabase
      .from("user_profile")
      .select("full_name, username, job_description, promo_mails")
      .eq("id", user.id)
      .single()
      .then(({data, error}) => {
        console.error(error)
        setProfile(data);
        setFormState("idle");
      });
  }, []);

  if (formState === "loading") {
    return <p className="animate-pulse">loading</p>;
  }

  if (formState === "error") {
    return <p className="text-red-500 border border-red-500 text-md p-4 shadow bg-slate-50 dark:bg-slate-950">Something went wrong. Try again later,  we'll look into this.</p>;
  }

  if (!profile) {
    return <p>Could not load profile</p>;
  }

  return (
    <form
      className="max-w-sm mx-auto space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
    {message && (
      <p className="text-red-500 border border-red-500 text-md p-4 shadow bg-slate-50 dark:bg-slate-950">{message}</p>
    )}

     <div>
        <label htmlFor="alias" className="text-sm font-mono p-1">
          Alias
        </label>
        <input
          className={inputClasses}
          defaultValue={profile.username}
          placeholder="eg.: leethaxxor42069"
          id="alias"
          type="text"
          {...register("username")}
        />
      </div>

      <div>
        <label htmlFor="full_name" className="text-sm font-mono p-1">
          Full Name
        </label>
        <input
          className={inputClasses}
          defaultValue={profile.full_name}
          placeholder="eg.: Bailey Bufferchief"
          id="full_name"
          type="text"
          {...register("full_name")}
        />
      </div>

      <div>
        <label htmlFor="job_description" className="text-sm font-mono p-1">
          Job Description
        </label>
        <input
          className={inputClasses}
          placeholder="eg.: 10x Soy Developer"
          id="job_description"
          defaultValue={profile.job_description}
          type="text"
          {...register("job_description")}
        />
      </div>

      <div className="mt-8">
        <h2>Notifications</h2>
        <label htmlFor="promo_mails" className="text-sm p-1 relative pl-5 block">
          <input
            type="checkbox"
            id="promo_mails"
            className="absolute left-0 top-2"
            {...register("promo_mails")}
            value="true"
            defaultChecked={profile.promo_mails}
          />{" "}
          I want to receive notifications about this and future neovimconf
          events.
        </label>
      </div>

      <div className="text-right">
      {formState ==="idle" ? (
        <button
          className="inline-block relative text-center bg-teal-300 p-2 rounded-sm hover:bg-teal-200 dark:text-teal-900 font-mono disabled:bg-slate-50"
          type="submit"
        >
          save
        </button>
      ) : (
        <button
          className="inline-block relative text-center bg-teal-300 opacity-50 p-2 rounded-sm hover:bg-teal-200 dark:text-teal-900 font-mono disabled:bg-slate-50 animate-pulse"
          disabled
        >
          {formState === "purge" ? "saving..." : "saving"}
        </button>
      )}
      </div>
    </form>
  );
};

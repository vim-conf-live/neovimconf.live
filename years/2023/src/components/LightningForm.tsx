import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormError } from "./FormError";

export const LightningSchema = z.object({
  full_name: z.string(),
  discord_handle: z.string(),
  sample: z.string(),
  description: z.string()
});

type LightningFields = z.infer<typeof LightningSchema>;

export const LightningForm = () => {
  const { register, handleSubmit, formState: { errors, isValid, isDirty }, formState, setError } = useForm<LightningFields>({
    resolver: zodResolver(LightningSchema)
  });

  const onSubmit: SubmitHandler<LightningFields> = (data) => {
    fetch("/api/lightning", {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      method: "POST",
    }).then((response) => {
      if (response.status !== 200) {
        response.json().then((data) => {
          setError("root.serverError", data)
        });
      } else {
        window.location.href = "/lightning/success"
      }
    })
  }

  const hasError = (field: string) => (errors as any)?.[field]?.length > 0;

  return (
    <form
      className="md:grid gap-4 grid-cols-2 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {errors.root?.message && (
        <FormError>
          {errors.root.message.toString()}
        </FormError>
      )}

      <div className={[hasError("full_name") ? "text-red-500" : null].join(" ")}>
        <label htmlFor="full_name" className="text-sm font-mono p-1">
          Your full name
        </label>
        <input
          className="block w-full p-1 mb-2 shadow-inner border rounded-sm placeholder:text-slate-400 dark:bg-slate-800 dark:border-teal-500"
          id="full_name"
          type="text"
          {...register("full_name")}
          required
        />
        <p className="text-xs text-slate-400">
          This will be used for the website and the schedule.
          </p>
        {errors.full_name?.message && (
          <p className="text-red-500 text-sm text-right">
            {errors.full_name.message.toString()}
          </p>
        )}
      </div>

      <div className={[hasError("discord_handle") ? "text-red-500" : null].join(" ")}>
        <label htmlFor="discord_handle" className="text-sm font-mono p-1">
          Your discord handle
        </label>
        <input
          className="block w-full p-1 mb-2 shadow-inner border rounded-sm placeholder:text-slate-400 dark:bg-slate-800 dark:border-teal-500"
          id="discord_handle"
          type="text"
          {...register("discord_handle")}
          required
        />
        <p className="text-xs text-slate-400">
          You need to <a tabIndex={1} href="https://discord.gg/Cz9J4ZD" className="text-purple-400" target="_blank">
            join our discord server
          </a> for communication purposes.
        </p>
        {errors.discord_handle?.message && (
          <p className="text-red-500 text-sm text-right">
            {errors.discord_handle.message.toString()}
          </p>
        )}
      </div>

      <div className={["col-span-2", hasError("sample") ? "text-red-500" : null].join(" ")}>
        <label htmlFor="sample" className="text-sm font-mono p-1">
          Sample
        </label>
        <input
          className="block w-full p-1 mb-2 shadow-inner border rounded-sm placeholder:text-slate-400 dark:bg-slate-800 dark:border-teal-500"
          id="sample"
          type="url"
          placeholder="eg: https://www.youtube.com/watch?v=9n1dtmzqnCU"
          {...register("sample")}
          required
        />
        <p className="text-xs text-slate-400">
          A link to a video for us to verify that you have adequate audio and video quality.
        </p>
        {errors.sample?.message && (
          <p className="text-red-500 text-sm text-right">
            {errors.sample.message.toString()}
          </p>
        )}
      </div>

      <div className={["col-span-2 mb-4 md:mb-0", hasError("description") ? "text-red-500" : null].join(" ")}>
        <label htmlFor="description" className="text-sm font-mono p-1">
          What do you want to talk about?
        </label>
        <textarea
          className="block w-full p-2 shadow-inner border rounded-sm placeholder:text-slate-400 dark:bg-slate-800 dark:border-teal-500"
          id="description"
          {...register("description")}
          required
        />
        {errors.description?.message && (
          <p className="text-red-500 text-sm text-right">
            {errors.description.message.toString()}
          </p>
        )}
      </div>

      <div className="col-span-2 text-right">
        <button className="inline-block relative text-center bg-teal-300 p-2 rounded-sm hover:bg-teal-200 dark:text-teal-900 font-mono disabled:opacity-50" type="submit" disabled={!isDirty || !isValid}>
          {formState.isSubmitSuccessful ? "Signing up..." : "Sign up!"}
        </button>
      </div>
    </form>
  );
};

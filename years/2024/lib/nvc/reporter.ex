defmodule Nvc.ObanReporter do
  import Swoosh.Email

  def attach do
    :telemetry.attach("oban-errors", [:oban, :job, :exception], &__MODULE__.handle_event/4, [])
  end

  def handle_event([:oban, :job, :exception], measure, meta, _) do
    extra =
      meta.job
      |> Map.take([:id, :args, :meta, :queue, :worker])
      |> Map.merge(measure)

    new()
    |> to("nils@bleepbloop.studio")
    |> from({"NeovimConf", Application.fetch_env!(:nvc, :confirm_email_from)})
    |> subject("error reporting")
    |> text_body("""
    === reason
    #{inspect(meta.reason)}
    === stacktrace
    #{inspect(meta.stacktrace)}
    === extra
    #{extra}
    """)
    |> Nvc.Mailer.deliver()
  end
end

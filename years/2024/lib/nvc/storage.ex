defmodule Nvc.Storage do
  alias ExAws.S3

  @bucket "media-zccq"

  def upload(
        %Plug.Upload{
          path: path,
          content_type: content_type
        },
        save_to
      ) do
    path
    |> S3.Upload.stream_file()
    |> S3.upload(@bucket, save_to, content_type: content_type)
    |> ExAws.request!()
  end

  def public_url(path) do
    config = Application.fetch_env!(:ex_aws, :s3)
    "#{config[:scheme]}#{config[:host]}/#{@bucket}/#{path}"
  end
end

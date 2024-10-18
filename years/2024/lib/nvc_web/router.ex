defmodule NvcWeb.Router do
  use NvcWeb, :router
  import NvcWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {NvcWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", NvcWeb do
    pipe_through  [:browser, :require_authenticated_user, :require_admin_role]
    resources "/speakers", SpeakerController, except: [:index, :show]
    resources "/agenda", Agenda.ItemController, except: [:index, :show]
    resources "/sponsors", SponsorController, except: [:show]
  end

  scope "/", NvcWeb do
    pipe_through :browser

    get       "/",                      SignupController,      :new
    post      "/signup",                SignupController,      :create
    get       "/signup/ok",             SignupController,      :create_ok
    get       "/signup/confirm/:token", SignupController,      :confirm
    get       "/home",                  PageController,        :home
    delete    "/users/log_out",         UserSessionController, :delete
    get       "/users/log_out",         UserSessionController, :delete
    get       "/privacy",               PageController,        :privacy
    get       "/coc",                   PageController,        :coc
    resources "/speakers",              SpeakerController,     only: [:index, :show]
    resources "/agenda",                Agenda.ItemController, only: [:index, :show]

  end

  scope "/api", NvcWeb do
    pipe_through :api
    resources "/altcha", AltchaController, except: [:delete, :edit]
  end

  if Application.compile_env(:nvc, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: NvcWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end

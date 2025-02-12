{ pkgs, lib, config, inputs, ... }:

let
  elixir-1-17 = pkgs.elixir.overrideAttrs (oldAttrs: {
    version = "1.17.3";
    src = pkgs.fetchFromGitHub {
      owner = "elixir-lang";
      repo = "elixir";
      rev = "v1.17.3";
      sha256 = "sha256-7Qo6y0KAQ9lwD4oH+7wQ4W5i6INHIBDN9IQAAsYzNJw=";  # Valid hash for Elixir 1.17.0
    };
  });
in
{
  dotenv.enable = true;

  languages = {
    elixir.enable = true;
    elixir.package = elixir-1-17;
  };

  packages = with pkgs; [
    livebook
    nodePackages.pnpm
    nodePackages.npm
  ];

  scripts = { # {{{
    start.exec = ''
      process-compose
    '';

    start-iex.exec = ''
      iex --sname nvc-local-iex --cookie nvc-local-cookie --remsh nvc-local
    '';
  }; # }}}

  processes = { # {{{
    livebook.exec = ''
      LIVEBOOK_TOKEN_ENABLED=false \
      LIVEBOOK_DEFAULT_RUNTIME=attached:nvc-local:nvc-local-cookie \
      LIVEBOOK_HOME=./notebooks/ \
      LIVEBOOK_PORT=8009 \
      livebook start
    '';

    phoenix_app = {
      process-compose = {
        depends_on = {
          postgres = {
            condition = "process_started";
          };
        };
      };
      exec = ''
        mix deps.get;
        elixir --sname nvc-local --cookie nvc-local-cookie -S mix phx.server
      '';
    };
  }; # }}}

  services = { # {{{
    # if you already have a postgres service running on that port, you can 
    # comment this entire postgres section out.
    postgres = {
      enable = true;
      package = pkgs.postgresql_15;
      listen_addresses = "127.0.0.1";
      port = 6543;
      initialDatabases = [
        { name = "nvc-db-dev"; }
      ];
      initialScript = ''
        CREATE ROLE postgres WITH LOGIN SUPERUSER PASSWORD 'postgres';
      '';
    };
  }; # }}}

  enterShell = ''
    # symlinking latest templated process-compose yaml file from config.processes
    ln -sf ${config.process-managers.process-compose.configFile} ${config.env.DEVENV_ROOT}/process-compose.yml;
  '';

}

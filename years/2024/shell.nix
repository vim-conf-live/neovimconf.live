{ pkgs ? import <nixpkgs> {} }:

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
pkgs.mkShell {
  buildInputs = [
    elixir-1-17
    pkgs.nushell
  ];

  # Optional: Set environment variables
  shellHook = ''
    echo "Elixir 1.17.3 development environment"
    echo "Running on Erlang $(erl -eval 'erlang:display(erlang:system_info(otp_release)), halt().' -noshell)"
    exec nu
  '';
}

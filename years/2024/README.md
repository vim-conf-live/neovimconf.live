# NeovimConf 2024

It's Elixir this year! If you're not familiar with it at all, I recommend 
starting with these two videos that give a great intro to the language. I 
promise, they are worth a watch.

- [Erlang: The Movie, 11:31](https://www.youtube.com/watch?v=xrIjfIjssLE)
- [The Soul of Erlang and Elixir, 42:02](https://www.youtube.com/watch?v=JvBT4XBdoUE)

And to get into the language itself, these are great starting points:

- https://hexdocs.pm/elixir/introduction.html
- https://hexdocs.pm/phoenix/overview.html
- https://elixirschool.com

I know some were hoping for Astro/Next.js, in order to be able to contribute
with something they're familiar with. However I promise that if you can handle
Astro/Next.js you'll manage [Phoenix] - which is the Framework we'll be using.

So don't feel discouraged, Elixir code is quite readable and you're likely able
to infer a lot without any prior experience. I will prepare a few issues that 
focus on frontend parts.

[Phoenix]: https://phoenixframework.org

## Installing the Requirements

### With devenv

There's a [devenv.nix](./devenv.nix) file provided. It's a really nice way to
set up local development environments with [devenv.sh]. It's build on [nix], 
but you don't have to be familiar with `nix` to be able to use it here - or to
be able to set your own projects up; it's almost like just using JSON.

[Follow their guide][Devenv Guide] to install it, and I highly recommend to also
set up [Automatic Shell Activation]. This way the environment will automatically
be set up when you `cd` into the directory.

Doing so is straight forward and doesn't involve a lot of steps. If you still
struggle, post an issue or hit me up on Discord.

When you've done that, all you need from now on is to run `start`.

[nix]: https://nixos.org
[devenv.sh]: https://devenv.sh
[Devenv Guide]: https://devenv.sh/getting-started/
[Automatic Shell Activation]: https://devenv.sh/automatic-shell-activation/


### The Boring Way

Of course you don't *have* to use devenv and can also just manually install
things.

#### Setting up Elixir

For a more detailed guide, read the installation instructions on the [Elixir
website]

- For macOS: `brew install elixir`
- For Ubuntu: `sudo apt install elixir`

If you're interested in a version-manager for Elixir and Erlang, [asdf] is the 
de-facto standard that most people use.

[Elixir website]: https://elixir-lang.org/install.html
[asdf]: https://github.com/asdf-vm/asdf


#### Postgres

We're using [Supabase] again this year. But we're using it only as a Provider
for Postgres and none of their other features. Meaning you'll only need to run
postgres locally.

For a more detailed guide, read the installation instructions on the [Postgres 
website].

- macOS: `brew install postgresql@15`
- Ubuntu: `apt install postgresql`

[Postgres website]: https://www.postgresql.org/download/

> [!NOTE]
> Postgres is expected to run on the port 6543, which isn't the default port.
> This is to have the postgres within devenv not to interfere with another 
> postgres on the host system. You can also change the default port in 
> [./config/dev.exs] by adjusting the postgres url; same goes for the username
> and password; which are both to be expected `postgres`.

#### Docker Compose

If you don't want to install Postgres locally, you can also use Docker Compose to spin up a Postgres databse for local development.

Start the postgres container with the following command:

```sh
docker compose up -d
```

Stop the postgres container with the following command:

```sh
docker compose down
```

> [!NOTE]
> The database will automatically forward it's port to 5432, which is what the server is expecting.

See the [Docker Compose docs](https://docs.docker.com/compose/) for instructions for use Docker Compose.

## More Resources

If you're intrigued and want to really get into Elixir and Phoenix, here are
more resources I found to be really good.

Books, available in O'Reilly:

- [Elixir In Action](https://www.oreilly.com/library/view/elixir-in-action/9781633438514/)
- [Phoenix In Action](https://www.oreilly.com/library/view/phoenix-in-action/9781617295041/)
- [Programming Ecto](https://www.oreilly.com/library/view/programming-ecto/9781680506921/)

Some more talks:

- [The foundations of the Elixir type system, 1:11:41](https://www.youtube.com/watch?v=giYbq4HmfGA)
- [Phoenix Field Notes, 58:38](https://www.youtube.com/watch?v=Ckgl9KO4E4M)
- ["The Mess We're In" by Joe Armstrong, 45:49](https://www.youtube.com/watch?v=lKXe3HUG2l4)

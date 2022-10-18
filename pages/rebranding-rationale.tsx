import { ReactNode } from 'react';
import NavbarLayout from 'components/NavbarLayout';

function RebrandingRationale() {
  return (
    <main className="rebranding container mx-auto mt-6 max-w-[75ch] p-4 font-mono text-gray-100 sm:mt-20">
      <h1>Hello all!</h1>
      <p>
        Last years conference was truly amazing and we were so awed by community
        enthusiasm and support. You make it all possible. We’re very excited to
        about this years conference and want to kick things off by announcing
        our rebrand from Vimconf.live → Neovimconf.live As integral members of
        our community, we want to take a minute to explain why.
      </p>
      <h2>“Why the change?”</h2>
      <p>
        In our two years running, the overwhelming majority of community members
        who have presented or wanted to present are Neovim users. Close to 80%
        of our discord community are Neovim users. All the organizers are Neovim
        users. Questions often arose over the past two years that; “if you’re a
        self-titled vimconf then why is the overwhelming majority of content
        about Neovim?“ We didn’t set out for that to be the case, but that has
        and is the reality. To that end we decided to update the name to be more
        in line with the content.
      </p>
      <h2>“But I love Vim!”</h2>
      <p>
        We do too! Our conference will always be a space for vim just as much as
        it is for any other editor and we are always thrilled to have any
        speakers and attendees participate who are interested and looking for
        vim content. “So will there only be Neovim content going forward?”
        Definitely not. In fact, going forward we plan to showcase speakers and
        communities across many different editors out there and be a space to
        share editors across the spectrum (vim, neovim, helix, emacs, zed etc.)
        We love editors of all distros and aim to be a conference to celebrate
        them all!
      </p>
    </main>
  );
};

RebrandingRationale.getLayout = (page: ReactNode) => {
  return <NavbarLayout>{page}</NavbarLayout>;
};

export default RebrandingRationale;

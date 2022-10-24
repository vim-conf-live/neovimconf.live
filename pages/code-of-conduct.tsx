import { ReactNode } from 'react';
import NavbarLayout from 'components/NavbarLayout';

function CodeOfConduct() {
  return (
    <main className="rebranding container mx-auto mt-16 max-w-[75ch] p-4 font-mono text-gray-100 sm:mt-20">
      <h1>Code of Conduct</h1>

      <p>NeovimConf.live is an inclusive community.</p>

      <p>
        We strive to create a friendly, welcoming, judgement- and
        harassment-free place for individuals to learn, connect, and share their
        appreciation for all things vim.
      </p>

      <p>
        We are a diverse, global community. We have members from every gender,
        sexuality, gender expression, race, ethnicity, tribal background,
        religious affiliation, citizenship and nationality, age, physical
        ability, educational background, experience level that you can think of
        - and want everyone to feel welcome!
      </p>

      <p>
        Whether attending our events, it’s not only our hope, but our
        expectation, that you’ll abide by these three basic ground rules:
      </p>

      <ul role="list">
        <li>We approach interactions with thoughtfulness and care.</li>

        <li>
          We are patient &amp; kind to others. We don’t dismiss someone because
          they have a different level of experience, are of a different
          background, or have a difference of opinion than us.
        </li>

        <li>We are respectful when we disagree with someone.</li>

        <li>
          There is a human in front of us. We don’t allow frustration to turn
          into a personal attack. A community where people feel uncomfortable or
          threatened is not a productive one. We are collectively responsible
          for each other.
        </li>

        <li>We work to correct mistakes when they occur.</li>

        <li>
          No one is expected to always be perfect or to know everything -
          sometimes even good intentions have unwanted outcomes. But how we
          respond to criticism is important. If someone criticizes our conduct,
          or points out ways we have harmed someone, we listen without taking it
          personally, and work towards a resolution - together.
        </li>
      </ul>

      <h2 className="my-8 text-3xl" id="we-will-not-tolerate-the-following">
        We will not tolerate the following:
      </h2>

      <ul role="list">
        <li>Violent threats or language.</li>

        <li>Discriminatory or derogatory jokes and language.</li>

        <li>
          Disrespecting people’s stated pronouns and gender identity, or current
          name.
        </li>

        <li>Posting sexually explicit or violent material.</li>

        <li>
          Posting, or threatening to post, people’s personally identifying
          information (“doxing”).
        </li>

        <li>Insults, especially those using discriminatory terms or slurs.</li>

        <li>Behavior that could be perceived as sexual attention.</li>

        <li>Advocating for or encouraging any of the above behaviors.</li>
      </ul>

      <p>
        If someone has said or done something that violates this code of
        conduct, please refer to the Resolving Code of Conduct Violations
        section.
      </p>

      <h2 className="my-8 text-3xl" id="discord-code-of-conduct">
        Discord Code of Conduct
      </h2>

      <ul role="list">
        <li>
          Written communication is easy to misinterpret. Ask for clarification
          before jumping to conclusions.
        </li>
        <li>
          Respect and use the correct pronouns for people when referring to
          them. Ask if you are not sure.
        </li>
        <li>
          Respect people’s boundaries, don’t dm or continue to interact with
          people if they have asked you not to.
        </li>
        <li>Do not spam or solicit other participants</li>
        <li>
          Consider thoughtful use of discussion threads to help keep useful
          conversations focussed
        </li>
        <li>
          Select the most appropriate channel for your conversation and avoid
          reposting the same messages across many channels in ways which may
          feel spammy.
        </li>
      </ul>
      <h2 className="my-8 text-3xl" id="resolving-code-of-conduct-violations">
        Resolving Code of Conduct Violations
      </h2>
      <p>
        If something has happened that excludes you or is making you have a bad
        experience, here is what should happen next.
      </p>

      <p>
        <strong>In the moment: </strong>Are you safe? If not, get to a safe
        place. Can you talk to someone you trust about what happened?
      </p>

      <p>
        <strong>If it seems safe</strong>, try and speak with the
        person privately,<strong> in person </strong>if you can. Try
        and work to a resolution together. If it goes well, great!
        If it does not go well, please speak to an organizer as soon
        as you can.
      </p>

      <p>
        <strong>If it does not seem safe</strong>, or the
        conversation did not go well, speak to an organizer about
        what happened as soon as you can.
      </p>

      <p>
        <strong>After the fact: </strong>Organizers are familiar with
        this Code of Conduct and will take reports of CoC violations
        seriously. They will ask you details such as:
      </p>

      <ul role="list">
        <li>time / place / manner of the alleged violation.</li>
        <li>
          whether there were additional witnesses or other people
          involved.
        </li>
        <li>
          contact or identifying information about the person who
          allegedly violated the CoC.
        </li>
        <li>
          Whether or not you would prefer to have your complaint be
          kept anonymous in the situation.
        </li>
      </ul>

      <p>
        You can help us by giving us much detail as you can about what
        occurred Organizers will work with staff to evaluate what
        happened, inform the person(s) in question that a violation
        was reported, and establish next steps.
      </p>

      <h2 className="my-8 text-3xl" id="enforcement">Enforcement</h2>
      <p>
        This Code of Conduct covers a variety of different spaces of
        interaction.
      </p>
      <p>If you’d like to report a CoC violation that happens…</p>
      <ul>
        <li>
          in the Discord Server, please speak to ABD. Please do note we
          may be out of your timezone, but we will respond.
        </li>
        <li>
          during our online events, please speak with the organizers, who
          can be reached in the discord server.
        </li>
      </ul>
      <p>
        All group organizers are required to relay all reports of CoC
        violations and complaints to Vimconf.live staff within one week,
        regardless of how “severe” they are, so we can be accountable and
        responsible for resolving issues promptly.
      </p>
      <p>
        Depending on the severity of the issue, the person may receive a
        last-chance warning, may be asked to leave the activity/group, or
        may receive a future ban. In very severe cases, we reserve the
        right to involve law enforcement should we feel it necessary.
        Tickets or other participation fees won’t be refunded for people
        who are removed for CoC violations.
      </p>
    </main>
  );
}

CodeOfConduct.getLayout = (page: ReactNode) => {
  return <NavbarLayout>{page}</NavbarLayout>;
}

export default CodeOfConduct;

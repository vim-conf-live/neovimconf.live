import React from 'react';
import Link from 'next/link';

const JoinDiscordButton = () => (
  <Link href="https://discord.gg/Cz9J4ZD">
    <a
      className="rounded-lg bg-brand-discord px-4 py-2 text-white"
      target="_blank"
    >
      Join Discord
    </a>
  </Link>
);

export default JoinDiscordButton;

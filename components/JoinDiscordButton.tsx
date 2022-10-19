import React from 'react';
import Link from 'next/link';

const JoinDiscordButton = () => (
  <Link href="https://discord.gg/Cz9J4ZD">
    <a 
      className="bg-brand-discord text-white rounded-lg px-4 py-2"
      target="_blank">
      Join Discord
    </a>
  </Link>
);

export default JoinDiscordButton;

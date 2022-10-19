import React from 'react';
import Link from 'next/link';

const JoinDiscordButton = () => (
  <Link href="https://discord.gg/Cz9J4ZD">
    <a style={{ background: "rgba(59, 130, 246, 1)"}} className="text-white rounded-lg p-2" target="_blank">
      Join Discord
    </a>
  </Link>
);

export default JoinDiscordButton;

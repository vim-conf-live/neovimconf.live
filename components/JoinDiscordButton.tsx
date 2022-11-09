import React from 'react';
import Link from 'next/link';
import { FaDiscord } from 'react-icons/fa';

const JoinDiscordButton = () => (
  <Link href="https://discord.gg/Cz9J4ZD">
    <a
      className={`group ml-auto flex items-center gap-2 rounded-lg 
        bg-brand-discord px-4 py-2 text-sm text-white transition
        duration-300 hover:text-gray-200`}
      target="_blank"
    >
      <FaDiscord className="transform-gpu text-lg duration-300 ease-out group-hover:rotate-[360deg]" />
      <span className="hidden md:block">Join Discord</span>
    </a>
  </Link>
);

export default JoinDiscordButton;

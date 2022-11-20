import {
  FaAmazon,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaMastodon,
} from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';

interface Props {
  github?: string | null;
  twitter?: string | null;
  twitch?: string | null;
  website?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  amazon?: string | null;
  matrix?: string | null;
  mastodon?: string | null;
}

const SocialLinks = (props: Props) => {
  const {
    github,
    twitter,
    twitch,
    website,
    linkedin,
    youtube,
    amazon,
    matrix,
    mastodon,
  } = { ...props };

  return (
    <ul className="mt-2 flex flex-wrap gap-4">
      {github && (
        <li>
          <a href={github} target={'_blank'} rel={'noreferrer'}>
            <FaGithub className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {mastodon && (
        <li>
          <a href={mastodon} target={'_blank'} rel={'noreferrer'}>
            <FaMastodon className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a href={twitter} target={'_blank'} rel={'noreferrer'}>
            <FaTwitter className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {twitch && (
        <li>
          <a href={twitch} target={'_blank'} rel={'noreferrer'}>
            <FaTwitch className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {website && (
        <li>
          <a href={website} target={'_blank'} rel={'noreferrer'}>
            <FaGlobe className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {matrix && (
        <li>
          <a href={matrix} target={'_blank'} rel={'noreferrer'}>
            <SiMatrix className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {linkedin && (
        <li>
          <a href={linkedin} target={'_blank'} rel={'noreferrer'}>
            <FaLinkedin className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a href={youtube} target={'_blank'} rel={'noreferrer'}>
            <FaYoutube className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
      {amazon && (
        <li>
          <a href={amazon} target={'_blank'} rel={'noreferrer'}>
            <FaAmazon className="text-xl text-gray-400 hover:opacity-70" />
          </a>
        </li>
      )}
    </ul>
  );
};

export default SocialLinks;

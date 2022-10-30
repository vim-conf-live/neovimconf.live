import Image from 'next/future/image';
import {
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

interface Props {
  name: string;
  about: string;
  src: string;
  github?: string | null;
  twitter?: string | null;
  twitch?: string | null;
  website?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
}

const Card = (props: Props) => {
  const {
    name,
    about,
    src,
    github,
    twitter,
    twitch,
    website,
    linkedin,
    youtube,
  } = { ...props };

  return (
    <article className="mx-5 flex max-w-md gap-5 rounded-lg bg-gray-800 p-5 shadow-lg md:mx-0">
      <section className="relative h-24 w-24 flex-shrink-0 overflow-hidden lg:h-32 lg:w-32">
        <Image
          fill
          object-fit="cover"
          src={src}
          alt="speaker profile image"
          className="rounded-full"
        />
      </section>

      <section className="flex flex-col gap-2 text-left">
        <h3 className="text-xl font-bold text-gray-300 lg:text-2xl">{name}</h3>
        <p className="text-md text-gray-400 lg:text-lg">{about}</p>
        <ul className="mt-2 flex flex-wrap gap-4">
          {github && (
            <li>
              <a href={github} target={'_blank'} rel={'noreferrer'}>
                <FaGithub className="text-xl text-gray-400 hover:opacity-70" />
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
        </ul>
      </section>
    </article>
  );
};

export default Card;

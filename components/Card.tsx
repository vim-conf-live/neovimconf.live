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

/* Remove the first div with class of card-container
 * parent of this component will set the width of this component*/
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
    <div className="card-container w-50vh my-5 min-w-[50vw]">
      <div className="flex gap-5 rounded-lg bg-gray-800 p-5 shadow-lg">
        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden">
          <Image
            fill
            object-fit="cover"
            src={src}
            alt="speaker profile image"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center text-left">
          <div className="text-xl font-bold text-gray-300 md:text-2xl">
            {name}
          </div>
          <div className="text-md text-gray-400 md:text-lg">{about}</div>
          <div className="mt-2 flex gap-4">
            {github && (
              <a href={github} target={'_blank'} rel={'noreferrer'}>
                <FaGithub className="text-xl text-gray-400" />
              </a>
            )}
            {twitter && (
              <a href={twitter} target={'_blank'} rel={'noreferrer'}>
                <FaTwitter className="text-xl text-gray-400" />
              </a>
            )}
            {twitch && (
              <a href={twitch} target={'_blank'} rel={'noreferrer'}>
                <FaTwitch className="text-xl text-gray-400" />
              </a>
            )}
            {website && (
              <a href={website} target={'_blank'} rel={'noreferrer'}>
                <FaGlobe className="text-xl text-gray-400" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target={'_blank'} rel={'noreferrer'}>
                <FaLinkedin className="text-xl text-gray-400" />
              </a>
            )}
            {youtube && (
              <a href={youtube} target={'_blank'} rel={'noreferrer'}>
                <FaYoutube className="text-xl text-gray-400" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

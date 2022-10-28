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
      <article className="flex gap-5 rounded-lg bg-gray-800 p-5 shadow-lg">
        <section className="relative h-32 w-32 flex-shrink-0 self-center overflow-hidden">
          <Image
            fill
            object-fit="cover"
            src={src}
            alt="speaker profile image"
            className="rounded-full"
          />
        </section>

        <section className="flex flex-col justify-center text-left">
          <h3 className="text-xl font-bold text-gray-300 md:text-2xl">
            {name}
          </h3>
          <p className="text-md text-gray-400 md:text-lg">{about}</p>
          <ul className="mt-2 flex gap-4">
            {github && (
              <li>
                <a href={github} target={'_blank'} rel={'noreferrer'}>
                  <FaGithub className="text-xl text-gray-400" />
                </a>
              </li>
            )}
            {twitter && (
              <li>
                <a href={twitter} target={'_blank'} rel={'noreferrer'}>
                  <FaTwitter className="text-xl text-gray-400" />
                </a>
              </li>
            )}
            {twitch && (
              <li>
                <a href={twitch} target={'_blank'} rel={'noreferrer'}>
                  <FaTwitch className="text-xl text-gray-400" />
                </a>
              </li>
            )}
            {website && (
              <li>
                <a href={website} target={'_blank'} rel={'noreferrer'}>
                  <FaGlobe className="text-xl text-gray-400" />
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a href={linkedin} target={'_blank'} rel={'noreferrer'}>
                  <FaLinkedin className="text-xl text-gray-400" />
                </a>
              </li>
            )}
            {youtube && (
              <li>
                <a href={youtube} target={'_blank'} rel={'noreferrer'}>
                  <FaYoutube className="text-xl text-gray-400" />
                </a>
              </li>
            )}
          </ul>
        </section>
      </article>
    </div>
  );
};

export default Card;

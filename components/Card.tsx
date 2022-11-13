import { useState, useCallback } from 'react';
import Image from 'next/future/image';
import {
  FaAmazon,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMicrophone,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';

interface Props {
  name: string;
  about: string;
  src: string;
  // make lecture title optional till all title is added
  lectureTitle?: string;
  github?: string | null;
  twitter?: string | null;
  twitch?: string | null;
  website?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  amazon?: string | null;
  matrix?: string | null;
}

const Card = (props: Props) => {
  const [ showFullText, setShowFullText ] = useState(false);
  const {
    name,
    about,
    src,
    lectureTitle,
    github,
    twitter,
    twitch,
    website,
    linkedin,
    youtube,
    amazon,
    matrix,
  } = { ...props };

  const toggleReadMore = useCallback( () => setShowFullText(state => !state), []);

  const titleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  };

  const aboutNeedsTruncate = about.length > 140;
  const shownAbout = (aboutNeedsTruncate && !showFullText) ?
    `${about.substring(0, 137)}...` : about;
  const readMoreButtonLabel = showFullText ? 'Read less' : 'Read more';

  return (
    <article className="mx-5 flex max-w-md gap-5 rounded-lg bg-gray-800 p-5 shadow-lg md:mx-0">
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden lg:h-32 lg:w-32">
        <Image
          fill
          object-fit="contain"
          src={src}
          alt="speaker profile image"
          className="rounded-full"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <h3 className="text-2xl font-bold text-gray-100 lg:text-3xl">
          {lectureTitle}
        </h3>
        <h3 className="text-lg text-gray-300 lg:text-2xl">
          <FaMicrophone className="mr-2 inline-block text-gray-400" />
          {titleCase(name)}
        </h3>
        <p className="text-md text-gray-400 lg:text-lg">{shownAbout}</p>
        {aboutNeedsTruncate && (
          <button
            onClick={toggleReadMore}
            className={`w-fit rounded-sm bg-gray-400 px-1 
                text-gray-800 hover:opacity-70`}
          >
            {readMoreButtonLabel}
          </button>
        )}
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
      </div>
    </article>
  );
};

export default Card;

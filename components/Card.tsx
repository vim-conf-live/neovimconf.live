import Image from 'next/future/image';

const Card = () => {
  return (
    <div className="m-10">
      <div className="flex rounded-lg bg-gray-800 p-6 shadow-lg">
        <Image
          width={90}
          height={90}
          src="/placeholder.png"
          alt="speaker profile image"
          className="rounded-full"
        />
        <div className="px-6 py-4 text-left">
          <div className="mb-2 text-xl font-bold text-gray-300">Mr Neovim</div>
          <p className="text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

import Image from 'next/future/image';

/* Remove the first div with class of card-container
 * parent of this component will set the width of this component*/
const Card = () => {
  return (
    <div className="card-container w-50vh min-w-[50vw]">
      <div className="flex gap-5 rounded-lg bg-gray-800 p-5 shadow-lg">
        <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden">
          <Image
            fill
            object-fit="cover"
            src="/placeholder.png"
            alt="speaker profile image"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center text-left">
          <div className="text-xl font-bold text-gray-300 md:text-2xl">
            Mr Neovim
          </div>
          <div className="text-md text-gray-400 md:text-lg">
            This is a long text to check how the component looks with long text
          </div>
          {/* <div className="text-md text-gray-400 md:text-lg"> */}
          {/*   Trying to exit vim */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

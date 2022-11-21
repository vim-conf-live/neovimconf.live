const PastVideos = () => {
  return (
    <section>
      <h2 className="">{`Last year's talks`}</h2>
      <div className="last-years-videos grid w-full content-center items-center p-4 sm:w-2/3 ">
        <h3 className="mt-4 mb-8 text-xl font-bold text-blue-200">
          Watch the conference highlights
        </h3>
        <iframe
          className="youtube-embed"
          src="https://www.youtube.com/embed/Muk6lXGQTwM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h3 className="mt-24 mb-8 text-xl font-bold text-blue-200">
          Or binge watch the video playlist for the 2021 talks
        </h3>
        <iframe
          className="youtube-embed"
          src="https://www.youtube.com/embed/videoseries?list=PLcTu2VkAIIWyuX-yNe0KNSPR7wjS2lNKz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default PastVideos;

const PastVideos = () => {
  return (
    <div className="last-years-videos mt-20 grid w-full content-center items-center p-4 sm:w-2/3">
      <h2>Watch some last year videos</h2>
      <iframe
        className="youtube-embed"
        src="https://www.youtube.com/embed/Muk6lXGQTwM"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2 className="mt-20 mb-8">
        Binge Watch the video playlist for the 2021 talks
      </h2>
      <iframe
        className="youtube-embed"
        src="https://www.youtube.com/embed/videoseries?list=PLcTu2VkAIIWyuX-yNe0KNSPR7wjS2lNKz"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PastVideos;

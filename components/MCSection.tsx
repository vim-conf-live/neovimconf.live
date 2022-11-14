const MCSection = () => {
  return (
    <section className="h-auto">
      <h2 className="my-4 text-[#0f74d0] sm:my-8">Masters of Ceremonies</h2>
      <div className="grid content-center justify-items-center md:mx-5 md:grid-cols-2">
        <div 
            className="mc-card grid justify-items-center justify-content-center"
            style={{backgroundImage: `url(/speaker-images/mescience.jpg)`}}
          >
          <h1>Theprimeagen</h1>
        </div>
        <div 
           className="mc-card grid justify-items-center justify-content-center"
            style={{backgroundImage: `url(/speaker-images/teej.jpg)`}}
        >
          <h1>TeeJ DeVries</h1>
        </div>
      </div>
    </section>
  );
};

export default MCSection;

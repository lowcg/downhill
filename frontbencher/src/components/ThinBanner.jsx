const ThinBanner = ({ imageUrl = "/assets/heroBg.png" }) => (
  <div
    className="py-16 bg-cover bg-center flex flex-col gap-2 justify-center items-center text-white font-geist"
    style={{ backgroundImage: `url('${imageUrl}')` }}
  >
    <h1 className="font-semibold text-5xl text-nowrap">
      Academy of Technology
    </h1>
    <h2 className="text-xl text-nowrap font-montserrat tracking-widest">
      Translate your vision into reality
    </h2>
  </div>
);

export default ThinBanner;

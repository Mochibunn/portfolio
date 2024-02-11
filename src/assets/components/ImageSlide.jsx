
const ImageSlide = () => {
  const imgs = [
    "./lazy1.png",
    "./lazy2.png",
    "./lazy3.png",
    "./lazy4.png",
    "./lazy5.png",
  ];

  const props = {
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <div className="">
      <div {...props} className="absolute w-full h-full inset-1">
        {imgs.map((imgs, index) => (
          <div key={index}>
            <img className="pointer-events-none rounded-2xl" src={imgs} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;

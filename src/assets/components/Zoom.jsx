const Zoom = () => {
  return (
    <h1 className="px-4 py-2 mx-12 mt-4 text-xl font-bold max-w-fit bg-black/30 rounded-xl">
      Monitor scaling: {Math.round((window.devicePixelRatio + Number.EPSILON) * 100) / 100}x
    </h1>
  );
};

export default Zoom;
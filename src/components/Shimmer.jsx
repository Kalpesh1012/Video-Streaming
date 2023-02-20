const Shimmer = () => {
  return (
    <section className="flex flex-wrap gap-3 ml-24 mt-7 ">
      {Array(50)
        .fill()
        .map((e, index) => (
          <article className=" rounded-lg" key={index}>
            <div className=" flex  h-[150px] w-[290px] border-2 rounded-lg bg-gray-300 "></div>
            <div className="flex">
              <div>
                <img
                  className="mt-2 h-8 w-4=8"
                  src="https://www.kindpng.com/picc/m/33-338451_grey-circle-png-transparent-png.png"
                />
              </div>
              <div>
                <div className="mt-2 ml-4 h-6 w-52  bg-gray-200"></div>
                <div className="mt-2 ml-4 h-6 w-44  bg-gray-200"></div>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
};
export default Shimmer;

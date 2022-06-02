import Vimeo from "@u-wave/react-vimeo";

const ProjectList = () => {
  return (
    <>
      {/* <div className=" absolute top-[10%] m-10 w-[40%] h-[40%] bg-black rounded overflow-hidden ">
        <div className="bg-white">
          <Vimeo
            video="https://vimeo.com/711679952"
            height="500"
            autoplay={true}
            controls={false}
            loop={true}
            showTitle={false}
            showByline={false}
            muted={true}
            className="absolute"
          />
        </div>
      </div> */}

      <div className="mx-auto py-40 px-20 ">
        <div className="grid grid-cols-1 gap-y-20 gap-x-20 sm:grid-cols-2 ">
          <div className=" w-[44vw] h-[23vw] rounded overflow-hidden ">
            <Vimeo
              video="https://vimeo.com/711679952"
              height="450"
              autoplay={true}
              controls={false}
              loop={true}
              showTitle={false}
              showByline={false}
              muted={true}
            />
          </div>

          <div className=" w-[44vw] h-[23vw] rounded overflow-hidden ">
            <Vimeo
              video="https://vimeo.com/711679952"
              height="450"
              autoplay={true}
              controls={false}
              loop={true}
              showTitle={false}
              showByline={false}
              muted={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;

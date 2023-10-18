import React from "react";

import { Img } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col items-start justify-start mx-auto p-2.5 w-auto sm:w-full md:w-full">
        <Img
          className="h-[1010px] md:h-auto max-w-[1420px] mx-auto object-cover w-full absolute sm:gap-[16px] grid sm:grid-cols-1 min-h-[auto] w-[100%]"
          src="images/img_image.png"
          alt="image"
        />
      </div>
    </>
  );
};

export default DesktopOnePage;

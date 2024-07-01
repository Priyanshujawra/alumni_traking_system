import React, { memo } from "react";

function Line_nimation(props) {
  return (
    <div>
      <span className="text-4xl">{props.name}</span>
      <span className=" w-80 block h-1 bg-gradient-to-b bg-orange-600"></span>
      <span className=" w-56 block h-[2px] bg-gradient-to-b bg-orange-600 "></span>
      <span className=" w-16 block  h-[1px] bg-gradient-to-b bg-orange-500"></span>
    </div>
  );
}

export default memo(Line_nimation);

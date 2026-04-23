import React from 'react';

const Bar = ({ value, color, isSpecial, isPivot }) => {
  let finalColor = color;
  
  if (isSpecial) {
    finalColor = "bg-purple-500";
  } else if (color === "bg-red-500") {
    finalColor = "bg-red-500";
  } else if (color === "bg-yellow-400") {
    finalColor = "bg-yellow-400";
  } else {
    finalColor = "bg-blue-400";
  }
  
  const pivotClass = isPivot ? "ring-2 ring-blue-600" : "";

  return (
    <div
      className={`w-4 rounded-t-md transition-all duration-75 ${finalColor} ${pivotClass}`}
      style={{ height: `${value}%` }}
    ></div>
  );
};

export default Bar;
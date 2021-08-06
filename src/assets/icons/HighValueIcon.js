import React from "react";

function HighValueIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className={className}
    >
      <path
        id="high_value_ico"
        data-name="high value ico"
        d="M5.828,1.934a5.033,5.033,0,0,0,5-5,5.036,5.036,0,0,0-5-5,5.032,5.032,0,0,0-5,5A5.037,5.037,0,0,0,5.828,1.934Zm0-7.736a.45.45,0,0,1,.335.16L7.947-3.848a.419.419,0,0,1,.119.289.4.4,0,0,1-.4.407.429.429,0,0,1-.3-.124l-.634-.66-.521-.624.041,1.114v2.7a.408.408,0,0,1-.423.418A.409.409,0,0,1,5.4-.743v-2.7l.046-1.109-.516.619-.645.66a.429.429,0,0,1-.294.124.393.393,0,0,1-.4-.407A.41.41,0,0,1,3.7-3.848l1.79-1.795A.44.44,0,0,1,5.828-5.8Z"
        transform="translate(-0.825 8.066)"
        fill="#fff"
      />
    </svg>
  );
}

export default HighValueIcon;

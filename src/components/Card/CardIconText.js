import React from "react";

const CardIconText = (props) => {
  const textStyle = {
    marginTop: "0px",
    marginLeft: "10px",
  };

  const displayStyle = {
    color: "rgba(0, 0, 0, 0.65)",
    display: "flex",
    flexDirection: "row",
    width: "fit-content",
  };
  return (
    <>
      <div style={displayStyle}>
        {props.icon}
        <p style={textStyle}>{props.text}</p>
      </div>
    </>
  );
};

export default CardIconText;
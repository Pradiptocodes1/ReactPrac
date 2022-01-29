import React from "react";

function HEADER() {
  const date = new Date();
  const currentTime = date.getHours();

  let greet;
  const customStyle = {
    background: "",
    color: ""
  };
  if (currentTime < 4) {
    greet = "Late Night?";
    customStyle.color = "#FAEEE7";
    customStyle.background =
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)";
  } else if (currentTime < 12) {
    greet = "Good Morning!";
    customStyle.background =
      "linear-gradient(90deg, rgba(26,219,217,1) 8%, rgba(255,174,0,1) 51%, rgba(236,233,180,1) 100%)";
    customStyle.color = "#F14A16";
  } else if (currentTime < 16) {
    greet = "Good Afternoon";
    customStyle.color = "#FFE400";
    customStyle.background =
      "linear-gradient(90deg, rgba(219,100,26,1) 8%, rgba(255,174,0,1) 51%, rgba(242,231,28,1) 100%)";
  } else if (currentTime < 19) {
    greet = "Good Evening";
    customStyle.color = "#4C3F91";
    customStyle.background =
      "linear-gradient(90deg, rgba(26,102,219,1) 0%, rgba(109,138,208,1) 28%, rgba(180,156,126,1) 52%, rgba(255,148,9,1) 73%, rgba(242,28,28,1) 100%)";
  } else {
    greet = "Its Night Time!";
    customStyle.background =
      "radial-gradient(circle, rgba(37,47,134,1) 0%, rgba(16,46,135,1) 23%, rgba(4,36,84,1) 71%, rgba(0,0,0,1) 100%)";
    customStyle.color = "#FFFCDC";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greet}
    </h1>
    
  );
}

export default HEADER;

import React from "react";
const date = new Date();
const currentTime = date.getHours();

console.log(currentTime);
let greeting;
let customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "#cfd3a";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";

  customStyle.color = "#917987";
} else {
  greeting = "Good Night";
  customStyle.color = "black";
}

const Greeting = () => {
  return (
    <div className="greeting-container">
      <h3 className="greeting" style={customStyle}>
        {" "}
        {greeting}{" "}
      </h3>
    </div>
  );
};

export default Greeting;

import React from "react";
import dummyImg from "../assets/cpp.png";

export default function LangCard() {
  const [flip, setFlip] = React.useState(false);

  const handleClick = () => {
    setFlip(!flip);
  };
  return (
    <div className="LangCard" onClick={handleClick}>
      {!flip ? (
        <>
          <div className="logo">
            <img src={dummyImg} alt="cpp" />
          </div>
          <div className="name">
            <h3>Cpp</h3>
          </div>
        </>
      ) : (
        <div>backside</div>
      )}
    </div>
  );
}

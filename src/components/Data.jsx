import React from "react";
import BottomBar from "./Bottombar";

const graphIcons = [
  "chatgpt-icon.png",
  "chatgpt-icon.png",
  "chatgpt-icon.png",
  "chatgpt-icon.png",
  "chatgpt-icon.png",
  "chatgpt-icon.png",
];

function Data() {

  const handleClick=(e)=>{
    console.log(e);
  }

  return (
    <div className="data-page">
      <div className="data-page-main">
        <div
          className="data-page-container"
          style={{ color: "blue", fontSize: "1.2rem" }}
        >
          Data Canvas
        </div>
      </div>
      <div className="data-page-footer">
        <BottomBar />
      </div>
      <div className="graph-icons-component">
          <div onClick={handleClick} className="graph-icon graph-icon-1">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-1.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-2">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-2.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-3">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-3.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-4">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-4.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-5">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-5.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-6">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-6.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-7">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-7.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-8">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-8.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-9">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-9.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-10">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-10.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-11">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-11.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-12">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-12.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-13">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-13.png`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-14">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-14.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
          <div onClick={handleClick} className="graph-icon graph-icon-15">
            <img
              className={`graph-icon-image`}
              src={require(`../images/exp-icon-15.jpg`)}
              alt='chatgpt-icon'
            />
          </div>
      </div>
    </div>
  );
}

export default Data;

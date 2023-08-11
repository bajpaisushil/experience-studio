import React from "react";
import BottomBar from "./Bottombar";

function Gpt() {
  return (
    <div className="gpt-page">
      <div className="gpt-text page-text">Gpt Canvas</div>
      <div className="gpt-page-footer">
        <BottomBar />
      </div>
    </div>
  );
}

export default Gpt;

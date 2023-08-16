import React, { useState } from "react";
import BottomBar from "./Bottombar";
import { ResizableBox } from "react-resizable"; // Import ResizableBox from react-resizable

function WorkFlow() {
  const graphIcons = [
    { id: 1, name: "a", address: "work-icon-1", shape: "circle", function: "" },
    { id: 2, name: "b", address: "work-icon-2", shape: "circle", function: "" },
    { id: 3, name: "c", address: "work-icon-3", shape: "circle", function: "" },
    { id: 4, name: "d", address: "work-icon-4", shape: "circle", function: "" },
    { id: 5, name: "e", address: "work-icon-5", shape: "circle", function: "" },
    { id: 6, name: "f", address: "work-icon-6", shape: "circle", function: "" },
    { id: 7, name: "g", address: "work-icon-7", shape: "circle", function: "" },
    { id: 8, name: "h", address: "work-icon-8", shape: "circle", function: "" },
    { id: 9, name: "i", address: "work-icon-9", shape: "circle", function: "" },
    {
      id: 10,
      name: "j",
      address: "work-icon-10",
      shape: "circle",
      function: "",
    },
    {
      id: 11,
      name: "k",
      address: "work-icon-11",
      shape: "circle",
      function: "",
    },
  ];
  const [iconsOnCanvas, setIconsOnCanvas] = useState([]);
  const [draggedIcon, setDraggedIcon] = useState(null);
  const handleIconDragStart = (e, icon) => {
    setDraggedIcon(icon);
  };

  const handleIconDragEnd = () => {
    setDraggedIcon(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (draggedIcon) {
      const canvasRect = e.currentTarget.getBoundingClientRect();
      const newPosition = {
        x: e.clientX - canvasRect.left,
        y: e.clientY - canvasRect.top,
      };
      const newIcon = {
        ...draggedIcon,
        id: Date.now(),
        position: newPosition,
        width: 109,
        height: 100,
      };
      setIconsOnCanvas([...iconsOnCanvas, newIcon]);
      setDraggedIcon(null);
    }
  };

  // const handleIconDrag = (e, icon) => {
  //   if (draggedIcon === icon) {
  //     const canvasRect = e.currentTarget.getBoundingClientRect();
  //     const newPosition = {
  //       x: e.clientX - canvasRect.left,
  //       y: e.clientY - canvasRect.top,
  //     };

  //     setDraggedIcon((prevIcon) => ({
  //       ...prevIcon,
  //       position: newPosition,
  //     }));
  //   }
  // };

  return (
    <div
      className="workflow-page"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="workflow-page-main">
        <div className="workflow-page-container page-text">
          Process Workflow Canvas
        </div>
      </div>
      <div className="graph-icons-component">
        {graphIcons.map((icon) => (
          <div
            key={icon.id}
            className="graph-icon graph-icon-1"
            draggable
            onDragStart={(e) => handleIconDragStart(e, icon)}
            onDragEnd={handleIconDragEnd}
          >
            <img
              className={`graph-icon-image`}
              src={require(`../images/${icon.address}.png`)}
              alt={`${icon.address}`}
            />
          </div>
        ))}
      </div>

      <div className="canvas">
        {iconsOnCanvas.map((icon) => (
          <div
            key={icon.id}
            className={`icon-on-canvas`}
            style={{
              width: icon.width,
              height: icon.height,
              borderRadius: "10px",
              position: "absolute",
              left: icon.position.x,
              top: icon.position.y,
              cursor: "move",
            }}
            draggable
            onDragStart={(e) => handleIconDragStart(e, icon)}
          >
              <img
                src={require(`../images/${icon.address}.png`)}
                alt={`${icon.address}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
              <textarea
                type="text"
                className="icon-text-input"
                placeholder="Enter text"
                value={icon.text}
                onChange={(e) => {
                  const newText = e.target.value;
                  setIconsOnCanvas((prevIcons) =>
                    prevIcons.map((prevIcon) =>
                      prevIcon.id === icon.id
                        ? { ...prevIcon, text: newText }
                        : prevIcon
                    )
                  );
                }}
              />
              <button
                className="delete-icon-button"
                onClick={() => {
                  setIconsOnCanvas((prevIcons) =>
                    prevIcons.filter((prevIcon) => prevIcon.id !== icon.id)
                  );
                }}
              >
                X
              </button>
          </div>
        ))}
      </div>
      <div className="workflow-page-footer">
        <BottomBar />
      </div>
    </div>
  );
}

export default WorkFlow;

import React, { useState } from "react";
import BottomBar from "./Bottombar";
import { ResizableBox } from "react-resizable"; // Import ResizableBox from react-resizable

function WorkFlow() {
  const graphIcons = [
    { id: 1, name: "a", address: "work-icon-1", function: "" },
    { id: 2, name: "b", address: "work-icon-2", function: "" },
    { id: 3, name: "c", address: "work-icon-3", function: "" },
    { id: 4, name: "d", address: "work-icon-4", function: "" },
    { id: 5, name: "e", address: "work-icon-5", function: "" },
    { id: 6, name: "f", address: "work-icon-6", function: "" },
    { id: 7, name: "g", address: "work-icon-7", function: "" },
    { id: 8, name: "h", address: "work-icon-8", function: "" },
    { id: 9, name: "i", address: "work-icon-9", function: "" },
    { id: 10, name: "j", address: "work-icon-10", function: "" },
    { id: 11, name: "k", address: "work-icon-11", function: "" },
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
        width: 100, // Set a fixed width of 5rem
        height: 100, // Set a fixed height of 5rem
      };
      setIconsOnCanvas([...iconsOnCanvas, newIcon]);
      setDraggedIcon(null);
    }
  };

  const handleIconDrag = (e, icon) => {
    if (draggedIcon === icon) {
      const canvasRect = e.currentTarget.getBoundingClientRect();
      const newPosition = {
        x: e.clientX - canvasRect.left,
        y: e.clientY - canvasRect.top,
      };

      setDraggedIcon((prevIcon) => ({
        ...prevIcon,
        position: newPosition,
      }));
    }
  };

  return (
    <div className="workflow-page" onDrop={handleDrop}
    onDragOver={(e) => e.preventDefault()}>
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
          <ResizableBox
            key={icon.id}
            width={icon.width}
            height={icon.height}
            minConstraints={[50, 50]}
            style={{
              position: "absolute",
              left: icon.position.x,
              top: icon.position.y,
            }}
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
          </ResizableBox>
        ))}
      </div>
     <div className="workflow-page-footer">
        <BottomBar />
      </div>
    </div>
  );
}

export default WorkFlow;

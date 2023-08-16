import React, { useEffect, useRef, useState } from "react";
import BottomBar from "./Bottombar";
import DeleteIcon from '@mui/icons-material/Delete';


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
  const [openMenuIconId, setOpenMenuIconId] = useState(null);
  const menuRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIconId(null); // Close the menu if clicked outside
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
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
          <div>
          <div className="icon-on-canvas-container" key={icon.id}>
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
                className="image-on-canvas"
                alt={`${icon.address}`}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("area clicked");
                  // setOpenMenuIconId(icon.id);
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
              
            </div>
          </div>
          {openMenuIconId === icon.id && (
            <div
              ref={menuRef}
              className="icon-menu"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="menu-card">
                <div className="menu-option">
                  <button
                    className="delete-icon-button"
                    onClick={() => {
                      setIconsOnCanvas((prevIcons) =>
                        prevIcons.filter(
                          (prevIcon) => prevIcon.id !== icon.id
                        )
                      );
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div className="menu-option">
                  <button
                    className="other"
                    onClick={() => console.log("Option 2 clicked")}
                  >
                    Other
                  </button>
                </div>
              </div>
            </div>
          )}
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

import React, { useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

import SettingsIcon from "@mui/icons-material/Settings";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from "react-router-dom";


function Menu() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandCollapse = () => {
    console.log("expanded/collapsed");
    setIsExpanded((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="menu-page">
      <div className="menu-options-part">
        <div className="options-page">
          <ul className="options-container">
            <li
              className={`options-list ${selectedOption === 'Design' ? 'selected' : ''}`}
              onClick={() => handleOptionClick("Design")}
            >
              <Link to='/design'><div className="options-icon">
                <DesignServicesIcon />
                <p className="options-icon-name">Design</p>
              </div>
              </Link>
            </li>
            <li
              className={`options-list ${selectedOption === 'Design' ? 'selected' : ''}`}
              onClick={() => handleOptionClick("WorkFlow")}
            >
              <Link to='/workflow'><div className="options-icon">
                <HomeWorkIcon />
                <p className="options-icon-name">WorkFlow</p>
              </div>
              </Link>
            </li>
            <li
              className={`options-list ${selectedOption === 'Design' ? 'selected' : ''}`}
              onClick={() => handleOptionClick("Data")}
            >
              <Link to='/data'><div className="options-icon">
                <DonutSmallIcon />
                <p className="options-icon-name">Data</p>
              </div>
              </Link>
            </li>
            <li className="options-list">
              <div className="options-icon">
                <img
                  src={require("../images/chatgpt-icon.png")}
                  alt="chatgpt-icon"
                  className="chatgpt-icon"
                />
                <p className="options-icon-name"></p>
              </div>
            </li>
            <li
              className={`options-list ${selectedOption === 'Design' ? 'selected' : ''}`}
              onClick={() => handleOptionClick("Settings")}
            >
              <Link to='/settings'><div className="options-icon">
                <SettingsIcon />
                <p className="options-icon-name">Settings</p>
              </div>
              </Link>
            </li>
            <li
              className={`options-list ${selectedOption === 'Design' ? 'selected' : ''}`}
              onClick={() => handleOptionClick("Logs")}
            >
              <Link to='/logs'><div className="options-icon">
                <TextSnippetIcon />
                <p className="options-icon-name">Logs</p>
              </div>
              </Link>
            </li>
          </ul>
          {console.log(selectedOption)}

        </div>
      </div>
      <div className="menu-collapsable-part">
        {selectedOption && (
            <div className="collapsable-page">
            <div className="collapsable-page-heading">{selectedOption}</div>
            <div onClick={handleExpandCollapse} className="collapsable-page-elemtree">
                {isExpanded? <ExpandLessIcon />: <ExpandMoreIcon />}Elements Tree</div>
            {isExpanded && (
              <div className="element-tree">
                <div>CSV</div>
                <div>PDF</div>
                <div>Text</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;

import React, {useState} from "react";

const Display = (props) => {
    const [activeTab, setActiveTab] = useState(0)

    const switchTabs = (tabIdx) => {
        setActiveTab(tabIdx);
    }
    return (
    <div >
      {props.tabs.map((tab, tabIdx) => {
        return (
          <button style = {
            {
            height: "100px",
            width: "200px",
            marginLeft: "15px",
            }
          } onClick={() => switchTabs(tabIdx)} key={tabIdx}>
            Tab {tabIdx + 1}
          </button>
        );
      })}
      <div style = {{
        padding: "20px",
        fontSize: "50px",
      }}>
        {props.tabs[activeTab].message}</div>
    </div>
  );
};

export default Display;
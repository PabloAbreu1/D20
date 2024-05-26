import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs">
        {children.map((tab, index) => (
          <button
            key={index}
            onClick={() => changeTab(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;

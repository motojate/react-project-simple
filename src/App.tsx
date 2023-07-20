import React, { useState } from 'react';
import './App.css';
import '../src/Tap.css'

function Tab() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabName: any) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <button
        className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab1')}
      >
        탭 1
      </button>
      <button
        className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab2')}
      >
        탭 2
      </button>
      <button
        className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
        onClick={() => handleTabClick('tab3')}
      >
        탭 3
      </button>

      <div className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}>
  {activeTab === 'tab1' && <div>탭 1 내용</div>}
</div>
<div className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}>
  {activeTab === 'tab2' && <div>탭 2 내용</div>}
</div>
<div className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}>
  {activeTab === 'tab3' && <div>탭 3 내용</div>}
</div>
    </div>
  );
}



function App() {
  return (
   

     
      <div>
        
      { Tab() }
      </div>
    
  );
}

export default App;

import React from 'react';

const Navbar = ({
  generateArray,
  setAlgoValue,
  setSizeValue,
  setSpeedValue,
  startSort,
  isSorting,
  algoValue,
  sizeValue,
  speedValue
}) => {
  return (
    <header className="nav-container glass-panel">
      <h2 className="title" onClick={() => window.location.reload()}>
        Sorting<span className="highlight">Visualizer</span>
      </h2>
      <nav className="navbar" id="navbar">
        <button 
          className="nav-btn secondary-btn" 
          onClick={generateArray}
          disabled={isSorting}
        >
          <i className="fa-solid fa-shuffle"></i> Generate
        </button>
        
        <div className="custom-select-wrapper">
          <select 
            className="nav-select"
            value={algoValue}
            onChange={(e) => setAlgoValue(Number(e.target.value))}
            disabled={isSorting}
          >
            <option value="0">Choose Algorithm</option>
            <option value="1">Bubble Sort</option>
            <option value="2">Selection Sort</option>
            <option value="3">Insertion Sort</option>
            <option value="4">Merge Sort</option>
            <option value="5">Quick Sort</option>
          </select>
        </div>
        
        <div className="custom-select-wrapper">
          <select 
            className="nav-select"
            value={sizeValue}
            onChange={(e) => setSizeValue(Number(e.target.value))}
            disabled={isSorting}
          >
            <option value="10">10 Elements</option>
            <option value="20">20 Elements</option>
            <option value="40">40 Elements</option>
            <option value="60">60 Elements</option>
            <option value="80">80 Elements</option>
            <option value="100">100 Elements</option>
          </select>
        </div>

        <div className="custom-select-wrapper">
          <select 
            className="nav-select"
            value={speedValue}
            onChange={(e) => setSpeedValue(Number(e.target.value))}
            disabled={isSorting}
          >
            <option value="0.5">Slow (0.5x)</option>
            <option value="1">Normal (1x)</option>
            <option value="2">Fast (2x)</option>
            <option value="4">Hyper (4x)</option>
          </select>
        </div>
        
        <button 
          className="nav-btn primary-btn start" 
          onClick={startSort}
          disabled={isSorting}
        >
          <i className="fa-solid fa-play"></i> Sort
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { 
  getBubbleSortAnimations, 
  getSelectionSortAnimations, 
  getInsertionSortAnimations, 
  getMergeSortAnimations, 
  getQuickSortAnimations 
} from './utils/sortingAlgorithms';

function App() {
  const [array, setArray] = useState([]);
  const [algoValue, setAlgoValue] = useState(0);
  const [sizeValue, setSizeValue] = useState(20);
  const [speedValue, setSpeedValue] = useState(1);
  const [isSorting, setIsSorting] = useState(false);
  const [comparing, setComparing] = useState(new Set());
  const [done, setDone] = useState(new Set());
  const [minIndex, setMinIndex] = useState(-1);

  useEffect(() => {
    generateArray();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sizeValue]);

  const generateArray = () => {
    if (isSorting) return;
    const newArray = [];
    for (let i = 0; i < sizeValue; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1);
    }
    setArray(newArray);
    setComparing(new Set());
    setDone(new Set());
    setMinIndex(-1);
  };

  const startSort = async () => {
    if (algoValue === 0) {
      alert("No Algorithm Selected");
      return;
    }
    setIsSorting(true);
    setComparing(new Set());
    setDone(new Set());
    setMinIndex(-1);

    let animations = [];
    if (algoValue === 1) animations = getBubbleSortAnimations(array);
    if (algoValue === 2) animations = getSelectionSortAnimations(array);
    if (algoValue === 3) animations = getInsertionSortAnimations(array);
    if (algoValue === 4) animations = getMergeSortAnimations(array);
    if (algoValue === 5) animations = getQuickSortAnimations(array);

    const animationSpeed = 400 / (speedValue === 0 ? 1 : speedValue);

    for (let i = 0; i < animations.length; i++) {
      const [type, idx1, idx2] = animations[i];
      
      await new Promise(resolve => setTimeout(resolve, animationSpeed));

      if (type === "compare") {
        setComparing(prev => {
          const next = new Set(prev);
          next.add(idx1);
          if (idx2 !== undefined) next.add(idx2);
          return next;
        });
      } else if (type === "uncompare") {
        setComparing(prev => {
          const next = new Set(prev);
          next.delete(idx1);
          if (idx2 !== undefined) next.delete(idx2);
          return next;
        });
      } else if (type === "overwrite") {
        setArray(prevArray => {
          const newArr = [...prevArray];
          newArr[idx1] = idx2; // idx2 holds the value here
          return newArr;
        });
      } else if (type === "mark_min") {
        setMinIndex(idx1);
      } else if (type === "unmark_min") {
        setMinIndex(-1);
      } else if (type === "done") {
        setDone(prev => {
          const next = new Set(prev);
          next.add(idx1);
          return next;
        });
      }
    }
    setIsSorting(false);
  };

  return (
    <>
      <div className="ambient-light light-1"></div>
      <div className="ambient-light light-2"></div>
      <Navbar 
        generateArray={generateArray}
        setAlgoValue={setAlgoValue}
        setSizeValue={setSizeValue}
        setSpeedValue={setSpeedValue}
        startSort={startSort}
        isSorting={isSorting}
        algoValue={algoValue}
        sizeValue={sizeValue}
        speedValue={speedValue}
      />
      <Visualizer 
        array={array}
        comparing={comparing}
        done={done}
        minIndex={minIndex}
      />
    </>
  );
}

export default App;

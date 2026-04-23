import React, { useState, useEffect } from 'react';
import Bar from './components/Bar';
import Navbar from './components/Navbar';
import Legend from './components/Legend';
import { bubbleSort, selectionSort, insertionSort, quickSort } from './algorithms';

function App() {
  const [array, setArray] = useState([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');
  const [speed, setSpeed] = useState(50);
  const [isSorting, setIsSorting] = useState(false);

  // State quản lý màu sắc và trạng thái animation
  const [activeIndices, setActiveIndices] = useState({
    comparing: [],   // Mảng indices đang so sánh (màu vàng)
    swapping: [],    // Mảng indices đang swap (màu đỏ)
    special: [],     // Mảng indices đặc biệt (màu tím - key/min)
    pivot: null      // Index của pivot trong Quick Sort (viền trắng)
  });

  const resetArray = () => {
    const newArr = [];
    for (let i = 0; i < 50; i++) {
      newArr.push(Math.floor(Math.random() * 90) + 10);
    }
    setArray(newArr);
    // Reset toàn bộ trạng thái màu khi tạo mảng mới
    setActiveIndices({ comparing: [], swapping: [], special: [], pivot: null });
  };

  useEffect(() => {
    resetArray();
  }, []);

  const handleSort = () => {
    setIsSorting(true);
    
    // Chọn thuật toán dựa trên state
    let steps = [];
    switch (selectedAlgorithm) {
      case 'bubble':
        steps = bubbleSort(array);
        break;
      case 'selection':
        steps = selectionSort(array);
        break;
      case 'insertion':
        steps = insertionSort(array);
        break;
      case 'quick':
        steps = quickSort(array);
        break;
      default:
        steps = bubbleSort(array);
    }

    let currentStep = 0;
    
    const animate = () => {
      if (currentStep >= steps.length) {
        setIsSorting(false);
        setActiveIndices({ comparing: [], swapping: [], special: [], pivot: null });
        return;
      }

      const step = steps[currentStep];
      
      // Cập nhật độ cao các thanh
      setArray(step.array);
      
      // Cập nhật trạng thái màu sắc
      setActiveIndices({
        comparing: step.comparing || [],
        swapping: step.swapping || [],
        special: step.special || [],
        // Nếu step có pivot=true, lấy index đầu tiên trong special làm pivot
        pivot: step.pivot && step.special?.length > 0 ? step.special[0] : null
      });

      currentStep++;
      const delay = Math.max(1, 101 - speed);
      setTimeout(animate, delay);
    };

    animate();
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 text-slate-900 overflow-hidden">
      <Navbar 
        resetArray={resetArray} 
        setAlgorithm={setSelectedAlgorithm}
        setSpeed={setSpeed}
        onSort={handleSort}
        isSorting={isSorting}
      />

      {/* Main Container */}
      <div className="flex-grow flex flex-col mx-auto w-full max-w-5xl px-4 py-6 overflow-auto">
        {/* Info Bar */}
        <div className="text-center mb-6">
          <span className="text-slate-600 font-medium text-sm">Current Algorithm: </span>
          <span className="text-blue-600 font-semibold uppercase tracking-wide text-base">{selectedAlgorithm} Sort</span>
        </div>

        {/* Visualization Area Card */}
        <div className="flex-grow relative bg-white rounded-xl shadow-lg p-6 border border-slate-200 overflow-hidden">
          {/* Bars Container */}
          <div className="absolute inset-6 flex items-end justify-center gap-1">
            {array.map((value, idx) => {
              let color = "bg-blue-400";
              
              if (activeIndices.swapping.includes(idx)) {
                color = "bg-red-500";
              } else if (activeIndices.comparing.includes(idx)) {
                color = "bg-yellow-400";
              }

              const isSpecial = activeIndices.special && activeIndices.special.includes(idx);
              const isPivot = activeIndices.pivot === idx;

              return (
                <Bar 
                  key={idx} 
                  value={value} 
                  color={color} 
                  isSpecial={isSpecial} 
                  isPivot={isPivot} 
                />
              );
            })}
          </div>
        </div>
      </div>
      
      <Legend />

      {/* Footer */}
      <footer className="py-3 text-center text-xs font-medium text-slate-500 bg-white border-t border-slate-200">
        <span>Sorting Visualizer • React + Tailwind • 2024</span>
      </footer>
    </div>
  );
}

export default App;
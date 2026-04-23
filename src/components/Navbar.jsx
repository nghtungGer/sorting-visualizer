import React from 'react';

const Navbar = ({ resetArray, setAlgorithm, setSpeed, onSort, isSorting }) => {
  return (
    <nav className="w-full bg-white shadow-md border-b border-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900">Sorting Visualizer</h1>
        </div>

        {/* Controls Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
          {/* Algorithm Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Select Algorithm</label>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'bubble', label: 'Bubble' },
                { name: 'selection', label: 'Selection' },
                { name: 'insertion', label: 'Insertion' },
                { name: 'quick', label: 'Quick' }
              ].map(algo => (
                <button
                  key={algo.name}
                  onClick={() => setAlgorithm(algo.name)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-slate-900 text-sm font-semibold rounded-lg transition-all duration-200 active:scale-95"
                >
                  {algo.label}
                </button>
              ))}
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex flex-wrap items-center gap-6">
            {/* New Array Button */}
            <button 
              onClick={resetArray}
              disabled={isSorting}
              className={`px-6 py-2.5 font-semibold rounded-lg transition-all duration-200 text-sm uppercase tracking-wide ${
                isSorting 
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400' 
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              🔄 New Array
            </button>

            {/* Speed Control */}
            <div className="flex items-center gap-4">
              <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide whitespace-nowrap">Speed</label>
              <input 
                type="range" 
                min="1" 
                max="100" 
                defaultValue="50" 
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-600 transition-all"
              />
            </div>

            {/* SORT Button */}
            <button
              onClick={onSort}
              disabled={isSorting}
              className={`px-8 py-2.5 font-bold rounded-lg transition-all duration-200 uppercase tracking-wide ml-auto ${
                isSorting 
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isSorting ? '⏸️ SORTING...' : '▶️ START SORT'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
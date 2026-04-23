import React from 'react';

const Legend = () => {
  const items = [
    { bgColor: 'bg-blue-400', label: 'Default' },
    { bgColor: 'bg-yellow-400', label: 'Comparing' },
    { bgColor: 'bg-red-500', label: 'Swapping' },
    { bgColor: 'bg-purple-500', label: 'Key/Min' },
    { bgColor: 'bg-blue-400', label: 'Pivot (Quick)', border: true }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-4 px-4 bg-white border-t border-slate-200">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className={`w-4 h-4 rounded-sm ${item.bgColor} ${item.border ? 'ring-2 ring-slate-700' : ''}`}></div>
          <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
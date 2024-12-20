import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-[#3b82f6] rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-[#F3722C] text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full bg-[#F8961E] rounded font-medium py-1 px-2 text-xs">
          Complete
        </button>
      </div>
    </div>
  );
}

export default CompleteTask
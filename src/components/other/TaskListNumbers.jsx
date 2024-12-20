import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[55%] py-6 px-9 bg-[#a3e635] ">
        <h2 className="text-3xl  text-black font-bold">
          {data.taskCounts.newTask}
        </h2>
        <h3 className="text-xl  text-black  mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[55%] py-6 px-9 bg-[#34d399] shadow-lg">
        <h2 className="text-3xl font-bold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[55%] py-6 px-9 bg-[#22d3ee] shadow-lg">
        <h2 className="text-3xl text-black font-bold">
          {data.taskCounts.active}
        </h2>
        <h3 className="text-xl mt-0.5 text-black font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl w-[55%] py-6 px-9 bg-[#db2777] shadow-lg">
        <h2 className="text-3xl font-bold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumbers
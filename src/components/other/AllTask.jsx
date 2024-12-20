import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const [userData,setUserData] =  useContext(AuthContext)

   
  return (
    <div className="bg-[#1e1b4b] p-5 rounded mt-5">
      <div className="bg-[#0284c7] mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div className="">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-[ef476f] mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium  w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-[#84cc16]">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-[#14b8a6]">
                {elem.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-[#0ea5e9]">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-[#db2777]">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask
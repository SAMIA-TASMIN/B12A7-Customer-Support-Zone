import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import ResolvedCard from '../ResolvedCard/ResolvedCard';

const TaskStatus = ({progress,handleResolved,resolved}) => {
console.log(resolved);
    return (
        <div className='mt-20'>
            
            <div className='max-w-xl w-full min-h-[100px] text-black bg-white rounded-lg shadow  border border-gray-100'>
                <h1 className='font-semibold mb-3'>Task Status</h1>
                {
                    progress.length<=0?<p className='text-center'>Please Select a card</p>:progress.map((task,idx)=><TaskCard key={idx} task={task} handleResolved={handleResolved}  ></TaskCard>)
                }
            
        </div>
        
            <div className='max-w-xl w-full min-h-[100px] text-black mt-3 bg-white rounded-lg shadow  border border-gray-100'>
               <h1 className='text-black font-semibold  mb-3'>Resolve Task</h1>
               {
                    progress.length<=0?<p className='text-center'>No Resolved Task Card</p>:resolved.map((r,idx)=><ResolvedCard key={idx} r={r} handleResolved={handleResolved}  ></ResolvedCard>)
                }
            
        </div>
        </div>
    );
};

export default TaskStatus;
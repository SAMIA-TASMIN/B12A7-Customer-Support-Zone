import React from 'react';

const TaskCard = ({task,handleResolved}) => {
    return (
        <div>
            <div className='bg-gray-300 border-amber-200 my-3 pt-4 mx-2 rounded-md'>
                    <p className='text-black text-center'>{task.title}</p>
             <button 
             onClick={()=>handleResolved(task)}
              className='btn w-full btn-success py-1.5 mt-2 rounded-2xl'
            >
              Complete
            </button>
                </div>
        </div>
    );
};

export default TaskCard;
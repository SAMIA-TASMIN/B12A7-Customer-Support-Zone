import React from 'react';

const ResolvedCard = ({r}) => {
    return (
        <div>
             <div className='bg-gray-300 border-amber-200 my-3 pt-4 mx-2 rounded-md'>
                    <p className='text-black font-semibold'>{r.title}</p>
             <p
             
              className=' w-full  py-1.5 mt-2 rounded-2xl text-shadow-fuchsia-200' >
             ✔️ Complete
            </p>
                </div>
        </div>
    );
};

export default ResolvedCard;
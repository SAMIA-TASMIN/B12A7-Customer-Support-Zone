import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-black text-white mt-8'>
            <div className='grid grid-cols-5 gap-5 mt-5 p-5'>
            
            <div className='w-4/4'>
                <h1 className='text-white font-semibold mb-4 '>CS Ticketing System</h1>
                <p className='text-sm mt-3 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro eveniet consequatur quaerat, explicabo doloremque velit perspiciatis commodi earum culpa, iure animi placeat quia in sunt ipsa numquam. Quos, laboriosam quidem!</p>
            </div>

           <div className=' text-white'>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div className=''>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

         <div className=''>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div className=''>
            <div className="space-y-2 text-sm">
          <h3 className="text-white font-semibold mb-2">Social Links</h3>

          <div className="flex items-center gap-2">
            <span>🔗</span> <p>BCS — Ticket System</p>
          </div>
          <div className="flex items-center gap-2">
            <span>🔗</span> <p>BCS — Ticket System</p>
          </div>
          <div className="flex items-center gap-2">
            <span>🔗</span> <p>BCS — Ticket System</p>
          </div>
          <div className="flex items-center gap-2">
            <span>📧</span> <p>support@cst.com</p>
          </div>
        </div>
        </div>


        </div>
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
        </div>
    );
};

export default Footer;



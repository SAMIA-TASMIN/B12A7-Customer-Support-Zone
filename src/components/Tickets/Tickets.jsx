import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const Tickets = ({ ticketPromise, handleProgress }) => {
    const ticketData = use(ticketPromise);

    return (
        <div className="px-2 my-8">
            
            <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                Customer Tickets 
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {ticketData.map(ticket => (
                    <TicketCard 
                        key={ticket.id} 
                        handleProgress={handleProgress} 
                        ticket={ticket} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Tickets;

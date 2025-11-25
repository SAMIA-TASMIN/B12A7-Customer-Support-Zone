const TicketCard = ({ ticket, handleProgress }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  return (
    <div
      onClick={() => handleProgress(ticket)}
      className="
        w-full bg-white rounded-lg shadow 
        p-4 border border-gray-200 
        transition hover:shadow-md cursor-pointer 
      "
    >
      <div className="flex items-start justify-between flex-wrap gap-2">
        <h2 className="text-base md:text-lg font-semibold text-gray-800">
          {title}
        </h2>

        <span
          className={`flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full ${
            status === "Open"
              ? "bg-green-100 text-green-700"
              : status === "Pending"
              ? "bg-amber-100 text-amber-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              status === "Open"
                ? "bg-green-500"
                : status === "Pending"
                ? "bg-amber-500"
                : "bg-red-500"
            }`}
          ></span>
          {status}
        </span>
      </div>

      <p className="text-sm text-gray-600 mt-2 leading-tight">{description}</p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 text-sm text-gray-700 gap-2">
        <div className="flex items-center gap-3">
          <span className="text-gray-500"># {id}</span>
          <span
            className={`font-semibold ${
              priority === "High"
                ? "text-red-500"
                : priority === "Medium"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {priority} Priority
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">{customer}</span>

          <span className="flex items-center gap-1 text-gray-500 text-xs md:text-sm">
            {createdAt}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

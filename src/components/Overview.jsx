const Overview = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center">
        <h5 className="font-medium text-xl ml-4">Overview</h5>
        <button className="flex items-center gap-3 border mr-4 rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
          This Month
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Overview;

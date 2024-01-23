// const Header = () => {
//   return (
//     <div className="w-full">
//       <header className="flex justify-between items-center w-full px-4 py-3 border-b border-gray-300 bg-white">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl font-semibold">Payouts</h1>
//           <button aria-label="How it works" className="">

//         </div>
//         <div className="flex-grow flex items-center space-x-4">
//           <div className="flex flex-grow items-center bg-gray-100 p-2 rounded-md">

//             <input
//               type="text"
//               placeholder="Search features, tutorials, etc."
//               className="bg-transparent outline-none flex-grow"
//             />
//           </div>
//           <div className="flex items-center space-x-2">

//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Header;

const Header = () => {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-300 bg-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">Payouts</h1>
          <button
            aria-label="How it works"
            className="flex items-center space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            <p className="text-sm">How it works</p>
          </button>
        </div>
        <div className="flex flex-grow items-center justify-center px-4 max-w-lg mx-auto">
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search features, tutorials, etc."
              className="bg-transparent outline-none flex-grow"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Notifications">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </button>
          <button aria-label="Settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

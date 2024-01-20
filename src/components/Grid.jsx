const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-5">Hi</div>
        <div className="bg-yellow-500 col-span-5">Hi</div>
        <div className="bg-green-500 col-span-4">Hi</div>
        <div className="bg-purple-500 col-span-3">Hi</div>
        <div className="bg-gray-500 col-span-3">Hi</div>
        <div className="bg-slate-300 col-span-10">Hi</div>
      </div>
    </div>
  );
};

export default Grid;

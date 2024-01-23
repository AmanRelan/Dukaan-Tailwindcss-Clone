const TransactionFilter = () => {
  return (
    <div className="w-full flex justify-between">
      <div>
        <input
          placeholder="Order ID or transactions ID"
          className="w-[125%]"
        ></input>
      </div>
      <div>
        <button>SORT ⬆⬇</button>
        <button>Download</button>
      </div>
    </div>
  );
};

export default TransactionFilter;

import RevenueCard from "./RevenueCard";

const ColoredRevenueCard = ({ title, orderCount, amount, paymentDate }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#146EB4] hover:bg-[#0E4F82]">
      <div>
        <RevenueCard
          title={title}
          orderCount={orderCount}
          amount={amount}
          className={"text-white"}
          orderCountTextColor={"text-white"}
        />
      </div>
      <div className="px-6 py-2 bg-[#0E4F82] text-[#F2F2F2]">
        <p>
          Next Payment Date: <span>{paymentDate}</span>
        </p>
      </div>
    </div>
  );
};

export default ColoredRevenueCard;

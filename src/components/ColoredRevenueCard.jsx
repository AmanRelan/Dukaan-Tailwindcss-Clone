import RevenueCard from "./RevenueCard";

const ColoredRevenueCard = () => {
  return (
    <div>
      <div className="bg-blue-400">
        <RevenueCard title={"Next Payout"} orderCount={23} amount={"2312.23"} />
      </div>
    </div>
  );
};

export default ColoredRevenueCard;

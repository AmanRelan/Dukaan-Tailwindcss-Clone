import ColoredRevenueCard from "./ColoredRevenueCard";
import Header from "./Header";
import Overview from "./Overview";
import RevenueCard from "./RevenueCard";
import Transactions from "./Transactions";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Overview />
      <div className="grid grid-cols-3 gap-4 p-4 items-start">
        <ColoredRevenueCard
          title={"Next Payout"}
          orderCount={23}
          amount={"2,312.23"}
          paymentDate={"Today, 4:00PM"}
          className="col-span-1"
        />
        <RevenueCard
          title={"Amount Pending"}
          orderCount={13}
          amount={"92,312.20"}
          className="bg-white col-span-1"
        />
        <RevenueCard
          title={"Amount Processed"}
          amount={"23,92,312.19"}
          className="bg-white col-span-1"
        />
        <Transactions />
      </div>
    </div>
  );
};

export default Dashboard;

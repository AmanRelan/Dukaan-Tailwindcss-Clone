// import Flex from "./components/Flex";
// import Grid from "./components/Grid";
// import Responsive from "./components/Responsive";

import ColoredRevenueCard from "./components/ColoredRevenueCard";
import RevenueCard from "./components/RevenueCard";

const App = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <ColoredRevenueCard />
        <RevenueCard
          title={"Amount Pending"}
          orderCount={13}
          amount={"92,312.20"}
          className="grid-cols-1"
        />
        <RevenueCard
          title={"Amount Processed"}
          amount={"23,92,312.19"}
          className="grid-cols-1"
        />
      </div>
    </>
  );
};

export default App;

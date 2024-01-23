import TransactionFilter from "./TransactionFilter";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  return (
    <div>
      <div>Transactions | This Month</div>
      <div>
        <button>Payouts(22)</button>
        <button>Refunds(6)</button>
      </div>
      <TransactionFilter />
      <TransactionTable />
    </div>
  );
};

export default Transactions;

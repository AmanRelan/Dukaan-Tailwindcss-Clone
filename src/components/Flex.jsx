const Flex = () => {
  return (
    // <div style={{ display: "flex", justifyContent: "space-around" }}>
    //   <div style={{ background: "green" }}>hi</div>
    //   <div style={{ background: "red" }}>hi</div>
    //   <div style={{ background: "yellow" }}>hi</div>
    // </div>
    <div className="flex justify-around">
      <div className="bg-green-500">HI</div>
      <div className="bg-red-200">HI</div>
      <div className="bg-yellow-300">HI</div>
    </div>
  );
};

export default Flex;

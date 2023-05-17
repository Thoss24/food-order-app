const TotalAmount = (props) => {
 
  return (
    <div>
      <h1>Total Amount</h1>
      <p>£ {props.currentCartTotal}</p>
    </div>
  );
};

export default TotalAmount;

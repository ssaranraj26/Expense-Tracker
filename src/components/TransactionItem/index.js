import "./index.css";

const TransactionItem = (props) => {
  const { transactionDetails, deleteTransaction } = props;
  const { id, title, amount, type } = transactionDetails;
  const style = type === "Expenses" ? "red" : "green";
  const currentDate = new Date();

  const onDeleteTransaction = () => {
    deleteTransaction(id);
  };

  return (
    <li className="table-row">
      <p className={`transaction-text ${style}`}>Rs {amount}</p>
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{type}</p>
      <p className="transaction-text">{currentDate.toLocaleString()}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTransaction}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;

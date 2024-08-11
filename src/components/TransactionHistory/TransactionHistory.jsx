import styles from "./TransactionHistory.module.css";

function TransactionHistoryHead() {
  return (
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  );
}

function TransactionHistoryRow({ id, type, amount, currency }) {
  return (
    <tr>
      <td className={styles.typeCell}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default function TransactionHistory({ items }) {
  const rows = items.map(({ id, type, amount, currency }) => (
    <TransactionHistoryRow
      key={id}
      type={type}
      amount={amount}
      currency={currency}
    />
  ));

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <TransactionHistoryHead />
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

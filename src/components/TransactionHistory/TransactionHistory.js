import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) =>{
    return(
        <table className={styles.table}>
  <thead className={styles.thead}>
    <tr className={styles.tr}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id, type, amount, currency}) => (
        <tr className={styles.tr} key={id}>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </tr>
      ))}
    
    
  </tbody>
</table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,           
        })
    )
}

export default TransactionHistory;
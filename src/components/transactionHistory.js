import Transation from './transaction';
import PropTypes from 'prop-types';
import css from './css/transactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.trnHead}>Type</th>
          <th className={css.trnHead}>Amount</th>
          <th className={css.trnHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <Transation item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

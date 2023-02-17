import Transation from '../Transaction/transaction';
import PropTypes from 'prop-types';
import css from './transactionHistory.module.css';

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
          return <Transation item={item} />;
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

import PropTypes from 'prop-types';
import css from './css/transaction.module.css';

export default function Transation({ item: { type, amount, currency } }) {
  return (
    <>
      <td className={css.trnEl}>{type}</td>
      <td className={css.trnEl}>{amount}</td>
      <td className={css.trnEl}>{currency}</td>
    </>
  );
}

Transation.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

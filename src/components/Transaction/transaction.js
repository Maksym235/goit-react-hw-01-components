import PropTypes from 'prop-types';
import css from './transaction.module.css';

export default function Transation({ item: { id, type, amount, currency } }) {
  return (
    <tr key={id}>
      <td className={css.trnEl}>{type}</td>
      <td className={css.trnEl}>{amount}</td>
      <td className={css.trnEl}>{currency}</td>
    </tr>
  );
}

Transation.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

import PropTypes from 'prop-types';
import css from './css/friedItem.module.css';

export default function FriendItem({ item: { avatar, name, isOnline } }) {
  return (
    <>
      <span className={isOnline ? css.statusOnline : css.statusOfline}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

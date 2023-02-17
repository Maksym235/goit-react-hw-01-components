import PropTypes from 'prop-types';
import css from './friedItem.module.css';

export default function FriendItem({ item: { id, avatar, name, isOnline } }) {
  return (
    <li className={css.friendListItem} key={id}>
      <span className={isOnline ? css.statusOnline : css.statusOfline}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

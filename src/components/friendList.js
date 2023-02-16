import PropTypes from 'prop-types';
import css from './css/friendList.module.css';

import FriendItem from './friendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li className={css.friendListItem} key={friend.id}>
            <FriendItem item={friend} />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
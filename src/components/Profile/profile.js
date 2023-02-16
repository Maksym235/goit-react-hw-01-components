import PropTypes from 'prop-types';
import css from './profile.module.css';

export default function Profile({
  avatar,
  username,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers: </span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views: </span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes: </span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

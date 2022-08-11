import PropTypes from 'prop-types';

import styles from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span class={styles.label}>Views</span>
          <span class={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span class={styles.label}>Likes</span>
          <span class={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import styles from './friend-list.module.css';

const FriendList = ({ friends }) => {
  const elements = friends.map(elem => (
    <FriendListItem
      key={elem.id}
      avatar={elem.avatar}
      name={elem.name}
      isOnline={elem.isOnline}
    />
  ));
  return <ul className={styles.friend}>{elements}</ul>;
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

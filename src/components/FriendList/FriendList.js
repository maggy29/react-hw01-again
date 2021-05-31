import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  return(
    <ul className={styles.friendList}>
      {friends.map(friend=> {
        return(
          <li key={friend.id} className={styles.item}>
            <FriendListItem 
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        )
       })}
    </ul>
  )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )}

export default FriendList;
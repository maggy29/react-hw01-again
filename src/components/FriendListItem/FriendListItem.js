import PropTypes from 'prop-types';
import defaultImage from '../../img/default.jpg';
import styles from './FriendListItem.module.css';
const statusClasses = [
styles.status,

]

const FriendListItem = ({isOnline=false, name, avatar= defaultImage}) => {
  const statusClasses = [
    styles.status,
    isOnline ? styles.online : styles.offline,
    ];

  return (
      <>
      <span className={statusClasses.join(' ')}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      </>
  )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
}

export default FriendListItem;
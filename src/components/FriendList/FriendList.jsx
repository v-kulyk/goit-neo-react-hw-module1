import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
import clsx from "clsx";
export default function FriendList({ friends }) {
  const friendsList = friends.map((friend) => (
    <li key={friend.id}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));

  return <ul className={styles.container}>{friendsList}</ul>;
}

import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul>
        <li className={styles.stats}>
          <span>Followers</span>
          <span className={styles.count}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.count}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.count}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

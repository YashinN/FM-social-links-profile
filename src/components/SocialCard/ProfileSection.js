import profileImg from "../../images/avatar-jessica.jpeg";
import styles from "./ProfileSection.module.scss";

const ProfileSection = () => {
  return (
    <div className={styles.profileSection}>
      <img
        className={styles.profileImg}
        src={profileImg}
        alt="Profile picture"
      />

      <div className={styles.profileDetails}>
        <h1>Jesscia Randall</h1>
        <p className={styles.location}>London, United Kingdom</p>
      </div>

      <p>"Front-end developer and avid reader."</p>
    </div>
  );
};

export default ProfileSection;

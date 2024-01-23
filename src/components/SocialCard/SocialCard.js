import styles from "./SocialCard.module.scss";
import ProfileSection from "./ProfileSection";

const SocialCard = () => {
  return (
    <section className={styles.socialCard}>
      <ProfileSection />
    </section>
  );
};

export default SocialCard;

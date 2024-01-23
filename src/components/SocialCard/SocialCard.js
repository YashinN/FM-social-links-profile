import styles from "./SocialCard.module.scss";
import ProfileSection from "./ProfileSection";
import SocialLinks from "./SocialLinks";

const SocialCard = () => {
  return (
    <section className={styles.socialCard}>
      <ProfileSection />
      <SocialLinks />
    </section>
  );
};

export default SocialCard;

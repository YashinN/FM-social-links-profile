import { Link } from "react-router-dom";
import styles from "./SocialLinks.module.scss";

const socialLinks = [
  { name: "github", link: "#" },
  { name: "frontend Mentor", link: "#" },
  { name: "linkedIn", link: "#" },
  { name: "twitter", link: "#" },
  { name: "instagram", link: "#" },
];
const SocialLinks = () => {
  return (
    <div>
      <ul className={styles.linkList}>
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link to={"#"}>{link.name}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

import Image from "next/image";
import vercelLogo from "../../public/vercel.svg";
import styles from '../../styles/Home.module.css'

const ProfileImage = () => (
  <span className={styles.logo}>
    <Image src={vercelLogo} alt="Vercel Logo" />
  </span>
);

export default ProfileImage;

import Dashboard from "../Dashborad/Dashboard";
import Header from "../Header/Header";
import styles from "./ProSection.module.css";

const ProSection = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.sidebar}>
        <Dashboard />
      </div>
      <Header />
      <div className={styles.content}>
        <div className={styles.heroContainer}>
          <img
            src="https://cpwebassets.codepen.io/assets/pro/pro-landing-page-hero-6beb2d31a647492021d22993108e49d4c041fef1f8ee6965672fcb9b05cc2664.jpg"
            alt="CodePen Pro"
            className={styles.heroImage}
          />
          <div className={styles.textOverlay}>
            <h1 className={styles.proTitle}>Unlock the Full Power of CodePallete</h1>
            <h3 className={styles.proDescription}>
              Get every feature CodePallete has to offer starting at $8/month and
              start building code faster and easier.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSection;

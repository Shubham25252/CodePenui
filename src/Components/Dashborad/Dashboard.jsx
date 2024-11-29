import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Link to="/home">
            <h1 className={styles.title}>
                C
           <img className={styles.logo} src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" alt="" />
                dePalette
            </h1>
            </Link>
            <p className={styles.subtitle}>Try Our Online Editor</p>
           <Link to="/code"><button className={`${styles.button} ${styles.startCodingButtons}`}>Start Coding</button>
           </Link>
            <button className={styles.button}>Search Pallete</button>
            <button className={styles.button}>Challenges</button>
            <button className={styles.button}>Create Project</button>
            <Link to="/about">
            <button className={styles.button}>About Us</button>
            </Link>
            <Link to="/CodePalatte-Pro">
            <button className={`${styles.PalletePro} ${styles.button}`}>CodePalette</button>
            </Link>
        </div>
    );
};

export default Dashboard;

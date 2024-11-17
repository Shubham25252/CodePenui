import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                C
           <img className={styles.logo} src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" alt="" />
                dePalette
            </h1>
            <p className={styles.subtitle}>Try Our Online Editor</p>
            <button className={`${styles.button} ${styles.startCodingButton}`}>Start Coding</button>
            <button className={styles.button}>Search Pens</button>
            <button className={styles.button}>Challenges</button>
            <button className={styles.button}>Create Project</button>
            <button className={styles.button}>About Us</button>
            <button className={styles.button}>CodePalette</button>
        </div>
    );
};

export default Dashboard;

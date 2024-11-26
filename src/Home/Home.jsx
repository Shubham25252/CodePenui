import Dashboard from "../Components/Dashborad/Dashboard";
// import { IoIosSearch } from "react-icons/io";
import styles from "./Home.module.css";
import Lottie from "lottie-react";
import Animation from "../Components/Animation.json";
import Header from "../Components/Header/Header"
const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Dashboard />
        </div>
        {/* <div className={styles.mainContent}>
          <header className={styles.header}>
            <IoIosSearch />
            <input
              type="text"
              placeholder="Search CodePalette..."
              className={styles.searchInput}
            />
          </header> */}
          <Header/>
          <div className={styles.welcomeSection}>
            <div className={styles.textContainer}>
              <h1 className={styles.firstPara}>
                Welcome to <span className={styles.brandName}>C
                <img className={styles.logo} src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" alt="" />dePalette</span>
              </h1>
              <p className={styles.revealText}>
                <span>Write.</span>
                <span>Debug.</span>
                <span>Repeat.</span>
                <span>Your journey begins here!</span>
              </p>
            </div>
            <Lottie
              animationData={Animation}
              className={styles.lottieAnimation}
            />
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Home;

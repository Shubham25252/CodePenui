import Dashboard from "../Dashborad/Dashboard";
import styles from "./Login.module.css";
import { IoIosSearch } from "react-icons/io";
import { signInWithPopup } from "firebase/auth";
import { auth,googleAuthProvider} from "../../Config/firebase";


const Login = () => {
    const onLogin =async() =>{
        const data= await signInWithPopup(auth, googleAuthProvider);
        console.log(data);   
    };
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <Dashboard />
            </div>
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <IoIosSearch className={styles.searchIcon} />
                    <input type="text" placeholder="Search CodePen..." className={styles.searchInput} />
                </header>
                <div className={styles.login}>
                    <div className={styles.credentials}>
                        <div className={styles.socialLogin}>
                            <h1>
                                C
                                <img className={styles.logo} src="https://cdn.worldvectorlogo.com/logos/codepen-icon.svg" alt="" />
                                dePalette
                            </h1>
                            <h1 className={styles.loginTitle}>Log In</h1>
                            <button className={styles.googleLogin} onClick={onLogin}>Log In with Google</button>
                            <button className={styles.githubLogin}>Log In with GitHub</button>
                            <p className={styles.socialInfo}>How social log in works</p>
                        </div>
                        <div className={styles.dividerContainer}>
                            <div className={styles.divider}></div>
                            <p className={styles.or}>OR</p>
                            <div className={styles.divider}></div>
                        </div>
                        <div className={styles.formLogin}>
                            <input type="text" placeholder="Username or Email" className={styles.inputField} />
                            <input type="password" placeholder="Password" className={styles.inputField} />
                            <button className={styles.loginButton}>Log In</button>
                            <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

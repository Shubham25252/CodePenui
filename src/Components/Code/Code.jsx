import Editor from "../Editor/Editor";
import { useContext } from "react";
import { DataContext } from "../App";
import styles from "./Code.module.css";
import Result from "../Result/Result";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Code = () => {
  const { Html, setHtml, Css, setCss, JavaScript, setJavaScript } =
    useContext(DataContext);
  const navigate = useNavigate();

  const handleSave = () => {
    const codeData = { Html, Css, JavaScript };
    localStorage.setItem("codePaletteData", JSON.stringify(codeData));
    alert("Code saved successfully!");
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/">
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4zm-8.6 0v20L27.1 44.8 12 34.8zM8.6 42.8 19.3 50 8.6 57.2zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50zm4.3 27.5v-20l18.6-12.5 15 10.1zm37.1-30.5L80.7 50l10.8-7.2z" />
          </svg>
          </Link>
            <h3 className={styles.codepaletteText}>CodePalette </h3>
         
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <Editor
          heading="HTML"
          icons="/"
          colors="#FF3C41"
          value={Html}
          onChange={setHtml}
        />
        <Editor
          heading="CSS"
          icons="*"
          colors="#0EBEFF"
          value={Css}
          onChange={setCss}
        />
        <Editor
          heading="JAVASCRIPT"
          icons="()"
          colors="#FCD000"
          value={JavaScript}
          onChange={setJavaScript}
        />
      </div>
      <Result />
    </>
  );
};

export default Code;

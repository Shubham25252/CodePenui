import Editor from "../Editor/Editor";
import { useContext } from "react";
import { DataContext } from "../App"
import styles from './Code.module.css';

const Code = () => {
  const { Html, setHtml, Css, setCss, JavaScript, setJavaScript } = useContext(DataContext);
  
  return (
    <div className={styles.container}>
      <Editor heading="HTML" icons="/" colors="#FF3C41" value={Html} onChange={setHtml} />
      <Editor heading="CSS" icons="*" colors="#0EBEFF" value={Css} onChange={setCss} />
      <Editor heading="JAVASCRIPT" icons="()" colors="#FCD000" value={JavaScript} onChange={setJavaScript} />
    </div>
  );
};

export default Code;

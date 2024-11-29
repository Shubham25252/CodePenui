import { createContext, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../Config/firebase";

export const DataContext = createContext(null);

const Context = (props) => {
  const [userdata, setUserdata] = useState({
    name: null,
    email: null,
    photoURL: null,
  });

  const [Html, setHtml] = useState("");
  const [Css, setCss] = useState("");
  const [JavaScript, setJavaScript] = useState("");

  const onGoogleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleAuthProvider);
      setUserdata({
        name: data.user.displayName,
        email: data.user.email,
        photoURL: data.user.photoURL,
      });
      console.log("User Data Updated: ", userdata);
    } catch (error) {
      console.error("Google Login Error: ", error.message);
    }
  };
  

  const handleOpenFile = (file) => {
    setHtml(file.Html || "");
    setCss(file.Css || "");
    setJavaScript(file.JavaScript || "");
  
  };
  

  return (
    <>
      <DataContext.Provider
        value={{
          Html,
          setHtml,
          Css,
          setCss,
          JavaScript,
          setJavaScript,
          onGoogleLogin,
          userdata,
          handleOpenFile,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </>
  );
};

export default Context;

import { createContext } from "react";
import { useState } from "react";
export const DataContext = createContext(null);
const Context=(props) => {
    const [Html, setHtml] = useState('');
    const [Css, setCss] = useState('');
    const [JavaScript, setJavaScript] = useState('');
    return(
        <>
        <DataContext.Provider value={{Html,setHtml,Css,setCss,JavaScript,setJavaScript}}>
            {props.children}
        </DataContext.Provider>
        </>

    )
    
};
export default Context;
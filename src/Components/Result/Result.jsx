import { useContext } from "react";
import { DataContext } from "../ContextFile/Context";
import styles from './Result.module.css';

const Result = () => {
    const { Html, Css, JavaScript } = useContext(DataContext);
    // Combine HTML, CSS, and JavaScript code into the iframe source
    const srcCode = `
        <html>
            <head>
                <style>
                    * { box-sizing: border-box; }
                    body, html { margin: 0; padding: 0; width: 100%; height: 100%; }
                </style>
                <style>${Css}</style>
            </head>
            <body>
                ${Html}
                <script>${JavaScript}</script>
            </body>
        </html>
    `;


 // const ctx=useContext(DataContext);
    // console.log(ctx);
//     const srcCode = `
//     <html>
//         <head>
//             <style>
//                 * { box-sizing: border-box; }
//                 body, html { margin: 0; padding: 0; width: 100%; height: 100%; }
//             </style>
//             <style>${ctx.Css}</style>
//         </head>
//         <body>
//             ${ctx.Html}
//             <script>${ctx.JavaScript}</script>
//         </body>
//     </html>
// `;

    return (
        <div className={styles.resultContainer}>
            <iframe 
                srcDoc={srcCode}
                title="Output"
                sandbox="allow-scripts"
                className={styles.iframeContainer}
            />
        </div>
    );
};

export default Result;

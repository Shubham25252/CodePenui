import { signInWithPopup } from "firebase/auth";
import { auth,googleAuthProvider} from "../../Config/firebase";
const Auth=() => {
    const onLogin =async() =>{
        const data= await signInWithPopup(auth, googleAuthProvider);
        console.log(data);
        
       
    };
    return (
        <div>
        <h1>This is first step Authentication</h1>
        <button onClick={onLogin}>Login with Google</button>
        </div>
    )
};
export default Auth;

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializingTheWebApp=()=>{
    initializeApp(firebaseConfig);
}
export default initializingTheWebApp;

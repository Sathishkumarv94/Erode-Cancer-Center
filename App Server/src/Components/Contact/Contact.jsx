import React , {useEffect} from "react"
import ContactPage from "../ContactPage/ContactPage";

function Contact(){
    useEffect(() => {
        document.title = "Contact | Erode Cancer Centre Salem Unit";
      }, []);
    return(
        <>
        
        <ContactPage></ContactPage>
        
        </>
    )
}

export default Contact
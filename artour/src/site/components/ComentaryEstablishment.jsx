import { useState, useEffect } from "react";
import styles from "./ComentaryEstablishment.module.css";


function ComentaryEstablishment({ comentary }){
    const [user, setUser] = useState(comentary.user);
    const [title, setTitle] = useState(comentary.title);
    const [content, setContent] = useState(comentary.content);

    useEffect(() => console.log("Chegou"))

    return(
        <>
            <p>Criado por: {user}</p>
            <h6>{title}</h6>
            <p>{content}</p>
        </>
    );
}

export default ComentaryEstablishment;
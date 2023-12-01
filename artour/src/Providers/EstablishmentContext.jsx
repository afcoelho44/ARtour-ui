import React, { useState} from 'react';


export const EstabilishmentContext = React.createContext({}); 

export const EstablishmentProvider = (props) => {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    return (
        <EstabilishmentContext.Provider value={{latitude, setLatitude, longitude, setLongitude}}>
            { props.children }
        </EstabilishmentContext.Provider>
    );
}
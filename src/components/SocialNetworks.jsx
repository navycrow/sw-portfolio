import React, { useState, useEffect } from "react";
import "./SocialNetworks.css";
import socialNetworks from '../data/socialNetworks.json'

const SocialNetworks = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch("/data/socialNetworks.json")
    //         .then((response) => response.json())
    //         .then((data) => setData(data))
    //         .catch((err) => console.error("Erreur de chargement JSON :", err));
    // }, []);

    return (
        <>
            {/* <p>Suivez-moi</p> */}
            <br />
            <div id="social-networks">
                {socialNetworks.map((el, idx) => (
                    <div key={idx}>
                        <a href={el.href} target="_blank">
                            <img src={el.src} className="icon svg" alt={el.alt} />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SocialNetworks;

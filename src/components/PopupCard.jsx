import React from "react";
import './PopupCard.css'

const PopupCard = ({ experience }) => {
    return (
        <div className="popup-card hidden">
            <h3>{experience.poste}</h3>
            <p>{experience.etablissement}</p>
            <ul>
                {experience.fonctions.map((fonction, i) => (
                    <li key={i}>{fonction}</li>
                ))}
            </ul>
            <p>{experience.periode}</p>
        </div>
    );
};

export default PopupCard;

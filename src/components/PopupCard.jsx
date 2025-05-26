import React from "react";
import "./PopupCard.css";

const PopupCard = ({ experience }) => {
    // On vérifie que la clé n'est pas vide
    if (Object.keys(experience).length > 0) {
        return (
            <>
                <div className="popup-overlay"></div>
                <div className="popup-card">
                    <p className="close-btn">
                        <strong>X</strong>
                    </p>
                    <h3>{experience.poste}</h3>
                    <p>{experience.etablissement}</p>
                    <ul>
                        {experience.fonctions.map((fonction, i) => (
                            <li key={i}>{fonction}</li>
                        ))}
                    </ul>
                    <p>{experience.periode}</p>
                </div>
            </>
        );

        // Sinon retourne RIEN
    } else {
        return <></>;
    }
};

export default PopupCard;

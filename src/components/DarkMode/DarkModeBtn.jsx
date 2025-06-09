import { useState, useEffect } from "react";
import darkModeSvg from "./dark-mode.svg";
import lightModeSvg from "./light-mode.svg";

const DarkModeBtn = () => {
    // Au montage, initialise le isDarkMode depuis le localStorage,
    // si la valeur n'existe, applique le mode sombre par défaut
    const [isDarkMode, setDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("isDarkMode")) || true
    );

    // Sur chaque changement de l'état
    useEffect(() => {
        console.log("Dark mode :", isDarkMode);

        // Applique la classe correspondante à la racine du document
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Stocke le nouvel état dans le localStorage
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <button
            id="dark-mode-btn"
            className="icon svg"
            aria-label={isDarkMode ? "Activer le mode clair" : "Activer le mode sombre"}
            onClick={() => setDarkMode(prev => !prev)} // Inverse l'état
        >
            {isDarkMode ? (
                <img src={darkModeSvg} className="icon svg" alt="Icône mode sombre" />
            ) : (
                <img src={lightModeSvg} className="icon svg" alt="Icône mode clair" />
            )}
        </button>
    );
};

export default DarkModeBtn;

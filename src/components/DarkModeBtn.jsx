import { useState, useEffect } from "react";

const DarkModeBtn = () => {
    // Au montage, initialise le isDarkMode depuis le localStorage,
    // si la valeur n'existe, applique le mode clair par défaut
    const [isDarkMode, setDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("isDarkMode")) || false
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
            className="icon"
            aria-label="Mode sombre/clair"
            onClick={() => setDarkMode(!isDarkMode)} // Inverse l'état
        >
            {isDarkMode ? "☀︎" : "⏾"}
        </button>
    );
};

export default DarkModeBtn;

import { useState, useEffect } from "react";

const DarkModeBtn = () => {
    // Au montage, initialise le darkMode depuis le localStorage,
    // si la valeur n'existe, applique le mode clair par défaut
    const [darkMode, setDarkMode] = useState(
        () => JSON.parse(localStorage.getItem("darkMode")) || false
    );

    // Sur chaque changement de l'état
    useEffect(() => {
        console.log("Dark mode :", darkMode);

        // Applique la classe correspondante à la racine du document
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Stocke le nouvel état dans le localStorage
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <button
            id="dark-mode-btn"
            className="icon"
            aria-label="Mode sombre/clair"
            onClick={() => setDarkMode(!darkMode)} // Inverse l'état
        >
            {darkMode ? "☀︎" : "⏾"}
        </button>
    );
};

export default DarkModeBtn;

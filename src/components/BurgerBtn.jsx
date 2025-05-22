import React, { useEffect, useState } from "react";

const BurgerBtn = () => {
    // Définit l'état du menu, fermé par défaut
    const [isMenuVisible, setMenu] = useState(false);

    useEffect(() => {
        const menu = document.getElementById("menu");
        console.log("Menu visible :", isMenuVisible);

        // Affecte la classe hidden au menu suivant l'état
        if (isMenuVisible) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    }, [isMenuVisible]);

    return (
        <button
            id="burger-menu"
            className="icon"
            onClick={() => setMenu(!isMenuVisible)} // change l'état
        >
            {isMenuVisible ? "🗙" : "☰"}
        </button>
    );
};

export default BurgerBtn;

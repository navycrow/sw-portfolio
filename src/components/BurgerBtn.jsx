import React, { useEffect, useState } from "react";

const BurgerBtn = () => {
    // Définit l'état du bouton, visible par défaut
    const [isBtnVisible, setBtnVisible] = useState(true);

    // Définit l'état du menu, caché par défaut
    const [isMenuHidden, setMenuHidden] = useState(true);

    // Si redimensionnement de l'affichage, actualise l'état du bouton
    useEffect(() => {
        const btn = document.getElementById("burger-btn");

        window.addEventListener("resize", () => {
            setBtnVisible(btn.checkVisibility());
            console.log("Bouton burger visible :", isBtnVisible);
        });
    });

    // Lorsque l'état d'affichage du bouton ou du menu change
    useEffect(() => {
        const menu = document.getElementById("menu");

        // Lorsque le bouton burger est visible, affiche le menu selon l'état
        if (isBtnVisible) {
            // Affecte la classe hidden au menu suivant le nouvel état
            console.log("Menu caché :", isMenuHidden);
            if (isMenuHidden) {
                menu.classList.add("hidden");
            } else {
                menu.classList.remove("hidden");

                // Si le menu est déplié, le repli lors d'un clic (sauf sur le bouton burger)
                const handleClick = (e) => {
                    if (e.target.id !== "burger-btn") setMenuHidden(true);
                };

                document.addEventListener("click", handleClick);

                // Supprime l'écouteur d'événement lors du démontage
                return () => {
                    document.removeEventListener("click", handleClick);
                };
            }
        }

        // Lorsque le bouton n'est pas visible, affiche le menu en permanence
        else {
            menu.classList.remove("hidden");
        }
    }, [isBtnVisible, isMenuHidden]);

    return (
        <button
            id="burger-btn"
            className="icon"
            onClick={() => setMenuHidden(!isMenuHidden)} // change l'état
        >
            {isMenuHidden ? "☰" : "🗙"}
        </button>
    );
};

export default BurgerBtn;

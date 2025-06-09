import React, { useEffect, useState } from "react";
import burgerMenuSvg from "./burger-menu-right.svg";
import closeSvg from "./close.svg";

const BurgerBtn = () => {
    // Définit l'état du bouton, visible par défaut
    const [isBtnVisible, setBtnVisible] = useState(true);

    // Définit l'état du menu, caché par défaut
    const [isMenuHidden, setMenuHidden] = useState(true);

    // Au montage et en cas de redimensionnement de l'affichage, actualise l'état du bouton
    useEffect(() => {
        // Lors du redimensionnement, vérifie si le bouton burger est présent et actualise l'état
        function handleResize() {
            const btn = document.getElementById("burger-btn");
            const visible = btn.checkVisibility();
            setBtnVisible(visible);
            console.log("Bouton burger visible :", visible);
        }

        // Actualise l'état initial du bouton
        handleResize();

        // Ajout de l'écouteur au montage
        window.addEventListener("resize", handleResize);

        // Suppresion de l'écouteur au démontage
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

                // Si le clic ne vient pas du bouton burger, cache le menu
                function handleClick(e) {
                    if (e.target.id !== "burger-btn") setMenuHidden(true);
                }

                // Ajout d'un événement clic sur le document
                document.addEventListener("click", handleClick);

                // Supprime l'écouteur d'événement lors du démontage
                return () => document.removeEventListener("click", handleClick);
            }
        }

        // Lorsque le bouton n'est pas visible, affiche le menu en permanence
        else {
            menu.classList.remove("hidden");
        }
    }, [isBtnVisible, isMenuHidden]);

    return (
        <img
            id="burger-btn"
            src={isMenuHidden ? burgerMenuSvg : closeSvg}
            className="icon svg"
            alt={isMenuHidden ? "Ouvrir le menu" : "Fermer le menu"}
            onClick={() => setMenuHidden((prev) => !prev)} // Inverse l'état
        />
    );
};

export default BurgerBtn;

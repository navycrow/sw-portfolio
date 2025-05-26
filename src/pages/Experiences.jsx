import { useState, useEffect } from "react";
import PopupCard from "../components/PopupCard";

const Experiences = () => {
    const [experiences, setExperiences] = useState([]);
    const [moreCard, setMoreCard] = useState(-1);

    useEffect(() => {
        fetch("/data/experiences.json")
            .then((response) => response.json())
            .then((data) => setExperiences(data))
            .catch((err) => console.error("Erreur de chargement JSON :", err));
    }, []);

    useEffect(() => {
        console.log("test");
    }, [moreCard]);

    return (
        <section id="experiences">
            <h2>Expériences professionnelles</h2>
            <div className="container">
                {experiences.map((experience, index) => (
                    <div key={index} className="card">
                        <h3>{experience.poste}</h3>
                        <p>{experience.etablissement}</p>
                        <p>{experience.periode}</p>
                        <p class="see-more">En savoir plus...</p>
                    </div>
                ))}
            </div>
            <PopupCard
                experience={{
                    poste: "Administrateur systèmes et réseaux",
                    etablissement: "DARRIEUMERLOU",
                    fonctions: [
                        "Installation de nouveaux matériels et équipements informatiques (logiciels, antivirus, imprimantes, ordinateurs …), réalisation des mises à jour.",
                        "Diagnostic et résolution des incidents sur logiciels, matériels, systèmes, téléphonie et réseaux.",
                        "Installation des ordinateurs et configuration des postes de travail",
                        "Gestion du parc informatique (15 postes, 6 imprimantes, 1 serveur, 3 commandes numériques), de la téléphonie fixe et mobile.",
                        "Renseignement des utilisateurs sur les bonnes pratiques en matière de sécurité informatique.",
                        "Commande, réception et installation du matériel : PC, tablettes, smartphones, téléphones.",
                        "Conception et programmation d'applications et de solutions logicielles répondant à des problématiques de l'entreprise",
                        "Exploitation de base de données, extraction, analyse",
                        "Outils utilisés : Access/Excel + VBA, Python",
                        "Connaissances : Powershell, Javascript, AutoIt",
                    ],
                    periode: "Sept. 1997 / Août. 2024",
                }}
            />
        </section>
    );
};

export default Experiences;

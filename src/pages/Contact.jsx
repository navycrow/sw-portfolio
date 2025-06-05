import { useState } from "react";
import SocialNetworks from "../components/SocialNetworks";
import "./Contact.css";

const Contact = () => {
    const [msg, setMsg] = useState("");

    // Soumission du formulaire
    async function submit(e) {
        // Annule l'action par défaut et récupère les données du formulaire
        e.preventDefault();
        const form = e.target;
        const url = form.action;
        const method = form.method.toUpperCase();
        const formData = new FormData(form);
        console.log(url, method, formData);

        // Soumet le formulaire via une requête
        await fetch(url, {
            method: method,
            body: formData,
        })
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    setMsg("Formulaire envoyé avec succès !");
                } else {
                    setMsg(
                        `Erreur lors de l'envoi du formulaire : ${response.statusText}`
                    );
                }
            })
            .catch((error) =>
                setMsg(
                    `Erreur lors de l'envoi du formulaire : ${error.message}`
                )
            );

        // Reset le message et le formulaire au bout de quelques secondes
        setTimeout(() => {
            setMsg("");
            form.reset();
        }, 8000);
    }

    return (
        <section id="contact">
            <h2>Contactez-moi</h2>
            <p>
                Vous avez un projet, une question ou simplement envie d’échanger
                ?<br />
                N'hésitez pas à me contacter via le formulaire ci-dessous. Je
                vous répondrai dans les plus brefs délais.
            </p>
            <form
                action="https://formsubmit.co/cotele_amateur.1e@icloud.com"
                method="post"
                onSubmit={submit} // Permet de traiter l'envoi par une fonction et éviter le changement de page
            >
                <fieldset>
                    <legend>Formulaire de contact</legend>
                    <div className="nom">
                        <label htmlFor="nom">Nom *</label>
                        <input type="text" id="nom" name="nom" required />
                    </div>

                    <div className="prenom">
                        <label htmlFor="prenom">Prénom</label>
                        <input type="text" name="prenom" id="prenom" />
                    </div>

                    <div className="email">
                        <label htmlFor="email">E-mail *</label>
                        <input type="email" name="email" id="email" required />
                    </div>

                    <div className="message">
                        <label htmlFor="message">Message *</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                        ></textarea>
                    </div>

                    {/* *** Option de formSubmit.co *** */}
                    {/* Documentation : https://formsubmit.co/documentation */}
                    {/* Objet du mail */}
                    <input
                        type="hidden"
                        name="_subject"
                        value="Nouveau message depuis votre portfolio"
                    ></input>

                    {/* Anti-spam */}
                    <input
                        type="text"
                        name="_honey"
                        style={{ display: "none" }}
                    ></input>

                    {/* Désactivation du captcha */}
                    <input type="hidden" name="_captcha" value="false"></input>

                    {/* Activation de la réponse automatique */}
                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Confirmation d'envoi de votre message"
                    ></input>

                    {/* Template */}
                    <input type="hidden" name="_template" value="table"></input>

                    {/* Bouton de validation avec texte dynamique */}
                    <button
                        type="submit"
                        id="form-submit"
                        disabled={msg ? true : false} // Bouton désactivé si message
                    >
                        {msg ? msg : "Soumettre"}
                    </button>

                    <em className="asterisk">* Champs requis</em>
                </fieldset>
            </form>
            <br />
            <SocialNetworks />
        </section>
    );
};

export default Contact;

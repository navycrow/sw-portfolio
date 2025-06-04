import React from "react";
import SocialNetworks from "../components/SocialNetworks";
import "./Contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contactez-moi</h2>
            <p>
                Vous avez un projet, une question ou simplement envie d’échanger
                ?<br />
                N'hésitez pas à me contacter via le formulaire ci-dessous. Je
                vous répondrai dans les plus brefs délais.
            </p>
            <br />
            <form
                action="https://formsubmit.co/cotele_amateur.1e@icloud.com"
                method="post"
            >
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
                    <textarea name="message" id="message" required></textarea>
                </div>
                <input type="submit" id="form-submit" />
                <p>
                    <em>* Champs requis</em>
                </p>
            </form>
            <br />
            <SocialNetworks />
        </section>
    );
};

export default Contact;

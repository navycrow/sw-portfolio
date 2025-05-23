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
            <form action="">
                <div className="nom">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" />
                </div>
                <div className="prenom">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name="prenom" id="prenom" />
                </div>
                <div className="email">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="message">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                </div>
                <input type="submit" id="form-submit" />
            </form>
            <br/>
            <SocialNetworks/>
        </section>
    );
};

export default Contact;

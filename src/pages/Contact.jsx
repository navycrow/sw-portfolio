import { useEffect, useState } from "react";
import SocialNetworks from "../components/SocialNetworks";
import "./Contact.css";

const Contact = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [msg, setMsg] = useState("");

    // Après un envoi réussi, réinitialise le formulaire
    useEffect(() => {
        if (submitted)
            setTimeout(() => {
                setNom("");
                setPrenom("");
                setEmail("");
                setMessage("");
                setMsg("");
                setSubmitted(false);
            }, 5000);
    }, [submitted]);

    // Soumission du formulaire
    function submit(e) {
        setMsg("Envoi du formulaire en cours...");
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        console.log(formData);

        fetch("https://formsubmit.co/cotele_amateur.1e@icloud.com", {
            method: "POST",
            body: formData,
        })
            .then((response) => {
                if (response.ok) {
                    console.log(response);
                    setSubmitted(true);
                    setMsg("Formulaire envoyé avec succès");
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
            <br />
            <form onSubmit={submit}>
                <div className="nom">
                    <label htmlFor="nom">Nom *</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                </div>
                <div className="prenom">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="message">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        name="message"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>

                {/* Objet du mail */}
                <input
                    type="hidden"
                    name="_subject"
                    value="Nouveau message depuis votre portfolio"
                ></input>

                {/* Désactivation du captcha */}
                <input type="hidden" name="_captcha" value="false"></input>

                {/* Activation de la réponse automatique */}
                <input
                    type="hidden"
                    name="_autoresponse"
                    value="Confirmation d'envoi de votre message"
                ></input>

                <button
                    type="submit"
                    id="form-submit"
                    disabled={msg ? true : false} // Désactivé si message
                >
                    {msg ? msg : "Soumettre"}
                </button>

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

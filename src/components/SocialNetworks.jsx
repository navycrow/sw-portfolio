import "./SocialNetworks.css";
import socialNetworks from "../data/socialNetworks.json";

const SocialNetworks = () => {
    return (
        <>
            {/* <p>Suivez-moi</p> */}
            <br />
            <div id="social-networks">
                {socialNetworks.map((el, idx) => (
                    <div key={idx}>
                        <a href={el.href} target="_blank">
                            <img
                                src={el.src}
                                className="icon svg"
                                alt={el.alt}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SocialNetworks;

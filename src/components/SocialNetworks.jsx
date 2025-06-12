import "./SocialNetworks.css";
import socialNetworks from "../data/socialNetworks.json";

const SocialNetworks = () => {
    return (
        <>
            {/* <p>Suivez-moi</p> */}
            <br />
            <div id="social-networks">
                {socialNetworks
                    .filter((network) => network.visible)
                    .map((network, idx) => (
                        <div key={idx}>
                            <a href={network.href} target="_blank">
                                <img
                                    src={network.src}
                                    className="icon svg"
                                    alt={network.alt}
                                />
                            </a>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default SocialNetworks;

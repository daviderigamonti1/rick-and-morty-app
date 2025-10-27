import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { FaStar, FaRegStar, FaInfoCircle, FaGlobe, FaUserAstronaut, FaFilm } from "react-icons/fa";

export default function ItemCard({ item, favoriteItems, setFavoriteItems, mediaType, favoriteView = false }) {
    const { isFavorite, toggleFavorite } = useContext(GlobalContext);

    const navigate = useNavigate();

    const getTypeIcon = () => {
        switch (mediaType) {
            case "characters":
                return <FaUserAstronaut color="#00ff91" />;
            case "episodes":
                return <FaFilm color="#00aaff" />;
            case "locations":
                return <FaGlobe color="#b56dff" />;
            default:
                return null;
        }
    };

    const itemImage = mediaType === "characters"
        ? item.image
        : `./${mediaType}/${item.id}.webp`;

    return (
        <li className={`item-card ${mediaType}`}
            onClick={() => favoriteView ? navigate(`/${mediaType}/${item.id}`) : null}>

            <div className="item-image">
                <img src={itemImage} alt={item.name} />
            </div>

            <div className="item-content">
                <div className="item-header">
                    {getTypeIcon()}
                    <h3>{item.name}</h3>
                </div>

                {item.episode && <p className="item-sub">{item.episode}</p>}
            </div>

            <div className="item-actions" onClick={(e) => e.stopPropagation()}>
                {!favoriteView && (
                    <button className="item-details-btn" onClick={() => navigate(`/${mediaType}/${item.id}`)}>
                        <FaInfoCircle /> Scopri di più
                    </button>
                )}

                <button
                    className="item-favorite-btn"
                    onClick={() => toggleFavorite(item, favoriteItems, setFavoriteItems)}
                >
                    {isFavorite(item, favoriteItems) ? <FaStar color="gold" /> : <FaRegStar />}
                </button>
            </div>
        </li >
    );
}

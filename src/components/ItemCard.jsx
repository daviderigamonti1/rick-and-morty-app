import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import { FaStar, FaRegStar } from "react-icons/fa";

export default function ItemCard({ item, favoriteItems, setFavoriteItems, mediaType }) {

    const { isFavorite, toggleFavorite } = useContext(GlobalContext);

    const navigate = useNavigate();

    return (
        <li className="item-card">
            <div className="item-image">
                <img src={`/${mediaType}/${item.id}.webp`} alt={item.name} />
            </div>
            {item.episode && <h3>{item.episode}</h3>}
            <p>{item.name}</p>
            <div className="item-actions">
                <button onClick={() => navigate(`/episode/${item.id}`)}>Vedi dettagli</button>
                <button
                    className="item-favorite-btn"
                    onClick={(ev) => {
                        ev.stopPropagation();
                        toggleFavorite(item, favoriteItems, setFavoriteItems)
                    }}>
                    {isFavorite(item, favoriteItems) ? <FaStar color="gold" /> : <FaRegStar />}
                </button>
            </div>
        </li>
    )
}
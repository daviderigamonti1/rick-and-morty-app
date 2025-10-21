import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {

    const navigate = useNavigate();

    return (
        <li className="card" onClick={() => navigate(`/characters/${character.id}`)}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
        </li>
    )
}
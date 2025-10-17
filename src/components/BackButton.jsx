import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "Torna indietro" }) {

    const navigate = useNavigate();

    return (
        <button
            className="back-button"
            onClick={() => navigate(-1)}
        >
            {label}
        </button>
    )
}
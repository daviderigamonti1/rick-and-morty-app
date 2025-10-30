import { useNavigate } from "react-router-dom";

export default function BackButton({ to, label = "Torna indietro" }) {

    const navigate = useNavigate();

    return (
        <button
            className="back-button"
            onClick={() => {
                if (window.history.length > 1) {
                    navigate(-1);
                } else {
                    navigate(to);
                }
            }}
        >
            {label}
        </button>
    )
}
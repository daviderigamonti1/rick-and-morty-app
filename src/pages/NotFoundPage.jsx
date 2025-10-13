import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div className="not-found">
            <h1>404 - Questa dimensione non esiste 🌀</h1>
            <p>
                Sembra che tu abbia preso una strada interdimensionale sbagliata...
                Forse Rick ha cancellato questa timeline 🤯
            </p>
            <button onClick={() => navigate("/")}>⬅️ Torna indietro</button>
        </div>
    )
}
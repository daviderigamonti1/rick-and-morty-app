import { useNavigate } from "react-router-dom";

export default function Homepage() {

    const navigate = useNavigate();

    return (
        <div className="homepage">
            <img src="/public/rick-and-morty-homepage.png" alt="rick-and-morty" />
            <button onClick={() => navigate('/characters')}>
                Entra
            </button>
        </div>
    )
}
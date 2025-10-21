import BackButton from "../components/BackButton";

export default function NotFoundPage() {

    return (
        <div className="not-found">
            <h1>404 - Questa dimensione non esiste</h1>
            <p>
                Sembra che tu abbia preso una strada interdimensionale sbagliata...
                Forse Rick ha cancellato questa timeline
            </p>
            <BackButton />
        </div>
    )
}
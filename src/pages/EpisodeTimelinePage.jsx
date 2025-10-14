import { Chrono } from "react-chrono";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function EpisodeTimeline() {
    const { episodes } = useContext(GlobalContext);

    const items = episodes.map((e) => ({
        title: e.episode,
        cardTitle: e.name,
        cardSubtitle: e.air_date,
        media: {
            type: "IMAGE",
            source: {
                url: `/episodes/${e.id}.webp`,
            },
        },
    }));

    return (
        <div className="timeline-page">
            <h1 className="timeline-title">📺 Timeline degli Episodi</h1>
            <div className="timeline-container">
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={220}
                    hideControls={false}
                    theme={{
                        primary: "#22c55e", // verde brillante
                        secondary: "#1e293b", // blu notte
                        cardBgColor: "#0f172a", // scuro elegante
                        titleColor: "#22c55e",
                        cardTitleColor: "#22c55e",
                        cardSubtitleColor: "#94a3b8",
                    }}
                />
            </div>
        </div>
    );
}
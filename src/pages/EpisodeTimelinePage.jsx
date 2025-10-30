import { Chrono } from "react-chrono";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { episodeDescriptions } from "../data/episodeDescriptions";

export default function EpisodeTimeline() {
    const { episodes } = useContext(GlobalContext);

    const items = episodes.map((e) => ({
        title: e.episode,
        cardTitle: e.name,
        cardSubtitle: e.air_date,
        cardDetailedText: episodeDescriptions[e.episode] || "Trama non disponibile…",
        media: {
            type: "IMAGE",
            source: {
                url: `/episodes/${e.id}.webp`,
            },
        },
    }));

    return (
        <div className="timeline-page">
            <div className="timeline-container">
                <h1 className="timeline-title">TIMELINE EPISODI</h1>
                <Chrono
                    items={items}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={220}
                    hideControls={false}
                    theme={{
                        primary: "#22c55e",
                        secondary: "#1e293b",
                        cardBgColor: "#0f172a",
                        titleColor: "#22c55e",
                        cardTitleColor: "#22c55e",
                        cardSubtitleColor: "#94a3b8",
                        cardDetailsColor: "#cbd5e1",
                    }}
                />
            </div>
        </div>
    );
}
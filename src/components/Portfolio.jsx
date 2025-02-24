import { Game } from "./Game";

export const Portfolio = () => {
    const games = [
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
        "7222835402",
        "1",
    ];

    return (
        <section id="portfolio" className="portfolio">
            <h2>OUR PORTFOLIO</h2>
            <div className="gameHolder">
                {games.map((game) => (
                    <Game universeId={game} key={game} />
                ))}
            </div>
        </section>
    );
};
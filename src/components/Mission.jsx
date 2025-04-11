export const Mission = () => {

    return(
        <section id="mission" className="mission">
            <div className="platformHolder">
                <h3>PARTNER<br></br> PLATFORMS</h3>
                <div className="platforms">
                    <div className="platform">
                        <h4>HELLO GAMES</h4>
                    </div>
                    <div className="platform">
                        <h4>ORIGIN</h4>
                    </div>
                    <div className="platform">
                        <h4>STEAM</h4>
                    </div>
                </div>

            </div>

            <h2 id="titleSection">MISSION</h2>
            <div className="mission-content">
                <div className="CEOHolder">
                    <img></img>
                    <div className="cardFooter">
                        <div className="cardInfo">
                            <h5>Name</h5>
                            <h6>Chief Executive Officer</h6>
                        </div>
                        <div className="socials">
                            <a href="/"><i class="bi bi-discord"></i></a>
                            <a href="/"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="missionInfo">
                    <p>
                        Our mission is to unite creators, 
                        brands, and individuals 
                        through immersive metaverse 
                        experiences
                    </p>
                    <div className="missionStats">
                        <div className="stat">
                            <h5>Games</h5>
                            <p>100+</p>
                        </div>
                        <div className="stat">
                            <h5>Daily visits</h5>
                            <p>30M+</p>
                        </div>
                        <div className="stat">
                            <h5>US visits</h5>
                            <p>10M+</p>
                        </div>
                        <div className="stat">
                            <h5>Games supported</h5>
                            <p>500+</p>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
    );
};
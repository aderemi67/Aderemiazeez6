function Projects() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-card">
                    <h3>Portfolio Website</h3>
                    <img src="/img/postmalone-1.jpg" alt="Aderemi Portfolio" className="img" />
                    <a href="https://portfolio-aged-surf-9440.fly.dev/" className="btn">View</a>
                    <p className="details">A personal Porfolio showcasing my work.</p>
                </div>
                <div className="project-card">
                    <h3>Aderemi Food </h3>
                    <img src="/img/restuarant.jpg" alt="Aderemi Restaurant" className="img" />
                    <a href="https://aderemi-restaurant-123.netlify.app/" className="btn">View</a>
                    <p className="details">A Restaurant Website built with HTML and SASS.</p>
                </div>
                <div className="project-card">
                    <h3>Calculator</h3>
                    <img src="/img/calculator.jpg" alt="calculator" className="img"/>
                   <a href="https://aderemi67.github.io/aderemi-calculator/" className="btn">View</a>
                    <p className="details">A Calculator which was created using HTML, CSS & JavaScript.</p>
                </div>
                 <div className="project-card">
                    <h3>🎬 Movie Watchlist App</h3>
                    <img src="/img/FB_IMG_1754079509621.jpg" alt="Movie Watchlist" className="img"/>
                   <a href="https://movie-watchlist-rho-two.vercel.app/" className="btn">View</a>
                    <p className="details">A simple React app that lets users search movies using the TMDB API, add them to a personal watchlist, and manage their favorite movies all in one place.</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3> Let me tell you something about me</h3>
                <p>
                     UnhandledPromiseRejectionWarning:
                     Error: Failed to load jshint library. Please install jshint
                     in your workspace folder using 'npm install jshint' or globally
                     using 'npm install -g jshint' and then reload.
                     at Linter. (c:\Users\Yesi
                     ca\.vscode\extensions\dbaeumer.jshint-0
                     .11.0\jshint-server\out\server.js:336:23)
                </p>
            </div>
            <div className="about-img">
                <img src="https://www.superprof.com.ar/blog/wp-content/uploads/2021/01/estudiar-biologia-razones-864x468.jpg" alt="about"/>
            </div>
        </div>
    )
}
export default About
import React from "react";
import "./project.css";
import alcheMix from "./alcheMix.png";
import RustyRails from "./RustyRails.png";
import jukebox from "./jukebox.png";
import boggle from "./boggle.png";
import tictactoe from "./tictactoe.png";

function ProjectBox({ title, imageSrc, buttonText, link, text, showButton, downloadable, downloadFile }) {
    const handleButtonClick = () => {
        if (downloadable) {
            // If it's a downloadable project, trigger the download
            downloadFile();
        } else {
            // Otherwise, open the specified link in a new tab
            window.open(link, "_blank");
        }
    };

    return (
        <div className="projectBox">
            <h2>{title}</h2>
            <img src={imageSrc} alt={title} className="projectImage" />
            <p style={{ whiteSpace: "pre-line" }}>{text}</p>
            {showButton && (
                <button onClick={handleButtonClick} align="center">
                    {downloadable ? "Download" : buttonText}
                </button>
            )}
        </div>
    );
}

function MyProject() {

    const downloadTicTacToeFile = () => {
        // Replace the placeholder URL with the actual URL of the downloadable file
        const downloadUrl = "https://example.com/tictactoe-download";
        window.open(downloadUrl, "_blank");
    };

    return (
        <>
            <div className="mainBox">
                {/* <ProjectBox
                    title="Rusty Rails"
                    imageSrc={RustyRails}
                    buttonText="View"
                    link="https://nathanieljmette.itch.io/rusty-rails"
                    text={`This project was done by me and fellow members in the class of ISTA 451. This was the first game that we had to develop for the course. During this time, we are introduced to Unity and Scripting with C#. We were to make a 2D game as our first game while learning a new language.
                The scope and scale of this project got way too big, although we did almost implement everything that we wanted to. It still turned out to be a buggy mess, but we learned a lot from the project and will see immediate improvements on the next game: AlcheMix\n
                
                The things that I've implemented within the game is:\n
                Time, Helped with the Event System and UI`}
                    showButton={true}
                /> */}

                <ProjectBox
                    title="AlcheMix"
                    imageSrc={alcheMix}
                    buttonText="View"
                    link="https://arizona451fall.itch.io/alchemix"
                    text={`This project was done by me and fellow members in the class of ISTA 451. This was the second game developed within 7 weeks during the second half of the semester.
                Following the buggy mess that was Rusty Rails, we've learned how to balance our workload and scale down to something realistic within 7 weeks. This was a major improvement compared to Rusty Rails.
                
                The things that I've implemented within the game is: \n
                Pickup Interaction and UI relating to the pickups
                Models that include: Counters, Potions, and Environment`}
                    showButton={true}
                />

                <ProjectBox
                    title="Boggle"
                    imageSrc={boggle}
                    showButton={false}
                    text={`This project was done by myself. The project was to create the game "Boggle" inside java, with GUI interactions. Implemented with Backtracking as the main source for searching the correct word within each boggle dicetray.`}
                />

                {/* Add more ProjectBox components as needed */}
            </div>

            <div className="mainBox">
                <ProjectBox
                    title="TicTacToe"
                    imageSrc={tictactoe}
                    showButton={false}
                    text={`This project was done by myself. The process for this project was to create a working TicTacToe game inside the console.
                    After that, I implemented the game inside the GUI using javaFX. The computer can also play against you and you can select two different versions of the AI. 
                    The RandomAI where it selects a random empty slot left on the board and the AdvancedAI which will have a better winrate and harder to play against than the RandomAI`}
                    buttonText={`Download`}
                    downloadable={true}
                    downloadFile={downloadTicTacToeFile}
                />

                <ProjectBox
                    title="JukeBox"
                    imageSrc={jukebox}
                    showButton={false}
                    text={`This project was done by a classmate and myself. It was to simulate how a jukebox would work. Created a GUI with javaFX. We have also created a login and password in order to save a user's data and past history.
                    This was accomplished by using Serializable and reading from the serialized file for the data in which we can load. The JukeBox functions has so:
                    Each user gets to play a set amount of songs per day and will reset every day.`}
                />
            </div>




            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                <rect x="0" y="10" width="9" height="10" fill="#8890d9" />
                <rect x="8" y="5" width="9" height="12" fill="#8890d9" />
                <rect x="16" y="10" width="9" height="10" fill="#8890d9" />
                <rect x="24" y="5" width="9" height="12" fill="#8890d9" />
                <rect x="32" y="10" width="9" height="10" fill="#8890d9" />
                <rect x="40" y="5" width="9" height="12" fill="#8890d9" />
                <rect x="48" y="10" width="9" height="10" fill="#8890d9" />
                <rect x="56" y="5" width="9" height="12" fill="#8890d9" />
                <rect x="64" y="10" width="9" height="10" fill="#8890d9" />
                <rect x="72" y="5" width="9" height="12" fill="#8890d9" />
                <rect x="80" y="10" width="9" height="10" fill="#8890d9" />
                <rect x="88" y="5" width="9" height="12" fill="#8890d9" />
                <rect x="96" y="10" width="9" height="10" fill="#8890d9" />
            </svg>



        </>
    );
}

export function MyProjects() {
    return (
        <div>
            <h1>My Projects</h1>
            <MyProject />
        </div>
    );
}

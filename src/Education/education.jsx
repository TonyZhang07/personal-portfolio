import React from "react";
import "./education.css";
import uofa from "./uofa.png";
import resume from "./resume.png";
import linkldin from "./linkldin.png";
import Resume_TZFall23 from "./Resume_TZFall23.pdf";

function MyEducation() {
    const resumeUrl = Resume_TZFall23; // Update with the actual URL
    const linkedinUrl = "https://www.linkedin.com/in/tony-zhang-1638ba224/"; // Update with your LinkedIn profile URL

    const handleResumeDownload = () => {
        // Logic to handle resume download
        window.open(resumeUrl, "_blank");
    };

    const handleLinkedinClick = () => {
        // Logic to handle LinkedIn profile link click
        window.open(linkedinUrl, "_blank");
    };

    return (
        <>
            <h1> Education </h1>
            <div className="text-container">
                <div className="text-box">
                    <img src={uofa} alt="University of Arizona Logo" className="logo" />
                    <div>
                        <p>
                            <b>
                                Bachelor of Science in Computer Science
                                <br />
                                University of Arizona
                                <br />
                                Expected Graduation Date: May 2025
                                <br />
                                GPA: 3.4 / 4.0
                                <br />
                            </b>
                            <i>Minor in Game Design & Development</i>
                        </p>

                        {/* Add the buttons */}
                        <div className="button-container">
                            <button className="action-button" onClick={handleResumeDownload}>
                                <img src={resume} alt="Resume Icon" className="button-icon" />
                                Download Resume
                            </button>
                            <button className="action-button" onClick={handleLinkedinClick}>
                                <img src={linkldin} alt="LinkedIn Icon" className="button-icon" />
                                LinkedIn Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function CreateEducation() {
    return (
        <div>
            <MyEducation />
        </div>
    );
}

import React from "react";
import "./aboutPage.css";
import image0 from "./image0.jpeg";
import javaLogo from "./javaLogo.png";
import plasticLogo from "./plasticLogo.png";
import unitylogo from "./unitylogo.png";
import pythonLogo from "./pythonLogo.png";
import cSharpLogo from "./cSharpLogo.png";
import myself from "./myself.png";

function MyHeader() {
    const logos = [javaLogo, plasticLogo, unitylogo, pythonLogo, cSharpLogo];
    return (
        <>
            <h1 className="header-container">Hello, I'm Tony Zhang</h1>
            <div className="content-container">
                <div className="img-wrap">
                    <img className="img img-0" src={myself} alt="image0" />
                </div>


                <div className="text-container">
                    <div className="text-box">
                        <div className="innerWrap">
                            <div className="row">
                                <p>
                                    I'm an undergraduate student at the University of Arizona,
                                    majoring in Computer Science and minoring in Game Design &
                                    Development. My main interests rely on developing/improving
                                    software as well as developing games.
                                    <br></br>
                                    Below are the technologies that I mostly use.
                                </p>
                            </div>
                            <div className="row">
                                {logos.map((logo, index) => (
                                    <img
                                        key={index}
                                        className={`img img-${index + 1}`}
                                        src={logo}
                                        alt={`logo${index}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                <rect x="0" y="10" width="21" height="10" fill="#3498db" />
                <rect x="20" y="5" width="21" height="12" fill="#3498db" />
                <rect x="40" y="0" width="21" height="20" fill="#3498db" />
                <rect x="60" y="5" width="21" height="11" fill="#3498db" />
                <rect x="80" y="10" width="21" height="12" fill="#3498db" />
            </svg> */}


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" preserveAspectRatio="none">
                <rect x="0" y="10" width="9" height="10" fill="#9a89d9" />
                <rect x="8" y="5" width="9" height="12" fill="#9a89d9" />
                <rect x="16" y="10" width="9" height="10" fill="#9a89d9" />
                <rect x="24" y="5" width="9" height="12" fill="#9a89d9" />
                <rect x="32" y="10" width="9" height="10" fill="#9a89d9" />
                <rect x="40" y="5" width="9" height="12" fill="#9a89d9" />
                <rect x="48" y="10" width="9" height="10" fill="#9a89d9" />
                <rect x="56" y="5" width="9" height="12" fill="#9a89d9" />
                <rect x="64" y="10" width="9" height="10" fill="#9a89d9" />
                <rect x="72" y="5" width="9" height="12" fill="#9a89d9" />
                <rect x="80" y="10" width="9" height="10" fill="#9a89d9" />
                <rect x="88" y="5" width="9" height="12" fill="#9a89d9" />
                <rect x="96" y="10" width="9" height="10" fill="#9a89d9" />
            </svg>

        </>
    );
}

export function CreateAboutMe() {
    return (
        <div>
            <MyHeader />
        </div>
    );
}

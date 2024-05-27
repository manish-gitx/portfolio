import React from "react";
import "./css_modules/About.css";
export default function About() {
    return (
        <div className="Container">
            <div className="About">
                <span className="span-btn">About me</span>
            </div>

            <div className="child">
                <div className="bg-pic">
                    <div className="container-pic">
                        <div className="background">
                            <div className="pic"></div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <p className="bold">Curious about me? Here you go</p>
                    <p className="info-text">
                        I study at Scaler School of Technology and I believe in bringing ideas to life.
                    </p>
                    <p className="info-text">
                        When I'm not coding, you can find me exploring new technologies and learning new skills. I'm always looking for ways to improve and grow as a developer.
                    </p>
                    <p className="info-text">
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    </p>
                    <p className="info-text">
                        If you have any interesting projects or opportunities, I would love to hear about them. Let's connect and create something amazing together!
                    </p>
                    <p>
                    I believe in consistency and discipline in my life and I strive to be better every day. I am constantly learning multiple technologies and building things.
                    </p>
                    <p className="info-text">
                        Making progress and seeing my ideas come to life is what drives me as a developer.
                    </p>
                    <p className="info-text">
                        Let's connect and create something amazing together!
                    </p>
                    
                </div>
            </div>
        </div>
    );
}
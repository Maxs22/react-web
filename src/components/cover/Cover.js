import React from 'react';
import "./Cover.css";
import CoverVideo from "../../media/CoverVideo.mp4";


const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={ CoverVideo } autoPlay loop muted />
            <h1> BioProfes </h1>
            <p>Gelos Yecica | Ojeda Evelin | Dominguez Cecilia</p>
        </div>
    )
}

export default Cover;

import React, { useState } from 'react';

const ImageContainer = (props) => {
    const [loading, setLoading] = useState(true);

    const timeoutMilliseconds = [1500, 2000, 2500, 3000, 3500]

    const imageLoaded = () => {
        // wrapping inside setTimeout to simulate loading/fetching the image
        window.setTimeout(() => {
            setLoading(false);
        }, timeoutMilliseconds[Math.floor(Math.random() * timeoutMilliseconds.length)]);
    }
    return(
    <div style={{minHeight: "100%", width: "100%"}}>
        { loading  
            ? <div className='h-100 d-flex justify-content-center align-items-center' style={{ minHeight: 300, backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                <div className='spinner-border text-secondary' style={{ width: "5rem", height: "5rem"}}></div>
            </div>
            : null
        }
        <img className='mw-100' style={{display: loading ? 'none' : 'block', borderRadius: 10 }} src={props.src} onLoad={imageLoaded} />
    </div>
    );
}

export default ImageContainer;
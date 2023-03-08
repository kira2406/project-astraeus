import { Box, Container, Grid, Paper } from '@mui/material'
import React, { useState } from 'react'
import Image from './Image'
import Introduction from './Introduction'
import Slide from '@mui/material/Slide';
import "./landing.css"
import { ReactComponent as Back8 } from '../../assets/back8.svg';
import Back8png from '../../assets/back8.png'
import Fog from '../../assets/fog.png'

const Landing = () => {

    const [moveX, setMoveX] = useState(0)
    const [moveY, setMoveY] = useState(0)

    const fullWidth = window.innerWidth
    const halfWidth = fullWidth / 2
    const fullHeight = window.innerHeight
    const halfHeight = fullHeight / 2
    const handleMove = (e) => {

        console.log(e.target.getAttribute('data-value'));

        console.log(e.clientX)
        console.log(e.clientY)

        let x = 0, y = 0;
        x = (e.clientX - halfWidth) / 300
        y = (e.clientY - halfHeight) / 250
        setMoveX(x);
        setMoveY(-y)
        console.log("moveX", moveX)
        console.log("moveY", moveY)

    }



    return (
        <div className="landing-container pos-relative" data-value="landing-container" onMouseMove={(e) => handleMove(e)}>
            <div className='landing-background pos-absolute'>
                <svg viewBox="0 0 1920 1080" width={fullWidth} fill="none" xmlns="http://www.w3.org/2000/svg" data-value="10" className='pos-absolute' style={{ "paddingTop": "12vh", "transform": `translate(${1 * moveX}px, ${1 * moveY}px)` }}>
                    <path id="Vector 8" d="M275.5 15L0.5 43.5V1007.5H1915.5V0.5H1884L1722 43.5L1307.5 0.5H811.5L513 43.5L275.5 15Z" fill="#D49CFF" />
                </svg>
                <svg viewBox="0 0 1920 1080" width={fullWidth + 100} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "15vh", "transform": `translate(${2 * moveX}px, ${2 * moveY}px)` }}>
                    <path id="Vector 7" d="M545 26.628L0 57.433V945L1924 927.77V0L1678.5 26.628L1368 0H924L812.5 57.433L545 26.628Z" fill="#C77DFF" />
                </svg>
                <svg viewBox="0 0 1920 1080" width={fullWidth + 100} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "16vh", "transform": `translate(${4 * moveX}px, ${4 * moveY}px)` }}>
                    <g id="Dark Purple Pallete">
                        <path id="Vector 6" d="M529 66.5L0 130.5V844H1919.5V32.5L1785.5 66.5L1473.5 0L864.5 101L529 66.5Z" fill="#9D4EDD" />
                    </g>
                </svg>
                <svg viewBox="0 0 1920 1080" width={fullWidth + 100} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "25vh", "transform": `translate(${8 * moveX}px, ${8 * moveY}px)` }} >
                    <g id="Dark Purple Pallete">
                        <path id="Vector 5" d="M281 89.5L0 56.5V701L1918 693.5V24L1580.5 71.5L1325 0L851 71.5L512.5 56.5L281 89.5Z" fill="#7B2CBF" />
                    </g>
                </svg>
                <svg viewBox="0 0 1920 1080" width={fullWidth + 100} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "35vh", "transform": `translate(${16 * moveX}px, ${16 * moveY}px)` }} >
                    <g id="Dark Purple Pallete">
                        <path id="Vector 4" d="M215 58L-0.5 80L-5 581L1920.5 587V58L1766 17.5L1592 49H1329L1104.5 0L721.5 49L509 117L215 58Z" fill="#5A189A" />
                    </g>
                </svg>
                <svg viewBox="0 0 1920 1920" width={fullWidth + 200} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "45vh", "transform": `translate(${32 * moveX}px, ${32 * moveY}px)` }} >
                    <g id="Dark Purple Pallete">
                        <path id="Vector 3" d="M246.5 131L0 83.5V492L1916.5 483V44.5L1885 15L1655 27L1366.5 65.5L1066.5 0L772.5 110L459 101L246.5 131Z" fill="#3C096C" />
                    </g>
                </svg>
                <svg viewBox="0 0 1920 1920" width={fullWidth + 300} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "60vh", "transform": `translate(${45 * moveX}px, ${45 * moveY}px)` }} >
                    <g id="Dark Purple Pallete">
                        <path id="Vector 2" d="M380.5 89L0 0V365.5H1919.5V78.5L1733.5 0H1353.5L1215 56.5L744.5 41.5L380.5 89Z" fill="#240046" />

                    </g>
                </svg>
                {/* <svg viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "65vh", "transform": movement }} >
                <g id="Dark Purple Pallete">
                    <path id="Vector 1" d="M200 46L-2 84.5V1129.5H1917.5V63.5L1691.5 0L1309.5 63.5L736.5 99.5L200 46Z" fill="#10002B" />

                </g>
            </svg> */}
                {/* <Back8 className='pos-absolute' style={{ "paddingTop": "65vh", "transform": movement }} /> */}
                {/* <img src={Back8png} alt="Back8png" className='pos-absolute' style={{ "paddingTop": "65vh", "transform": `translate(${60 * moveX}px, ${60 * moveY}px)` }} /> */}
                <svg viewBox="0 0 1920 1920" width={fullWidth + 300} fill="none" xmlns="http://www.w3.org/2000/svg" className='pos-absolute' style={{ "paddingTop": "70vh", "transform": `translate(${45 * moveX}px, ${45 * moveY}px)` }} >
                    <g id="Dark Purple Pallete">
                        <path id="Vector 1" d="M200 46L-2 84.5V1129.5H1917.5V63.5L1691.5 0L1309.5 63.5L736.5 99.5L200 46Z" fill="#10002B" />
                    </g>
                </svg>
            </div>

            <div className='landing-text-container'>
                <nav class="navbar">
                    <ul>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </nav>
                <div className='hi-text'>
                    HI, I'M
                </div>
                <div className='name-text'>
                    KUSHWANTH
                </div>
            </div>

        </div>
    )
}

export default Landing
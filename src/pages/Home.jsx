// Home.js
import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { Link } from 'react-router-dom';
import { buttonStyle } from '../styles/button';

function Home() {
    return (
        <>
            <div>
                <Link to="/product" style={buttonStyle}>View Product</Link>
            </div>
            <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
                <color attach="background" args={["#ececec"]} />
                <Experience />
            </Canvas>
        </>
    );
}

export default Home;

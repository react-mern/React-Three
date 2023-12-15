// Product.js
import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/product/Experience";
import { Leva } from "leva";
import { Link } from 'react-router-dom';
import { buttonStyle } from '../styles/button';

function Product() {
  return (
    <>
      <Leva hidden />
      <div>
        <Link to="/" style={buttonStyle}>Back to Home</Link>
      </div>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default Product;

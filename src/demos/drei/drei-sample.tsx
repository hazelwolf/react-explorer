import { Box } from "@react-three/drei";
import React from "react";
import { Canvas } from "react-three-fiber";
import './drei-sample.css';

/**
 * Simple react three fiber projects to demo the library
 * and checkout the associated libraries and capabilities
 * https://github.com/pmndrs/react-three-fiber
 * this demo uses implementation from https://www.youtube.com/watch?v=fdtqqyeKRJk
 * all credits to Wrong Akram
 */

const FiberSimpleDemo = (props:any) : React.ReactElement =>{
    return (
        <Canvas>
            <Box>
                <meshStandardMaterial attach='material'/>
            </Box>
        </Canvas>
    )
}

export default FiberSimpleDemo;

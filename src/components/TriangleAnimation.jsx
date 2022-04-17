import React from "react";
import { useSpring, animated } from 'react-spring'
import '../styles/components-styles/TriangleAnimation.css'

const TriangleAnimation = () =>{

    const styles = useSpring({
        loop: { reverse: true },
        from: { transform:"translateX(0%)"},
        to: { transform:"translateX(100%)"},
        config: { duration: 8000 },

      })

    return(
        
        <animated.div
        style={{
            width: "90%",
            position:"absolute",
            padding:"10px 50px",
            top:0,
            left:0,
            backgroundColor:"transparent",
            ...styles,
        }}>
            <div className="triangle-animation" >

            </div>
        </animated.div>
  
)
}

export default TriangleAnimation;
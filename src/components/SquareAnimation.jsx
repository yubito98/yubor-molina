import React from "react";
import { useSpring, animated } from 'react-spring'
import '../styles/components-styles/SquareAnimation.css'


const SquareAnimation = () =>{

    const styles = useSpring({
        loop: { reverse: true },
        from: { transform:"translateX(100%)"},
        to: { transform:"translateX(0%)"},
        config: { duration: 8000 },

      })

    return(
        <animated.div
        style={{
            width: "90%",
            padding:"10px 50px",
            position: "absolute",
            top:"90%",
            left: 0,
            ...styles,
        }}
    >
        <div className="square" >

        </div>
    </animated.div>
)
}

export default SquareAnimation;
import React from "react";
import Header from "../../components/Header";
import ImageText from "../../components/image-text";
import {data} from "./data"

const Hubspot = () =>{
    return(
        <>
            <Header/>
            {
                data.map(item => (
                    <ImageText
                        key={item.title}
                        reverse={item.reverse}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        image={item.image}
                        link={item.button.link}
                        linkText={item.button.text}
                    />
                ))
            }
        </>
    )
}

export default Hubspot;
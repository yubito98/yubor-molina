import React from "react";


const Preguntados = () =>{

    const Lista =[
        {pregunta: "Cual es mi mayor sueño profesional",
        respuestas:[
            {correcta:"a"},
            {incorrecta:"b"},
            {incorrecta:"c"}
        ]}

    ]


    return(
        <div>
            <h2>Que tanto conoces a tu hijo</h2>
            <div>
               {Lista.map(item => (
                   <h2>{}</h2>
               ))}

            </div>

        </div>
    )
}


export default Preguntados;
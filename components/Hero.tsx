import * as React from 'react'

import { Cursor, useTypewriter } from "react-simple-typewriter"

type Props = {}

function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: [
            "Consult.",
            "Innovate.",
            "Design.",
            "Develop.",
            "Deploy."
        ],
        loop: true,
        delaySpeed: 2500,
    })
    
    return (
        <div className="hero">
            {/* <header className="heroHead">
                <div className=""></div>
                <div>
                    <div className="typeWriter text-2xl absolute">
                        {text}
                        <Cursor cursorColor="F7AB0A" />
                    </div>
                    <h1 className="text-2xl pt-7">
                        With Vendetti Studios.
                    </h1>
                    <p className="flex justify-center">Software Solutions for clients globally.</p>
                </div>
            </header>  */}
        </div>
    )
}

export default Hero
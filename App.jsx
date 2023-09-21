import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import { TextEditor } from "./components/Text"

export default function App() {
    return (
        <div>
            <Header />
            <TextEditor/>
            <Meme/>
        </div>
    )
}
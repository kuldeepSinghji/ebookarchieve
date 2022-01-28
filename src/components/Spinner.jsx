import React from 'react'
import loading from "./load.gif"
export default function Spinner() {
    return (
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img src={loading} alt="loading" />
        </div>
    )
}

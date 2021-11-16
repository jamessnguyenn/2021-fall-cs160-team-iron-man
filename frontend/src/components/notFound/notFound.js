import React from 'react'
import NavBar from '../loggedOutNavBar/NavBar'

export default function NotFound() {
    return(
        <>
        <NavBar/>
        <h1 style={{textAlign: "center", marginTop:"45vh"}}>
             404 PAGE NOT FOUND
        </h1>
        <div style={{textAlign: "center"}}>Sorry, this page is not avaialble</div>
        </>
    )
}
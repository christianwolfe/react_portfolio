import React from "react"

function Contact(props) {

    return (
        <main class="container">
        <div class="col-sm-9 bg-white mt-4 p-4">
            <h1>Contact Me</h1>
            <hr/>
            <div class="row">
                <div class="col-md-9 d-flex justify-content-center">

                    <p>E-mail Me:</p> <a id="emailLink" href="mailto: cwolfe.k@gmail.com">
                        cwolfe.k@gmail.com</a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9 d-flex justify-content-center">
                    <a href="http://github.com/christianwolfe" target="_blank">
                        <img src="https://img.icons8.com/fluent/48/000000/github.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/christian-wolfe-223103b4/" target="_blank">
                        <img src="https://img.icons8.com/material/48/000000/linkedin--v1.png" />
                    </a> 
                </div>
            </div>
        </div>
    </main>
)}

export default Contact;
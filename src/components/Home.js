import React from "react"

function Home(props) {
    return (
    <div class="container">
    <div class="col-sm-9 bg-white mt-4 p-4">
        <h1>About Me</h1>
        <hr/>
        <div>
            <img src="https://ca.slack-edge.com/T013N8MNY3H-U0143RF2ECD-93cd93ec691e-512"
                class="profilePhoto mr-4"/>
            <p> Christian Wolfe is currently a full-time student at the UCF MERN Stack BootCamp.
            </p>
            <p>From St. Petersburg, Florida, Christian has spent the past 5 years in the real estate title insurance
                industry. After working his way up to being the agent-in-charge and shareholder an Agency in
                Clearwater, Florida,
                Christian took the leap to finally begin his career in Software and Web
                Development by enrolling full-time in the UCF MERN Stack BootCamp.</p>
        </div>
    </div>
</div>
)};

export default Home;
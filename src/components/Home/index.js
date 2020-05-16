import React from "react";
import "./style.css";
import image from "../../assets/images/profile-pic.jpg";

function Home(props) {
    return (
        <div>
            <div>
                <h1>About Me</h1>
            </div>

            <img className="profile-pic" src={ image } alt="Brendan Profile Pic" />

            <div>
                <p>I graduated from Suffolk University's Sawyer Business School in 2015 with a Bachelor's degree in Marketing. After some job searching I started my first post-graduation job at Enterprise Rent-A-Car in Maynard, MA. Several months later I moved into the insurance industry when I began my career at Liberty Mutual. I started in a claims adjuster role, helping guide people through auto claims. I then transitioned to a role in Loss Recovery, which is where I am today.</p>
                <p>I am currently enrolled in the Coding Bootcamp offered by University of New Hampshire's Professional Development & Training program. In this bootcamp I am looking forward to learning a great deal of new ideas and concepts, with the end goal of enabling a career transition into software development. I know the course will be hard, but I am looking forward to the challenge and the rewarding outcomes!</p>
                <p>In my spare time I love playing with my dog, Shelby. I also love sports, and have an unhealthy obsession with baseball (I love the Red Sox but they drive me crazy sometimes). I also play the guitar and like listening to rock music, specifically the Foo Fighters, Muse, and Seether. If I'm in the mood for a few throwbacks, AC/DC is always fun too. My favorite place to go (aside from Fenway Park) is my grandparents' lake house on Lake Winnipesaukee. The scenery is beautiful, and the company is even better!</p>
            </div>
        </div>
    )
};

export default Home;
import React from "react";
import "./Home.css";
// import image from "../../Images/Me-cold.jpg"

function Home() {
  return (
    <div className="home">
      <br/>
      <div>
      <h1>The Warsong Order</h1>
      </div>
      <br/>
      <div>
      {/* <img className="card-img-top portrait" src={image} alt="me" /> */}
      </div>
      <br/>
          <div>
            <h3>Origin Story</h3>
          <p className="originStory">
            <br/>
            {/* Here I will create an information section for the guild (possibly with links, this info might be moved to home page) */}
            We were founded in the year 406 by Darek Dawnbreaker, Stabitha Christie, Tink Wildwander and Professor Orzanin,<br/>
            following their lucrative capture of the Dwarven bandit chief Hulil Lutan.<br/> 
            The Warsong Order is a private military company offering protection, investigation, policing, <br/>
            and other services across the entire planet of Amurru to any level of client, private or otherwise. <br/>
            <br/>
            Though starting off small, our initial operations were such a resounding success that various monarchies <br/>
            and governing bodies across the globe began to solicit our services regularly, leading to the grand and powerful <br/>
            institution that the Order is today. We now enjoy a vast amount of global influence, <br/>
            but strongly disavow any political or moral alignment other than those held by each individual member. <br/>
            <br/>
            Our grand centre of operations resides on the continent of Tal’Dorei, in the city of Emon. <br/>
            The main hall extends into four separate forks collected in groups of three, named after the four cardinal directions. <br/>
            The North, East, South and West Forks all cater to different needs and house varying facilities. <br/>
            These forks are better know as The Barracks, The Shadow Sect, The Hunt, and The Arcana Academy respectively. 
            {/* maybe make the last line sections clickable? */}
          </p>
          </div>
    </div>
  );
}

export default Home;
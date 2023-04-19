import React from "react";
import "./Facilities.css";

function Facilities() {
    return (
        <div className="facilities">
          <br/>
          <div>
          <h1>Facilities</h1>
          </div>
          <br/>
          <br/>
          <div>
            <h3>The Frozen Toad</h3>
            {/* <img className="card-img-top" src={image} alt="describe the image" /> */}
            <br/>
            <p className="frozenToad">
              The Frozen Toad is the Guilds Public House. <br/>
              <br/>
              It was given it's name to commemorate the defeat of the Giant Frost Toad "Croaker" in -enter place name here- by our four brave founders.<br/>
              <br/>
              The local tavern (insert tavern name here) served as their base camp while they were exploring the area for Hulil Lutan,<br/>
              the illusive Dwarven Bandit Chief that had been terrorizing the area. <br/>
              It was a lively place with live bands, a varied selection of ales and spirits, and a surprisingly bright atmosphere given the current situation.<br/>
              (tavern name here) made a lasting impact on the group, so when the decision was made to build a tavern at the guild headquarters, <br/>
              they used it as the main source of inspiration for the Frozen Toad.<br/>
              <br/>
              There is still a strong connection between the two taverns, sharing recipes and trading local resources and home brews with each other. <br/>
              If you manage to venture into either of the establishments, make sure to try their local and imported ales for a taste experience like no other from across the globe!<br/>
            </p>
          </div>
        </div>
      );
};

export default Facilities;
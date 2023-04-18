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
    {/* Home page:
    
    This should be a welcome landing page that contains:
    
    Your Name - Done
    
    A headshot of you (or an avatar)
    
    Your brand statement - Done
    
    Some indication that this is your portfolio site - Done */}
      <div>
      <p className="brandStatement">
        The welcome page for the WSO 
      </p>
      </div>
    </div>
  );
}

export default Home;
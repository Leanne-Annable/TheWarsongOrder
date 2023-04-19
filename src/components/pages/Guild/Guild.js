import React from "react";
import "./Guild.css";

function Guild() {
    return (
        <div className="guild">
          <br/>
          <div>
          <h1>Guild</h1>
          </div>
          <div>
          {/* <img className="card-img-top " src={image} alt="image of the guild" /> */}
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
          <br/>
          <h2>The Four Quarters</h2>
          <br/>
          <div>
            <h3>The Barracks (The War Quarter)</h3>
            <p className="barracksInfo">
              <br/>
              Run by Darek Dawnbreaker himself, The Barracks is the wing of The Warsong Order focused on military might. <br/>
              Lessons include Mixed Unit Tactics, Close Quarters Combat, Versatile Armour and Weapons Training and more. <br/>
              Darek employs a strict code of ethics and honour and expects the same from his pupils, but he stops short of dictating these same views to each of his initiates. <br/>
              It is understood throughout this quarter (known colloquially as “The War Quarter”) that a soldier’s worth is not tied to his morals, but to his sword arm. <br/>
              <br/>
              There are many strict policies throughout the entirety of this quarter, from dress code to proper address and more, <br/>
              and Darek maintains a rigid and proud control over the quality and wellbeing of his soldiers. <br/>
              Many initiates are taken in from the public, some absorbed from defeated armies, and some from elsewhere entirely. <br/>
              Regardless of their origin, once you are a member of this fierce brotherhood, you’re bonded for life. <br/>
              <br/>
              As a final note, the Uniform is king. Gods help you if you forget it! Darek doesn’t stand for scandal, insubordination, or an imperfect uniform.<br/>
              Found in the proud Warriors Hall of the guild’s Northern Fork, approach enrolment with The Barracks with pride, and maybe a drop of caution, but not too much.<br/>
            </p>
          </div>
          <br/>
          <div>
            <br/>
            <h3>The Shadow Sect (The Silent Quarter)</h3>
            <p className="shadowSectInfo">
              <br/>
              Some might call them vile. Others may even call them deranged. Many have nightmares about their very reputation. <br/>
              All that is known for certain about The Shadow Sect (known colloquially as “The Silent Quarter”) is that it exists. <br/>
              There are too many dead officials with no cause of death for that to be untrue. <br/>
              <br/>
              Merchants of death and sovereigns of stealth, students of The Shadow Sect are built for the express purposes of killing without being detected, <br/>
              collecting information the enemy didn’t even know they had, and causing disaster and strife for their enemies without leaving a single trace of their presence. <br/>
              They spread disinformation like wildfire and are a priceless asset for any army. <br/>
              Run by General Stabitha Christie, Darek’s most (and least) trusted General, this quarter of the guild is the most shrouded in mystery, and the least open to public scrutiny. <br/>
              <br/>
              Initiates are never taken in of their own accord. <br/>
              Instead, General Stabitha has been known to appear outside classrooms and training halls silently and wait for their intended student <br/>
              (presumably pre-selected, but honestly who knows at this point?) to leave the premises before whisking them off, never to be seen or heard from by any in their previous quarter again. <br/>
              No member of The Shadow Sect has EVER been seen outside of Guild grounds, by anyone.<br/>
              They’ve never been seen in the Mess Hall, either. Weird.<br/>
              Imagine a shadow that hates you and owns a really sharp knife. That’s the Silent Quarter.<br/>
              <br/>
              Stabitha has been known to reward cunning, lethality and the taciturn student. <br/>
              Darek monitors this quarter closely, but what he approves or disapproves of, is entirely unknown to anyone other than Stabitha. <br/>
              Their register is unknown, their numbers are unknown, their lessons are unknown. <br/>
              It takes an awful lot of trust from someone as strict as Darek to allow such a sect to persist in its ways.<br/>
              <br/>
              Found in the mysterious Shadow Tower of the East Fork, The Shadow Sect are as secretive as it gets, answering to none but Stabitha and Darek.
            </p>
          </div>
          <div>
            <br/>
            <h3>The Hunt (The Green Quarter)</h3>
            <p className="huntInfo">
              <br/>
                Do you yearn for the knowledge to survive in the hostile wilds of Amurru? <br/>
                Do you want to learn how to read the land and how track and hunt prey? <br/>
                Do you just really, really like animals and plants? <br/>
                Then The Hunt is for you! <br/>
                <br/>
                Run by General Tink Wildwander, an adventurous Forest Gnome that achieved international fame as a formidable hunter and survival expert, <br/>
                The Green Quarter teaches survival skills, animal handling, ranged combat and many more adaptable skills for the aspiring ranger. <br/>
                Gathering and hunting, flora and fauna identification, cartography, language, and an amalgam of all other relevant subjects are taught within The Hunt. <br/>
                <br/>
                The only quarter of the guild open to the public, Tink and her students are regarded as a cornerstone of their local society within Emon, <br/>
                and myriad citizens of many different cities and even continents owe their skills and progression to Tink’s endless patience.<br/>
                Lands of all description, be it the unforgiving snow-covered tundra, humid swamplands or arid deserts, The Green Quarter will prepare you for any eventuality in the wild. <br/>
                Have you ever seen a student of The Hunt skin a wild boar? It’s not something you walk away from unchanged.<br/>
                <br/>
                Tink rewards the instinctive, the naturally sensitive and the kind. <br/>
                She values motivation, patience, instinct, and empathy. Woe betide you who approaches her teachings with malice, for you will not be long for this world. <br/>
                It is well known that Tink has earned her place, and her school goes without any mediation from Darek and the rest of the Order. <br/>
                <br/>
                Found in the mighty greenhouse on the South fork, these students can often be found tending to ongoing projects, <br/>
                training with ranged weaponry, and getting their hands dirty. <br/>
                Tink’s animal companion, Badgelor, a humungous and extremely affectionate giant badger, lives here too, <br/>
                spending the vast majority of his time eating and sleeping.
            </p>
          </div>
          <div>
            <br/>
            <h3>The Arcana Academy</h3>
            <p className="arcanaAcademyInfo">
              <br/>
              Professor Orzanin runs the Academy. He’s about as generic a headmaster as you could imagine, except for the glint in his eye. <br/>
              Perfect robes, an elocution that only a living dictionary could match, <br/>
              He exibits a mastery for magic that makes his somatic rituals seem like a choreographed dance to the uninitiated. <br/>
              Portraying an age beyond his lived years has given the headmaster an air of mastery and mystery in equal measure.<br/>
              <br/>
              He values intellect, intuitiveness, curiosity, and critical thinking above all else.<br/>
              There has never been a more powerful, prophetic, or influential mage’s guild as The Arcana Academy. <br/>
              Life changing inventions, world saving enchantments, and Hell halting rituals. <br/>
              All of these happen within the academy on a daily basis. <br/>
              <br/>
              Their creed dictates that these advances are disseminated among the public for free, <br/>
              and yet few of the civilian public even realise the significance of their shop bought conveniences. <br/>
              Arcane initiates understand that their discoveries do not belong to them, but to the academy, and ultimately to the world. <br/>
              Studious in their practices, many of The Mage Quarter do not see their skills applied practically until many years into their studies. <br/>
              The classroom is the battlefield for many of these students, until they find their groove in the waking world and really begin to make a difference.<br/>
              <br/>
              Found in the unassuming Wizard’s Watch Hut on the West Fork, <br/>
              it is generally understood that the miniscule outside of the hut does not represent the vastness of the facilities found inside. <br/>
              <br/>
              Darek and Orzanin are close friends, and even closer confidants. <br/>
              Nothing happens in the mage’s quarter without Darek knowing about it, <br/>
              and he’s been known to keep a strict leash on the virulent hunger of ambition found within The Arcana Academy.

            </p>
          </div>
          <br/>
        </div>
      );
};

export default Guild;

# Hello Welcome to the Module Made for Valorant!


● Hello, this module aims to provide you with up-to-date information about agents and maps in the valorant.

● Using this module, you can access many more data such as map infos, agent stories, in-game skills, costs of skills, videos of skills and more..

● !!! GUN INFO UPDATE WILL COMING !!!

  
## You can do the attached sample to get the information.

##### Get Agent
````js
const valorant = require('valorant-fetch');

(async() => {

let data = await valorant.getAgent('omen')
console.log(data) // Returns the omen information as objects
console.log(data.biography)// Returns the omen's biography as an object

})()
````
##### Get Map
````js
const valorant = require('valorant-fetch');

(async() => {

let data = await valorant.getMap('split')
console.log(data) // Returns the split information as objects
console.log(data.photos)// Returns the split photos as an array in the object

})()
````  
## Example Usage Screenshot
[Example Usage](https://prnt.sc/wfx671)

##### Example OUTPUT for raze agent
````js
    {
      "id": "raze",
      "key": "2",
      "name": "Raze",
      "tags": [
        "DUELIST"
      ],
      "stats": {
        "Q": "BLAST PACK",
        "E": "PAINT SHELLS",
        "C": "BOOM BOT",
        "X": "SHOWSTOPPER"
      },
      "photos": {
      "icon": "https://vgraphs.com/images/agents/raze-avatar.jpg",
      "q_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltdb74f287eee9fe76/5eaf862a248a28605479c91f/TX_Raze_Q.png",
      "e_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb0eb89e122c1f4ea/5eaf862ad238e314f259fa8b/TX_Raze_E.png",
      "c_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44acc030d4d60182/5eaf862aa20afe612d82fb4e/TX_Raze_C.png",
      "x_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt60023b671f330740/5eaf862ae6f6795e530a2717/TX_Raze_X.png",
      "tag_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt213441880cf2cdf5/5eaa06851b51e36d7c1b61d4/Duelist.png"
      },
      "videos": {
      "q_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4",
      "e_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4",
      "c_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4",
      "x_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4"
      },
      "descriptions": {
      "q_desc": "INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn't damaged by this ability, but will still take fall damage if launched up far enough.",
      "e_desc": "EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.",
      "c_desc": "EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.",
      "x_desc": "EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything."
      },
      "costs": {
      "q_cost": "200",
      "e_cost": "0",
      "c_cost": "200",
      "x_cost": "7 Ulti Point"
      },
      "charges": {
      "q_charges": "2",
      "e_charges": "1",
      "c_charges": "1",
      "x_charges": "1"
      },
      "skills": {
      "move": "70",
      "reveal": "20",
      "hold": "30",
      "damage": "80",
      "heal": "0"
      },
      "biography": { 
        "story": "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
        "agent_about": "Raze's all four abilities explode causing massive damage to her enemies. Raze can clear corners with her Boom Bot, or kill a whole enemy team with her ultimate. You never know where you should aim when Raze is jumping with her Blast Packs.",
        "saying": "Just me, my squadzinho and a few tons of dynamite!", 
        "region": ["Brazil", "Federative Republic of Brazil"]
    }
  }
````  
##### Example OUTPUT for split map
````js
{
  id: 'split',
  key: '4',
  name: 'Split',
  photos: [ [ [Object] ] ],
  informations: {
    about_map: 'If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.',
    coordinate: [ "35°41'N139°41'E", 'Japan' ],
    callouts: [ [Array] ]
  }
}
````
## WARNING!!

If you get an error, you can come to our discord support server below.
  
[Support Server](https://discord.gg/4agCuVt)

## Changelog

##### 1.0.2  -  README.md Update

##### 1.0.1  -  README.md Update

##### 1.0.0  -  Module published.

# Hello Welcome to the Module Made for Valorant!

● Hello, this module aims to provide you with up-to-date information about agents and maps in the valorant.

● Using this module, you can access many more data such as map infos, agent stories, in-game skills, costs of skills, videos of skills and more..

## You can do the attached sample to get the information.

##### Get Agent

```js
const { getAgent } = require("valorant-fetch");

const data = getAgent("omen");

console.log(data); // Returns the omen information as objects
console.log(data.biography); // Returns the omen's biography as an object
```

##### Get Map

```js
const { getMap } = require("valorant-fetch");

const data = getMap("split");

console.log(data); // Returns the split information as objects
console.log(data.photos); // Returns the split photos as an array in the object
```

## Example Usage Screenshot

[Example Usage](https://prnt.sc/wfx671)

##### Example OUTPUT for raze agent

```json
{
  "id": "key/o",
  "key": "16",
  "name": "KEY/0",
  "tags": ["INITIATOR"],
  "stats": {
    "P": "NONE",
    "Q": "FLASH/DRIVE",
    "E": "ZERO/POINT",
    "C": "FRAG/MENT",
    "X": "NULL/CMD"
  },
  "photos": {
    "icon": "https://static.wikia.nocookie.net/valorant/images/f/f0/KAYO_icon.png",
    "q_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt83e92ae578e66b8e/60d204231e0505677a882f38/Q_FlashDrive.png",
    "e_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt496288e7ab899b47/60d2018db930a53616fa4882/E_ZeroPoint.png",
    "c_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte671cefaedb07d26/60d2046483f9fe49a6fef713/C_FragMent.png",
    "x_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltead1f4cb9ad32e19/60d20208bcec595109d831c2/X_NullCmd.png",
    "tag_icon": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2965c8a8dce0467d/5eaa0685e6f6795e530a1cbe/Initiator.png"
  },
  "videos": {
    "q_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4",
    "e_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4",
    "c_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4",
    "x_video": "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4"
  },
  "descriptions": {
    "q_desc": "EQUIP a flash grenade. FIRE to throw. The flash grenade explodes after a short fuse, blinding anyone in line of sight.",
    "e_desc": "EQUIP a suppression blade. FIRE to throw. The blade sticks to the first surface it hits, winds up, and suppresses anyone in the radius of the explosion.",
    "c_desc": "EQUIP an explosive fragment. FIRE to throw. The fragment sticks to the floor and explodes multiple times, dealing near lethal damage at the center with each explosion.",
    "x_desc": "INSTANTLY overload with polarized radianite energy that empowers KAY/O and causes large energy pulses to emit from his location. Enemies hit with these pulses are suppressed for a short duration."
  },
  "costs": {
    "q_cost": "250",
    "e_cost": "FREE",
    "c_cost": "200",
    "x_cost": "7 Ulti Point"
  },
  "charges": {
    "q_charges": "2",
    "e_charges": "1",
    "c_charges": "1",
    "x_charges": "1"
  },
  "biography": {
    "story": "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    "agent_about": "His body, arms, and head are made of metal. His legs are made out of what appears to be a combination of metal and leather. Parts of his body have electricity and energy visible, these parts include his forearms, the middle of his chest, and the sides of his legs.",
    "saying": "We have one job; save this Earth. No excuses.",
    "gender": "Male",
    "region": ["Alternate Timeline Earth", "Future"]
  }
}
```

##### Example OUTPUT for split map

```json
{
  "id": "split",
  "key": "5",
  "name": "Split",
  "photos": {
    "minimap": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2caea7a88362d6aa/5ecd64b0817e574fa1dcc162/split-minimap-2.png",
    "minimap_2": "https://static.wikia.nocookie.net/valorant/images/f/f2/Split_mini-map.png/revision/latest?cb=20200408012547",
    "screenshot_1": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt643d33e2defb855c/5eabe9fe248a28605479c547/split1.jpg",
    "screenshot_2": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8114d8ae57703cf8/5ed81946bf4ae52c761ec8e8/split2-2.jpg",
    "screenshot_3": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltdfd43bd79d9b3410/5eabe9fea20afe612d82f833/split3.jpg",
    "screenshot_4": "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf7a4f75409f2dbc1/5ed81936047b8c2b9c25fe74/split4-2.jpg"
  },
  "informations": {
    "about_map": "If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope ascenders. Each site is built with a looming tower vital for control. Remember to watch above before it all blows sky-high.",
    "coordinate": ["35°41'N139°41'E", "Japan"],
    "callouts": [
      "A Site",
      "B Site",
      "Alley",
      "Back",
      "Bottom",
      "Garage",
      "Link",
      "Lobby",
      "Mail",
      "Main",
      "Rafters",
      "Ramps",
      "Screens",
      "Sewer",
      "Site",
      "Spawn",
      "Stairs",
      "Top",
      "Tower",
      "Vent"
    ]
  }
}
```

## WARNING!!

If you get an error, you can come to our discord support server below.

[Support Server](https://discord.gg/4agCuVt)

## Changelog

##### 3.1.0 - Added new Fracture map and fixed some problems.

##### 3.0.1 - It's last publish for this sesson i promise :(.

##### 3.0.0 - I'am an idiot :(.

##### 2.0.5 - TSC problems are fixed.

##### 2.0.2 - Map images fixed.

##### 2.0.1 - Bugs fixed.

##### 2.0.0 - Some Changes for Agents, Types and Functions.

##### 1.0.6 - Bugs fixed.

##### 1.0.5 - README.md Update and bugs fix

##### 1.0.4 - README.md Update, Characters update, Maps update, Removed agent skills, TypeScript rewrite

##### 1.0.3 - README.md Update

##### 1.0.2 - README.md Update

##### 1.0.1 - README.md Update

##### 1.0.0 - Module published.

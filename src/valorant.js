let getagent = require("../jsons/valorant.json");
let getmap = require("../jsons/map.json");
module.exports = {
 async getAgent(agentName)  {

  function getAgent(agent) {
  return agent.id  ===  agentName.toLowerCase(); //agent name
  }
    return getagent.find(getAgent);
  },

 async getMap(mapName)  {
  function getMap(map) {
  return map.id  ===  mapName.toLowerCase(); //agent name
  }
    return getmap.find(getMap);
  }
};

"use strict";

import agent from "../jsons/characters.json";
import map from "../jsons/map.json";
import { agents, maps } from "./types";

function getAgent(name: agents) {
  const main = agent.find((x) => x.id.startsWith(name));
  return main;
}

function getMap(name: maps) {
  const main = map.find((x) => x.id.startsWith(name));
  return main;
}

export { getAgent, getMap };

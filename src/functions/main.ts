"use strict";

import agent from "../jsons/characters.json";
import map from "../jsons/map.json";
import { agents, maps, AgentReturn, MapReturn } from "../@types/types";

export function getAgent(name: agents): AgentReturn {
  try {
    const main: AgentReturn = agent.find((x) => x.id.startsWith(name));
    return main;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export function getMap(name: maps): MapReturn {
  try {
    const main: MapReturn = map.find((x) => x.id.startsWith(name));
    return main;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

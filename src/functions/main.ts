"use strict";

import agent from "../jsons/characters.json";
import map from "../jsons/map.json";
import { agents, maps } from "../@types/types";

export function getAgent(name: agents) {
  try {
    const main = agent.find((x) => x.id.startsWith(name));
    return main;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

export function getMap(name: maps) {
  try {
    const main = map.find((x) => x.id.startsWith(name));
    return main;
  } catch (e: any) {
    const errorTouse: Error = e;
    const { message, name, stack } = errorTouse;

    console.log({ message, name, stack });
  }
}

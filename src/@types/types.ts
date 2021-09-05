"use strict";

export type agents =
  | "jett"
  | "raze"
  | "breach"
  | "omen"
  | "brimstone"
  | "phoenix"
  | "sage"
  | "sova"
  | "viper"
  | "cypher"
  | "reyna"
  | "killjoy"
  | "skye"
  | "yoru"
  | "astra"
  | "kayo";

export type maps = "breeze" | "icebox" | "bind" | "haven" | "split" | "ascent";

export type AgentReturn = {
  id: string;
  key: string;
  name: string;
  tags: string[];
  stats: {
    P: string;
    Q: string;
    E: string;
    C: string;
    X: string;
  };
  photos: {
    icon: string;
    q_icon: string;
    e_icon: string;
    c_icon: string;
    x_icon: string;
    tag_icon: string;
  };
  videos: {
    q_video: string;
    e_video: string;
    c_video: string;
    x_video: string;
  };
  descriptions: {
    q_desc: string;
    e_desc: string;
    c_desc: string;
    x_desc: string;
  };
  costs: {
    q_cost: string;
    e_cost: string;
    c_cost: string;
    x_cost: string;
  };
  charges: {
    q_charges: string;
    e_charges: string;
    c_charges: string;
    x_charges: string;
  };
  biography: {
    story: string;
    agent_about: string;
    saying: string;
    gender: string;
    region: string[];
  };
};

export type MapReturn =
  {
      id: string;
      key: string;
      name: string;
      photos: {
        minimap: string;
        minimap_2: string;
        screenshot_1: string;
        screenshot_2: string;
        screenshot_3: string;
        screenshot_4: string;
        screenshot_5?: string;
        screenshot_6?: string;
        screenshot_7?: string;
        screenshot_8?: string;
      };
      informations: {
        about_map: string;
        coordinate: string[];
        callouts: string[];
      };
    }

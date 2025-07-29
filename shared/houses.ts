export enum TraitName {
  None = 'None',
  Courage = 'Courage',
  Bravery = 'Bravery',
  Determination = 'Determination',
  Daring = 'Daring',
  Nerve = 'Nerve',
  Chivalary = 'Chivalary',
  Hardworking = 'Hardworking',
  Patience = 'Patience',
  Fairness = 'Fairness',
  Just = 'Just',
  Loyalty = 'Loyalty',
  Modesty = 'Modesty',
  Wit = 'Wit',
  Learning = 'Learning',
  Wisdom = 'Wisdom',
  Acceptance = 'Acceptance',
  Inteligence = 'Inteligence',
  Creativity = 'Creativity',
  Resourcefulness = 'Resourcefulness',
  Pride = 'Pride',
  Cunning = 'Cunning',
  Ambition = 'Ambition',
  Selfpreservation = 'Selfpreservation'
}

export interface HouseHead {
  id: string;
  firstName?: string;
  lastName?: string;
}

export interface Trait {
  id: string;
  name: TraitName;
}

export interface House {
  id: string;
  name?: string;
  houseColours?: string;
  founder?: string;
  animal?: string;
  element?: string;
  ghost?: string;
  commonRoom?: string;
  heads?: HouseHead[];
  traits?: Trait[];
}

export type HouseListing = Pick<House, 'id' | 'name'>;

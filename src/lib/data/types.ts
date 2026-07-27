export interface Timing {
  cookTime: string | null;
  prepNote: string;
}

export interface VegetableTimings {
  [methodId: string]: { [route: string]: Timing };
}

export interface Vegetable {
  id: string;
  name: string;
  childhoodFailureMode: string;
  redemptionMethods: string[];
  redemptionOneLiner: string;
  timings: VegetableTimings;
  textureProfile: string;
  ukSeasonality: string;
  chartEligible: boolean;
  causeAndFix?: string;       // 120–200 words bridging failure mode to methods
  thesisCaveat?: string;      // optional, for 3 vegetables only
}

export interface Method {
  id: string;
  name: string;
  description: string;
  deliveryRoutes: string[];
  sensoryOutcome: string;
}

export interface ChartEntry {
  position: number;
  vegetableId: string;
  lastWeek: number | null;
  weeksOnChart: number;
  peak: number;
  badge: 'new' | 're-entry' | 'climber' | 'non-mover' | null;
}

export interface ChartWeek {
  week: string; // YYYY-Www format
  published: string; // ISO date
  entries: ChartEntry[];
}

export interface VoteRecord {
  vegetableId: string;
  methodId: string | null;
  voteType: 'upvote' | 'rating' | 'testimonial';
  timestamp: string;
  metadata?: Record<string, unknown>;
}
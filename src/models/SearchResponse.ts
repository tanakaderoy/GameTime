export interface SearchResponse {
  events: EventElement[];
  performers: SearchResponsePerformer[];
  venues: VenueElement[];
  display_groups: DisplayGroup[];
}

export interface DisplayGroup {
  display_name: string;
  slug: string;
  sort_order: number;
}

export interface EventElement {
  event: EventEvent;
  performers: FluffyPerformer[];
  venue: EventVenue;
  meta: EventMeta;
}

export interface EventEvent {
  banner: Banner;
  category: string;
  center_court: CenterCourt;
  datetime_local: Date;
  datetime_utc: Date;
  id: string;
  map_url: string;
  min_price: MinPrice;
  name: string;
  performers: PurplePerformer[];
  sales_cut_off: Date;
  section_map_id: string;
  tbd: boolean;
  time_tbd: boolean;
  date_tbd: boolean;
  venue_id: string;
  venue_config: string;
  related_events: RelatedEvents;
}

export interface Banner {
  headline: string;
  subtitle: string;
  emoji: string;
}

export interface CenterCourt {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MinPrice {
  total: number;
  prefee: number;
}

export interface PurplePerformer {
  id: string;
  primary: boolean;
}

export interface RelatedEvents {}

export interface EventMeta {
  search_score: number;
  sort_order: number;
  display_group: string;
  popularity_score: number;
  score_boost: number;
}

export interface FluffyPerformer {
  abbrev: string;
  category: string;
  category_group: string;
  contrast_color: string;
  display_type: string;
  id: string;
  hero_image_url: string;
  medium_name: string;
  name: string;
  primary_color: string;
  short_name: string;
  slug: string;
  meta: PurpleMeta;
}

export interface PurpleMeta {
  score_boost: null;
}

export interface EventVenue {
  city: string;
  id: string;
  location: Location;
  name: string;
  show_currency: boolean;
  slug: string;
  state: string;
  timezone: string;
  metro: string;
  image_url: string;
  meta: PurpleMeta;
}

export interface Location {
  lat: number;
  lon: number;
}

export interface SearchResponsePerformer {
  abbrev: string;
  category: string;
  category_group: string;
  contrast_color: string;
  display_type: string;
  id: string;
  hero_image_url: string;
  medium_name: string;
  name: string;
  primary_color: string;
  short_name: string;
  slug: string;
  meta: EventMeta;
}

export interface VenueElement {
  city: string;
  id: string;
  location: Location;
  name: string;
  show_currency: boolean;
  slug: string;
  state: string;
  timezone: string;
  metro: string;
  image_url: string;
  meta: EventMeta;
}

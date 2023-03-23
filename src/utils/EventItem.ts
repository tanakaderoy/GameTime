import {SearchResponse} from '../models/SearchResponse';

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  imgURL: string;
}

export function toEvent(d?: SearchResponse | undefined): Event[] {
  if (d === undefined) {
    return [];
  }

  return [
    ...d.events.slice(0, 3).map(item => ({
      id: item.event.id,
      title: item.event.name,
      subtitle: item.venue.name,
      imgURL: item.venue.image_url,
    })),
    ...d?.venues.slice(0, 3).map(item => ({
      id: item.id,
      title: item.name,
      subtitle: item.city,
      imgURL: item.image_url,
    })),
    ...d?.performers.slice(0, 3).map(item => ({
      id: item.id,
      title: item.name,
      subtitle: item.category.toUpperCase(),
      imgURL: item.hero_image_url,
    })),
  ];
}

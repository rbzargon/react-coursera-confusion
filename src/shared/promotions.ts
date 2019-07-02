export interface Promotion {
  id: number,
  name: string,
  image: string,
  label: string,
  price: string,
  featured: boolean,
  description: string
}

export const PROMOTIONS: Array<Promotion> = [
  {
    id: 0,
    name: 'Weekend Grand Buffet',
    image: '/assets/images/buffet.png',
    label: 'New',
    price: '19.99',
    featured: true,
    description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person'
  }
];
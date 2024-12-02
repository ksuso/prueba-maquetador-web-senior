export interface Viajes {
  id: number;
  image: string;
  altImg: string;
  tags: tags[];
  date: string;
  title: string;
  text: string;
  price: string;
}

export interface tags {
  id: number;
  tag: string;
}

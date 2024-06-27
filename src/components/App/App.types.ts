export interface LinksPhoto {
  small: string;
  regular: string;
}

export interface Photo {
  id: string;
  urls: LinksPhoto;
  slug: string;
}

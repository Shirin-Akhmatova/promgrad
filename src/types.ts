export type Project = {
  id: number;
  title: string;
  description: string;
  address: string;
  end_date: string;
  tags: { id: number; title: string }[];
  type_construction: { title: string };
  images: { image: string }[];
};

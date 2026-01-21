
export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
}

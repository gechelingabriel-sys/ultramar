
import { Product } from './types';

export const STARTER_PACKS: Product[] = [
  {
    id: 'pack-01',
    name: 'EL ORIGEN',
    type: 'Starter Pack B2B',
    price: 185,
    description: 'Perfecto para barras que buscan autenticidad sin complicaciones.',
    features: [
      '12 Botellas de Txakoli Gorka Izagirre',
      'Fichas técnicas para el staff',
      'Envío Express Incluido (España/Baleares)',
      'Soporte directo vía WhatsApp'
    ],
    image: 'https://images.unsplash.com/photo-1553118211-167451741bab?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pack-02',
    name: 'USA SELECTION',
    type: 'Export Special',
    price: 450,
    description: 'Curaduría premium para el mercado norteamericano (NYC/LA/MIA).',
    features: [
      '24 Botellas Selección Gabriel',
      'Logística aduanera simplificada',
      'Certificados de origen TX',
      'Consultoría de cata incluida'
    ],
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?auto=format&fit=crop&q=80&w=800'
  }
];

export const GABRIEL_STORY = {
  image: 'https://res.cloudinary.com/dswpi1pb9/image/upload/v1767840812/ddaceebe8800f96841c9f5697b1b0091bda1ea5af3e25f07b62e7715f8d6a09e_fgrscl.jpg',
  quote: "Nací en Buenos Aires, pero mi alma encontró su sitio entre los viñedos de Getaria.",
  text: "Gabriel llegó a España con una maleta y una curiosidad insaciable por los sabores locales. Lo que empezó como catas informales con amigos se convirtió en una obsesión por el Txakoli: ese vino vibrante, eléctrico y joven. Hoy, ULTRAMAR es el puente entre los pequeños productores vascos que cuidan cada uva y los emprendedores que, como él, quieren revolucionar la hostelería con honestidad y estilo."
};

export const LOGISTICS_INFO = {
  spain: "España & Baleares: Entrega en 48-72h. Puerta a puerta.",
  usa: "USA Export: Consolidación y gestión de aduanas incluida.",
  tracking: "Seguimiento en tiempo real vía WhatsApp."
};

import { imagenes } from './data/imagenes';

// --- TypeScript Interfaces (Se mantienen igual) ---

export interface BankData {
  banco: string;
  tipoCuenta: string;
  ultimaParteClabe: string;
}

export interface Oferente {
  fullName: string;
  commercialName: string;
  email: string;
  phone: string;
  locality: string;
  activityType: 'artesanía' | 'turismo' | 'cooperativa';
  rfc?: string;
  bankData: BankData;
}

export interface MicrositeTheme {
  primaryColor: string;
  secondaryColor: string;
  theme: 'light' | 'dark' | 'earth' | 'indigo';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  stock: number;
  category: string;
  tags: string[];
  images: string[];
  isAvailable: boolean;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  pricePerPerson: number;
  maxGroupSize: number;
  durationHours: number;
  category: string;
  tags: string[];
  images: string[];
  isAvailable: boolean;
}

export interface HomeSection {
  headline: string;
  subheadline: string;
  heroImage: string;
  ctaLabel: string;
  ctaTargetSection: 'products' | 'services' | 'contact';
}

export interface AboutSection {
  story: string;
  values: string[];
  process: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'product' | 'workshop' | 'community';
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface GeoLocation {
  lat: number;
  lng: number;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  website?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp?: string;
  address: string;
  location: string;
  geo?: GeoLocation;
  social: SocialMedia;
}

export interface AnalyticsMock {
  totalSales: number;
  totalOrders: number;
  totalVisits: number;
  avgTicket: number;
  period: string;
  topProducts: string[];
  peakTrafficHours: number[];
}

export interface Accessibility {
  supportsScreenReaders: boolean;
  altTextCoverage: 'high' | 'medium' | 'low';
  prefersReducedMotion: boolean;
}

export interface Microsite {
  id: string;
  slug: string;
  urlPath: string;
  logoUrl: string;
  primaryColor: string;
  secondaryColor: string;
  theme: 'light' | 'dark' | 'earth' | 'indigo';
  languages: string[];
  oferente: Oferente;
  products: Product[];
  services: Service[];
  home: HomeSection;
  about: AboutSection;
  gallery: GalleryItem[];
  reviews: Review[];
  contact: ContactInfo;
  analyticsMock: AnalyticsMock;
  accessibility: Accessibility;
  supportedLanguages: string[];
}

// --- Mock Data Actualizada con URLs de Internet ---

export const microsites: Microsite[] = [
  // ==========================================
  // CHIAPAS
  // ==========================================
  {
    id: 'ms-001',
    slug: 'textiles-chiapas-zinacatan',
    urlPath: '/artesanos/zinacatan-chiapas',
    logoUrl: imagenes.logos.zinacantanTextiles,
    primaryColor: '#8B4513',
    secondaryColor: '#D2691E',
    theme: 'earth',
    languages: ['es', 'tzotzil'],
    oferente: {
      fullName: 'María López Pérez',
      commercialName: 'Textiles Tradicionales Zinacantán',
      email: 'maria.lopez@textileszinacatan.mx',
      phone: '+52 967 123 4567',
      locality: 'Zinacantán, Chiapas',
      activityType: 'artesanía',
      rfc: 'LOPM850312ABC',
      bankData: {
        banco: 'Banorte',
        tipoCuenta: 'Ahorro',
        ultimaParteClabe: '4567'
      }
    },
    products: [
      {
        id: 'prod-001',
        name: 'Huipil Bordado a Mano',
        description: 'Huipil tradicional tzotzil con bordados florales elaborado completamente a mano. Cada pieza requiere aproximadamente 3 meses de trabajo artesanal.',
        price: 2500,
        currency: 'MXN',
        stock: 5,
        category: 'Vestimenta',
        tags: ['bordado', 'tradicional', 'hecho a mano', 'tzotzil'],
        images: [
          imagenes.chiapas.productos.huipil1,
          imagenes.chiapas.productos.huipil2,
          imagenes.chiapas.productos.huipil3
        ],
        isAvailable: true
      },
      {
        id: 'prod-002',
        name: 'Rebozo de Lana Natural',
        description: 'Rebozo tejido en telar de cintura con lana 100% natural teñida con tintes vegetales. Colores vibrantes que representan la cosmovisión maya.',
        price: 1800,
        currency: 'MXN',
        stock: 8,
        category: 'Accesorios',
        tags: ['telar', 'lana', 'tintes naturales', 'maya'],
        images: [
          imagenes.chiapas.productos.rebozo1,
          imagenes.chiapas.productos.rebozo2
        ],
        isAvailable: true
      },
      {
        id: 'prod-003',
        name: 'Bolsa Tejida Multicolor',
        description: 'Bolsa artesanal tejida con diseños geométricos tradicionales. Perfecta para uso diario, resistente y única.',
        price: 450,
        currency: 'MXN',
        stock: 15,
        category: 'Accesorios',
        tags: ['bolsa', 'tejido', 'geométrico', 'colorido'],
        images: [
          imagenes.chiapas.productos.bolsa1,
          imagenes.chiapas.productos.bolsa2,
          imagenes.chiapas.productos.bolsa3
        ],
        isAvailable: true
      },
      {
        id: 'prod-004',
        name: 'Camino de Mesa Bordado',
        description: 'Camino de mesa con bordados tradicionales de flores y aves. Ideal para decoración del hogar con un toque artesanal auténtico.',
        price: 850,
        currency: 'MXN',
        stock: 6,
        category: 'Decoración',
        tags: ['bordado', 'decoración', 'hogar', 'flores'],
        images: [
          imagenes.chiapas.productos.camino
        ],
        isAvailable: true
      }
    ],
    services: [
      {
        id: 'serv-001',
        name: 'Taller de Bordado Tradicional',
        description: 'Aprende las técnicas ancestrales de bordado tzotzil. Incluye materiales, refrigerio tradicional y certificado de participación.',
        pricePerPerson: 350,
        maxGroupSize: 8,
        durationHours: 4,
        category: 'Taller',
        tags: ['bordado', 'aprendizaje', 'cultural', 'manos'],
        images: [
          imagenes.chiapas.taller.bordado1,
          imagenes.chiapas.taller.bordado2
        ],
        isAvailable: true
      },
      {
        id: 'serv-002',
        name: 'Visita al Taller Comunitario',
        description: 'Recorrido por nuestro taller donde conocerás el proceso completo de creación textil, desde el hilado hasta el bordado final.',
        pricePerPerson: 150,
        maxGroupSize: 15,
        durationHours: 2,
        category: 'Experiencia',
        tags: ['tour', 'taller', 'proceso', 'textil'],
        images: [
          imagenes.chiapas.taller.visita
        ],
        isAvailable: true
      }
    ],
    home: {
      headline: 'Textiles Tradicionales de Zinacantán',
      subheadline: 'Arte ancestral tzotzil tejido con el corazón. Cada pieza cuenta una historia de tradición y cultura.',
      heroImage: imagenes.chiapas.hero,
      ctaLabel: 'Explorar Productos',
      ctaTargetSection: 'products'
    },
    about: {
      story: 'Somos una cooperativa de mujeres artesanas de Zinacantán, Chiapas, dedicadas a preservar y compartir el arte textil tzotzil que ha pasado de generación en generación durante siglos. Cada una de nosotras aprendió a tejer y bordar desde niñas, observando a nuestras madres y abuelas crear piezas únicas en telares de cintura. Nuestro trabajo no solo representa una fuente de ingreso digno para nuestras familias, sino también un acto de resistencia cultural y orgullo por nuestras raíces mayas. Cada hilo, cada color, cada diseño tiene un significado profundo conectado con nuestra cosmovisión y nuestra relación con la naturaleza.',
      values: [
        'Preservación cultural',
        'Comercio justo',
        'Empoderamiento femenino',
        'Sustentabilidad',
        'Calidad artesanal'
      ],
      process: 'Nuestro proceso inicia con la selección de lana natural de ovejas locales. Luego, hilamos a mano y teñimos con tintes vegetales extraídos de plantas de la región: añil para azules, cochinilla para rojos, y muitle para morados. El tejido se realiza en telar de cintura, una técnica milenaria que requiere gran habilidad y paciencia. Finalmente, bordamos a mano los diseños florales y geométricos que caracterizan nuestra tradición. Una sola pieza puede tomar de semanas a meses en completarse.'
    },
    gallery: [
      {
        id: 'gal-001',
        title: 'Telar de Cintura',
        description: 'Artesana trabajando en telar tradicional',
        imageUrl: imagenes.chiapas.taller.telar,
        type: 'workshop'
      },
      {
        id: 'gal-002',
        title: 'Bordado en Proceso',
        description: 'Detalle del proceso de bordado a mano',
        imageUrl: imagenes.chiapas.taller.proceso,
        type: 'workshop'
      },
      {
        id: 'gal-003',
        title: 'Tintes Naturales',
        description: 'Preparación de tintes vegetales tradicionales',
        imageUrl: imagenes.chiapas.taller.tintes,
        type: 'workshop'
      },
      {
        id: 'gal-004',
        title: 'Cooperativa',
        description: 'Nuestro grupo de artesanas',
        imageUrl: imagenes.chiapas.grupo,
        type: 'community'
      },
      {
        id: 'gal-005',
        title: 'Huipiles Terminados',
        description: 'Colección de huipiles bordados',
        imageUrl: imagenes.chiapas.productos.huipilesColeccion,
        type: 'product'
      }
    ],
    reviews: [
      {
        id: 'rev-001',
        authorName: 'Ana García',
        rating: 5,
        comment: 'Hermoso trabajo artesanal. El huipil que compré es una verdadera obra de arte. Se nota el amor y dedicación en cada puntada.',
        createdAt: '2024-11-15T10:30:00Z'
      },
      {
        id: 'rev-002',
        authorName: 'Carlos Mendoza',
        rating: 5,
        comment: 'Excelente atención y productos de calidad excepcional. El taller de bordado fue una experiencia inolvidable.',
        createdAt: '2024-11-08T14:20:00Z'
      },
      {
        id: 'rev-003',
        authorName: 'Laura Sánchez',
        rating: 5,
        comment: 'Me encanta apoyar el trabajo de estas artesanas talentosas. Los colores y diseños son espectaculares.',
        createdAt: '2024-10-28T09:15:00Z'
      },
      {
        id: 'rev-004',
        authorName: 'Roberto Jiménez',
        rating: 4,
        comment: 'Muy buenos productos. La entrega fue rápida y el empaque cuidadoso. Definitivamente volveré a comprar.',
        createdAt: '2024-10-20T16:45:00Z'
      }
    ],
    contact: {
      email: 'maria.lopez@textileszinacatan.mx',
      phone: '+52 967 123 4567',
      whatsapp: '+52 967 123 4567',
      address: 'Calle Principal s/n, Centro',
      location: 'Zinacantán, Chiapas',
      geo: {
        lat: 16.7614,
        lng: -92.7214
      },
      social: {
        facebook: 'https://facebook.com/textileszinacatan',
        instagram: 'https://instagram.com/textileszinacatan',
        website: 'https://textileszinacatan.mx'
      }
    },
    analyticsMock: {
      totalSales: 125000,
      totalOrders: 87,
      totalVisits: 3420,
      avgTicket: 1436.78,
      period: 'last30d',
      topProducts: ['prod-001', 'prod-002', 'prod-003'],
      peakTrafficHours: [10, 11, 14, 15, 19, 20]
    },
    accessibility: {
      supportsScreenReaders: true,
      altTextCoverage: 'high',
      prefersReducedMotion: false
    },
    supportedLanguages: ['es', 'tzotzil']
  },

  // ==========================================
  // YUCATAN
  // ==========================================
  {
    id: 'ms-002',
    slug: 'ecoturismo-yucatan-uxmal',
    urlPath: '/turismo/uxmal-yucatan',
    logoUrl: imagenes.logos.ecoturismoUxmal,
    primaryColor: '#1E3A8A',
    secondaryColor: '#3B82F6',
    theme: 'indigo',
    languages: ['es', 'maya', 'en'],
    oferente: {
      fullName: 'Pedro Chan Uc',
      commercialName: 'Experiencias Mayas Uxmal',
      email: 'pedro.chan@experienciasmayas.mx',
      phone: '+52 997 234 5678',
      locality: 'Santa Elena, Yucatán',
      activityType: 'turismo',
      rfc: 'CHUP780520XYZ',
      bankData: {
        banco: 'BBVA',
        tipoCuenta: 'Corriente',
        ultimaParteClabe: '7890'
      }
    },
    products: [
      {
        id: 'prod-101',
        name: 'Miel de Abeja Melipona',
        description: 'Miel sagrada maya producida por abejas meliponas sin aguijón. Propiedades medicinales reconocidas ancestralmente.',
        price: 380,
        currency: 'MXN',
        stock: 25,
        category: 'Alimentos',
        tags: ['miel', 'orgánico', 'medicinal', 'maya'],
        images: [
          imagenes.yucatan.productos.miel1,
          imagenes.yucatan.productos.miel2
        ],
        isAvailable: true
      },
      {
        id: 'prod-102',
        name: 'Hamaca Yucateca Artesanal',
        description: 'Hamaca tejida a mano con técnicas tradicionales mayas. Cómoda, resistente y perfecta para descansar.',
        price: 950,
        currency: 'MXN',
        stock: 12,
        category: 'Artesanía',
        tags: ['hamaca', 'tejido', 'descanso', 'tradicional'],
        images: [
          imagenes.yucatan.productos.hamaca1,
          imagenes.yucatan.productos.hamaca2,
          imagenes.yucatan.productos.hamaca3
        ],
        isAvailable: true
      },
      {
        id: 'prod-103',
        name: 'Artesanía de Jícara',
        description: 'Jícaras decoradas con técnicas de pirograbado representando símbolos mayas. Pieza única de arte funcional.',
        price: 280,
        currency: 'MXN',
        stock: 18,
        category: 'Artesanía',
        tags: ['jícara', 'pirograbado', 'decoración', 'símbolos'],
        images: [
          imagenes.yucatan.productos.jicara
        ],
        isAvailable: true
      }
    ],
    services: [
      {
        id: 'serv-101',
        name: 'Tour Arqueológico Uxmal con Guía Maya',
        description: 'Recorrido guiado por la zona arqueológica de Uxmal con explicaciones en español y maya. Conoce la historia desde la perspectiva de los descendientes directos de esta gran civilización.',
        pricePerPerson: 450,
        maxGroupSize: 20,
        durationHours: 3,
        category: 'Tour Cultural',
        tags: ['arqueología', 'historia', 'maya', 'uxmal'],
        images: [
          imagenes.yucatan.experiencias.tourUxmal1,
          imagenes.yucatan.experiencias.tourUxmal2
        ],
        isAvailable: true
      },
      {
        id: 'serv-102',
        name: 'Experiencia Cenote Sagrado',
        description: 'Visita a cenote comunitario con ceremonia maya de agradecimiento, nado en aguas cristalinas y comida tradicional. Incluye transporte desde Santa Elena.',
        pricePerPerson: 650,
        maxGroupSize: 12,
        durationHours: 5,
        category: 'Ecoturismo',
        tags: ['cenote', 'naturaleza', 'ceremonia', 'nado'],
        images: [
          imagenes.yucatan.experiencias.cenote1,
          imagenes.yucatan.experiencias.cenote2,
          imagenes.yucatan.experiencias.cenote3
        ],
        isAvailable: true
      },
      {
        id: 'serv-103',
        name: 'Taller de Cocina Maya Tradicional',
        description: 'Aprende a preparar platillos ancestrales como cochinita pibil, papadzules y mucbipollo. Incluye ingredientes, recetario y degustación.',
        pricePerPerson: 550,
        maxGroupSize: 10,
        durationHours: 4,
        category: 'Taller Gastronómico',
        tags: ['cocina', 'gastronomía', 'tradicional', 'aprendizaje'],
        images: [
          imagenes.yucatan.experiencias.cocina1,
          imagenes.yucatan.experiencias.cocina2
        ],
        isAvailable: true
      },
      {
        id: 'serv-104',
        name: 'Observación de Aves Endémicas',
        description: 'Safari fotográfico temprano para observar aves endémicas de la península de Yucatán. Guía especializado y equipo de observación incluido.',
        pricePerPerson: 380,
        maxGroupSize: 8,
        durationHours: 3,
        category: 'Ecoturismo',
        tags: ['aves', 'naturaleza', 'fotografía', 'biodiversidad'],
        images: [
          imagenes.yucatan.naturaleza.aves
        ],
        isAvailable: true
      }
    ],
    home: {
      headline: 'Descubre el Corazón de la Cultura Maya',
      subheadline: 'Experiencias auténticas de turismo comunitario en la tierra de los antiguos mayas. Conecta con la naturaleza, la historia y las tradiciones vivas.',
      heroImage: imagenes.yucatan.hero,
      ctaLabel: 'Ver Experiencias',
      ctaTargetSection: 'services'
    },
    about: {
      story: 'Somos una cooperativa de turismo comunitario formada por familias mayas de Santa Elena, Yucatán, comprometidas con compartir nuestra cultura de manera respetuosa y sostenible. Nuestro proyecto nació hace 12 años cuando un grupo de jóvenes decidimos que queríamos mostrar al mundo la riqueza de nuestras tradiciones sin perder nuestra identidad. Trabajamos directamente con la comunidad para ofrecer experiencias que benefician a todos: desde los guías y cocineras hasta los artesanos y productores locales. Cada visita contribuye a la preservación de nuestro patrimonio cultural y natural, y al desarrollo económico de nuestras familias.',
      values: [
        'Turismo responsable',
        'Preservación cultural',
        'Sustentabilidad ambiental',
        'Beneficio comunitario',
        'Autenticidad'
      ],
      process: 'Diseñamos cada experiencia con la participación activa de la comunidad. Nuestros guías son hablantes nativos de maya que han recibido capacitación en turismo cultural. Trabajamos con productores locales para ofrecer alimentos orgánicos y artesanías auténticas. Limitamos el número de visitantes para minimizar el impacto ambiental y garantizar experiencias íntimas y significativas. Parte de nuestros ingresos se destina a proyectos comunitarios como la escuela de lengua maya y la conservación de cenotes.'
    },
    gallery: [
      {
        id: 'gal-101',
        title: 'Pirámide del Adivino',
        description: 'Vista de la majestuosa Pirámide del Adivino en Uxmal',
        imageUrl: imagenes.yucatan.comunidad.piramide,
        type: 'community'
      },
      {
        id: 'gal-102',
        title: 'Ceremonia Maya',
        description: 'Ceremonia tradicional de agradecimiento',
        imageUrl: imagenes.yucatan.comunidad.ceremonia,
        type: 'workshop'
      },
      {
        id: 'gal-103',
        title: 'Cenote Cristalino',
        description: 'Aguas turquesas del cenote comunitario',
        imageUrl: imagenes.yucatan.naturaleza.cenoteAgua,
        type: 'community'
      },
      {
        id: 'gal-104',
        title: 'Cocina Tradicional',
        description: 'Preparación de cochinita pibil en horno de tierra',
        imageUrl: imagenes.yucatan.experiencias.pibil,
        type: 'workshop'
      },
      {
        id: 'gal-105',
        title: 'Artesanos Locales',
        description: 'Artesano tejiendo hamaca tradicional',
        imageUrl: imagenes.yucatan.comunidad.artesano,
        type: 'workshop'
      },
      {
        id: 'gal-106',
        title: 'Biodiversidad',
        description: 'Tucán en la selva yucateca',
        imageUrl: imagenes.yucatan.naturaleza.tucan,
        type: 'community'
      }
    ],
    reviews: [
      {
        id: 'rev-101',
        authorName: 'Jennifer Smith',
        rating: 5,
        comment: 'An absolutely authentic experience! Pedro and his team shared their culture with so much passion. The cenote ceremony was spiritual and beautiful.',
        createdAt: '2024-11-20T11:00:00Z'
      },
      {
        id: 'rev-102',
        authorName: 'Miguel Ángel Torres',
        rating: 5,
        comment: 'La mejor experiencia de turismo que he tenido en México. Todo fue perfecto: la comida, el tour, la atención. Se siente el amor por su cultura.',
        createdAt: '2024-11-12T15:30:00Z'
      },
      {
        id: 'rev-103',
        authorName: 'Sophie Dubois',
        rating: 5,
        comment: 'Magnifique! Une immersion totale dans la culture maya. Le guide parlait maya, espagnol et anglais. Très professionnel et chaleureux.',
        createdAt: '2024-11-05T09:20:00Z'
      },
      {
        id: 'rev-104',
        authorName: 'Fernando Ruiz',
        rating: 5,
        comment: 'El taller de cocina maya superó mis expectativas. Aprendí muchísimo y la comida estaba deliciosa. Totalmente recomendable.',
        createdAt: '2024-10-30T13:45:00Z'
      },
      {
        id: 'rev-105',
        authorName: 'Emma Johnson',
        rating: 5,
        comment: 'The bird watching tour was incredible! We saw so many endemic species. Our guide was very knowledgeable about the local ecosystem.',
        createdAt: '2024-10-22T07:15:00Z'
      }
    ],
    contact: {
      email: 'pedro.chan@experienciasmayas.mx',
      phone: '+52 997 234 5678',
      whatsapp: '+52 997 234 5678',
      address: 'Calle 15 #45, Centro',
      location: 'Santa Elena, Yucatán',
      geo: {
        lat: 20.3667,
        lng: -89.6167
      },
      social: {
        facebook: 'https://facebook.com/experienciasmayasuxmal',
        instagram: 'https://instagram.com/experienciasmayasuxmal',
        tiktok: 'https://tiktok.com/@experienciasmayas',
        website: 'https://experienciasmayas.mx'
      }
    },
    analyticsMock: {
      totalSales: 287500,
      totalOrders: 156,
      totalVisits: 8940,
      avgTicket: 1842.95,
      period: 'last30d',
      topProducts: ['serv-102', 'serv-101', 'serv-103'],
      peakTrafficHours: [8, 9, 10, 13, 14, 18, 19]
    },
    accessibility: {
      supportsScreenReaders: true,
      altTextCoverage: 'high',
      prefersReducedMotion: false
    },
    supportedLanguages: ['es', 'maya', 'en']
  },

  // ==========================================
  // OAXACA
  // ==========================================
  {
    id: 'ms-003',
    slug: 'cafe-organico-oaxaca-sierra',
    urlPath: '/cooperativa/cafe-sierra-oaxaca',
    logoUrl: imagenes.logos.cafeOaxaca,
    primaryColor: '#065F46',
    secondaryColor: '#10B981',
    theme: 'light',
    languages: ['es', 'zapoteco'],
    oferente: {
      fullName: 'Cooperativa Cafetalera Sierra Norte',
      commercialName: 'Café Orgánico Sierra de Oaxaca',
      email: 'contacto@cafesierraoaxaca.mx',
      phone: '+52 951 345 6789',
      locality: 'Ixtlán de Juárez, Oaxaca',
      activityType: 'cooperativa',
      rfc: 'CCS920815DEF',
      bankData: {
        banco: 'Banorte',
        tipoCuenta: 'Corriente',
        ultimaParteClabe: '1234'
      }
    },
    products: [
      {
        id: 'prod-201',
        name: 'Café Orgánico Grano Entero 500g',
        description: 'Café 100% arábica cultivado a 1,600 msnm en la Sierra Norte de Oaxaca. Notas de chocolate, nuez y cítricos. Certificación orgánica y comercio justo.',
        price: 185,
        currency: 'MXN',
        stock: 150,
        category: 'Café',
        tags: ['orgánico', 'arábica', 'grano entero', 'comercio justo'],
        images: [
          imagenes.oaxaca.productos.grano1,
          imagenes.oaxaca.productos.grano2
        ],
        isAvailable: true
      },
      {
        id: 'prod-202',
        name: 'Café Molido Tradicional 250g',
        description: 'Café molido medio, ideal para cafetera de goteo o prensa francesa. Perfil de sabor balanceado con dulzura natural.',
        price: 95,
        currency: 'MXN',
        stock: 200,
        category: 'Café',
        tags: ['molido', 'tradicional', 'balanceado', 'orgánico'],
        images: [
          imagenes.oaxaca.productos.molido
        ],
        isAvailable: true
      },
      {
        id: 'prod-203',
        name: 'Café de Especialidad Reserva 250g',
        description: 'Lote especial de café con puntuación SCA de 86 puntos. Proceso lavado, secado al sol. Notas de caramelo, almendra y frutas rojas.',
        price: 245,
        currency: 'MXN',
        stock: 45,
        category: 'Café Especialidad',
        tags: ['especialidad', 'reserva', 'premium', 'SCA'],
        images: [
          imagenes.oaxaca.productos.reserva1,
          imagenes.oaxaca.productos.reserva2
        ],
        isAvailable: true
      },
      {
        id: 'prod-204',
        name: 'Miel de Café Orgánica 350ml',
        description: 'Miel producida por abejas que polinizan nuestros cafetales. Sabor único con notas florales y dulzura natural.',
        price: 165,
        currency: 'MXN',
        stock: 60,
        category: 'Derivados',
        tags: ['miel', 'orgánico', 'café', 'natural'],
        images: [
          imagenes.oaxaca.productos.miel
        ],
        isAvailable: true
      },
      {
        id: 'prod-205',
        name: 'Kit Degustación 3 Cafés',
        description: 'Set de 3 bolsas de 100g con diferentes perfiles: suave, medio y fuerte. Perfecto para descubrir tu favorito.',
        price: 285,
        currency: 'MXN',
        stock: 35,
        category: 'Kits',
        tags: ['degustación', 'variedad', 'regalo', 'muestra'],
        images: [
          imagenes.oaxaca.productos.kit1,
          imagenes.oaxaca.productos.kit2
        ],
        isAvailable: true
      },
      {
        id: 'prod-206',
        name: 'Composta de Café 5kg',
        description: 'Composta orgánica elaborada con pulpa de café. Rica en nutrientes, ideal para jardines y huertos urbanos.',
        price: 120,
        currency: 'MXN',
        stock: 80,
        category: 'Derivados',
        tags: ['composta', 'orgánico', 'sustentable', 'jardín'],
        images: [
          imagenes.oaxaca.productos.composta
        ],
        isAvailable: true
      }
    ],
    services: [
      {
        id: 'serv-201',
        name: 'Tour del Café: De la Semilla a la Taza',
        description: 'Recorrido completo por nuestras plantaciones de café. Aprende sobre cultivo orgánico, cosecha, beneficiado y tostado. Incluye degustación de café recién preparado.',
        pricePerPerson: 280,
        maxGroupSize: 15,
        durationHours: 3,
        category: 'Tour Educativo',
        tags: ['café', 'plantación', 'proceso', 'degustación'],
        images: [
          imagenes.oaxaca.experiencias.tour1,
          imagenes.oaxaca.experiencias.tour2,
          imagenes.oaxaca.experiencias.tour3
        ],
        isAvailable: true
      },
      {
        id: 'serv-202',
        name: 'Taller de Catación de Café',
        description: 'Aprende a identificar perfiles de sabor, aromas y calidad del café como un profesional. Incluye certificado de participación.',
        pricePerPerson: 450,
        maxGroupSize: 10,
        durationHours: 2.5,
        category: 'Taller',
        tags: ['catación', 'especialidad', 'aprendizaje', 'barista'],
        images: [
          imagenes.oaxaca.experiencias.catacion1,
          imagenes.oaxaca.experiencias.catacion2
        ],
        isAvailable: true
      },
      {
        id: 'serv-203',
        name: 'Experiencia de Cosecha de Café',
        description: 'Vive la experiencia de cosechar café como un cafetalero. Aprende a seleccionar las cerezas maduras y participa en el proceso de beneficiado. Incluye comida tradicional.',
        pricePerPerson: 380,
        maxGroupSize: 12,
        durationHours: 5,
        category: 'Experiencia',
        tags: ['cosecha', 'agricultura', 'vivencial', 'tradicional'],
        images: [
          imagenes.oaxaca.procesos.cosecha
        ],
        isAvailable: true
      }
    ],
    home: {
      headline: 'Café Orgánico de la Sierra Norte',
      subheadline: 'Cultivado con amor en las montañas de Oaxaca. Cada taza apoya a más de 120 familias cafetaleras y preserva nuestros bosques.',
      heroImage: imagenes.oaxaca.hero,
      ctaLabel: 'Comprar Café',
      ctaTargetSection: 'products'
    },
    about: {
      story: 'Nuestra cooperativa nació en 1992 cuando 35 familias cafetaleras de Ixtlán de Juárez decidimos unirnos para enfrentar juntos los retos del mercado. Hoy somos más de 120 familias zapotecas comprometidas con la producción de café orgánico de alta calidad mientras protegemos nuestros bosques y tradiciones. Nuestros cafetales están integrados en el ecosistema del bosque mesófilo de montaña, uno de los más biodiversos del planeta. No usamos agroquímicos, practicamos la agricultura regenerativa y reinvertimos nuestras ganancias en educación, salud y proyectos comunitarios. Cada bolsa de café que produces no solo lleva un producto excepcional, sino también el esfuerzo colectivo de familias que aman su tierra.',
      values: [
        'Agricultura orgánica',
        'Comercio justo',
        'Conservación ambiental',
        'Desarrollo comunitario',
        'Calidad premium'
      ],
      process: 'Cultivamos café arábica en sistemas agroforestales bajo sombra de árboles nativos. La cosecha es 100% manual, seleccionando solo las cerezas en su punto óptimo de maduración. El beneficiado se realiza mediante proceso lavado con agua de manantial, y el secado es al sol en patios tradicionales. Cada lote es trazable desde la parcela hasta el empaque. Nuestro tostado se hace en pequeños lotes para garantizar frescura y resaltar las características únicas de nuestro terroir. Contamos con certificaciones orgánicas internacionales y de comercio justo.'
    },
    gallery: [
      {
        id: 'gal-201',
        title: 'Cafetal en la Sierra',
        description: 'Vista de nuestras plantaciones en las montañas',
        imageUrl: imagenes.oaxaca.paisajes.cafetal,
        type: 'community'
      },
      {
        id: 'gal-202',
        title: 'Cosecha Manual',
        description: 'Recolección selectiva de cerezas maduras',
        imageUrl: imagenes.oaxaca.procesos.cosechaManual,
        type: 'workshop'
      },
      {
        id: 'gal-203',
        title: 'Beneficiado Húmedo',
        description: 'Proceso de despulpado y fermentación',
        imageUrl: imagenes.oaxaca.procesos.beneficiado,
        type: 'workshop'
      },
      {
        id: 'gal-204',
        title: 'Secado al Sol',
        description: 'Café pergamino secándose en patios tradicionales',
        imageUrl: imagenes.oaxaca.procesos.secado,
        type: 'workshop'
      },
      {
        id: 'gal-205',
        title: 'Cooperativistas',
        description: 'Asamblea de la cooperativa cafetalera',
        imageUrl: imagenes.oaxaca.cooperativa,
        type: 'community'
      },
      {
        id: 'gal-206',
        title: 'Tostado Artesanal',
        description: 'Proceso de tostado en pequeños lotes',
        imageUrl: imagenes.oaxaca.procesos.tostado,
        type: 'product'
      },
      {
        id: 'gal-207',
        title: 'Biodiversidad',
        description: 'Bosque mesófilo que rodea nuestros cafetales',
        imageUrl: imagenes.oaxaca.paisajes.bosque,
        type: 'community'
      }
    ],
    reviews: [
      {
        id: 'rev-201',
        authorName: 'Patricia Morales',
        rating: 5,
        comment: 'El mejor café que he probado. Se nota la calidad y el cuidado en cada paso. Además, me encanta saber que apoyo a una cooperativa.',
        createdAt: '2024-11-18T08:30:00Z'
      },
      {
        id: 'rev-202',
        authorName: 'David Chen',
        rating: 5,
        comment: 'Outstanding coffee! The tasting notes are exactly as described. I visited the cooperative and the tour was amazing.',
        createdAt: '2024-11-10T10:15:00Z'
      },
      {
        id: 'rev-203',
        authorName: 'Gabriela Ramírez',
        rating: 5,
        comment: 'Compro este café desde hace 2 años y nunca me ha decepcionado. El café de especialidad reserva es mi favorito.',
        createdAt: '2024-11-03T14:20:00Z'
      },
      {
        id: 'rev-204',
        authorName: 'Marco Bianchi',
        rating: 5,
        comment: 'Caffè eccellente! Ho fatto il workshop di degustazione e ho imparato moltissimo. Consigliatissimo!',
        createdAt: '2024-10-27T11:45:00Z'
      },
      {
        id: 'rev-205',
        authorName: 'Luis Hernández',
        rating: 4,
        comment: 'Muy buen café y excelente servicio. El envío fue rápido y el empaque muy cuidado. Volveré a comprar.',
        createdAt: '2024-10-19T09:30:00Z'
      },
      {
        id: 'rev-206',
        authorName: 'Sarah Williams',
        rating: 5,
        comment: 'This coffee is incredible! Smooth, rich flavor with no bitterness. The harvest experience was unforgettable.',
        createdAt: '2024-10-12T16:00:00Z'
      }
    ],
    contact: {
      email: 'contacto@cafesierraoaxaca.mx',
      phone: '+52 951 345 6789',
      whatsapp: '+52 951 345 6789',
      address: 'Camino a la Sierra km 2.5',
      location: 'Ixtlán de Juárez, Oaxaca',
      geo: {
        lat: 17.3333,
        lng: -96.4833
      },
      social: {
        facebook: 'https://facebook.com/cafesierraoaxaca',
        instagram: 'https://instagram.com/cafesierraoaxaca',
        website: 'https://cafesierraoaxaca.mx'
      }
    },
    analyticsMock: {
      totalSales: 456800,
      totalOrders: 342,
      totalVisits: 12560,
      avgTicket: 1335.67,
      period: 'last30d',
      topProducts: ['prod-201', 'prod-203', 'prod-205'],
      peakTrafficHours: [7, 8, 9, 12, 13, 17, 18, 20]
    },
    accessibility: {
      supportsScreenReaders: true,
      altTextCoverage: 'high',
      prefersReducedMotion: false
    },
    supportedLanguages: ['es', 'zapoteco']
  }
];

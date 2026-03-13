export default {
  global: {
    Name: 'Analítica digital para redes sociales',
    Description:
      'Dentro del <em>marketing</em> digital, las redes sociales tienen la gran habilidad de permitir su medición, lo cual constituye un insumo demasiado valioso para direccionar las estrategias digitales que desarrollan las empresas de acuerdo con los objetivos y metas propuestas. De esta manera, en el presente componente de formación hace una exploración conceptual de la analítica digital desde las redes sociales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Analítica de datos para redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de la analítica digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Uso de los datos obtenidos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contenidos, medición y análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué se debe medir?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de objetivos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'KPI (Key Performance Indicator)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Proceso de medición',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Cómo analizar?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis de la competencia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Análisis cualitativo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Comportamiento del consumidor (personalidades de compra)',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Estructuración e interpretación de indicadores para la preparación de reportes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características de un reporte de resultados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de reportes',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Analítica web',
      significado:
        'Entender e interpretar datos del entorno digital para conocer resultados que permitan una acertada toma de decisiones.',
    },
    {
      termino: 'Software',
      significado:
        'término informático que hace referencia a un programa o conjunto de programas de cómputo, así como datos, procedimientos y pautas que permiten realizar distintas tareas en un sistema informático.',
    },
    {
      termino: 'Buyer persona',
      significado: 'Representación de un modelo de cliente.',
    },
    {
      termino: 'KPI',
      significado: 'Indicador Clave de Desempeño.',
    },
    {
      termino: 'Medida',
      significado: 'Cuantificación de datos específica.',
    },
    {
      termino: 'Métricas',
      significado:
        'Valores numéricos en los que se presenta una campaña o estrategia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cibrián, I. B. (2019). <em>Marketing digital. Mide, analiza y mejora.</em> ESIC.',
    },
    {
      referencia:
        'DANE. (s.f.). <em>Guía para diseño, construcción e interpretación de indicadores.</em> DANE.',
    },
    {
      referencia:
        'Galiana, P. (2018). <em>Qué es la analítica web, para qué sirve y principales herramientas.</em>',
      link:
        'https://www.iebschool.com/blog/herramientas-analisis-web-analitica-usabilidad/',
    },
    {
      referencia:
        'Gómez, S. e Instituto de Marketing Ágil. (22 de noviembre de 2017). <em>Qué es la analítica web y para qué sirve.</em> [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=W1q_SyJPfdg&ab_channel=InstitutodeMarketingAgil',
    },
    {
      referencia:
        'GraciAds. (2021). <em>El comportamiento del consumidor en las redes sociales.</em>',
      link:
        'https://graciads.com/comportamiento-del-consumidor-en-redes-sociales/#:~:text=Por%20lo%20general%2C%20los%20estudios,de%20marca%20como%20un%20bot',
    },
    {
      referencia:
        'IEBS Business School. (11 de septiembre de 2018). <em>Cómo definir e interpretar métricas y KPI en analítica web de IEBS.</em> [Webinar].',
      link: 'https://www.youtube.com/watch?v=-_8tNwzyCi8',
    },
    {
      referencia:
        'Maciá, F. y Santoja, M. (2017). <em>Marketing en redes sociales.</em> Anaya.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=13656',
    },
    {
      referencia:
        'Mejía, J. (2020). <em>Indicadores de redes sociales: principales KPI y métricas de social media.</em>',
      link:
        'https://www.juancmejia.com/redes-sociales/kpis-de-redes-sociales-guia-con-principales-metricas-e-indicadores-de-social-media/',
    },
    {
      referencia:
        'Núñez, V. (2013). <em>Cómo hacer un informe de resultados en redes sociales.</em>',
      link:
        'https://vilmanunez.com/como-hacer-un-informe-de-redes-sociales-incluye-plantillas/',
    },
    {
      referencia:
        'Redes Sociales. (2021). <em>Redes sociales: ¿qué son las redes sociales?</em>',
      link: 'https://www.rdstation.com/es/redes-sociales/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

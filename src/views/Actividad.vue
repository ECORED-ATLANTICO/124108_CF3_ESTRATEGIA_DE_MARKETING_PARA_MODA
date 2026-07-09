<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificación conceptual de analítica digital',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión del aprendiz sobre la analítica digital aplicada a redes sociales mediante la resolución de preguntas de selección múltiple, a partir de la identificación de conceptos clave desarrollados en el componente formativo relacionados con medición, análisis de datos, definición de objetivos, indicadores de desempeño y procesos de medición utilizados en estrategias de <em>marketing</em> digital.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué finalidad tiene la analítica digital en redes sociales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Transformar datos en información útil para tomar decisiones estratégicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar procesos de medición dentro del marketing digital actual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente la investigación de mercados tradicional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la interacción entre usuarios y marcas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el primer componente de la analítica digital?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reporting de resultados mediante gráficos especializados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medición de datos generados por usuarios digitales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Implementación de campañas publicitarias en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño de estrategias comerciales para nuevos mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué permite realizar el análisis de los datos obtenidos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar campañas sin utilizar información de los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar indicadores utilizados para evaluar resultados digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprender información segmentada según criterios previamente establecidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente la medición dentro del marketing digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué caracteriza principalmente el proceso de reporting digital?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir información utilizada para apoyar decisiones organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir gráficos por interpretaciones intuitivas del analista digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar evidencias sobre resultados obtenidos en redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar resultados mediante gráficos para apoyar decisiones estratégicas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué beneficio ofrece utilizar datos provenientes de redes sociales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar decisiones fundamentadas sobre comportamientos y oportunidades del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar análisis relacionados con hábitos del consumidor digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir procesos estratégicos mediante decisiones exclusivamente intuitivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir posibilidades de optimización en campañas digitales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué permiten identificar los datos analizados correctamente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Procesos administrativos sin relación con estrategias digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Oportunidades de mejora para optimizar acciones de marketing digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Únicamente costos asociados al funcionamiento de redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente información financiera de las organizaciones participantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Por qué resulta importante medir acciones en redes sociales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar seguimiento realizado sobre campañas de comunicación digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir indicadores mediante apreciaciones subjetivas del administrador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Obtener información objetiva para mejorar estrategias digitales continuamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir utilización de herramientas de analítica dentro organizaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué relación existe entre medición y toma de decisiones?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La medición reemplaza completamente el análisis estratégico empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La medición elimina necesidad de interpretar resultados obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La medición reduce importancia del comportamiento del consumidor digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La medición proporciona evidencia para decidir acciones estratégicas acertadas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué propósito tiene interpretar hábitos del consumidor digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprender comportamientos para orientar estrategias de marketing efectivas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar segmentación utilizada durante campañas digitales empresariales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir investigación comercial mediante observaciones intuitivas permanentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir oportunidades de optimización en medios digitales actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué resultado genera analizar correctamente datos obtenidos digitalmente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuir precisión durante procesos estratégicos de comunicación digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer decisiones mediante información confiable y oportunamente interpretada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente procesos analíticos desarrollados por especialistas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar seguimiento realizado sobre resultados de campañas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué debe definirse antes de medir resultados en redes sociales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El presupuesto destinado a campañas publicitarias digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los objetivos que orientarán el proceso de medición.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de seguidores de cada red social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño gráfico de las publicaciones institucionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué característica corresponde al método SMART para objetivos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer objetivos específicos, medibles y alcanzables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Formular metas sin indicadores para facilitar la evaluación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los indicadores por apreciaciones del administrador digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Definir objetivos únicamente según cantidad de seguidores obtenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué representan las macroconversiones dentro del marketing digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Interacciones sin impacto sobre resultados empresariales esperados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Acciones que generan resultados relevantes para la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Publicaciones realizadas periódicamente en diferentes redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Indicadores relacionados únicamente con el crecimiento de seguidores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué permiten evaluar los indicadores clave de desempeño KPI?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El diseño gráfico utilizado durante campañas digitales institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La calidad estética de las publicaciones realizadas diariamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El desempeño de objetivos y estrategias implementadas digitalmente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El número total de plataformas utilizadas por la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué mide el KPI tamaño de la comunidad digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de seguidores registrados en la red social.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de campañas desarrolladas durante un semestre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cantidad de clics realizados sobre enlaces publicados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El retorno económico obtenido por cada publicación realizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué refleja el porcentaje de engagement en redes sociales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo promedio invertido por adquisición de clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nivel de interacción generado por los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El tiempo utilizado para publicar contenidos digitales estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad de publicaciones realizadas durante un periodo determinado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué expresa el indicador CTR en analítica digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El porcentaje de clics sobre enlaces publicados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El costo promedio generado por cada nuevo cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de seguidores alcanzados mensualmente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El retorno financiero obtenido mediante campañas digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué mide el indicador ROI dentro campañas digitales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de publicaciones compartidas por los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El retorno de la inversión realizada en campañas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de visitas recibidas por un sitio web.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de seguidores obtenidos durante una campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué propósito tiene establecer un proceso formal de medición?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar acciones para obtener resultados medibles y comparables.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir indicadores mediante criterios subjetivos del administrador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la necesidad de actualizar planes de medición digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la importancia del análisis dentro del marketing digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué acción mantiene vigente un plan de medición digital?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar indicadores cuando aumentan los resultados organizacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actualizar el plan según cambios del entorno digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir objetivos estratégicos por métricas de corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Medir únicamente el crecimiento de seguidores en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

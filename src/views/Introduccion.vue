<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduccion/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El #[em marketing] digital ha marcado un antes y un después para la manera como se promocionan y venden productos y servicios a nivel global. Este, aparte de generar comunidad y un sinfín de nuevas dinámicas, a diferencia de otros se ha destacado por brindar la oportunidad de medir todo lo que se considera necesario y este ha sido un valor agregado muy grande para las empresas al permitir optimizar, en gran medida, sus recursos.
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-xl-9
        .row.justify-content-center.align-items-center.mb-3.z-2
          .col-md-6.col-lg-5
            figure
              img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/introduccion/2.png", alt="")
          .col-lg-7
            .p-5.bg-acento-contenido-a5
              p.mb-0 Por consiguiente, después de generar todo un plan de #[em marketing] digital, definir estrategias, herramientas y medios, además de llevarlo a la acción, las empresas pueden medir todos los datos arrojados a través de la interacción que sus usuarios han generado en un determinado tiempo, puesto que no sirve de nada el hecho de invertir tiempo y dinero en #[em marketing] digital si no se analizan los resultados logrados con tanto esfuerzo. 
        .p-4.bg-acento-botones-a5
          .row.justify-content-center.align-items-center
            .d-none.d-xl-block.col-xl-1
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/introduccion/4.svg", alt="")
            .col-xl-11
              p.mb-0 Es así como la analítica de datos o analítica digital llega con mucha fuerza para ofrecer toda su ayuda en pro de la toma certera de decisiones, después del desarrollo de procesos de medición, análisis y reporte de información real. Es de destacar que en este componente formativo se enfocará en la analítica de datos para redes sociales. 
      .col-xl-3.d-none.d-xl-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/introduccion/3.png", alt="")

    .bg-primario-p10.p-2.mb-4.mb-lg-5
      .row.justify-content-center.align-items-center
        .d-none.d-lg-block.col-lg-2
          figure
            img(data-aos="fade-down-right", src="@/assets/curso/introduccion/5.png", alt="")
        .col-lg-9
          p Antes de continuar en el contexto de la analítica de datos para redes sociales, se sugiere observar el siguiente recurso de aprendizaje para obtener información que proporcionará elementos para iniciar y culminar con éxito el presente componente de formación; además, ¿qué se espera aprender durante esta experiencia?; si se hiciera una lluvia de ideas mental sobre la analítica de datos para redes sociales, ¿qué palabras llegan a la mente? ¡Adelante con la exploración!

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-10.col-sm-6.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/introduccion/6.png", alt="")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-azul-claro")
          .row(titulo="¿Cómo iniciar este proceso de aprendizaje?").justify-content-center.align-items-center
            .col-12
              p.mb-0 Para comenzar, es importante que usted comprenda que el objeto de aprendizaje está relacionado con: analítica de datos para redes sociales, contenidos, medición y análisis, análisis de información y estructuración e interpretación de indicadores para la preparación de reportes. ¿Cómo aportan ellos en su formación? Adelante con la experiencia para encontrar una respuesta.

          .row(titulo="¿Qué elementos tengo para aprender?").justify-content-center.align-items-center
            .col-12
              p.mb-0 Usted tiene a su disposición un conjunto de recursos de aprendizaje para desarrollar conocimientos, habilidades y actitudes. Entre ellos: infografía, videos, textos de los autores de los componentes y otros.

          .row(titulo="¿Cuál es el propósito de este momento de aprendizaje?").justify-content-center.align-items-center
            .col-12
              p.mb-0 El propósito de este momento está relacionado con que una vez finalice este momento tenga la capacidad de monitorear el plan de mercadeo, a partir de la experiencia obtenida en las redes sociales y comunidades virtuales.   
          .row(titulo="¿Cómo finalizar este componente de formación?").justify-content-center.align-items-center
            .col-12
              p.mb-0 Para culminarlo debe recorrer la ruta de aprendizaje que se ha creado a partir de contenido temático y las actividades de aprendizaje.
          
    .cajon.color-acento-contenido.p-4.mb-4.mb-lg-5
      p.mb-0 Ahora que se han identificado algunas rutas de aprendizaje, se invita a iniciar desde la siguiente pregunta: ¿cuál es la importancia del uso de la analítica en el contexto del marketing digital para el sistema de moda?
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

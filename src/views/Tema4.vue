<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Estructuración e interpretación de indicadores para la preparación de reportes

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/1.png", alt="")
      .col-md-10.col-lg-8
        p.mb-0 De nada sirve medir cifras y analizar datos si no se plasman en información importante para direccionar la toma de decisiones. Con esto, se hace evidente la necesidad de usar indicadores que guíen la presentación de dicha información para ser trabajada con el equipo técnico.

    .fullwidth-bg.fullwidth-bg--1
    .p-4.bg-acento-botones-a10.rounded-3.z-2
      p.mb-0 Según la #[em Guía para diseño, construcción e interpretación de indicadores ](DANE, s.f.), un indicador se considera como la expresión cualitativa o cuantitativa capaz de ser observada y con la que es posible identificar comportamientos o características de una variable con relación a un tiempo determinado, encaminada a la meta fijada; para ello, el indicador debe tener simplificación, medición y comunicación. 
      
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Características de un reporte de resultados

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema4/2.png", alt="")
      .col-md-10.col-lg-8
        p.mb-5.mb-sm-0 Un informe de resultados basa sus características de acuerdo con la persona que será presentada como también definirá los KPI, objetivos, formatos, etc. Es importante saber a quién se dirige para exponer de la manera más clara la información encontrada y permitir una toma de decisiones certera. Según Cibrián (2019), existen cuatro requisitos para un buen reporte de resultados:
        .row.justify-content-center.align-items-center.custom-tarjeta-numerada
          .col-3.d-none.d-xl-block
            figure
              img(src="@/assets/curso/tema4/3.png", alt="")
          .col-xl-9
            .row.justify-content-center.align-items-stretch
              .col-md-6.mb-4.my-md-5
                .tarjeta-numerada.color-secundario.p-3.ps-5.h-100.bg-azul-claro
                  .tarjeta-numerada__numero
                    .h2 1
                  p.mb-0.text-bold Información relevante y actualizada.
              .col-md-6.mb-4.my-md-5
                .tarjeta-numerada.color-secundario.p-3.ps-5.h-100.bg-azul-claro
                  .tarjeta-numerada__numero
                    .h2 2
                  p.mb-0.text-bold Fácil comprensión visual.
              .col-md-6.mb-4
                .tarjeta-numerada.color-secundario.p-3.ps-5.h-100.bg-azul-claro
                  .tarjeta-numerada__numero
                    .h2 3
                  p.mb-0.text-bold Conclusiones y recomendaciones.
              .col-md-6.mb-4
                .tarjeta-numerada.color-secundario.p-3.ps-5.h-100.bg-azul-claro
                  .tarjeta-numerada__numero
                    .h2 4
                  p.mb-0.text-bold Automatización

    
    .cajon.color-terciario.p-4
      p.mb-0 La finalidad de un informe bien estructurado radica en su entendimiento de manera rápida y eficaz, dicho en otras palabras, debe ser explicada en un mismo idioma para todos los receptores, permitiendo desarrollar conclusiones a primera vista para ser analizadas a profundidad y direccionar la estrategia.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Tipos de reportes

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Teniendo en cuenta la información que se desea dar a conocer, se pueden definir tres tipos de reportes, cuya importancia radica en aprender a organizar la información encontrada para exponerla de manera clara y tener muy presente para la toma de decisiones (Cibrián, 2019). Ellos son:

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4.overflow-hidden(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/5.png", alt="Imagen de acompañamiento")
          .crd_hover_txt--body
            h4.mb-3.text-center Cuadro de mando
            p.mb-0 Recolección de datos asociados de los usuarios que interactúan con la red social o sitio web.

      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4.overflow-hidden(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/6.png", alt="Imagen de acompañamiento")
          .crd_hover_txt--body
            h4.mb-3.text-center Panel de control
            p.mb-0 Estudio y comprensión de los datos encontrados, segmentados de acuerdo con los criterios definidos.

      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4.overflow-hidden(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/7.png", alt="Imagen de acompañamiento")
          .crd_hover_txt--body
            h4.mb-3.text-center Informe
            p.mb-0 Acción de plasmar por medio de gráficos los resultados encontrados, con el fin de una toma de decisiones adecuada.

    .cajon.color-acento-botones.p-4
      p.mb-0 Al finalizar la lectura de este componente de formación, se espera que se haya recuperado información para desarrollar conocimientos, habilidades y actitudes que deberán aplicarse al contexto laboral, pues es allí en donde tiene sentido esta experiencia de aprendizaje.

    

</template>

<script>
export default {
  name: 'Tema4',
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

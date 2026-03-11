<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Analítica de datos para redes sociales
    
    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/1.png", alt="")
      .col-md-10.col-lg-8
        p.mb-0 Las redes sociales se han convertido en el medio más utilizado tanto para marcas como para usuarios, pues la flexibilidad de interacción y el fácil acceso han permitido que estas lleguen a todos los rincones del planeta. Detrás de todo lo que se publica hay algo muy importante para tener en cuenta por toda persona o marca que desee hacer uso de las redes sociales como medio empresarial. Ese “algo” es la información y datos obtenidos de las interacciones, de ahí la importancia del análisis de dichos datos para definir o direccionar la estrategia de marketing digital.

    .row.justify-content-center.mb-4.mb-lg-5.z-2
      .col-xl-10
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 De esta manera, se habla de la analítica digital, la cual Cibrián (2019) define como: “Disciplina en la que se miden y analizan los datos generados por los usuarios para transformarlos en información relevante, la cual se presentará en informes útiles para que los destinatarios de estos puedan tomar decisiones y mejorar el negocio.
            i.fas.fa-quote-right

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-primario-p10.p-2.mb-4.mb-lg-5
          .row.justify-content-center.align-items-center
            .d-none.d-lg-block.col-lg-2
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")
            .col-lg-9
              p.mb-0 Entendiendo la importancia de la analítica digital es cómo se reconoce la facilidad que brinda el marketing digital para medir todo lo que se considere necesario y con miras a direccionar las acciones de mejora en una determinada estrategia digital. Para realizar esta medición en la web existe una gran cantidad de herramientas gratuitas y de acuerdo con los criterios y métricas elegidas.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Componentes de la analítica digital

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La analítica digital se compone de tres factores importantes. A continuación, se debe observar cada componente para identificar las características de los factores que le ayudarán a obtener datos para sus planes de #[em marketing].

    .row.justify-content-center
      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4.overflow-hidden(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/4.png", alt="Imagen de acompañamiento")
          .crd_hover_txt--body
            h4.mb-3.text-center Medición
            p.mb-0 Recolección de datos asociados de los usuarios que interactúan con la red social o sitio web.

      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4.overflow-hidden(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/5.png", alt="Imagen de acompañamiento")
          .crd_hover_txt--body
            h4.mb-3.text-center Análisis
            p.mb-0 Estudio y comprensión de los datos encontrados, segmentados de acuerdo con los criterios definidos.

      .col-xl-4.col-sm-8.col-lg-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt.rounded-4.overflow-hidden(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/6.png", alt="Imagen de acompañamiento")
          .crd_hover_txt--body
            h4.mb-3.text-center <em>Reporting</em>
            p.mb-0 Acción de plasmar por medio de gráficos los resultados encontrados, con el fin de una toma de decisiones adecuada.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2  Uso de los datos obtenidos

    img(data-aos="fade-up")(src="@/assets/curso/tema1/7.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--azul
          p.mb-0 Al realizar la medición de las acciones realizadas por los usuarios que interactúan con determinada red social o sitio web, la información obtenida es el tesoro mejor guardado por cada marca, puesto que este permite realizar estudios de análisis que permitan la toma de decisiones basada en datos y no en supuestos.
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/8.png", alt="")
      .col-lg-8
        .p-4.bg-acento-contenido-a5.mb-3.rounded-3
          p.mb-0 Entre los beneficios del uso de datos se encuentra mayor cercanía con la realidad para generar oportunidades de incrementar ingresos, entendimiento de los hábitos del consumidor para definir una estrategia que permita llegar de manera eficaz a este público, además de optimizar recursos para lo que verdaderamente se debe invertir dinero y tiempo, a partir de los resultados obtenidos.
        p.mb-0 De esta forma, se define que para pasar de los datos obtenidos a la acción se debe tener en cuenta la conexión de los siguientes factores que, al finalizar su ciclo, vuelven a tomar acción en el momento que se necesiten de nuevo. En el siguiente recurso de aprendizaje se describe el proceso para pasar los datos a la acción desde el pensamiento de Cibrián (2019, p. 22); pero antes de ir al recurso, ¿para que utilizarían los datos obtenidos de las redes sociales?


    

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

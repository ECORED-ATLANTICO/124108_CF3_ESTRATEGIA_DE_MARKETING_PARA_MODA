<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-sm-8.col-lg-4
        figure
          img(src="@/assets/curso/1.png", alt="")
      .col-lg-8
        p El componente formativo Analítica digital para redes sociales ofrece al aprendiz una aproximación al análisis de datos en redes sociales dentro del #[em marketing] digital, a través del estudio de la analítica digital se presentan sus componentes principales: medición, análisis y reporting, los cuales permiten comprender cómo se recolecta, interpreta y comunica la información generada por los usuarios en entornos digitales. Asimismo, se aborda el uso de los datos obtenidos para apoyar la toma de decisiones estratégicas dentro de las acciones de #[em marketing] digital.
        .p-4.bg-azul-claro.rounded-4
          p.mb-0 El componente también desarrolla los procesos de medición y análisis aplicados a los contenidos en redes sociales, abordando la definición de objetivos y el uso de indicadores clave de desempeño. Se presentan distintos tipos de KPI relacionados con gestión, interacción, alcance y conversión, tales como engagement, CTR, CPL, CPA y ROI. Finalmente, se explica el proceso de medición que orienta la planificación, implementación y actualización de estrategias basadas en datos dentro del #[em marketing] digital.
    .row.justify-content-center
      .col-lg-8.col-xl-6
        figure.mb-4
          img(src="@/assets/curso/sintesis.svg", alt="")

    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

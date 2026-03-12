<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contenidos, medición y análisis

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/1.png", alt="")
      .col-md-10.col-lg-8
        p.mb-0 A partir del plan de marketing digital es cómo se organiza una ruta de navegación para la consecución de las metas propuestas por la marca o empresa. Desde este punto es que se determina un público objetivo, la red social a usar, la comunicación, los elementos utilizados y demás factores que determinan la puesta en marcha del plan inicialmente pensado; pero también es muy importante la definición de los contenidos que serán compartidos con el público para identificar la interacción que este tendrá, lo que a su vez arrojará datos importantes que, a simple vista, solo son cifras sueltas, pero que al darles un contexto permiten realizar un proceso de análisis que llevará a una toma de decisiones para ponerlas en práctica, con el fin de mejorar o redireccionar la estrategia inicial.
        .p-4.bg-acento-contenido-a5.mb-3.rounded-3
          p.mb-0 Al tener claro lo anterior, para llevar a cabo el proceso de medir se debe determinar qué medir y esto se define según los objetivos propuestos y los criterios establecidos para ello.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por lo anterior, se ha reunido y organizado información para poder justificar, desde el contexto del aprendiz, qué se debe medir a partir de la interacción que genera el contenido seleccionado para las redes sociales. Ahora, se continúa con el aprendizaje.
          
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 ¿Qué se debe medir?

    img(data-aos="fade-up")(src="@/assets/curso/tema2/3.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--azul
          p.mb-0 Los datos arrojados por la interacción de usuarios en las redes sociales se constituyen en la materia prima de la analítica digital, con estas cifras se trabaja para determinar qué se desea medir. Todo depende de las metas esperadas y de las métricas utilizadas, puesto que los datos llegan cada día en gran volumen y es muy dispendioso medirlos absolutamente todos, sobre todo cuando se busca la optimización de tiempo y dinero.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")
      .col-md-10.col-lg-8
        p.mb-0 Para determinar qué se debe medir, es importante formular interrogantes como el por qué y el para qué es importante determinado factor, qué es lo que se busca y si se está logrando lo visualizado, esto va íntimamente ligado con el comportamiento de los usuarios de la red social o sitio web.
        .bloque-texto-b.color-acento-botones.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Sin medición, no hay información, sin información no podrás tomar buenas decisiones y si no actúas no mejorarás tu negocio (p. 57)
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            span.mb-0 Cibrián (2019)

    .cajon.color-acento-contenido.p-4
      p.mb-0 Por consiguiente, esta es la forma más adecuada para encontrar la mejora de los procesos o si es necesario un cambio total en la dinámica a través de ¿qué se medirá en el contexto laboral?, ¿para qué medirá?, dar respuesta a esto le dará sentido a los datos.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Definición de objetivos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/5.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tal como se ha comentado una y otra vez, la medición depende de los objetivos establecidos, y para entender cómo se definen dichos objetivos, se hace necesario el uso del método SMART (Specific, Measurable, Achievable, Relevant y Time-bound) lo que se traduce en que los objetivos deben ser específicos, medibles, alcanzables, relevantes y acotados en el tiempo. A continuación, sus cualidades.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2.factores-slider
      .col-md-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .tarjeta.tarjeta--blanca.p-3.factores-slider__tarjeta
          .row.justify-content-center.mb-3
            .col-8
              img.factores-slider__icon.img-90(src='@/assets/curso/tema2/6.png' alt='Numero 1')
          .factores-slider__title-wrapper  
            h5.factores-slider__title Específico
          p.text-center Se define como la meta concreta.
      .col-md-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .tarjeta.tarjeta--blanca.p-3.factores-slider__tarjeta
          .row.justify-content-center.mb-3
            .col-8
              img.factores-slider__icon.img-90(src='@/assets/curso/tema2/7.png' alt='Numero 2')
          .factores-slider__title-wrapper  
            h5.factores-slider__title Medible
          p.text-center permite cuantificar en cifras.
      .col-md-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .tarjeta.tarjeta--blanca.p-3.factores-slider__tarjeta
          .row.justify-content-center.mb-3
            .col-8
              img.factores-slider__icon.img-90(src='@/assets/curso/tema2/8.png' alt='Numero 3')
          .factores-slider__title-wrapper  
            h5.factores-slider__title Alcanzable
          p.text-center tiene coherencia y es posible que se lleve a cabo en la realidad.
      .col-md-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .tarjeta.tarjeta--blanca.p-3.factores-slider__tarjeta
          .row.justify-content-center.mb-3
            .col-8
              img.factores-slider__icon.img-90(src='@/assets/curso/tema2/9.png' alt='Numero 4')
          .factores-slider__title-wrapper  
            h5.factores-slider__title Relevante
          p.text-center mantiene alineación con la estrategia desarrollada por la empresa y tienen una razón de ser determinada.
      .col-md-4.col-lg-3.col-xl-2.mb-3.mb-xl-0
        .tarjeta.tarjeta--blanca.p-3.factores-slider__tarjeta
          .row.justify-content-center.mb-3
            .col-8
              img.factores-slider__icon.img-90(src='@/assets/curso/tema2/10.png' alt='Numero 5')
          .factores-slider__title-wrapper  
            h5.factores-slider__title Acotado en el tiempo
          p.text-center se desarrolla dentro del plazo de tiempo establecido. 

    img(data-aos="fade-up")(src="@/assets/curso/tema2/11.png", alt="Imagen decorativa")

    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.banner-text--azul
          p.mb-0 Después de realizar este proceso de definición de objetivos, se deben generar conversiones, lo cual significa que son todas las acciones realizadas por los usuarios en la red social o página web. Según Maciá y Santoja (2017) se definen dos tipos de conversiones:

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-6.col-lg-5.col-xl-4.mb-4.mb-sm-0
        .p-4.bg-acento-contenido-a5.rounded-3.h-100
          .d-flex.align-items-center.mb-3
            .col-4
              figure
                img.img-90(src="@/assets/curso/tema2/12.png", alt="")
            h4 Macroinversiones
          p.mb-0 Acciones que repercuten directamente en los resultados de la marca o empresa.
      .col-sm-6.col-lg-5.col-xl-4
        .p-4.bg-primario-p10.rounded-3
          .d-flex.align-items-center.mb-3.h-100
            .col-4
              figure
                img.img-90(src="@/assets/curso/tema2/13.png", alt="")
            h4 Microinversiones
          p.mb-0 Acciones que no generan repercusión en la marca o empresa, si indican que el usuario podría llevarlas a cabo.

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-azul-claro.p-2
          .row.justify-content-center.align-items-center
            .d-none.d-lg-block.col-lg-2
              figure
                img(data-aos="fade-down-right", src="@/assets/curso/tema2/14.png", alt="")
            .col-lg-9
              .p-4.p-lg-0
                p.mb-0 Se ha descrito que tener objetivos claros y observables contribuye a establecer las acciones que ayudan a conseguirlos en los escenarios o entornos digitales. Más adelante se verá qué tipos de indicadores contribuirán a controlar y tener evidencia de que las cosas se están haciendo bien o necesitan mejoras.

    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 KPI (#[em Key Performance Indicator])

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/15.png", alt="")
      .col-md-10.col-lg-8
        p.mb-3 La definición de los objetivos no lograría nada sin los Indicadores Clave de Desempeño o KPI (#[em Key Performance Indicator]) con lo que cada objetivo y estrategia lleva consigo un KPI diferente. Para ello, es indispensable conocer los tipos de KPI existentes para determinar cuáles servirán en el proceso, entendiendo que un KPI se determina como una meta a alcanzar para identificar si las estrategias realizadas funcionan o no.
        .p-3.bg-acento-contenido-a5
          .row.justify-content-center.align-items-center
            .d-none.d-xl-block.col-xl-1
              figure
                img.img-65(data-aos="fade-down-right", src="@/assets/curso/tema2/16.svg", alt="")
            .col-xl-11
              p.mb-0 En este sentido y luego de revisar el siguiente recurso educativo, el aprendiz debe enlistar aquellos indicadores de desempeño que le ayudarán a medir sus acciones y objetivos, ¿cuáles seleccionarán?


    h3.title-decorado.z-2 Tipos de KPI

    p.mb-4 Según el consultor en marketing digital Juan Carlos Mejía Llano (2020) existen tres categorías de KPI que se aplican para redes sociales o sitio web ¿cuáles son?; para que pueda explicarlas y probarlas en su contexto, continua con la lectura.

    .row.justify-content-center.align-items-center.z-2
      .col-10.col-sm-6.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/17.png", alt="")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-azul-claro")
          .row(titulo="KPI de gestión y comunidad").justify-content-center.align-items-center
            .col-12
              p Se refieren a cantidad de publicaciones y seguidores en las redes sociales.
              h5 ¿Qué tipo de indicadores tiene cada categoría KPI?
              p La categoría KPI de gestión y comunidad está conformada por dos indicadores principales, los cuales permiten evaluar el desempeño de la gestión realizada y el nivel de interacción, participación y crecimiento de la comunidad. Estos indicadores facilitan el seguimiento de las acciones implementadas, así como la medición del impacto generado en los usuarios o audiencia objetivo.
              ul.lista-ul.ms-3.custom-list
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Cumplimiento en la periodicidad de publicación]: se define por la cantidad de publicaciones realizadas en la red social con un tiempo determinado y permite hacer seguimiento de estas.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Tamaño de la comunidad]: se refiere a la cantidad de seguidores que cuenta la red social, con lo que se determina si incrementa o disminuye.
          .row(titulo="KPI de interacción y alcance").justify-content-center.align-items-center
            .col-12
              p Se refieren a la emoción, divulgación e interacción de los usuarios en las redes sociales.
              ul.lista-ul.ms-3.custom-list
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Me gusta promedio por publicación]: es un indicador estándar en las redes sociales y se conecta con la parte emocional del usuario.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Compartidos promedios por publicación]: se refiere a todas las veces que un contenido ha sido compartido en las distintas redes sociales y es muy popular en las interacciones de los usuarios.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Comentario promedio por publicación]: es un indicador estándar en las redes sociales y se ha convertido en el medio de expresión de muchos usuarios.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Usuarios alcanzados promedio por publicación]: los usuarios alcanzados por cada publicación realizada es una información que solo el administrador de la red social puede visualizar.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Porcentaje de engagement]: se refiere al porcentaje de interacciones realizadas por los usuarios en las redes sociales, de acuerdo con estas es como se definen los tipos de interacciones a estudiar.
          .row(titulo="KPI de gestión y comunidad").justify-content-center.align-items-center
            .col-12
              p Porcentaje de engagement: se refiere al porcentaje de interacciones realizadas por los usuarios en las redes sociales, de acuerdo con estas es como se definen los tipos de interacciones a estudiar.
              h5 KPI de conversión y resultado
              p Esta categoría está compuesta por cinco indicadores.
              ul.lista-ul.ms-3.custom-list
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong CTR (Click Through Rate)]: se define como la tasa de clics realizados en enlaces publicados en la red social.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong Porcentaje de conversión]: es el porcentaje de visitantes en un sitio web que cumplen con el objetivo y permite identificar cuántos son direccionados desde una red social.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong CPL (Cost per Lead)]: se caracteriza por el costo por cada cliente potencial obtenido en un sitio web a través de la estrategia de Social Media marketing.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong CPA (Cost Per Acquisition)]: se refiere al costo por cada comprador obtenido en un sitio web a través de la estrategia de Social Media marketing.
                li.d-flex
                  i.lista-ul__vineta
                  span #[strong ROI (Return Of Investment)]: se mide por el retorno de la inversión, lo cual determina si una campaña en redes sociales está siendo efectiva.

    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Proceso de medición

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-md-10.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/18.png", alt="")
      .col-md-10.col-lg-8
        p.mb-0 El proceso de medición es el conjunto de acciones que se debe seguir para determinar lo que se va a medir y la manera cómo se debe llevar a cabo para obtener resultados claros. Después de definir los objetivos y conocer los Indicadores Clave de Desempeño, se podrá establecer el proceso de medición a través de los siguientes pasos mencionados por Cibrián (2019, p. 53) así:

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-xl-8.custom-tabs.custom-tabs--ancho
        TabsA.color-acento-botones.mb-4.mb-lg-0
          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Crear un plan de medición: ¿qué medir?")
            h5 Crear un plan de medición: ¿qué medir?
            p.mb-0 En esta primera fase se deben establecer aquellos aspectos que se medirán según el plan de marketing digital establecido. En este punto hay que tener en cuenta los objetivos de la marca o empresa, los KPI a utilizar, las estrategias y herramientas que se van a llevar a cabo para conseguir dichos objetivos, la segmentación del público, entre otros.
          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Establecer un plan de implementación: ¿cómo medirlo?")
            h5 Establecer un plan de implementación: ¿cómo medirlo?
            p.mb-0 En esta fase se determinan los aspectos técnicos a usar para realizar la medición deseada, teniendo en cuenta qué se quiere medir, si es una red social, un sitio web o una aplicación, y la herramienta de la medición.
          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Implementar un plan: ¿qué aspectos técnicos hay que tener en cuenta?")
            h5 Implementar un plan: ¿qué aspectos técnicos hay que tener en cuenta?
            p.mb-0 Después de establecer el plan de medición e implementación se lleva a cabo la medición, observando atentamente los resultados que esta arroje. 
          .tarjeta.p-4.h-100.bg-terciario-t20(titulo="Mantener actualizado el plan: ¿qué cambios hay que incluir?")
            h5 Mantener actualizado el plan: ¿qué cambios hay que incluir?
            p.mb-0 Al llegar a esta fase se entiende que este es un proceso constante en el que se debe actualizar todo el tiempo, debido a los cambios que surgen día a día en el mundo digital.

      .d-none.d-xl-block.col-xl-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema2/19.png", alt="descripcion")









</template>

<script>
export default {
  name: 'Tema2',
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

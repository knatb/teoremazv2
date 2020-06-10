import React from 'react';
import Grid from '@material-ui/core/Grid';
import MyCarousel from '../Components/Carousel';
import CardInfo from '../Components/CardInfo';
//import Footer from './Footer';


export default function Services() {
  
  return ( 
   <div>
    <MyCarousel />
    <Grid container spacing={1} bgcolor="warning-main">
      <Grid item>
        <CardInfo             
            name="IPN - UG"
            imageurl={require('../images/PAQUETE1.png')}
            costo="Costo: $3,500.00 MXN"
            duracion="Duración: 4 Meses"
            description="Curso UG - IPN
            El curso propedéutico tiene una duración aproximada de 4 meses, verémos todas las materias de tu temario en la cual te irémos proporcionando información con una guía digital, una guía interactiva y libros digitales para que puedas estudiar desde donde estés. Asistirías a clases 3 veces a la semana, 2hrs cada día. O puedes tomar 2 horas entre semana y el resto el sábado en un horario de 10 am a 3 pm. El curso se paga por depósito en OXXO, de contado en la direccion que se te indique al momento de querer realizar tu compra o con tarjeta de crédito. Te podemos ofrecer un plan de pagos que es el siguiente: 3 pagos mensuales de $1,350.00 MXN. Durante el mes de noviembre y diciembre la inscripción es gratis. Tenemos disponibilidad así que no dudes en inscribirte lo antes posible para acreditar tu examen de admisión."
          />
      </Grid>
      
      <Grid item>
        <CardInfo 
            name="UNAM"
            imageurl={require('../images/PAQUETE2.png')}
            costo="Costo: $3,000.00 MXN"
            duracion="Duración: 3 meses"
            description="El curso propedéutico de unam tiene una duración aproximada de 3 meses, veremos todas las materias de tu temario en la cual te iremos proporcionando información con una guía digital, una guía interactiva y libros digitales para que puedas estudiar desde donde estés. Asistirías a clases 3 veces a la semana 2hrs cada día. O puedes tomar 2 horas entre semana y el resto el sábado en un horario de 11 am a 3 pm. El curso se paga por depósito en OXXO, de contado en la direccion que se te indique al momento de querer realizar tu compra o con tarjeta de crédito. Te podemos ofrecer un plan de pagos que es el siguiente: 3 pagos mensuales de $1,200.00 MXN. Tenemos disponibilidad así que no dudes en inscribirte lo antes posible para acreditar tu examen de admisión."
          />
      </Grid>

      <Grid item>
        <CardInfo
          name="ITL - UTL"
          imageurl={require('../images/PAQUETE3.png')}
          costo="Costo: $3,500.00 MXN"
          duracion="Duración: 4 Meses"
          description="El curso propedéutico de la ITL/UTL tiene una duración aproximada de 4 meses, veremos todas las materias de tu temario en la cual te iremos proporcionando información con una guía digital, una guía interactiva y libros digitales para que puedas estudiar desde donde estés. Asistirías a clases 3 veces a la semana 2 horas cada día. O puedes tomar 2 horas entre semana y el resto el sábado en un horario de 10 am a 3 pm. El curso se paga por depósito en OXXO, de contado en la direccion que se te indique al momento de querer realizar tu compra o con tarjeta de crédito. Te podemos ofrecer un plan de pagos que es el siguiente: 3 pagos mensuales de $1,250.00 MXN. Durante el mes de noviembre y diciembre la inscripción es gratis. Tenemos disponibilidad así que no dudes en inscribirte lo antes posible para acreditar tu examen de admisión."
        />
      </Grid>
      <Grid item>
        <CardInfo             
            name="Asesoría simple"
            imageurl={require('../images/favicon.png')}
            costo="Costo: $100.00 MXN"
            duracion="Duración: 2 horas"
            description="La asesoría simple es una alternativa para resolver tus dudas concretas sobre una materia en específico, en caso de que vayas a presentar algún examen o si necesitas ponerte al corriente en la materia, "
        />
      </Grid>
      <Grid item>
        <CardInfo             
            name="Curso de regularización"
            imageurl={require('../images/favicon.png')}
            costo="Costo: $750.00 MXN"
            duracion="Duración: 10 sesiones"
            description="Curso de regularización es una opción por si vas a presentar un examen extraordinaio sobre una matería en específico o para nivelarte junto a tus compañeros de clase. Para las 10 sesiones tú eliges los días y horas qué tengas disponibles, procurando tener un orden, estos se registran cuando asistes a las instalaciones"
        />
      </Grid>
    </Grid>
    </div>
  );
}
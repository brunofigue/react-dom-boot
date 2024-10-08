import "./Presentation.css";

function Presentation() {
  return (
    <section className='presentationContainer'>
      <img
        className='presentationImage'
        src='https://img.freepik.com/foto-gratis/concepto-collage-html-css-persona_23-2150061986.jpg'
        alt='logo'
      />

      <div className='presentationTextContainer'>
        <h2> Bruno Figueroa</h2>
        <p className=''>
          Buenas, mi nombre es Bruno Figueroa, tengo 34 años y resido en Argentina. Cuento con
          conocimientos en desarrollo web, en base de datos, metodologías ágiles, diferentes
          tecnologías y Cloud Computing. Soy una persona muy comprometida, comunicativa, proactiva y
          empática con ánimos de emprender nuevos desafíos. En constante capacitación sobre las
          nuevas herramientas y tecnológicas actuales.
        </p>
      </div>
    </section>
  );
}

export default Presentation;

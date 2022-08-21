import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="App">
      <Header title="- - Galería de imágenes con React - -" details="La bella Italia" caption="- Il migliore dei viaggi è sempre il prossimo -" introduction="Italia es uno de los países más visitados del mundo y no es de extrañar, ya que también es uno de los más bellos del planeta. Su gastronomía es mundialmente conocida, sus paisajes atrapan y cada rincón encierra una historia única, por lo que una lista de todo lo que ver en Italia debería ser extensísima. Sin embargo, hemos logrado seleccionar los mejores lugares de Italia para que tu próximo viaje a este precioso país europeo sea de 10.

¿Deseando volver a viajar? Sigue leyendo y descubre lo mejor de Italia.

"/>
      <div className="box">
        <Card
          src="https://content.skyscnr.com/m/26b630e95a1d1b51/original/GettyImages-148125959.jpg?resize=1800px:1800px&quality=100"
          alt="Capital of Italy, Rome"
          name="1. Roma"
          description="Cualquier listado de lugares que ver en Italia debe incluir obligatoriamente su capital. Roma es, sin discusión, una de las ciudades más bonitas del mundo y cualquier viaje a Italia debe pasar al menos unos días por ella. Es conocida como la “Ciudad Eterna” por la Historia que cada uno de sus recovecos encierra, pero en Roma también podrás disfrutar de atracciones de vanguardia como restaurantes de alta cocina y unas calles comerciales que solo se encuentran aquí."
        />
        <Card
          src="https://content.skyscnr.com/m/6d18fcfc2c946175/original/GettyImages-186325074.jpg?resize=1800px:1800px&quality=100"
          alt="venice city of love italy"
          name="2. Venecia"
          description="Venecia es una de las ciudades más románticas del mundo y uno de los lugares que visitar en Italia sea la época del año que sea. La ciudad de los canales derrocha sensualidad desde cualquier rincón, sobre todo en su fiesta grande, el Carnaval. Recorrer el Gran Canal de Venecia a bordo de la góndola puede ser una de las experiencias italianas estrella de tu viaje y de la que seguro sales enamorado."
        />
        <Card
          src="https://content.skyscnr.com/m/22dc73af202166de/original/GettyImages-161857514.jpg"
          alt="Florence one of the most cultural cities in Italy"
          name="3. Florencia"
          description="Bellisima! Te prometemos que esta será la palabra que salga de tu boca en cuanto llegues a Florencia. Esta ciudad es uno de los mejores lugares que ver en Italia gracias a su incomparable riqueza cultural. El centro histórico de Florencia reúne lugares tan increíbles como la catedral Santa María del Fiore, el Palazzo Vecchio, la Galería Uffizi o el Ponte Vecchio, por lo que más te vale que dediques unos cuantos días de tu viaje a Italia a explorar esta encantadora urbe."
        />
        <Card
          src="https://content.skyscnr.com/m/4f65c97f7741feb5/original/GettyImages-463142341.jpg?resize=1800px:1800px&quality=100"
          alt="Pisa, famous city for its leaning tower."
          name="4. Pisa"
          description="Recorrer la región italiana de la Toscana es una de las mejores cosas que hacer en Italia y una de las paradas más importantes es la ciudad de Pisa. Además de su famosísima torre inclinada (¡que no te puedes perder!), en Pisa hay mucho más por hacer. La Chiesa de Santa Maria della Spina, el Palazzo della Carovana, el Museo Nazionale di Palazzo Reale o el Camposanto monumental de Pisa son algunos de los lugares que puedes descubrir si decides hacer parada en este lugar que visitar en Italia."
        />
        <Card
          src="https://content.skyscnr.com/m/54c9639578ce8882/original/GettyImages-185617293_doc.jpg?resize=1800px:1800px&quality=100"
          alt="Cinque Terre, picturesque towns on the Italian coast"
          name="5. Cinque Terre"
          description="La región de Cinque Terre es una de las más espectaculares del país. Este conjunto de pueblos situados en acantilados y llenos de coloridas casas es una de las mejores cosas que ver en Italia. Pasa unos días recorriendo Vernazza, Corniglia, Monterosso al Mare, Riomaggiore y Manarola y atrévete a hacer algunos de los senderos que unen estas poblaciones porque será de esta manera como obtendrás mejor esas vistas de infarto hacia el Adriático. Vuela a Milán, Florencia o Pisa y luego podrás acceder hasta La Spezia o Monterosso en buses o trenes locales."
        />
      </div>
      <Footer text="Los mejores destinos 2022, en Italia"/>
    </div>
    </>
  );
}

export default App;

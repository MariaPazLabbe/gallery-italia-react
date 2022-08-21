import Button from "react-bootstrap/Button";
const Footer = (props) => {
   return (
      <>
      <footer className="footer">
      <p>{props.text}</p>
       <div className="d-grid gap-2">
         <a href="https://www.skyscanner.es/noticias/que-ver-en-italia-los-15-lugares-mas-bonitos-de-italia-na">
      <Button variant="primary" size="lg">
        Leer más sobre Italia, aquí
           </Button>
           </a>
           <a href="https://viajes.nationalgeographic.com.es/a/destinos-mas-populares_11415">
      <Button variant="secondary" size="lg">
        Buscar otro destino
      </Button> </a>
    </div>
      </footer>
      </>
    );
  }
export default Footer;
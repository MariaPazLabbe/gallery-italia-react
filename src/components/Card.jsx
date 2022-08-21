const Card = (props) => {
  return (
    <>
      <div className="box">
      <div className="card">
          <img className="img" src={props.src} alt={props.alt}></img>
          <div className="level">
        <h2 className="city" ><mark>{props.name}</mark></h2>
        <p className="description"><small><i>Descripción: </i>{props.description}</small></p>
          </div>
        </div>
        </div>
    </>
  );
};
export default Card;
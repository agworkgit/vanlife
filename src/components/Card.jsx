// UI
import Button from "../UI/Button";

export default function Card(props) {
   return (
      <article className="card" style={{ color: props.textColor }}>
         {props.img && <img src={props.img} />}
         <h2>{props.title}</h2>
         <p>{props.descriptionTop}</p>
         <p>{props.descriptionBottom}</p>
         {props.buttonText && <Button>{props.buttonText}</Button>}
      </article>
   );
}

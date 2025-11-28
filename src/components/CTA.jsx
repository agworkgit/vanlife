export default function CTA(props) {
   return (
      <article className="cta">
         <h3>{props.title}</h3>
         {props.description && <p>{props.description}</p>}
         <button
            style={{
               backgroundColor: props.buttonColor,
               color: props.buttonTextColor,
            }}
         >
            {props.buttonText}
         </button>
      </article>
   );
}

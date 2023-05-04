import classes from "./card.module.css";//we can make normal css file but we want to use module feature
function Card(props) {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
}
export default Card;

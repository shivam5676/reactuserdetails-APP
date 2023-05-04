import Card from "./Card";
import "./Button";
import classes from "./Errormodel.module.css";
function ErrorModel(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.onConfirm}>OKAY</button>
          </footer>
        </Card>
      </div>
    </div>
  );
}
export default ErrorModel;

import Card from "./ui/Card";
import classes from "./ui/card.module.css";
function UserList(props) {
  return (
    <Card className={classes.Users}>
      <ul>
        {props.Users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age}year old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UserList;

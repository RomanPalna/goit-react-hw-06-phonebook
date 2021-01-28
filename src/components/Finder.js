import { useSelector, useDispatch } from "react-redux";
import action from "../redux/actions";

export default function Filter() {
  const value = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(action.filter(e.target.value))}
      ></input>
    </label>
  );
}

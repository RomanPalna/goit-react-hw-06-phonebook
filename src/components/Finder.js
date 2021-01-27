import { connect } from "react-redux";
import action from "../redux/actions";

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const showContact = (allContacts, filter) => {
  const normalizeName = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizeName)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  value: showContact(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(action.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import "./HeadTable.css";
import { users } from "./users";
function HeadTable() {
  const headerTitle = Object.values(users);
  console.log(headerTitle);
  return (
    <>
      <div className="head_table">
        <h2>ID</h2>
        <h2>Name</h2>
        <h2>Phone</h2>
        <h2>Email</h2>
      </div>
    </>
  );
}
export default HeadTable;

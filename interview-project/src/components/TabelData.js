import { useState, useEffect } from "react";
import "./TabelData.css";

import { users } from "./users";

function TabelData() {
  const [value, setValue] = useState("");
  const [filterByName, setFilterByName] = useState([]);
  const [toggle, setToggle] = useState(false);
  console.log(value);
  useEffect(() => {
    if (value !== "") {
      const res = users.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(value)
      );

      setFilterByName(res);
    } else {
      setFilterByName(users);
    }
  }, [value]);

  function handelSort() {
    let order = filterByName.sort((a, b) => {
      return b.name === a.name ? 0 : b.name < a.name ? 1 : -1;
    });
    console.log(order);
    setFilterByName(order);
    setToggle("");
  }
  function tooggleMode() {
    setToggle(true);
  }
  function toggleBack() {
    setToggle(false);
  }

  return (
    <>
      <div className="buttons">
        <button onClick={tooggleMode} className="toggle_mode dark">
          Dark
        </button>
        <button onClick={toggleBack} className="toggle_mode">
          Light
        </button>
      </div>

      <div className={toggle ? "table_dark" : "table_container"}>
        <input
          className="search_bar"
          placeholder="search..."
          onChange={(e) => setValue(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th className="name" onClick={handelSort}>
                Name
              </th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {filterByName.map((tab) => (
              <tr>
                <td>{tab.id}</td>
                <td>{tab.name}</td>
                <td>{tab.phone}</td>
                <td className="email">{tab.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TabelData;

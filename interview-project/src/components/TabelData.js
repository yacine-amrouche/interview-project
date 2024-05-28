import { useState, useEffect } from "react";
import "./TabelData.css";

import { users } from "./users";

function TabelData() {
  const [value, setValue] = useState("");
  const [filterByName, setFilterByName] = useState(users);
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
    const oreder = filterByName.sort((a, b) => {
      return b.name === a.name ? 0 : b.name < a.name ? 1 : -1;
    });
    console.log(oreder);
    setFilterByName(oreder);
  }

  return (
    <>
      <div className="table_container">
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
            {filterByName.map((tab, index) => (
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

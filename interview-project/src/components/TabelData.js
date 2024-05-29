import { useState, useEffect } from "react";
import "./TabelData.css";

import { users } from "./users";

function TabelData() {
  const [value, setValue] = useState("");
  const [filterByName, setFilterByName] = useState(users);
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPages = 10;

  const indexLastPage = currentPage * perPages;
  const indexFirstPage = indexLastPage - perPages;
  const currentPages = users.slice(indexFirstPage, indexLastPage);
  const npage = Math.ceil(users.length / perPages);
  const number = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    if (value !== "") {
      const res = currentPages.filter((item) =>
        item.name.toLocaleLowerCase().startsWith(value)
      );

      setFilterByName(res);
    } else {
      setFilterByName(currentPages);
    }
  }, [currentPages]);

  function handelSort() {
    const order = currentPages.sort((a, b) => {
      return b.name === a.name ? 0 : b.name < a.name ? 1 : -1;
    });

    setFilterByName(order);
  }
  function tooggleMode() {
    setToggle(true);
  }
  function toggleBack() {
    setToggle(false);
  }

  function changeCurrentPage(num) {
    let currentPage = num;
    setCurrentPage(currentPage);
  }
  function toNext() {
    if (currentPage !== number.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function toPrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
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
                <td>{tab.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="list">
            <li className="page-item">
              <a onClick={toPrev} className="page-link btn">
                Prev
              </a>
            </li>
            {number.map((n) => (
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a onClick={toNext} className="page-link btn">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default TabelData;

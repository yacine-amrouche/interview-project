import { useState } from "react";
import "./TabelData.css";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { users } from "./users";

function TabelData() {
  const [filterByName, setFilterByName] = useState(users);
  const [toggle, setToggle] = useState(false);
  const [sortingOrderAsc, setSortingOrderAsc] = useState(true);
  const [columName, setColumName] = useState("");
  //const [currentPage, setCurrentPage] = useState(1);
  //const perPages = 10;

  //const indexLastPage = currentPage * perPages;
  //const indexFirstPage = indexLastPage - perPages;
  //const currentPages = users.slice(indexFirstPage, indexLastPage);
  //const npage = Math.ceil(users.length / perPages);
  //const number = [...Array(npage + 1).keys()].slice(1);

  const columns = Object.keys(users[0]);

  const searchBar = (e) => {
    if (e.target.value !== "") {
      const dataFiltered = users.filter((row) =>
        columns.some((column) =>
          String(row[column])
            .toLowerCase()
            .startsWith(e.target.value.toLowerCase())
        )
      );
      setFilterByName(dataFiltered);
    } else {
      setFilterByName(users);
    }
  };
  //useEffect(() => {
  //if (value !== "") {
  //const res = currentPages.filter((item) =>
  //item.name.toLocaleLowerCase().startsWith(value)
  //);

  //setFilterByName(res);
  //} else {
  //setFilterByName(currentPages);
  //}
  //}, [currentPages]);

  function handelSort(clmName) {
    const sortedData = [...filterByName].sort((a, b) => {
      const columnA = String(a[clmName]).toLowerCase();
      const columnB = String(b[clmName]).toLowerCase();

      if (columnA < columnB) return sortingOrderAsc ? -1 : 1;
      if (columnA > columnB) return sortingOrderAsc ? 1 : -1;
      return 0;
    });
    setFilterByName(sortedData);
    setSortingOrderAsc(!sortingOrderAsc);
    setColumName(clmName);
  }
  console.log(columName);
  const getAsc = (isAsc) => {
    isAsc ? <span>up</span> : <span>down</span>;
  };
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
          onChange={(e) => searchBar(e)}
        />

        <table>
          <thead>
            <tr>
              {columns.map((clm) => (
                <th onClick={() => handelSort(clm)}>
                  {clm}
                  {clm === columName ? getAsc(sortingOrderAsc) : ""}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filterByName.map((tab) => (
              <tr>
                {columns.map((row) => (
                  <td>{tab[row]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TabelData;

/*

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

*/

import { useState } from "react";

export const useDataTable = (data) => {
  const [filteredData, setFilteredData] = useState(data);

  const [sortedColumnName, setSortedColumnName] = useState("");
  const [sortingOrderAsc, setSortingOrderAsc] = useState(true);

  const columns = Object.keys(data[0]);

  const handleSort = (columnName) => {
    const sortedData = [...filteredData].sort((a, b) => {
      const columnA = String(a[columnName]).toLowerCase();
      const columnB = String(b[columnName]).toLowerCase();

      if (columnA < columnB) return sortingOrderAsc ? -1 : 1;
      if (columnA > columnB) return sortingOrderAsc ? 1 : -1;
      return 0;
    });

    setSortedColumnName(columnName);
    setSortingOrderAsc(!sortingOrderAsc);

    setFilteredData(sortedData);
  };

  const handleFilter = (e) => {
    const filteredDatas = data.filter((row) =>
      columns.some((column) =>
        String(row[column]).toLowerCase().includes(e.target.value.toLowerCase())
      )
    );

    setFilteredData(filteredDatas);
  };

  return {
    filteredData,
    sortedColumnName,
    sortingOrderAsc,
    columns,
    handleSort,
    handleFilter,
  };
};

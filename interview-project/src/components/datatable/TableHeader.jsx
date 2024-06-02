import { Thead, Tr, Th } from "@chakra-ui/react";

export const TableHeader = ({
  columns,
  handleSort,
  getSortIcon,
  sortedColumnName,
  sortingOrderAsc,
}) => {
  return (
    <Thead>
      <Tr>
        {columns.map((column) => (
          <Th key={column} cursor="pointer" onClick={() => handleSort(column)}>
            {column}{" "}
            {column === sortedColumnName ? getSortIcon(sortingOrderAsc) : ""}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

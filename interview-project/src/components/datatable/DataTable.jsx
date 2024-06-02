import { Table, TableContainer, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { TableSearch } from "./TableSearch";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { useDataTable } from "./hooks/useDataTable";

const getSortIcon = (isAsc) =>
  isAsc ? <ChevronDownIcon /> : <ChevronUpIcon />;

export const DataTable = ({ data, title }) => {
  const {
    filteredData,
    columns,
    sortedColumnName,
    sortingOrderAsc,
    handleFilter,
    handleSort,
  } = useDataTable(data);

  return (
    <TableContainer>
      <Text fontSize="3xl">{title}</Text>
      <TableSearch handleFilter={handleFilter} />
      <Table variant="simple">
        <TableHeader
          sortedColumnName={sortedColumnName}
          sortingOrderAsc={sortingOrderAsc}
          columns={columns}
          handleSort={handleSort}
          getSortIcon={getSortIcon}
        />
        <TableBody filteredData={filteredData} columns={columns} />
      </Table>
    </TableContainer>
  );
};

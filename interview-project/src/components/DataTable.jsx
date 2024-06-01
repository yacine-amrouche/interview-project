import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";

/*
- Dispaly data in a table
- Search data
- Sort data
- Pagination
*/

export const DataTable = ({ data, title }) => {
  const columns = Object.keys(data[0]);

  return (
    <TableContainer>
      <Text fontSize="3xl">{title}</Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column}>{column}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={`table-row-${index}`}>
              {columns.map((columnName, i) => (
                <Td key={`table-cell-${index}-${i}`}>{row[columnName]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

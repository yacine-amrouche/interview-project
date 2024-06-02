import { Tbody, Tr, Td } from "@chakra-ui/react";

export const TableBody = ({ filteredData, columns }) => {
  return (
    <Tbody>
      {filteredData.map((row, index) => (
        <Tr key={`table-row-${index}`}>
          {columns.map((columnName, i) => (
            <Td key={`table-cell-${index}-${i}`}>{row[columnName]}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

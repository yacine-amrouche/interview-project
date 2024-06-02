import { Input } from "@chakra-ui/react";

export const TableSearch = ({ handleFilter }) => {
  return <Input placeholder="Search ..." onChange={(e) => handleFilter(e)} />;
};

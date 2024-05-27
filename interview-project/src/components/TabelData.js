import { Tab } from "@chakra-ui/react";
import "./TabelData.css";

import { users } from "./users";

function TabelData() {
  return (
    <>
      {users.map((tab, index) => (
        <div className="table_data">
          <p key={index}>{tab.id}</p>
          <p key={index}>{tab.name}</p>
          <p key={index}>{tab.phone}</p>
          <p key={index}>{tab.email}</p>
        </div>
      ))}
    </>
  );
}
export default TabelData;

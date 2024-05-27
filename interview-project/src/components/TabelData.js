import { Tab } from "@chakra-ui/react";
import "./TabelData.css";

import { users } from "./users";

function TabelData() {
  return (
    <>
      <div className="table_container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((tab, index) => (
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

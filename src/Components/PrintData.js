import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { LOAD_ALL_USERS_DATA } from "../GraphQL/Queries";

const PrintData = () => {
  const [users, setUsers] = useState([]);
  const { error, isLoading, data } = useQuery(LOAD_ALL_USERS_DATA);

  useEffect(() => {
    if (data) {
      console.log("Data is : ", data);
      setUsers(data.getAllUserData);
    }
  }, [data]);

  return (
    <div>
      <h2>Printing Name of every user</h2>
      {users?.map((user) => (
        <h4>{`${user?.firstName} ${user?.lastName}`}</h4>
      ))}
    </div>
  );
};

export default PrintData;

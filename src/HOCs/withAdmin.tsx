import React, { useEffect, useState } from "react";
import { getCurrentUser } from "./mock";

const withAdmin = <T extends Object>(Component: React.FC<T>) => {
  return (props: T) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setIsLoading(true);
      getCurrentUser()
        .then((user) => {
          setIsAdmin(user.isAdmin);
        })
        .catch(() => setIsAdmin(false))
        .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return isAdmin ? <Component {...props} /> : <div>You are not admin 🔐</div>;
  };
};

export default withAdmin;

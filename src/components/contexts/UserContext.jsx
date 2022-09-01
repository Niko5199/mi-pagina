import { createContext, useEffect, useState } from "react";

const userContext = {
  devToUserName: "uriel_hedz",
  articlesFromDevTo: [],
};

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userContext);

  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch(
        "https://dev.to/api/articles?username=" + user.devToUserName
      );
      const articles = await response.json();
      setUser({ ...user, articlesFromDevTo: articles });
    }
    fetchDevTo();
  }, [user.devToUserName]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

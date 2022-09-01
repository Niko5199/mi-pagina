import { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../collections/Buttons";
import { UserContext } from "../contexts/UserContext";

const DevChanger = ({ className }) => {
  const [user, setUser] = useContext(UserContext);

  function changeUserName() {
    const newUserName =
      user.devToUserName === "uriel_hedz" ? "microsoft" : "uriel_hedz";
    setUser({ ...user, devToUserName: newUserName });
  }

  return (
    <div className={className}>
      <p>
        Tambien puedes
        <SecondaryButton onClick={changeUserName}>
          Ver los{" "}
          {user.devToUserName === "uriel_hedz" ? "de mi trabajo" : "mios"}
        </SecondaryButton>
      </p>
    </div>
  );
};

export default styled(DevChanger)``;

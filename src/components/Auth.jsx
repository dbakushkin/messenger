import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button"

const Auth = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <span>{user.name}</span>
        <Button onClick={() => logout()}>Выйти</Button>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={() => loginWithRedirect()}>Войти</Button>
    </div>
  );
};

export default Auth;

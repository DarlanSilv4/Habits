import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../services/firebase";

function PrivateRoute({ component: Component, ...rest }) {
  const [user, loading, error] = useAuthState(auth);

  if (error) {
    <div>
      <p>Error: {error.message}</p>
    </div>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  return <Redirect to={"/"} />;
}

export default PrivateRoute;

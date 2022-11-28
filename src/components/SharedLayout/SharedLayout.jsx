import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Container, Link} from "./SharedLayout.styled";




const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
          </nav>
        </Container>
      </Header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout
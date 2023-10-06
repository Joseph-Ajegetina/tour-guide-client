import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Spinner from "react-bootstrap/Spinner";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    setIsLoading(true);
    authService
      .login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section className="vh-100 gradient-custom">
      {!isLoading ? (
        <>
          {errorMessage && (
            <ToastContainer
              className="p-3 mt-4"
              position="top-center"
              style={{ zIndex: 1 }}
            >
              <Toast bg="danger" className="mt-4">
                <Toast.Header closeButton={false}>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Message</strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body className="text-white">{errorMessage}</Toast.Body>
              </Toast>
            </ToastContainer>
          )}
          <Container className="py-5 h-100">
            <Row className="d-flex justify-content-center align-items-center h-100">
              <Col md={8} xl={5}>
                <Card
                  style={{ borderRadius: "1rem" }}
                  className="card bg-dark text-white"
                >
                  <Card.Body className="p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
                      <Form onSubmit={handleLoginSubmit}>
                        <Form.Floating className="mb-4">
                          <Form.Control
                            className="bg-dark text-white"
                            id="floatingInputCustom"
                            type="email"
                            value={email}
                            onChange={handleEmail}
                            placeholder="name@example.com"
                          />
                          <label htmlFor="floatingInputCustom">
                            Email address
                          </label>
                        </Form.Floating>
                        <Form.Floating className="mb-4">
                          <Form.Control
                            className="bg-dark text-white"
                            value={password}
                            onChange={handlePassword}
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                          />
                          <label htmlFor="floatingPasswordCustom">
                            Password
                          </label>
                        </Form.Floating>
                        <Button
                          variant="primary"
                          type="submit"
                          className="btn-outline-light btn-lg px-5"
                        >
                          Login
                        </Button>
                      </Form>
                    </div>

                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-white-50 fw-bold">
                          Sign Up
                        </Link>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <Container className="py-5 h-100">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="grow" size="lg" />
          </Row>
        </Container>
      )}
    </section>
  );
}

export default LoginPage;

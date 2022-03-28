// Packages
import * as React from "react";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Relatives
import Layout from "../../components/Layout/";
import "./styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const Logo = "/assets/images/logo.png";

function Search() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="w-50 mt-5 m-auto text-center">
        <img width={150} src={Logo} alt="Logo Dc Comics Brand" />
        <h2 className="dc-title">Dc Comics</h2>
        <InputGroup className="mt-5" size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Search hero by name
          </InputGroup.Text>
          <FormControl
            placeholder="Hero name"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
          <Button>Search <i className="bi bi-search"></i></Button>
        </InputGroup>
        <br />
        <Card className="w-50 m-auto mt-5">
          <Card.Body>
            <p className="text-primary">Go back to the home page?</p>
            <Button onClick={handleBackToHome} variant="dark">
                <i className="bi bi-arrow-left-circle"></i> Back
            </Button>
          </Card.Body>
        </Card>
      </div>
    </Layout>
  );
}

export default Search;

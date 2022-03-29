// Packages
import React, { useState } from "react";
import { Button, InputGroup, FormControl, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";

// Relatives
import Layout from "../../components/Layout/";
import "./styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const Logo = "/assets/images/logo.png";

function Search() {
  const navigate = useNavigate();
  const [name, setName] = useState("flash");
  const [hero, setHero] = useState([]);

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleSearchByName = async () => {
    const heroResponse = await axios.get(
      `https://superheroapi.com/api/2951528371814120/search/${name}`,
      {
        headers: new Headers(),
        "not-cors": true
      }
    );

    const { response, results } = heroResponse;

    if (response) {
      setHero(results);
    }
  };

  return (
    <Layout>
      <div className="w-50 mt-5 m-auto text-center">
        <img width={150} src={Logo} alt="Logo Dc Comics Brand" />
        <h2 className="dc-title">Dc Comics</h2>
        <InputGroup className="mt-5" size="lg">
          <InputGroup.Text
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="inputGroup-sizing-lg"
          >
            Search hero by name
          </InputGroup.Text>
          <FormControl
            placeholder="Hero name"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
          <Button onClick={handleSearchByName}>
            Search <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
        <br />
        <Card className={`w-75 m-auto mt-5 ${ isEmpty(hero) ? 'visually-hidden' : 'show' }`}>
          <Card.Body>
            { !isEmpty(hero) && hero.map(person => (
              <div>
                <img src={person.image.url} alt={person.name} />  
                <h3>{ person.name }</h3>
              </div>
             )) }
          </Card.Body>
        </Card>
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

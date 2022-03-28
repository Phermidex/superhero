// Packages
import * as React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Relatives
import Layout from "../../components/Layout/";
import "./styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const Logo = "/assets/images/logo.png";

function Home() {

  const navigate = useNavigate();

  const handleToSearch = () => {
    navigate('/search');
  }

  return (
    <Layout>
      <div className="w-50 mt-5 m-auto text-center">
        <img width={150} src={Logo} alt="Logo Dc Comics Brand" />
        <h2 className="dc-title">Dc Comics</h2>
        <p className="mt-3 h3">
          Search your favorite hero,
          <br />
          with this simple app that will help you find it
        </p>
        <br />
        <Button onClick={handleToSearch} ><i className="bi bi-tornado"></i> Yes, please</Button>
      </div>
    </Layout>
  );
}

export default Home;

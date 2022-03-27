// Packages
import * as React from "react";
import { Button } from 'react-bootstrap';

// Relatives
import Layout from "../../components/Layout/Layout";
import "./styles/index.scss";

const Logo = "/assets/images/logo.png";

function Home() {
  return (
    <Layout>
      <div className="w-50 mt-5 m-auto text-center">
      <img width={150} src={Logo} alt="Logo Dc Comics Brand" />
      <h2 className="dc-title">Dc Comics</h2>
      <p className="mt-3">
      Search your favorite hero using this simple app that will help you find it
              </p>    
              <hr />
              <Button>
                  Find my hero
              </Button>
      </div>
    </Layout>
  );
}

export default Home;

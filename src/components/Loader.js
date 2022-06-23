import React from "react";
import { Spinner, Container } from "react-bootstrap";


const Loader = () => {
  return (
    <Container>
      <Spinner
        animation="border"
        role="status"
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      >
          <span className='sr-only'>Loading...</span>
      </Spinner>
    </Container>
  );
};

export default Loader;

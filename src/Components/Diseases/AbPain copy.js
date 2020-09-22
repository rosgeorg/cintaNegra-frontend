import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

import AbForm from "../Forms/AbForm";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button
        style={{ margin: "1rem", color: "white", backgroundColor: "#089fc6" }}
        onClick={toggle}
      >
        Ab Pain
      </Button>
      <Collapse isOpen={isOpen}>
        <Card style={{ height: "100%" }}>
          <CardBody>
            <AbForm />
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Example;

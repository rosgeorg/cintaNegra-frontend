import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import AbForm from "../Forms/AbForm";

const DisForm = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{ margin: "1rem", color: "white", backgroundColor: "#089fc6" }}
        onClick={toggle}
      >
        Ab Pain
      </Button>
      <Modal size="xl" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Update Data</ModalHeader>
        <ModalBody>
          <AbForm />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DisForm;

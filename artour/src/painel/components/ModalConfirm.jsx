import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalConfirm({ mensage, onConfirm, open, setClose }) {
  const [openModal, setOpenModal] = useState(open);
  const [mensageModal, setMensageModal] = useState(mensage);

    function setCloseModal(){
        setOpenModal(false);
        setClose(openModal);
    }

  return (
    <>
      <Modal show={openModal} onHide={setClose}>
        <Modal.Header closeButton>
          <Modal.Title>Atenção !</Modal.Title>
        </Modal.Header>
        <Modal.Body>{mensageModal}</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={setClose}>
            Fechar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              onConfirm();
              setClose;
            }}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirm;

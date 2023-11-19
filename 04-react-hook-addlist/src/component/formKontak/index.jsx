import { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useAppState } from "../../contexts/useAppState.jsx";
import { addKontak, getKontakList } from "../../actions/kontakAction.jsx";

function FormKontak(props) {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const [state, dispatch] = useAppState();
  const { addKontakResult, addKontakLoading, detailKontakResult } = state;
  const setTitle = () => {
    let title = id ? "Edit Kontak" : "Add Kontak";
    if (addKontakLoading) {
      title = "Loading...";
    }
    return title;
  };

  useEffect(() => {
    if (addKontakResult) {
      getKontakList(dispatch);
      setNama("");
      setNohp("");
      setId("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk handle submit");
    if (id) {
      // edit kontak
    } else {
      // add kontak
      if (addKontak(dispatch, { nama, nohp })) {
        props.onHide();
      }
    }
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {setTitle()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Row>
                <Col xs={5}>
                  <input
                    className="form-control"
                    type="text"
                    name="nama"
                    id="nama"
                    placeholder="Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </Col>
                <Col>
                  <input
                    className="form-control"
                    type="text"
                    name="nohp"
                    id="nohp"
                    placeholder="nohp"
                    value={nohp}
                    onChange={(e) => setNohp(e.target.value)}
                  />
                </Col>
                <Col>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </Col>
              </Row>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

FormKontak.propTypes = {
  onHide: () => {},
};

export default FormKontak;

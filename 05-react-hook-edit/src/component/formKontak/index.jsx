import { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { useAppState } from "../../contexts/useAppState.jsx";
import {
  addKontak,
  getKontakList,
  updateKontak,
} from "../../actions/kontakAction.jsx";

function FromKontak(props) {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");
  const [state, dispatch] = useAppState();
  const {
    addKontakResult,
    addKontakLoading,
    detailKontakResult,
    updateKontakResult,
  } = state;
  const setTitle = () => {
    let title = id ? "Edit Kontak" : "Add Kontak";
    if (addKontakLoading) {
      title = "Loading...";
    }
    return title;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      // edit process
      if (updateKontak(dispatch, { id, nama, nohp })) {
        props.onHide();
      }
    } else {
      // add process
      if (addKontak(dispatch, { nama, nohp })) {
        props.onHide();
      }
    }
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
      setNohp(detailKontakResult.nohp);
      setNama(detailKontakResult.nama);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult]);

  useEffect(() => {
    if (updateKontakResult) {
      getKontakList(dispatch);
      setNohp("");
      setNama("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

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
              </Row>
              <Col>
                <button className="btn btn-primary mt-2" type="submit">
                  Submit
                </button>
              </Col>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

FromKontak.propTypes = {
  onHide: () => {},
};

export default FromKontak;

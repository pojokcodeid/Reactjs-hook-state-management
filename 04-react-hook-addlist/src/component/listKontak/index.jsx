import React, { useEffect } from "react";
import { useAppState } from "../../contexts/useAppState.jsx";
import { detailKontak, getKontakList } from "../../actions/kontakAction.jsx";
import { Button, Table } from "react-bootstrap";
import FormKontak from "../formKontak/index.jsx";

function ListKontak() {
  const [modalShow, setModalShow] = React.useState(false);
  const [state, dispatch] = useAppState();
  const {
    getKontakResult,
    getKontakLoading,
    addKontakLoading,
    getKontakError,
  } = state;
  useEffect(() => {
    getKontakList(dispatch);
  }, [dispatch]);
  return (
    <div>
      <FormKontak show={modalShow} onHide={() => setModalShow(false)} />
      <div>
        <Button
          variant="primary btn-sm me-3"
          onClick={() => {
            detailKontak(dispatch, { id: null, nama: "", nohp: "" }),
              setModalShow(true);
          }}
        >
          Tambah
        </Button>
        {addKontakLoading ? "Loading ..." : null}
      </div>
      <Table className="mt-3" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {getKontakResult ? (
            getKontakResult.map((kontak, index) => {
              return (
                <tr key={kontak.id}>
                  <td>{index + 1}</td>
                  <td>{kontak.nama}</td>
                  <td>{kontak.nohp}</td>
                  <td>Action ...</td>
                </tr>
              );
            })
          ) : getKontakLoading ? (
            <tr>
              <td colSpan={4}>Loading ...</td>
            </tr>
          ) : (
            <tr>
              <td colSpan={4}>
                {getKontakError ? getKontakError : "Data Not Found"}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ListKontak;

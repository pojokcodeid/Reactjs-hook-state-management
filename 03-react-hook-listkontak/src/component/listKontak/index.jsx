import { useEffect } from "react";
import { useAppState } from "../../contexts/useAppState.jsx";
import { getKontakList } from "../../actions/kontakAction.jsx";
import { Table } from "react-bootstrap";

function ListKontak() {
  const [state, dispatch] = useAppState();
  const { getKontakResult, getKontakLoading, getKontakError } = state;
  useEffect(() => {
    getKontakList(dispatch);
  }, [dispatch]);
  return (
    <div>
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

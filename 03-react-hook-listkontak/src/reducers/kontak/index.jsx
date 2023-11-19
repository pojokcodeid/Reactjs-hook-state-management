import { GET_KONTAK_LIST } from "../../actions/kontakAction.jsx";

const kontak = (state, action) => {
  const { type } = action;
  switch (type) {
    case GET_KONTAK_LIST:
      return {
        ...state,
        getKontakResult: action.payload.data,
        getKontakLoading: action.payload.loading,
        getKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;

import {
  ADD_KONTAK,
  DETAIL_KONTAK,
  GET_KONTAK_LIST,
} from "../../actions/kontakAction.jsx";

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
    case ADD_KONTAK:
      return {
        ...state,
        addKontakResult: action.payload.data,
        addKontakLoading: action.payload.loading,
        addKontakError: action.payload.errorMessage,
      };
    case DETAIL_KONTAK:
      return {
        ...state,
        detailKontakResult: action.payload.data,
      };
    default:
      return state;
  }
};

export default kontak;

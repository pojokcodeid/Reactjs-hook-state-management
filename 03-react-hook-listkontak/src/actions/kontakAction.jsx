import axios from "axios";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";

export const getKontakList = async (dispatch) => {
  dispatch({
    type: GET_KONTAK_LIST,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });

  try {
    const response = await axios.get("http://localhost:3000/kontaks", {
      timeout: 120000,
    });
    dispatch({
      type: GET_KONTAK_LIST,
      payload: {
        loading: false,
        data: response.data,
        errorMessage: false,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_KONTAK_LIST,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
    });
  }
};

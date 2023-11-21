import axios from "axios";

export const GET_KONTAK_LIST = "GET_KONTAK_LIST";
export const ADD_KONTAK = "ADD_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";

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

export const addKontak = async (dispatch, data) => {
  let myData = null;
  dispatch({
    type: ADD_KONTAK,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });
  try {
    const response = await axios.post("http://localhost:3000/kontaks", data, {
      timeout: 120000,
    });
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: false,
        data: response.data,
        errorMessage: false,
      },
    });
    myData = response.data;
  } catch (error) {
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
    });
  }
  return myData;
};

export const detailKontak = (dispatch, data) => {
  dispatch({
    type: DETAIL_KONTAK,
    payload: {
      data: data,
    },
  });
};

export const updateKontak = async (dispatch, data) => {
  let myData = null;
  dispatch({
    type: UPDATE_KONTAK,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });
  try {
    const response = await axios.put(
      `http://localhost:3000/kontaks/${data.id}`,
      data,
      {
        timeout: 120000,
      }
    );
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: false,
        data: response.data,
        errorMessage: false,
      },
    });
    myData = response.data;
  } catch (error) {
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
    });
  }
  return myData;
};

export const deleteKontak = async (dispatch, data) => {
  let myData = null;
  dispatch({
    type: DELETE_KONTAK,
    payload: {
      loading: true,
      data: false,
      errorMessage: false,
    },
  });
  try {
    const response = await axios.delete(
      `http://localhost:3000/kontaks/${data.id}`,
      {
        timeout: 120000,
      }
    );
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: false,
        data: response.data,
        errorMessage: false,
      },
    });
    myData = response.data;
  } catch (error) {
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: false,
        data: false,
        errorMessage: error.message,
      },
    });
  }
  return myData;
};

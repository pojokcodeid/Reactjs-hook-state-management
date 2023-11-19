import kontakReducers from "./kontak";
const initialState = {
  getKontakResult: false,
  getKontakLoading: false,
  getKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  detailKontakResult: false,
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: state[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  kontakReducers,
});

export { initialState, appReducers, combineReducers };

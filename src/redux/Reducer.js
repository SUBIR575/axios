import { FEATCHDATA, FEATCHFAIL, FEATCHSUCCESS } from "./Type";

const initialstate = {
  data: [],
  error: null,
  loading: false,
};
const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case FEATCHDATA:
      return {
        ...state,
        loading: true,
      };
    case FEATCHSUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FEATCHFAIL:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;

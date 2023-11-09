import {
  takeLatest,
  all,
  put,
  call,
  fork,
  takeEvery,
} from "redux-saga/effects";
import { feathingdata, faildataload } from "./Action";
import { FEATCHDATA, FEATCHFAIL, FEATCHSUCCESS } from "./Type";
import api from "../Api";


export function* onfetchdatasuccess() {
  try {
    const products = yield call(api.get, "/pokemon");
    yield put(feathingdata(products.data))
  } catch (error) {
    yield put(faildataload(error));
  }
}
export function* onfetchdata() {
  yield takeEvery(FEATCHDATA, onfetchdatasuccess);
}

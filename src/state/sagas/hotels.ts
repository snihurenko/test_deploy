import { all, call, put, takeLatest } from "redux-saga/effects";
import { getHotels, postHotel } from "../../api/hotels";
import { HotelsType } from "../actions/types";


function* loadHotels(): Generator {
  try {
    const response: any = yield call(getHotels);
    console.log(response);

    yield put ({
      type: HotelsType.GET_ALL_SUCCESS,
      payload: response.data
    });

  } catch(err) {
    console.log(err);
  }
};

function* watchLoadHotels() {
  yield takeLatest(HotelsType.GET_All_REQUEST, loadHotels);
}

function* addHotel({ payload }: any): Generator {
  try {
    const response: any = yield call(postHotel, payload);
    console.log(response);

    if (response.ok) {
      yield put ({
        type: HotelsType.ADD_HOTEL_SUCCESS,
        payload: {
          ...payload,
          id: response.data.objectId
        }
      });
    }
  } catch(err) {
    console.log(err);
  }
};

function* watchAddHotel() {
  yield takeLatest(HotelsType.ADD_HOTEL_REQUEST, addHotel);
}

export default function* () {
  yield all([
    watchLoadHotels(),
    watchAddHotel()
  ]);
}

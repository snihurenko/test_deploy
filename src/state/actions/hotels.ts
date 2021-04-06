import { getHotels, Hotel, postHotel } from '../../api/hotels';
import { HotelsType } from './types';

export const loadHotels = () => async (dispatch: any) => {
  dispatch ({
    type: HotelsType.GET_All_REQUEST,
  });

  try {
    const res = await getHotels();

    dispatch ({
      type: HotelsType.GET_ALL_SUCCESS,
      payload: res.data
    });

  } catch (err) {
    dispatch ({
      type: HotelsType.GET_ALL_FAIL,
      payload: err
    });
  }
};

export const createHotel = (hotel: Hotel) => async (dispatch: any) =>  {
  dispatch ({
    type: HotelsType.ADD_HOTEL_REQUEST,
  });

  try {
    const res = await postHotel(hotel);

    dispatch ({
      type: HotelsType.ADD_HOTEL_SUCCESS,
      payload: {
        ...hotel,
        id: res.data.objectId
      }
    });

  } catch (err) {
    dispatch ({
      type: HotelsType.ADD_HOTEL_FAIL,
      payload: err
    });
  }
}

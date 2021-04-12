import * as actions from '../../actions/hotels';
import reducer from '../hotelsReducer';
import { Hotel } from '../../../api/hotels';

const initialState = {
  loading: false,
  items: [],
  itemsCount: 0,
  total: 0
};

describe('Hotel Reducer Tests', () => {
  it('Should return initialState by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should be loading true when creating new hotel', () => {
    const actionToAddHotelData = actions.createHotel({
      name: 'new hotel',
      description: 'aaa',
      phone: '3806869752'
    } as Hotel)

    expect(reducer(initialState, actionToAddHotelData).loading).toBe(true);
  });
});

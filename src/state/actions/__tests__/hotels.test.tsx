import * as actions from '../hotels';
import { HotelsType } from '../types';

describe('Hotels Actions', () => {
  it('should create action for all hotels', () => {
    const expectResult = {
      type: HotelsType.GET_All_REQUEST
    }

    expect(actions.loadHotels()).toEqual(expectResult);
  });
});

import { UPDATE_CALCULATION_AND_RESULT, CLEAR_ALL} from './constant';

const initialState = {
	calculation: [],
	result: 0
};

const CReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_CALCULATION_AND_RESULT:
			return {
				calculation: action.payload.calculation,
				result: action.payload.result
			};
		case CLEAR_ALL:
			return {
				calculation: [],
				result:0
			};
		default:
			return state;
	}
};

export default CReducer;
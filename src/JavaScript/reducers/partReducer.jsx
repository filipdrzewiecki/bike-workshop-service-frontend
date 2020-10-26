import { FETCH_BICYCLE_PART, ADD_BICYCLE_PART, FETCH_PARTS, FETCH_PART} from '../actions/bicycleOperationTypes.jsx'

export default (state={}, action) => {
    switch(action.type) {
        case FETCH_BICYCLE_PART:
            return { ...state, part: action.payload};
        case ADD_BICYCLE_PART:
            return { ...state, [action.payload.id]: action.payload};
        case FETCH_PART:
            return { ...state, part: action.payload};
        case FETCH_PARTS:
            return { ...state, parts: action.payload};
        
        default:
            return state;
        }
};
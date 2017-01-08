import * as ACTION from '../actions/objectsActions';
import * as actionsUtils from '../actions/actionsUtils';

const INITIAL_STATE = {fetchedObjects:[], storageValue:0};

export default function (state = INITIAL_STATE, action) {
  let payload = action.payload;
  let error;
  switch (action.type) {
    case actionsUtils.CONFIRM:
    {
      return Object.assign({}, state, {
        isConfirmed: true
      });
    }
          
    case ACTION.FETCH_OBJECTS_REQUEST:
      return Object.assign(
          {},
          state,
          {
          isLoading: true,
        }
      );
    
    case ACTION.FETCH_OBJECTS_SUCCESS:
      return Object.assign(
          {},
          state,
          {
           isLoading: false,
           fetchedObjects: payload.objects
      });
    case ACTION.INCREMENT_VALUE:
        payload++;
      return Object.assign(
          {},
          state,
          {
            storageValue: payload
          });
    case ACTION.FETCH_OBJECTS_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state,
        objectsList: {objects: [], error: error, loading: false} 
      };

    default:
      return state;
  }
}

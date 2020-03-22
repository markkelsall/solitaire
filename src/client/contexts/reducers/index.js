import showNext from './showNext';
import reset from './reset';
import moveCardToFoundation from './moveCardToFoundation';

export default (state, action) => {
  switch (action.type) {
    case 'SHOW_NEXT': {
      return showNext(state);
    }
    case 'RESET': {
      return reset(state);
		}
		case 'MOVE_CARD_TO_FOUNDATION': {
			return moveCardToFoundation(state, action);
		}
    default:
      return state;
  }
};

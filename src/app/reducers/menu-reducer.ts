export const SET_MENU_STATE = 'SET_MENU_STATE';
 
export function MenuReducer(state: boolean, action) {
    switch (action.type) {
        case SET_MENU_STATE:
            return action.payload;
        default:
            return state;
    } 
}

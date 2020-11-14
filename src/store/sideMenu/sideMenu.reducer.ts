import { Reducer } from 'redux';
import { SideMenuActions, GET_SUB_MENU_TITLE } from './sideMenu.action';

export interface InitialState {
  sideMenuTitle: string;
}

export const initialState: InitialState = {
  sideMenuTitle: '서브메뉴 1',
};

export const getSubMenuTitle = (title: string) => ({
  type: GET_SUB_MENU_TITLE,
  payload: {
    sideMenuTitle: title,
  },
});

export const sideMenuReducer: Reducer<InitialState, SideMenuActions> = (
  state = initialState,
  action: SideMenuActions
) => {
  switch (action.type) {
    case GET_SUB_MENU_TITLE:
      return {
        ...state,
        sideMenuTitle: action.payload.sideMenuTitle,
      };
    default:
      return state;
  }
};

export default sideMenuReducer;

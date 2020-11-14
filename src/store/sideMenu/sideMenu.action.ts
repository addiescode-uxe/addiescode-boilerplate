export const GET_SUB_MENU_TITLE = 'sidemenu/GET_SUB_MENU_TITLE';

interface SideMenuPayload {
  sideMenuTitle: string;
}

interface SideMenuAction {
  type: typeof GET_SUB_MENU_TITLE;
  payload: SideMenuPayload;
}

export type SideMenuActions = SideMenuAction;

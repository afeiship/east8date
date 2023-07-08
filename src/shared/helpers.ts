import { GLOBAL_MENUS } from './constants';
import { uniq } from 'lodash';

export const getActiveKeys = (inPathname: string) => {
  const menus = GLOBAL_MENUS;
  const activeKeys = [inPathname];
  const activeMenu = menus.find((menu) => inPathname.includes(menu.key as string));
  if (activeMenu) activeKeys.push(activeMenu.key as string);
  return uniq(activeKeys);
};

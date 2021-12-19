import { bag, bagActive, home, homeActive } from 'assets/icons/navbar';

type MenuButtonTypes = {
  title: string;
  path: string;
  icon: string;
  iconActive: string;
};

export const MENU_BUTTONS: MenuButtonTypes[] = [
  {
    title: 'home',
    path: '/',
    icon: home,
    iconActive: homeActive,
  },
  {
    title: 'bag',
    path: '/bag',
    icon: bag,
    iconActive: bagActive,
  },
];

export interface IRoot {
  tabMenu: IMenu;
}

export interface IMenu {
  categories: Array<ICategory>;
}

export interface ICategory {
  categoryName: string;
  menuItems: Array<IMenuItem>;
}

export interface IMenuItem {
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemPosition: number;
}

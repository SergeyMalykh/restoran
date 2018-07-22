import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMenu } from './il-fornello.interface';

@Injectable()
export class IlFornelloService {
  constructor() {
    console.log(this.constructor.name + '.constructor');
  }

  public getMenu(): Observable<any> {
    const mockedMenuData: IMenu = {
      categories: [
        {
          categoryName: 'ANTIPASTI',
          menuItems: [
            {
              itemName: 'OLIVES',
              itemDescription:
                'Warm green and black olives with garlic, chillies, bay leaves, lemon',
              itemPrice: 7.95,
              itemPosition: 1
            },
            {
              itemName: 'CALAMARI GRIGLIA ALLA PUTTANESCA',
              itemDescription:
                'Grilled calamari, tomatoes, black olives, capers, lemon, olive oil',
              itemPrice: 13.95,
              itemPosition: 2
            },
            {
              itemName: 'GARLIC BREAD WITH CHEESE',
              itemDescription:
                'Toasted herb & garlic buttered bread topped with mozzarella',
              itemPrice: 7.75,
              itemPosition: 3
            }
          ]
        },
        {
          categoryName: 'INSALATE',
          menuItems: [
            {
              itemName: 'INSALATA ROMA',
              itemDescription:
                'Mixed greens, chèvre, toasted walnuts, sweety drop peppers, balsamic vinaigrette',
              itemPrice: 9.75,
              itemPosition: 1
            },
            {
              itemName: 'INSALATA DI BARBABIETOLE',
              itemDescription:
                'Arugula, beets, chèvre, toasted pecans, balsamic vinaigrette',
              itemPrice: 9.95,
              itemPosition: 2
            },
            {
              itemName: 'INSALATA CAPRESE',
              itemDescription:
                'Fresh mozzarella, tomatoes, basil, olive oil, balsamic drizzle',
              itemPrice: 12.0,
              itemPosition: 3
            }
          ]
        },
        {
          categoryName: 'PASTA',
          menuItems: [
            {
              itemName: 'PENNE CAPRI',
              itemDescription:
                'Grilled chicken, wild mushrooms, spinach, tomato, olive oil, garlic, shaved parmigiano reggiano',
              itemPrice: 18.5,
              itemPosition: 1
            },
            {
              itemName: 'PAPPARDELLE SALSICCIA',
              itemDescription:
                'Crumbled Italian sausage, cherry tomatoes, caramelized onions, olive oil, garlic',
              itemPrice: 18.45,
              itemPosition: 2
            },
            {
              itemName: 'LASAGNA',
              itemDescription:
                'Layered with bolognese sauce, mozzarella, béchamel, pomodoro sauce',
              itemPrice: 18.0,
              itemPosition: 3
            }
          ]
        }
      ]
    };

    return Observable.create(observer => {
      observer.next(mockedMenuData);
      observer.complete();
    });
  }
}

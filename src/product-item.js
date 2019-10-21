import list1 from '../stub/services/list-1.json'
import { map } from 'lodash'

export class ProductItem {
    constructor (item) {
        ProductItem.TOTAL_ITEMS += 1
        this.id = item.id
        this.params = item.params
        this.title = item.title
        this.costs = item.costs
        this.costsPerItem = this.costs / this.params.count
    }

  TOTAL_ITEMS = 0;

  inTrash = false;

  sendToTrash = () => {
      this.inTrash = true
  };

  getFromTrash = () => {
      this.inTrash = false
  };
}

ProductItem.TOTAL_ITEMS = 0

class Milk extends ProductItem {
  drink = () => console.log('Пью Молоко');
}
class Eggs extends ProductItem {
  fry = () => console.log('Жарю яйца');
}
class Bread extends ProductItem {
  cut = () => console.log('Режу хлеб');
}
class Beer extends ProductItem {
  drink = () => console.log('Пью пефко');
}
class Meat extends ProductItem {
  fry = () => console.log('Жарю мясо');
}

const items = map(list1, item => {
    switch (item.title) {
    case 'Мясо':
        return new Meat(item)
    case 'Яйца':
        return new Eggs(item)
    case 'Молоко':
        return new Milk(item)
    case 'Хлеб':
        return new Bread(item)
    case 'Пиво':
        return new Beer(item)
    }
})
console.log(items)

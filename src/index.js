import axios from 'axios'

import { ProductItem } from './product-item'
import {getTotalSum, totalWeight, namesCount, mainColor} from './calculation'

import style from './style.css'

axios({
    method: 'get',
    url: '/api/list'
})
    .then(response => {
        const list = response.data.map(item => new ProductItem(item))

        return Promise.resolve(list)
    })
    .then(list => {
        // Работа со списком параметров корзины
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        // Суммарный вес потребительской корзины
        statisticsNode.innerHTML =
      `<dt>Суммарный вес корзины</dt>` +
      `<dd class=${style.term}>${totalWeight(list)} кг</dd>` +
      `<dt>Кол-во элементов</dt>` +
      `<dd class=${style.term}>${list.length}</dd>` +
      `<dt>Кол-во наименований</dt>` +
      `<dd class=${style.term}>${namesCount(list)}</dd>` +
      `<dt>основной цвет корзины</dt>` +
      `<dd class=${style.term}>${mainColor(list)}</dd>` +
      `<dt>Сумма</dt>` +
      `<dd class=${style.term}>${getTotalSum(list)} Руб.</dd>` +
      `<dt>Стоимости каждого наименования</dt>` +
      // TODO: перенести в парсеры и сделать в виде ФП
      `<dd class=${style.term}>${list
          .map(({ title, costsPerItem }) => `${title} - ${costsPerItem}`)
          .join(', ')}</dd>`
        document.body.appendChild(statisticsNode)
    })
    // .catch((err) => {
    //     console.log(err)
    //     document.body.innerHTML = 'Сервис недоступен!'
    // })

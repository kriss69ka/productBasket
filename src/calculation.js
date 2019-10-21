import _ from 'lodash'

const summaryWidth = (memo, sum) => memo + sum
const getTotalWeight = ({ params: { weight, count } }) => weight * count

const mapWithWeight = _.partialRight(_.map, getTotalWeight)
const totalSum = _.partialRight(_.reduce, summaryWidth, 0)
export const totalWeight = _.flow([
    mapWithWeight,
    totalSum
])

const summary = (memo, sum) => memo + sum.costs
export const getTotalSum = _.partialRight(_.reduce, summary, 0)

export const namesCount = (itemList) => _.uniqBy(itemList, itemList.title).length

const length = (arr) => arr.length
export const mainColor = (itemList) => {
    const onlyColors = itemList.map((item) => {
        return item.params.color
    })
    const color = _.maxBy(_.values(_.groupBy(onlyColors)), length)[0]
    return color
}

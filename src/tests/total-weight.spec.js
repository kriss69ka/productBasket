import { totalWeight, getTotalSum, namesCount } from '../calculation'
import list from '../../stub/services/list-1.json'

describe('totalWeight', () => {
    it('No items - weight zero', () => {
        expect(totalWeight([])).toBe(0)
    })

    it('calculates total weight', () => {
        expect(totalWeight(list)).toBe(850)
    })
})

describe('getTotalSum', () => {
    it('No items - sum 0', () => {
        expect(getTotalSum([])).toBe(0)
    })

    it('calculates total sum', () => {
        expect(getTotalSum(list)).toBe(1550)
    })
})

describe('namesCount', () => {
    it('No items - 0 names', () => {
        expect(namesCount([])).toBe(0)
    })

    it('calucultes names count', () => {
        expect(namesCount(list)).toBe(5)
    })
})

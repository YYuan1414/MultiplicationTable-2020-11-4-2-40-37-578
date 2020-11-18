import {MultiplicationTable} from '../src/MultiplicationTable'

/* describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('1*1=1')
  })
}) */

/* describe('Multiplication Table', () => {
  it('should render multiplication table of (0, 10)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 10

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
}) */

/* describe('Multiplication Table', () => {
  it('should render nothing of (2, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
})
 */
describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 5)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 5

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6   3*3=9\n2*4=8   3*4=12  4*4=16\n2*5=10  3*5=15  4*5=20  5*5=25')
  })
})

/* describe('Multiplication Table', () => {
  it('should render multiplication table of (2, 3)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 3

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('2*2=4\n2*3=6  3*3=9')
  })
}) */


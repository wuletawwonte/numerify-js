import convert from '../src/index'

it('should convert 1 to geez', () => {
  expect(convert(1)).toBe('፩')
})

it('should convert 12 to geez', () => {
  expect(convert(12)).toBe('፲፪')
})

import NumeralFactory from './factory'

interface Options {
  to?: string
}

const convert = (
  inputNumber: number | string,
  options: Options = {}
): string => {
  const { to = 'geez' } = options
  const converter = NumeralFactory(+inputNumber, to)

  if (converter) {
    return converter.convert()
  } else {
    return `No converter for "${to}"`
  }
}

export default convert

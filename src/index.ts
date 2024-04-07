import NumeralFactory from './factory.js'

interface Options {
  to?: string
}

export default function convert(
  inputNumber: number | string,
  options: Options = {}
): string {
  const { to = 'geez' } = options
  const converter = NumeralFactory(+inputNumber, to)

  if (converter) {
    return converter.convert()
  } else {
    return `No converter for "${to}"`
  }
}

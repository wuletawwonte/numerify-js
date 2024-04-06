import Geez from './converter/geez.js'

export default function NumeralFactory(
  inputNumber: number | string,
  className: string
) {
  if (className === 'geez') {
    return new Geez(inputNumber)
  } else {
    return null
  }
}

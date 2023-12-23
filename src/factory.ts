import Geez from './converter/geez'

const NumeralFactory = (inputNumber: number | string, className: string) => {
  if (className === 'geez') {
    return new Geez(inputNumber)
  } else {
    return null
  }
}

export default NumeralFactory

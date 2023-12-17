import geez from './converter/geez.js';

interface ConvertFunctions {
  [key: string]: (number: number) => string;
}

const convertFunctions: ConvertFunctions = {
  geez: geez.convert
}

const convert = (inputNumber: number | string, to: string) => {
  const convertFunction = convertFunctions[to]

  if (convertFunction) {
    return convertFunction(+inputNumber)
  } else {
    throw new Error(`No converter for ${to}`)
  }
}

console.log(convert("1", 'geez'))

export default convert;

import geez from './converter/geez.js';

interface ConvertFunctions {
  [key: string]: (number: number) => string;
}

const convertFunctions: ConvertFunctions = {
  geez: geez.convert
}

const convert = (number: number, to: string) => {
  const convertFunction = convertFunctions[to]

  if (convertFunction) {
    return convertFunction(number)
  } else {
    throw new Error(`No converter for ${to}`)
  }
}

console.log(convert(1, 'geez'))

export default convert;

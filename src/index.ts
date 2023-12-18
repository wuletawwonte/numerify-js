import Geez from "./converter/geez.js";

interface ConvertFunctions {
  [key: string]: (number: number) => string;
}

const convertFunctions: ConvertFunctions = {
  geez: new Geez().convert,
};

const convert = (inputNumber: number | string, options: { to: string }) => {
  const { to } = options;
  const convertFunction = convertFunctions[to];

  if (convertFunction) {
    return convertFunction(+inputNumber);
  } else {
    throw new Error(`No converter for ${to}`);
  }
};

// console.log(convert("1", "geez"));

export default convert;

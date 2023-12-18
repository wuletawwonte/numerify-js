import Geez from "./converter/geez.js";

interface ConvertFunctions {
  [key: string]: (number: number) => string;
}

interface Options {
  to?: string;
}

const convertFunctions: ConvertFunctions = {
  geez: new Geez().convert,
};

const convert = (
  inputNumber: number | string,
  options: Options = {}
): string => {
  const { to = "geez" } = options;
  const convertFunction = convertFunctions[to];

  if (convertFunction) {
    return convertFunction(+inputNumber);
  } else {
    throw new Error(`No converter for ${to}`);
  }
};

// console.log(convert("1", "geez"));

export default convert;

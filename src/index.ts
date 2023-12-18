import Geez from "./converter/geez.js";

interface ConvertFunctions {
  [key: string]: (number: number) => string;
}

interface Options {
  to?: string;
}

const convertFunctions: ConvertFunctions = {
  geez: Geez.convert,
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
    return `No converter for "${to}"`;
  }
};

// console.log(convert("1", { to: "gez" }));

export default convert;

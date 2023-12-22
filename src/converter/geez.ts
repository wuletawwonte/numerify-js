import Base from "./base.js";

class Geez extends Base {
  NUMERALS = {
    0: "",
    1: "፩",
    2: "፪",
    3: "፫",
    4: "፬",
    5: "፭",
    6: "፮",
    7: "፯",
    8: "፰",
    9: "፱",
    10: "፲",
    20: "፳",
    30: "፴",
    40: "፵",
    50: "፶",
    60: "፷",
    70: "፸",
    80: "፹",
    90: "፺",
  };

  inputNumber: string;

  constructor(inputNumber: number | string) {
    super();
    this.inputNumber = inputNumber.toString();
  }

  convert(): string {
    // prepend 0 if the length of the inputNumber is odd
    if (this.inputNumber.length % 2 !== 0) {
      this.inputNumber = `0${this.inputNumber}`;
    }

    const groupedInput = this.groupByTwo(this.inputNumber);

    return this.inputNumber;
  }

  private groupByTwo(stringInput: string): string[] {
    stringInput.split("");
    const result = [];

    for (let i = 0; i < stringInput.length; i += 2) {
      result.push(stringInput.slice(i, i + 2));
    }

    return result;
  }
}

export default Geez;

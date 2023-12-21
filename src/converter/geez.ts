class Geez {
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

  inputNumber: number | string;

  constructor(inputNumber: number | string) {
    this.inputNumber = inputNumber;
  }

  convert(): string {
    this.inputNumber = this.inputNumber.toString();

    if (this.inputNumber.length % 2 !== 0) {
      this.inputNumber = `0${this.inputNumber}`;
    }

    return "geeziyo";
  }
}

export default Geez;

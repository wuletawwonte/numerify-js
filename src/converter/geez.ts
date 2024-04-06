import Base from './base.js'

export default class Geez extends Base {
  NUMERALS: { [key: string]: string } = {
    0: '',
    1: '፩',
    2: '፪',
    3: '፫',
    4: '፬',
    5: '፭',
    6: '፮',
    7: '፯',
    8: '፰',
    9: '፱',
    10: '፲',
    20: '፳',
    30: '፴',
    40: '፵',
    50: '፶',
    60: '፷',
    70: '፸',
    80: '፹',
    90: '፺',
  }

  private _inputNumber: string

  constructor(inputNumber: number | string) {
    super()
    this._inputNumber = inputNumber.toString()
  }

  convert(): string {
    // prepend 0 if the length of the inputNumber is odd
    if (this._inputNumber.length % 2 !== 0) {
      this._inputNumber = `0${this._inputNumber}`
    }

    const groupedInput = this.groupByTwo(this._inputNumber)
    return this.addDelimiter(groupedInput)
  }

  // Group the input string by two
  private groupByTwo(stringInput: string): string[] {
    stringInput.split('')
    const result = []

    for (let i = 0; i < stringInput.length; i += 2) {
      result.push(stringInput.slice(i, i + 2))
    }

    return result
  }

  private addDelimiter(groupedString: string[]): string {
    const lastIndex = groupedString.length - 1
    for (let i = lastIndex; i >= 0; i--) {
      if (i == lastIndex) {
        groupedString[i] = this.doubleDigitGeez(groupedString[i])
        continue
      }

      const delimiter = i % 2 === 0 ? '፻' : '፼'
      groupedString[i] =
        this.doubleDigitGeez(groupedString[i], +groupedString[i] === 1) +
        delimiter
    }

    return groupedString.join('')
  }

  private doubleDigitGeez(stringInput: string, skipOne = false): string {
    if (skipOne) {
      return ''
    }

    return stringInput
      .split('')
      .map((char, i) => {
        return i === 0
          ? this.singleDigitGeez(char.toString() + '0')
          : this.singleDigitGeez(char)
      })
      .join('')
  }

  private singleDigitGeez(stringInput: string): string {
    return this.NUMERALS[stringInput]
  }
}

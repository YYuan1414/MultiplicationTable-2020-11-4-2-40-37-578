import { kMaxLength } from 'buffer'
import { stringify } from 'querystring'
import { compileFunction } from 'vm'

export class MultiplicationTable {
  public render(start: number, end: number): string {
    if (!this.isValid(start, end)) return ''
    if (!this.isInRange(start, end)) {
      return ''
    }
    const multipleExpression = this.buildExpressions(start, end)


    const render = multipleExpression.map(row =>
      row.map(({ factor1, factor2, product }) => `${factor1}*${factor2}=${product}`).join('  ')).join('\n')
    const stringArray: string[][] = []
    const row = (render.split('\n'))
    for (let kk = 0; kk <= row.length - 1; kk++) {
      stringArray.push([])
      const element = row[kk].split('  ')
      for (let sk = 0; sk <= element.length - 1; sk++) {
        stringArray[kk][sk] = element[sk]
      }
    }



    const updatedRow = ''
    const updatedRender = ''
    for (let s = stringArray[stringArray.length - 1].length - 1; s >= 0; s--) {

      const lastRowElementNumber = stringArray[stringArray.length - 1][s].length
      for (let k = stringArray.length - 1; k >= s; k--) {
        if (stringArray[k][s].length - lastRowElementNumber === -1 ) {
          stringArray[k][s] = stringArray[k][s] + ' '
        }
      }

    }

    return stringArray.map(line=> line.join('  ')).map(line=>line.trimEnd()).join('\n')
  }

  private isValid(start: number, end: number): boolean {
    return end >= start
  }

  private isInRange(start: number, end: number): boolean {
    return (end >= 1) && (end <= 10) && (start >= 1) && (start <= 10)
  }

  private buildExpressions(start: number, end: number): Expression[][] {
    const string2DArray: Expression[][] = []
    for (let i = 0; i <= end - start; i++) {
      string2DArray[i] = []
      for (let j = 0; j <= i; j++) {
        string2DArray[i][j] = {
          factor1: start + j,
          factor2: start + i,
          product: (start + j) * (start + i),
        }
      }
    }
    return string2DArray
  }
}

interface Expression {
  factor1: number;
  factor2: number;
  product: number;
}



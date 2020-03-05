function rating(voyage, history) {
  return createRating(voyage, history).value
}

function createRating(voyage, history) {
  if (voyage.zone === "china" && history.some(v => "china" === v.zone)) return new ExperiencedChinaRating(voyage, history)
  else return new Rating(voyage, history)
}

// ポリモーフィズムを導入するにはクラス構造を作成する必要があるため
// 「関数軍のクラスへの集約」を行う
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage
    this.history = history
  }

  get value() {
    const vpf = this.voyageProfitFactor
    const vr = this.voyageRisk
    const chr = this.captainHistoryRisk
    if (vpf * 3 > (vr + chr * 2)) return "A"
    else return "B"
  }

  get voyageRisk() {
    let result = 1
    if (this.voyage.length > 4) result += 2
    if (this.voyage.length > 8) result += this.voyage.length - 8
    if (["china", "east-indies"].includes(this.voyage.zone)) result += 4
    return Math.max(result, 0)
  }

  get captainHistoryRisk() {
    let result = 1
    if (this.history.length < 5) result += 4
    result += this.history.filter(v => v.profit < 0)
    return Math.max(result, 0)
  }

  get hasChinaHistory() {
    return this.history.some(v => "china" === v.zone)
  }

  get voyageProfitFactor() {
    let result = 0
    if (this.voyage.zone === "china") result += 1
    if (this.voyage.zone === "east-indies") result += 1
    result += this.historyLengthFactor
    result += this.voyageLengthFactor
    return result
  }

  get historyLengthFactor() {
    return (this.voyage.length > 14) ? -1 : 0
  }

  get voyageLengthFactor() {
    return (this.voyage.length > 8) ? 1 : 0
  }
}

class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2
    return Math.max(result, 0)
  }

  get voyageAndHistoryLengthFactor() {
    let result = 0
    if (this.voyage.length > 12) result += 1
    if (this.voyage.length > 18) result -= 1
    return result
  }

  get historyLengthFactor() {
    return (this.history.length > 10) ? 1 : 0
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3
  }
}

function main() {
  const voyage = { zone: "west-indies", length: 10 }
  const history = [
    { zone: "east-indies", profit: 5 },
    { zone: "west-indies", profit: 15 },
    { zone: "china", profit: -2 },
    { zone: "west-africa", profit: 7 },
  ]
  const myRating = rating(voyage, history)
  console.log(myRating)
}

main()

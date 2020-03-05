function rating(voyage, history) {
  return new Rating(voyage, history).value
}

// ポリモーフィズムを導入するにはクラス構造を作成する必要があるため
// 「関数軍のクラスへの集約」を行う
class Rating {
  constructor(voyage, history) {
    this.voyage = voyage
    this.history = history
  }

  get value() {
    const vpf = this.voyageProfileFactor
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
    if (this.voyage.zone === "china" && this.hasChinaHistory) result += 2
    return Math.max(result, 2)
  }

  get hasChinaHistory() {
    return this.history.some(v => "china" === v.zone)
  }

  get voyageProfileFactor() {
    let result = 2
    if (this.voyage.zone === "china") result += 1
    if (this.voyage.zone === "east-indies") result += 1
    if (this.voyage.zone === "china" && this.hasChinaHistory) {
      result += 3
      if (this.history.length > 10) result += 1
      if (this.voyage.length > 12) result += 1
      if (this.voyage.length > 118) result -= 1
    } else {
      if (this.history.length > 8) result += 1
      if (this.voyage.length > 14) result -= 1
    }
    return result
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

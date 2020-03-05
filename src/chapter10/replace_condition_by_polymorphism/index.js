// スーパークラスのBirdは必要ない
// 各クラスがドメイン内でどのように関係しているかを説明できるため不要でもスーパークラスを残す方がいい
class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage() {
    return "unknown"
  }

  get airSpeedVelocity() {
    return null
  }
}

// 処理をオーバーライドしていく
class EuropeanSwallow extends Bird {
  get plumage() {
    return "average"
  }

  get airSpeedVelocity() {
    return 35
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return (this.numberOfCoconuts > 2) ? "tired" : "average"
  }

  get airSpeedVelocity() {
    return 42 - 2 * this.numberOfCoconuts
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return (this.voltage > 100) ? "scorched" : "beautiful"
  }

  get airSpeedVelocity() {
    return (this.isNailed) ? 0 : 10 + this.voltage / 10
  }
}

// bird.typeによって返す classを変える
function createBird(bird) {
  switch(bird.type) {
    case "EuropeanSwallow":
      return new EuropeanSwallow(bird)
    case "AfricanSwallow":
      return new AfricanSwallow(bird)
    case "NorwegianBlueParrot":
      return new NorwegianBlueParrot(bird)
    default:
        return new Bird(bird)
    }
}

function plumages(birds) {
  return new Map(birds
    .map(b => createBird(b))
    .map(bird => [bird.name, bird.plumage]))
}

function speeds(birds) {
  return new Map(birds
    .map(b => createBird(b))
    .map(bird => [bird.name, bird.airSpeedVelocity]))
}

function main() {
  const birds = [
    {
      name: 'tarou',
      type: "EuropeanSwallow",
      numberOfCoconuts: 0,
      isNailed: false,
      voltage: 0
    },
    {
      name: 'tarou2',
      type: "AfricanSwallow",
      numberOfCoconuts: 0,
      isNailed: false,
      voltage: 0
    },
    {
      name: 'tarou3',
      type: "NoBird"
    }
  ]

  console.log("plumages", plumages(birds))
  console.log("speeds", speeds(birds))
}

main()

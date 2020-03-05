class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject)
  }

  get plumage() {
    switch(this.type) {
    case "EuropeanSwallow":
      return "average"
    case "AfricanSwallow":
      return (this.numberOfCoconuts > 2) ? "tired" : "average"
    case "NorwegianBlueParrot":
      return (this.voltage > 100) ? "scorched" : "beautiful"
    default:
        return "unknown"
    }
  }

  get airSpeedVelocity() {
    switch(this.type) {
    case "EuropeanSwallow":
      return 35
    case "AfricanSwallow":
      return 42 - 2 * this.numberOfCoconuts
    case "NorwegianBlueParrot":
      return (this.isNailed) ? 0 : 10 + this.voltage / 10
    default:
        return null
    }
  }
}

function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]))
}

function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}

// Birdクラスに処理を集約させた
function plumage(bird) {
  return new Bird(bird).plumage
}

// Birdクラスに処理を集約させた
function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity
}

function main() {
  const bird = {
    type: "EuropeanSwallow",
    numberOfCoconuts: 0,
    isNailed: false,
    voltage: 0
  }

  console.log(plumage(bird))
  console.log(airSpeedVelocity(bird))
}

main()

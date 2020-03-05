function plumages(birds) {
  return new Map(birds.map(b => [b.name, plumage(b)]))
}

function speeds(birds) {
  return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}

function plumage(bird) {
  switch(bird.type) {
  case "EuropeanSwallow":
    return "average"
  case "AfricanSwallow":
    return (bird.numberOfCoconuts > 2) ? "tired" : "average"
  case "NorwegianBlueParrot":
    return (bird.voltage > 100) ? "scorched" : "beautiful"
  default:
      return "unknown"
  }
}

function airSpeedVelocity(bird) {
  switch(bird.type) {
  case "EuropeanSwallow":
    return 35
  case "AfricanSwallow":
    return 42 - 2 * bird.numberOfCoconuts
  case "NorwegianBlueParrot":
    return (bird.isNailed) ? 0 : 10 + bird.voltage / 10
  default:
      return null
  }
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

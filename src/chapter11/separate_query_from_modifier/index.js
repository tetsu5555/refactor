function alaertForMiscreant(people) {
  for (const p of people) {
    if(p === "Don") {
      setOffAlerms()
      return "Don"
    }
    if (p === "John") {
      setOffAlerms()
      return "John"
    }
    return ""
  }
}

// コピーして問い合わせの内容にちなんだ名前をつける
function findMiscreant(people) {
  for (const p of people) {
    if(p === "Don") {
      return "Don"
    }
    if (p === "John") {
      return "John"
    }
    return ""
  }
}

function setOffAlerms() {
  // alerm
  // 副作用あり
}

function main() {
  const people = []
  alaertForMiscreant(people)
}

main()

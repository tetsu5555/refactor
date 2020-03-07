function alartForMiscreant(people) {
  if (findMiscreant(people) !== "") setOffAlerms()
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
  }
  return ""
}

function setOffAlerms() {
  // alerm
  // 副作用あり
}

function main() {
  const people = []
  // 呼び出し側を調べて問い合わせの関数で呼び出し側を書き換え
  alartForMiscreant(people)
}

main()

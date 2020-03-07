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

function setOffAlerms() {
  // alerm
  // 副作用あり
}

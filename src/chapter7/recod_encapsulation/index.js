class Organization {
  constructor(data) {
    this.name = data.name
    this.country = data.country
  }

  // setterを生やす
  set name(aString) { this.name = aString }
  // getterを生やす
  get name() { return this.name }

  set country(aCountryCode) { this.country = aCountryCode }

  get country() { return this.country }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" })

// オブジェクトを返す関数を定義、これにgetetr,setterを生やして処理を置き換える
function getOrganization() { return organization }

function main() {
  let result = ""
  result += `<h1>${getOrganization().name}</h1>\n`

  getOrganization().name = "Hoge"

  result += `<h1>${getOrganization().name}</h1>`

  console.log(result)
}

main()

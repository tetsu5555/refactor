class Organization {
  constructor(data) {
    this._data = data
  }

  // setterを生やす
  set name(aString) { this._data.name = aString }
  // getterを生やす
  get name() { return this._data.name }
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

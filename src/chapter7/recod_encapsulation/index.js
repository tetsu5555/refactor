const organization = { name: "Acme Gooseberries", country: "GB" }

// オブジェクトを返す関数を定義
function getRawDataOrganization() { return organization; }

function main() {
  let result = ""
  result += `<h1>${getRawDataOrganization().name}</h1>\n`

  getRawDataOrganization().name = "Hoge"

  result += `<h1>${getRawDataOrganization().name}</h1>`

  console.log(result)
}

main()

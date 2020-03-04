function main() {
  const organization = { name: "Acme Gooseberries", country: "GB" }

  let result = ""
  result += `<h1>${organization.name}</h1>\n`

  organization.name = "Hoge"

  result += `<h1>${organization.name}</h1>`

  console.log(result)
}

main()

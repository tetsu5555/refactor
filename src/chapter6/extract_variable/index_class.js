module.exports = class Order {
  constructor(aRecord) {
    this._data = aRecord
  }

  get quantity() { return this._data.quantity }
  get itemPrice() { return this._data.itemPrice }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping
  }
  // 名前を変数ではなく、メソッドとして抽出する
  // オブジェクトに与えられた適切な大きさのコンテキストを通じて他のロジックやデータを共有できる
  get basePrice() { return this.quantity * this.itemPrice }
  get quantityDiscount() { return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 }
  get shipping() { return Math.min(this.quantity * this.itemPrice * 0.1, 100) }
}

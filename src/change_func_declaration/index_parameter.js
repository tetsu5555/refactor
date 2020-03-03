class Book {
  constructor() {
    this._reservations = []
  }
  addReservation(customer) {
    this._reservations.plan(customer)
  }
}

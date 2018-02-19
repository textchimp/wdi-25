
User.destroy_all
Flight.destroy_all
Reservation.destroy_all
Airplane.destroy_all

u1 = User.create name: "Test User 1", email: "one@one.com", password: "chicken"
u2 = User.create name: "Test User 2", email: "two@two.com", password: "chicken"
u3 = User.create name: "Test User 3", email: "three@three.com", password: "chicken"

a1 = Airplane.create name: "737", rows: 40, cols: 8
a2 = Airplane.create name: "757", rows: 60, cols: 6

f1 = Flight.create flight_number: "23", departure_date: "2018-10-23 4:20", origin: "SYD", destination: "SFO", airplane: a1
f2 = Flight.create flight_number: "25", departure_date: "2018-12-25 11:20", origin: "SIN", destination: "JFK", airplane: a2
f3 = Flight.create({
  flight_number: "201",
  departure_date: "2018-01-01 23:23",
  origin: "SYD",
  destination: "SFO",
  airplane: a1
})

r1 = Reservation.create flight: f1, user: u1, row: 10, col: 2
r2 = Reservation.create flight: f1, user: u2, row: 12, col: 4
r3 = Reservation.create flight: f1, user: u3, row: 20, col: 2
r4 = Reservation.create flight: f2, user: u3, row: 11, col: 2

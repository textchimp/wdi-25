
puts "Populating the solar system..."

Planet.destroy_all

Planet.create name: "Earth", orbit: 1, moons: 1, roundness: "fully"
Planet.create name: "Mars", orbit: 1.5, moons: 2, roundness: "fully"
Planet.create name: "Venus", orbit: 0.7, moons: 0, roundness: "fully"
Planet.create name: "Jupiter", orbit: 3.7, moons: 7, roundness: "best"
Planet.create name: "Neptune", orbit: 8.7, moons: 3, roundness: "fully"

print "Created #{ Planet.all.length } planets: "
puts Planet.pluck(:name).join ', '

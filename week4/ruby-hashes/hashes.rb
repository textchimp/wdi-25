# A. Given the following data structure:
a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?
a[1]

# How would you add your name to the array?
a.push << "Bazza"

# B. Given the following data structure:
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
h[1]

# How would you return the string "Two"?
h[:two]

# How would you return the number 2?
h["two"]

# How would you add {3 => "Three"} to the hash?
h[3] = "Three"

# How would you add {:four => 4} to the hash?
h[:four] = 4

# C. Given the following data structure:
is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
"It's true!"

# What is the return value of is["Erik" == "Jonathan"]?
"It's false"

# What is the return value of is[9 > 10]?
"It's false"

# What is the return value of is[0]?
nil # there is no key 0 in the hash

# What is the return value of is["Erik"]?
nil  # there is no key "Erik" in the hash

# D. Given the following data structure:
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
puts users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7

# How would you add yourself to the users hash?
users["Jorge"] = { :twitter => 'internetofshit', :favorite_numbers => [5, 12] }

# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select { |n| n.even? }

# How would you return an array of the favorite numbers common to all users?
faves = []
users.values.each do |u|
  # TRICK: make sure we initialise faves with the first user's numbers,
  # otherwise faves will always stay empty
  faves = u[:favorite_numbers] if faves.empty?

  # use the union operator to find the common elements
  faves = faves & u[:favorite_numbers]
end
puts faves

# magical one liner (you are not expected to understand this):
p users.values.map { |data| data[:favorite_numbers] }.inject &:&

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

# First get an array of just the favorite numbers arrays:
# users.values.map { |data| data[:favorite_numbers] }
# => [[12, 42, 75], [8, 12, 24], [12, 14, 85]]
# ... then 'flatten' it, i.e. remove the nesting to get a flat array of the numbers:
# users.values.map { |data| data[:favorite_numbers] }.flatten
# => [12, 42, 75, 8, 12, 24, 12, 14, 85]
# ... then remove duplicates from the flattened array and finally sort it!

p users.values.map { |data| data[:favorite_numbers] }.flatten.uniq.sort
# => [8, 12, 14, 24, 42, 75, 85]

# debugger!
require 'pry'; binding.pry

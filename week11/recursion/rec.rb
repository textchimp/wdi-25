# variables
# functions
# conditionals (if statements/branching)

def countdown( n=10 )

  while n >= 0
    puts n
    n -= 1
    sleep 0.3
  end
  puts "Blast off!"
end

def countdown_r( n=10 )

  if n < 0   # base case
    puts "Blast off!"
  else
    puts n
    # sleep 0.3
    countdown_r( n - 1 )  # recursive call, also bringing us closer to terminating base case
  end

end

require 'pry'
binding.pry

puts "blergh"

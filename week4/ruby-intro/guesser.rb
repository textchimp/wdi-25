# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

MAX_VALUE = 10   # Ruby constant

secret_number = Random.rand( 0..MAX_VALUE )

guess = -1

until guess == secret_number

  puts "Enter your guess:"
  guess = gets.to_i

  if guess > secret_number
    puts "Guess lower."
  elsif guess < secret_number   # avoid catching the == case
    puts "Guess higher."
  end

end

# while guess != secret_number
#
#   puts "Enter your guess:"
#   guess = gets.to_i
#
#   if guess > secret_number
#     puts "Guess lower."
#   elsif guess < secret_number   # avoid catching the == case
#     puts "Guess higher."
#   end
#
# end

puts "Congratulations! You guessed the secret number #{ secret_number }"

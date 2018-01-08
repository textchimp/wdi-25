# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

puts "What is the current temp?"
current_temp = gets.to_f

puts "Is the A/C functioning? (y/n): "
ac_working = gets.chomp.downcase

puts "What is your desired temp?"
desired_temp = gets.to_f

p current_temp
p ac_working
p desired_temp

if ac_working == 'y'

  if current_temp > desired_temp
    puts "Turn on the AC please!"
  end

else

  # AC is not working
  if current_temp > desired_temp
    puts "Fix the AC! It's too hot!"
  else
    puts "We're ok now, but fix the AC when you get a chance..."
  end

end

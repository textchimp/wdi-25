# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing (you should be able to give a custom response for at least 3 different suburbs).

puts "Which suburb do you live in?: "
suburb = gets.chomp

response = case suburb
when "Bondi"
  "Nice boat shoes, codger."
when "Newport"
  "Oh, so you're a white supremacist?"
when "Manly"
  "Surf's up bro!"
when "Newtown"
  "Cool piercings."
else
  "I'm sure it's very nice."
end

puts response

# if suburb == "Bondi"
#   puts "Nice boat shoes, codger."
# elsif suburb == "Newport"
#   puts "Oh, so you're a white supremacist?"
# elsif suburb == "Manly"
#   puts "Surf's up bro!"
# elsif suburb == "Newtown"
#   puts "Cool piercings."
# else
#   puts "I'm sure it's very nice."
# end

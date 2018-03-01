a = [1,2,3,4,5,6]

a.each do |i|
  puts i
end

def recursive_iterate( arr, indent=0 )
  # first = arr.shift
  # first: 1
  # arr: [2,3,4,5,6]

  first, *rest = arr    # first: 1, rest: [2,3,4,5,6]

  spaces  = "    " * indent
  puts "#{ spaces } recursive_iterate( #{arr.to_s} )"
  puts "#{ spaces } item: #{ first }"
  puts "#{ spaces } rest: #{ rest }"


  if rest.any?
    recursive_iterate( rest, indent+1 )
  end
  ##############################################
  puts "#{ spaces } ------ returning from recursive_iterate( #{arr.to_s} ), item: #{ first }"

end


require 'pry'
binding.pry
puts 'boo'


require 'pry'

# global variables start with '$'
$global_variable = 10



class Person

  attr_accessor :name, :age

  # class variables start with '@@' - they are visible to every object which is an instance of this class
  # @@object_count = 0

  # this method is called on the class itself, NOT on any instance object of the class
  def self.announce
    puts "All people are precious"
  end


  def initialize( person_name='Rando', person_age=30 )
    puts "Making a new person object!"
    @name = person_name
    @age = person_age

    # @@object_count += 1

  end

  def say_hello
    hi = "I said hello"
    puts "Hello, I am a person, listen to my important opinions!"
  end

  def laugh
    puts hi
    puts "Hahahahaha!"
  end

  # this is the long way to define getters & setters for instance variables
  #
  # # setter: sets the @name instance variable from its argument
  # def name=( n )
  #     @name = n
  # end
  #
  # # getter: return the value of the @name instance variable
  # def name
  #   @name
  # end

  def introduce_self
    puts "Hello, my name is #{ @name } and I am #{ @age } years old."
  end

end

class Comedian < Person

  def say_hello
    puts "Hello, I'm a funny guy, ha ha ha"
    # super
  end

  def tell_joke
    print "What's brown and sticky?"
    3.times do
      print "."
      sleep 0.3
    end
    puts "A stick!!!"
  end


end


class SerialKiller < Person

  def kill( victim )
    puts "U ded, #{victim}"
  end

  def taunt_police
    puts "You will never catch me"
  end

  def laugh
    puts "Serial killing is serious business, no laughing"
  end

end



binding.pry

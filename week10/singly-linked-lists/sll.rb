require 'pry'

class SinglyLinkedList

  include Enumerable

  # Node = Struct.new(:value, :next)   # TODO: Research how Struct works
  class Node
    attr_accessor :next, :value
    # ... saves us from writing getters and setters for each instance var:
    # def value  # getter
    #   @value
    # end
    #
    # def value=( val )  # setter, i.e. n.value = 10  == is actually ==>  n.value=( 10 )
    #   @value = val
    # end

    def initialize( value )
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize( value=nil )
    @head = Node.new(value) if value
  end

  def prepend( value )        # AKA .unshift
    node = Node.new(value)
    node.next = @head
    @head = node
  end

  def append( value )    # AKA .push
    last.next = Node.new(value)
  end

  def last
    node = @head
    while node && node.next
      node = node.next  # i += 1
    end
    node
  end

  def to_s
    output = ''
    # node = @head
    # while node
    #   output += node.value + ', '
    #   node = node.next
    # end
    each do |node|
      output += node.value
      output += ', ' unless node.next == nil
    end
    output
  end

  def at_index( n )
    each { |node, index| return node if index == n }

  end

  # def map
  #   return unless block_given?
  #   arr = []
  #   each { |node| arr << yield(node) }
  #   arr
  # end
  #
  # def to_a
  #   arr = []
  #   each { |node| arr << node.value }
  #   arr
  # end
  #
  # def length   # AKA .count, .size
  # end

  def find( needle )   # AKA .indexOf
    # return the node whose value is needle

    # node = @head
    # while node
    #   return node if node.value == needle
    #   node = node.next
    # end
    each { |node| return node if node.value == needle }
  end

  def remove  # AKA shift, remove the first element from the list and return its value
    old_head = @head   # store a reference to the original first node, so we can return it
    @head = @head.next
    old_head
  end

  def insert_after( node, value )    # don't break the chain of nodes!
    new_node = Node.new value
    new_node.next = node.next
    node.next = new_node
  end

  # def reverse
  #   reversed = SinglyLinkedList.new
  #   # node = @head
  #   # while node
  #   #   reversed.prepend node.value
  #   #   node = node.next
  #   # end
  #   each { |node| reversed.prepend node.value }
  #   reversed
  # end
  #
  # def reverse!
  #   @head = reverse.head
  # end

  def each   # Research: how to make a method accept a block?
    return unless block_given?
    ind = 0
    node = @head
    while node
      yield node, ind
      node = node.next
      ind += 1
    end
  end


end

l = SinglyLinkedList.new "a"
l.prepend "A"
l.prepend "AAA"

binding.pry

l.last

l.each do |node|
  puts node.value
end

puts 'something'

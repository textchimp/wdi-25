class Fruit < ApplicationRecord

  belongs_to :shelf, optional: true

  def squishy?
    false
  end

  validates :name, presence: true

end

# Make use of Rails Single Table Inheritance to share the 'fruits' table
# with all the child classes of Fruit
class Apple < Fruit
end

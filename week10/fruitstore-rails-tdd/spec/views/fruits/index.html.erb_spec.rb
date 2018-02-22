require 'rails_helper'

RSpec.describe "fruits/index.html.erb", type: :view do

# render_views

  before do
    assign(:fruits,  Fruit.create([
      {name: "Fruit number 1" },
      {name: "Fruit number 2" },
      {name: "Fruit number 3" }
    ]))
    # 3.times { |i|  Fruit.create name: "Fruit number #{ i }"  }
    render
  end

  it 'should show a list of fruits' do
    # binding.pry


    # expect( rendered ).to match /All Fruits/

    # gem 'capybara'
    # expect( response.body ).to have_selector("li")
    # expect( response.body ).to have_css("li", count: 3)
    expect( response.body ).to have_css("li.item", text: "Fruit number 1")


  end


end

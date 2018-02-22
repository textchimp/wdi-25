require 'rails_helper'

RSpec.describe Fruit, type: :feature do

  describe "Loading the index page" do

    before do
      3.times { |i| Fruit.create name: "Fruit number #{i}" }
      visit fruits_path
    end

    it 'should show the correct heading' do
      # expect( page ).to have_text("Fruits Index")‘’
      expect( page ).to have_css("h1", text: "Fruits Index")
    end

    it 'should list the fruits from the DB' do
      expect( page ).to have_css("li.item", text: "Fruit number 1")
    end

  end

end

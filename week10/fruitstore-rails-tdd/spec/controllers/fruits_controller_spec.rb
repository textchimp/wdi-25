require 'rails_helper'

RSpec.describe FruitsController, type: :controller do

  describe "GET /fruits (fruits#index)" do

    before do
      3.times { |i|  Fruit.create name: "Fruit number #{ i }"  }
    end

    describe 'as HTML' do

      before do
        get :index
      end

      it 'returns HTTP success' do
        expect( response ).to have_http_status( :success )
      end

      it 'should render the index view' do
        expect( response ).to render_template( 'index' )
      end

      it 'should respond with @fruits that contains all the fruits in reverse order' do
        expect( assigns(:fruits) ).to be   # @fruits exists in fruits#index
        expect( assigns(:fruits).length ).to eq 3
        expect( assigns(:fruits).first.class ).to eq Fruit
        expect( assigns(:fruits).first.name ).to eq 'Fruit number 2'
      end

    end

    describe 'as JSON' do

      before do
        get :index, format: :json
      end

      it 'should return HTTP success' do
        expect( response ).to have_http_status( :success )
      end

      it 'should provide the name of the fruit in the JSON response' do
        fruits = JSON.parse( response.body )
        expect( fruits.length ).to eq 3
        expect( fruits.first['name'] ).to eq 'Fruit number 2'

      end



    end




  end


end

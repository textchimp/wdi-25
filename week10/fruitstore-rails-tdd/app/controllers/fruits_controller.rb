class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse

    respond_to do |format|
      format.html {}  # Render the default HTML template for this action
      format.json { render json: @fruits, status: :ok  }
    end

  end

  # def new
  # end
  #
  # def create
  # end
end

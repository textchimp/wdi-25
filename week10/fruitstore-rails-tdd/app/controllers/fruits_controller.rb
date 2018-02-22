class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all.reverse
    respond_to do |format|
      format.html {}  # Render the default HTML template for this action
      format.json { render json: @fruits, status: :ok  }
    end

  end

  def new
  end


  def create
    fruit = Fruit.create fruit_params
    if fruit.persisted?
      redirect_to fruit
    else
      render :new
    end
  end

  private
  def fruit_params
    params.require(:fruit).permit(:name)
  end
end

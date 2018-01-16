class PlanetsController < ApplicationController

  # CRUD: CREATE

  def new
  end

  def create

    # create a new Planet object, all fields blank
    planet = Planet.new

    # populate the fields from the submitted form data in params
    planet.name = params[:name]
    planet.image = params[:image]
    planet.orbit = params[:orbit]
    planet.diameter = params[:diameter]
    planet.mass = params[:mass]
    planet.moons = params[:moons]
    planet.roundness = params[:roundness]

    # the changes to the object above are not saved to the database with .save:
    planet.save

    # no template for a create action, just redirect to index
    redirect_to( planets_path )   # parens are not 'idiomatic Ruby'
  end


  # CRUD: READ

  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find params[:id]
  end

  # CRUD: UPDATE

  def edit
    # get the planet we want to edit, so we can prefill the edit form
    @planet = Planet.find params[:id]
  end

  def update
    # edit form submits to here

    planet = Planet.find params[:id]

    planet.update(
      name: params[:name],
      image: params[:image],
      orbit: params[:orbit],
      diameter: params[:diameter],
      mass: params[:mass],
      moons: params[:moons],
      roundness: params[:roundness]
    )

    redirect_to planet_path( planet.id )  # redirect to the show page for this planet
  end


  # CRUD: DESTROY

  def destroy
    Planet.destroy params[:id]
    redirect_to( planets_path )
  end

end

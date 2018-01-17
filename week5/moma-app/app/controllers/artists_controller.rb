class ArtistsController < ApplicationController


    def home
    end

    # CREATE

    def new
      # blank form
      @artist = Artist.new
    end

    def create
      # form submits here
      Artist.create artist_params
      redirect_to artists_path
    end

    # READ

    def index
      @artists = Artist.all
    end

    def show
      @artist = Artist.find params[:id]
    end


    # UPDATE

    def edit
      @artist = Artist.find params[:id]
    end

    def update
      artist = Artist.find params[:id]
      artist.update artist_params
      redirect_to artist
    end

    def destroy
      Artist.destroy params[:id]
      redirect_to artists_path
    end

    private

    # "strong params" for the artist form submit - only let through the fields
    # which we expect (i.e. the table fields the user is allowed to edit)
    def artist_params
      params.require(:artist).permit( :name, :nationality, :dob, :period, :image, :roundness )
    end

end

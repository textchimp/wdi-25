
class WorksController < ApplicationController

  def home
  end

  # CREATE

  def new
    # blank form
    @work = Work.new
  end

  def create
    # form submits here
    Work.create work_params
    redirect_to works_path
  end

  # READ

  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end


  # UPDATE

  def edit
    @work = Work.find params[:id]
  end

  def update
    work = Work.find params[:id]
    work.update work_params
    redirect_to work
  end

  def destroy
    Work.destroy params[:id]
    redirect_to works_path
  end

  private

  # "strong params" for the work form submit - only let through the fields
  # which we expect (i.e. the table fields the user is allowed to edit)
  def work_params
    params.require(:work).permit( :title, :year, :medium, :style, :image, :artist_id )
  end


end

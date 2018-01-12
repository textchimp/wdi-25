require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'animals.db'
)

# Log out the SQL generated to remind us what we no longer have to write
ActiveRecord::Base.logger = Logger.new( STDERR )

class Animal < ActiveRecord::Base
  has_many :admirers  # requires animal_id field in the admirers table
end

class Admirer < ActiveRecord::Base
  belongs_to :animal  # requires animal_id field in the admirers table
end

# binding.pry



get '/home' do
  erb :home
end


#########################################################################
# Animals CRUD system


# CREATE form submits to this route with the POST method
post '/animals' do

  Animal.create(
    first_name:  params[:first_name],
    last_name:   params[:last_name],
    roundness:   params[:roundness],
    image_url:   params[:image_url],
    description: params[:description],
    species:     params[:species],
    alive:       params[:alive],
    age:         params[:age]
  )

  #
  # sql = "INSERT INTO animals (first_name, last_name, roundness, image_url, description, species, alive, age)
  # VALUES(
  #   '#{params[:first_name]}',
  #   '#{params[:last_name]}',
  #   '#{params[:roundness]}',
  #   '#{params[:image_url]}',
  #   '#{params[:description]}',
  #   '#{params[:species]}',
  #   #{params[:alive]},
  #   #{params[:age]}
  # );"
  #
  # db_query sql

  redirect "/animals"
end

# INDEX: show all rows in animals table
get '/animals' do

  # @result = db_query( "SELECT * FROM animals;" )
  @result = Animal.all
  erb :animals_index

end

# CREATE: show blank form (submits to post '/animals' above)
get '/animals/new' do
  erb :animals_new
end

# SHOW page to display details about one item, i.e. /animals/5
get '/animals/:id' do

  # id = params[:id]
  # result = db_query "SELECT * FROM animals WHERE id = #{id};"
  # @animal = result.first
  @animal = Animal.find params[:id]

  erb :animals_show
end

# EDIT page, displays prepopulated form with the fields of an item
get '/animals/:id/edit' do

  # id = params[:id]
  # result = db_query "SELECT * FROM animals WHERE id = #{id};"
  # @animal = result.first
  @animal = Animal.find params[:id]

  erb :animals_edit
end

# UPDATE page, the edit form above submits to this with the POST method
post '/animals/:id' do

  animal = Animal.find params[:id]

  animal.update(
    first_name:  params[:first_name],
    last_name:   params[:last_name],
    roundness:   params[:roundness],
    image_url:   params[:image_url],
    description: params[:description],
    species:     params[:species],
    alive:       params[:alive],
    age:         params[:age]
  )

  # id = params[:id]
  # sql = "UPDATE animals SET
  #   first_name = '#{params[:first_name]}',
  #   last_name = '#{params[:last_name]}',
  #   roundness = '#{params[:roundness]}',
  #   image_url = '#{params[:image_url]}',
  #   description = '#{params[:description]}',
  #   species = '#{params[:species]}',
  #   alive = #{params[:alive]},
  #   age = #{params[:age]}
  #   WHERE id = #{id};"
  #
  # db_query sql

  redirect "/animals/#{ animal.id }"
end

# DELETE page, the delete link submits to this
get '/animals/:id/delete' do

  # db_query "DELETE FROM animals WHERE id = #{params[:id]};"
  Animal.destroy params[:id]


  redirect "/animals"
end






#####################################################################################################
# Admirers CRUD


# CREATE form submits to this route with the POST method
post '/admirers' do

  Admirer.create(
    name:       params[:name],
    location:   params[:location],
    image_url:  params[:image_url],
    admiration: params[:admiration],
    animal_id:  params[:animal_id]
  )

  redirect "/admirers"
end

# INDEX: show all rows in admirers table
get '/admirers' do

  # @result = db_query( "SELECT * FROM admirers;" )
  @result = Admirer.all
  erb :admirers_index

end

# CREATE: show blank form (submits to post '/admirers' above)
get '/admirers/new' do
  erb :admirers_new
end

# SHOW page to display details about one item, i.e. /admirers/5
get '/admirers/:id' do

  # id = params[:id]
  # result = db_query "SELECT * FROM admirers WHERE id = #{id};"
  # @admirer = result.first
  @admirer = Admirer.find params[:id]

  erb :admirers_show
end

# EDIT page, displays prepopulated form with the fields of an item
get '/admirers/:id/edit' do


  # id = params[:id]
  # result = db_query "SELECT * FROM admirers WHERE id = #{id};"
  # @admirer = result.first
  @admirer = Admirer.find params[:id]

  erb :admirers_edit
end

# UPDATE page, the edit form above submits to this with the POST method
post '/admirers/:id' do

  admirer = Admirer.find params[:id]

  admirer.update(
    name:       params[:name],
    location:   params[:location],
    image_url:  params[:image_url],
    admiration: params[:admiration],
    animal_id:  params[:animal_id]
  )

  redirect "/admirers/#{ admirer.id }"
end

# DELETE page, the delete link submits to this
get '/admirers/:id/delete' do


  # db_query "DELETE FROM admirers WHERE id = #{params[:id]};"
  Admirer.destroy params[:id]

  redirect "/admirers"
end

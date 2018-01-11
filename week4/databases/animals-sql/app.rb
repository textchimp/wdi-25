require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

# handle our SQL connection and queries in a single reusable method
def db_query( sql )
  # make a connection to our sqlite3 database
  db = SQLite3::Database.new 'animals.db'

  # ask the gem to format the query results as a hash
  db.results_as_hash = true

  puts "\n#{sql}\n"  # debugging output - show the SQL statement in the console

  # run an SQL query and store the result
  result = db.execute sql
  db.close

  result
end

get '/home' do
  erb :home
end

# CREATE form submits to this route with the POST method
post '/animals' do
  sql = "INSERT INTO animals (first_name, last_name, roundness, image_url, description, species, alive, age)
  VALUES(
    '#{params[:first_name]}',
    '#{params[:last_name]}',
    '#{params[:roundness]}',
    '#{params[:image_url]}',
    '#{params[:description]}',
    '#{params[:species]}',
    #{params[:alive]},
    #{params[:age]}
  );"

  db_query sql

  redirect "/animals"
end

# INDEX: show all rows in animals table
get '/animals' do
  @result = db_query( "SELECT * FROM animals;" )
  erb :index
end

# CREATE: show blank form (submits to post '/animals' above)
get '/animals/new' do
  erb :new
end

# SHOW page to display details about one item, i.e. /animals/5
get '/animals/:id' do
  id = params[:id]
  result = db_query "SELECT * FROM animals WHERE id = #{id};"
  @animal = result.first

  erb :show
end

# EDIT page, displays prepopulated form with the fields of an item
get '/animals/:id/edit' do
  id = params[:id]
  result = db_query "SELECT * FROM animals WHERE id = #{id};"
  @animal = result.first

  erb :edit
end

# UPDATE page, the edit form above submits to this with the POST method
post '/animals/:id' do
  id = params[:id]
  sql = "UPDATE animals SET
    first_name = '#{params[:first_name]}',
    last_name = '#{params[:last_name]}',
    roundness = '#{params[:roundness]}',
    image_url = '#{params[:image_url]}',
    description = '#{params[:description]}',
    species = '#{params[:species]}',
    alive = #{params[:alive]},
    age = #{params[:age]}
    WHERE id = #{id};"

  db_query sql
  redirect "/animals/#{id}"
end

# DELETE page, the delete link submits to this
get '/animals/:id/delete' do
  db_query "DELETE FROM animals WHERE id = #{params[:id]};"
  redirect "/animals"
end

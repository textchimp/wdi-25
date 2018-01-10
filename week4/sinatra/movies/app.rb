
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

# I don't want to commit my API key to GitHub!!
API_KEY = "******** PASTE THE API KEY FROM SLACK HERE ***************"

get '/home' do
  erb :home
end

get '/search' do
  query = params[:query]
  url = "https://api.themoviedb.org/3/search/movie?api_key=#{ API_KEY }&query=#{ query }"

  result = HTTParty.get( url )

  @results = result.parsed_response["results"]

  erb :results

end

# i.e. /details/8077
get '/details/:id' do

  id = params[:id]
  url = "https://api.themoviedb.org/3/movie/#{id}?api_key=#{ API_KEY }"

  result = HTTParty.get( url )
  @details = result.parsed_response

  erb :details
end

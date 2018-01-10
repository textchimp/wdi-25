
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  puts "Someone hit the root URL"
  "Hello world from the root of this site"
end

get '/hello' do
  "Hello world from /hello path"
end

get '/lucky_number' do
  "Here is your lucky number: #{ Random.rand(1..10) }"
end

# Dynamic URL: will match any url that starts with '/fanclub/'
get '/fanclub/:whatever' do
  "#{ params[:whatever] } is a proud member of the Round Boys fanclub"
end

get '/fanclub/:first/:last' do
  " #{ params[:first] } #{ params[:last].upcase } is a full member of the Round Boys fanclub  "
end

get '/add/:x/:y' do
  result = params[:x].to_i + params[:y].to_i
  "The sum of #{params[:x]} and #{params[:y]} is #{result}"
end

get '/mult/:x/:y' do
  result = params[:x].to_i * params[:y].to_i
  "The product of #{params[:x]} and #{params[:y]} is #{result}"
end

get '/:operation/:first_num/:second_num' do
  x = params[:first_num].to_i
  y = params[:second_num].to_i

  result = case params[:operation]
  when '+'   then x + y
  when '-'   then x - y
  when '*'   then x * y
  when 'div' then x / y.to_f
  else
    'INPUT ERROR'
  end

  "The result of #{x} #{params[:operation]} #{y} is #{result}"
end

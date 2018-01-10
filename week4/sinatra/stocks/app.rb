
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'stock_quote'

get '/home' do
  erb :home
end

get '/quote' do

  @code = params[:symbol]

  stock = StockQuote::Stock.quote( @code )

  @result = stock.l

  erb :quote
end

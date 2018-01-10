
require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/home' do
  erb :home
end

get '/calc' do

  @x = params[:x].to_i
  @y = params[:y].to_f

  op = params[:operator].to_sym   #  :+  :*  :/  :-
  # return unless "*/+-".include?( op )
  @result = @x.send(op, @y)

  # @result = case params[:operator]
  # when '+' then @x + @y
  # when '-' then @x - @y
  # when '*' then @x * @y
  # when '/' then @x / @y.to_f
  # else
  #   'INPUT ERROR'
  # end

  erb :calc
end

get '/:operation/:first_num/:second_num' do
  @x = params[:first_num].to_i
  @y = params[:second_num].to_i

  @result = case params[:operation]
  when '+'   then @x + @y
  when '-'   then @x - @y
  when '*'   then @x * @y
  when 'div' then @x / @y.to_f
  else
    'INPUT ERROR'
  end

  # "The result of #{@x} #{params[:operation]} #{@y} is #{result}"

  erb  :calc
end

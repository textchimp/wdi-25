
class CalculatorController < ApplicationController

  def home
  end

  def do_calc
    # raise 'hell'

    @x = params[:x].to_f
    @y = params[:y].to_f
    @op = params[:op]

    @op = "/" if @op == "div"

    @result = @x.send(@op, @y)

    # @result = case @op
    #   when "+" then @x + @y
    #   when "-" then @x - @y
    #   when "*" then @x * @y
    #   when "div" then @x / @y
    # end

  end # do_calc


end

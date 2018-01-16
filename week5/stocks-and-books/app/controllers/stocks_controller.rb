
class StocksController < ApplicationController

  def form
  end

  def lookup

    @stock_symbol = params[:stock_symbol]

    stock = StockQuote::Stock.quote(@stock_symbol)

    # binding.pry # prying eyes

    # log a Ruby data structure to the JS console in Chrome
    # cl stock

    @stock_price = stock.l
    @stock_name = stock.name

  end

end

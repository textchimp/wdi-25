class BooksController < ApplicationController

  def form
  end

  def lookup

    search_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ params[:text_query] }"

    results = HTTParty.get search_url
    @results = results['items']

    # cl results

  end

end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root :to => 'pages#home'
  root to: 'pages#home'

  get '/stocks' => 'stocks#form'
  get '/stocks/lookup' => 'stocks#lookup'

  get  '/books' => 'books#form'
  post '/books/lookup' => 'books#lookup'

end

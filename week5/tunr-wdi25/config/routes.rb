Rails.application.routes.draw do

  root to: 'pages#home'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

  get '/profile' => 'pages#profile'
  get '/admin'   => 'pages#admin_party'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

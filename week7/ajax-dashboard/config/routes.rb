Rails.application.routes.draw do

  resources :messages
  get '/uptime' => 'dashboard#uptime' # API endpoint
  get '/hog' => 'dashboard#cpu_hog' # API endpoint
  get '/getinfo' => 'dashboard#info' # API endpoint

  # SPA frontend
  get '/dashboard' => 'pages#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

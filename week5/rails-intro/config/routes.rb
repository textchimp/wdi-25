Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#say_hi'

  get '/hello' => 'pages#say_hi'  #  'controller_name#method_name'

  get '/about' => 'pages#about'

  get '/lol' => 'pages#lol'

  get '/calc' => 'calculator#home'

  get '/calc/:x/:op/:y' => 'calculator#do_calc'


end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'planets#index'

  # CREATE
  get  '/planets/new' => 'planets#new'
  post '/planets' => 'planets#create'

  # READ
  get '/planets' => 'planets#index'
  get '/planets/:id' => 'planets#show', as: 'planet'

  # UPDATE
  get '/planets/:id/edit' => 'planets#edit'
  post '/planets/:id' => 'planets#update'

  # DESTROY
  get '/planets/:id/delete' => 'planets#destroy'

end

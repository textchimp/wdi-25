Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'works#home'

  # CREATE
  get '/works/new' => 'works#new'
  post '/works' => 'works#create'
  # READ
  get '/works' => 'works#index'
  get '/works/:id' => 'works#show', as: 'work'  # gives us a URL helper called work_path( id )
  # UDPATE
  get '/works/:id/edit' => 'works#edit'
  patch '/works/:id' => 'works#update'
  # DESTROY
  get '/works/:id/delete' => 'works#destroy'

  resources :artists
  #
  #      artists GET    /artists(.:format)          artists#index
  #              POST   /artists(.:format)          artists#create
  #   new_artist GET    /artists/new(.:format)      artists#new
  #  edit_artist GET    /artists/:id/edit(.:format) artists#edit
  #       artist GET    /artists/:id(.:format)      artists#show
  #              PATCH  /artists/:id(.:format)      artists#update
  #              PUT    /artists/:id(.:format)      artists#update
  #              DELETE /artists/:id(.:format)      artists#destroy


end

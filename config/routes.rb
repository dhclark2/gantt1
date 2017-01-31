Rails.application.routes.draw do
  devise_for :users
  root :to => 'home#index'

  match "home/data", :to => "home#data", :as => "data", :via => "get"

  post "home/data/task", :to => "task#add"
  put "home/data/task/:id", :to => "task#update"
  delete "home/data/task/:id", :to => "task#delete"

  post "home/data/link", :to => "link#add"
  put "home/data/link/:id", :to => "link#update"
  delete "home/data/link/:id", :to => "link#delete"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

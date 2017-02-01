Rails.application.routes.draw do
  get 'calendar/index'

  resources :items
  devise_for :users
  root :to => 'items#index'

  # Gantt Chart
  match "home/data", :to => "home#data", :as => "data", :via => "get"

  post "home/data/task", :to => "task#add"
  put "home/data/task/:id", :to => "task#update"
  delete "home/data/task/:id", :to => "task#delete"

  post "home/data/link", :to => "link#add"
  put "home/data/link/:id", :to => "link#update"
  delete "home/data/link/:id", :to => "link#delete"

  # Calendar
  match "calendar/data2", :to => "calendar#data2", :as => "data2", :via => "get"
  match "calendar/db_action", :to => "calendar#db_action", :as => "db_action", :via => "get"


  get "home/help"

  get "home/about"

  get "home/index"

end

Rails.application.routes.draw do
  
  resources :favorites
  resources :reviews
  resources :bathrooms
  resources :users

  get "/users/:id/favorites", to: "favorites#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  get "/top", to: "reviews#top_scores"

  get "/bathrooms-near-me/:lat/:lng", to: "bathrooms#near_me"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

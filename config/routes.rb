Rails.application.routes.draw do
  # API
  namespace :api do
    resources :features, only: [:index, :show] do
      resources :comments, only: [:index, :create]
    end
    get 'refresh', to: 'features#refresh'
  end
  # Frontend
  root 'homepage#index'
  get '*path', to: 'homepage#index'
  # get '*path', to: "homepage#index", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end
end

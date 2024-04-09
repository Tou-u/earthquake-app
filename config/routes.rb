Rails.application.routes.draw do
  root 'homepage#index'
  get 'comments/:id', to: 'comments#index'
  namespace :api do
    resources :features, only: [:index, :show] do
      resources :comments, only: [:index, :create]
    end
    get 'refresh', to: 'features#refresh'
    get 'up' => 'rails/health#show', as: :rails_health_check
  end
end

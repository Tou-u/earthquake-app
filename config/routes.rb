Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    resources :features, only: [:index]
  end
  get 'up' => 'rails/health#show', as: :rails_health_check
end

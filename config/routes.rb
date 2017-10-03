Rails.application.routes.draw do
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root to: 'welcome#index'

  resources :welcome, :only => [:index]
  resources :city, :only => [:index]
  resources :site, :only => [:index]

    namespace :api do
      namespace :v1 do
        resources :items, only: [:index, :create, :destroy, :update]
        resources :cities, only: [:index, :create, :destroy, :update]
      end
    end

  end

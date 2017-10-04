Rails.application.routes.draw do
  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  root to: 'welcome#index'

  resources :welcome, :only => [:index]
  get "welcome/about" => "welcome#about", as: "about"
  get "welcome/cities" => "welcome#cities", as: "cities"
  get "welcome/contact" => "welcome#contact", as: "contact"
  get "welcome/gallery" => "welcome#gallery", as: "gallery"
  get "welcome/notice" => "welcome#notice", as: "notice"
  resources :city, :only => [:index]
  resources :admin, :only => [:index]
  resources :site, :only => [:index]
  resources :reports

    namespace :api do
      namespace :v1 do
        resources :items, only: [:index, :create, :destroy, :update]
        resources :cities, only: [:index, :create, :destroy, :update]
      end
    end

  end

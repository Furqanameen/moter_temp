Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  # root "socials#index"
  root "homes#index"
  resources :menus
  resources :homes
  resources :contacts
  resources :socials
  resources :sliders
  resources :services
  resources :contactus

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

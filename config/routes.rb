Rails.application.routes.draw do
  # root "socials#index"
  root "homes#index"
  resources :menus
  resources :homes
  resources :contacts
  resources :socials
  resources :sliders
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :tracks, only: [:index, :show, :create, :destroy, :update] do
      resources :comments, only: [:create, :show, :index]
    end
    resources :comments, only: :destroy
    resources :favorites, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end

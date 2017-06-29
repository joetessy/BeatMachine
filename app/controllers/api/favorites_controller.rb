class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      @user = User.find(favorite_params[:user_id])
      @track = Track.find(favorite_params[:track_id])
      render :show
    end
  end

  def show
    @favorite = Favorite.find(params[:id])
    @user = User.find(@favorite.user_id)
    @track = Track.find(@favorite.track_id)
    render :show
  end

  def destroy
    @favorite = currentUser.favorite_tracks.find(params[:id])
    @favorite.destroy
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :track_id)
  end

end

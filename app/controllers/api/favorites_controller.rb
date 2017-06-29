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
    @favorite = Favorite.find_by(track_id: [current_user.favorite_tracks.find(params[:id])])
    track_id = @favorite.track_id
    @favorite.destroy
    @user = current_user
    @track = Track.find(track_id)
    render :show
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :track_id)
  end

end

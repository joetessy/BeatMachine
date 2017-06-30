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
    @author = @track.artist
    render :show
  end

  def destroy
    @favorite = Favorite.where(track_id: (params[:id])).find_by(user_id: current_user.id)
    @favorite.destroy
    track_id = @favorite.track_id
    @user = current_user
    @track = Track.find(track_id)
    render :show
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :track_id)
  end

end

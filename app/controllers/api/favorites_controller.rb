class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.create(favorite_params)
  end

  def destroy
    @favorite = Favorite.find(params[:id]).destroy
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :track_id)
  end

end

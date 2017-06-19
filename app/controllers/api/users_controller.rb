class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def params
    params.require(user).permit(:username, :password, :image_url)
  end
end

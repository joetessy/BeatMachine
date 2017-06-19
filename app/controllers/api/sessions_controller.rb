
class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      render 'api/users/show'
    end
  end

  def destroy
    log_out!
    render 'api/users/show'
  end
end

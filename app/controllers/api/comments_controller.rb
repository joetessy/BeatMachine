class Api::CommentsController < ApplicationController

  def index
    @comments = Track.find_by(title: params[:track_id]).comments
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params);
    if @comment.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id]).destroy
    render :show
  end

  private
  def comment_params
    params.require(:comment).permit(:author_id, :track_id, :body)
  end
end

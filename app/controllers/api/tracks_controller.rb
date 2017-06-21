class Api::TracksController < ApplicationController

  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end


  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
  end

  def update
    @track = Tweet.find(params[:id])
    if @track.update(track_params)
      redirect_to track_url(@track.id)
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def destroy
    @Track.find(params[:id]).destroy
    redirect_to tracks_url
  end

  private
  def track_params
    params.require(:track).permit(:title, :image, :description, :audio, :artist_id)
  end

end

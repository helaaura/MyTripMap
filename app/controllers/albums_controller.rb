# rails g controller Albums
class AlbumsController < ApplicationController
  def new
    
  end

def create
  @album = Album.new(album_params)
 
  @album.save
  #redirect_to @album
  redirect_to '/locations/'+@album.location_id.to_s+'/albums/'+@album.id.to_s
end

def show
  @album = Album.find(params[:id])
end

private
  def album_params
    params.require(:album).permit(:name, :file_name, :comment, :location_id, :user_id)
  end

end

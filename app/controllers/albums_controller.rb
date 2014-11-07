# rails g controller Albums
class AlbumsController < ApplicationController
  def new
    
  end

def create
  @album = Album.new(params[:album])
 /* ca se bloque ici peut etr par manque de param*/
  @album.save
  redirect_to @album
end

end

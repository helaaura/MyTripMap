# rails g controller Locations
class LocationsController < ApplicationController
def new
  
end
def create
  @location = Location.new(params[:location])
 
  @location.save
  redirect_to @location
end
end

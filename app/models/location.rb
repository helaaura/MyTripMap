# rails generate model Location latitude:float altitude:float placeName:string country:string city:string

class Location < ActiveRecord::Base
  has_one :Album
  
end




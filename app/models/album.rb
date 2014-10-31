#rails generate model Location latitude:float altitude:float placeName:string country:string city:string User:references
class Album < ActiveRecord::Base
  belongs_to :location
  belongs_to :user
end

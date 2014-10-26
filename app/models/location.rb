# rails generate model Location latitude:float altitude:float placeName:string country:string city:string User:references
class Location < ActiveRecord::Base
  has_many :pictruces, dependent: :destroy
  belongs_to :User
  
end

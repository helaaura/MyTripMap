# rails generate model Album name:string creationDate:datetime comment:text User:references Location:references

class Album < ActiveRecord::Base
  belongs_to :User
  belongs_to :Location
end

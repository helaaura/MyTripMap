# rails generate model Picture title:string fileName:string dateTimeTaken:datetime comment:text Location:references
class Picture < ActiveRecord::Base
  belongs_to :Location
end

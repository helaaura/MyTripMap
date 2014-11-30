#v1: rails generate model Picture name:string file_name:string date_time_taken:datetime comment:text Album:references
#v2: rails generate model Picture name:string file_name:string date_time_taken:datetime comment:text Album:references location:references
class Picture < ActiveRecord::Base
  belongs_to :Album
  belongs_to :location
end

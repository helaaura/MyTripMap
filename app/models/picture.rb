# rails generate model Picture name:string file_name:string date_time_taken:datetime comment:text Album:references
class Picture < ActiveRecord::Base
  belongs_to :Album
end

#rails g model album name:string file_name:string creation_date:datetime comment:text location:references user:references
class Album < ActiveRecord::Base
  belongs_to :location
  belongs_to :user
  
end

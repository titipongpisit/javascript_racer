class Round < ActiveRecord::Base
  belongs_to :player
  belongs_to :patient
  # Remember to create a migration!
end

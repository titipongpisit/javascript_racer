class CreateRounds < ActiveRecord::Migration
  def change
    create_table :rounds do |t|
      t.belongs_to :player
      t.belongs_to :game
      t.timestamps 
    end
    add_index :rounds, [:player_id, :game_id], unique: true
  end
end


#add_index -> can not have game 37 and round 14 twice

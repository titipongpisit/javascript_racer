# GET---------------------------------------------------------

get '/' do
  # Look in app/views/index.erb
  erb :index
end






# POST---------------------------------------------------------

post '/game' do

  @player_1 = Player.create(name: params["player1"])
  @player_2 = Player.create(name: params["player2"])

  game = Game.create()

  session[:game_id] = game.id

  erb :game
end 

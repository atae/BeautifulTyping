require_relative 'board'
require_relative 'human_player'
require_relative 'computer_player'

class Game
attr_accessor :board

	def initialize(player_one, player_two)
		@player_one = player_one
		@player_two = player_two
		@board = Board.new
		@player_turn = @player_one
	end

	def play_turn
			current_move = current_player.get_move
			@board.place_mark(current_move, @player_turn.mark)
			switch_players!
	end

	def current_player
		@player_turn
	end

	def switch_players!
		
		if @player_turn == @player_one
			@player_turn = @player_two
		else
			@player_turn = @player_one
		end
	end


end

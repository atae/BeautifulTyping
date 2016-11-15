class BattleshipGame
  attr_reader :board, :player

  def initialize (player, board)
  	@board = board
  	@player = player
  end

  def attack (position)
  	column = position[0]
  	row = position[1]
 		board.grid[column][row] = :x
  end

  def count
  	board.count
  end

  def game_over?
  	board.won?
  end

  def play_turn
  	attack(player.get_play)
  end


end

require 'human_player'

class ComputerPlayer < HumanPlayer
attr_accessor :board
	
	def display(board)
		@board = board
	end

	def get_move
		grid = @board.grid

		if grid[0][0] == nil
			if (grid[1][1] == @mark && grid[2][2] == @mark) ||
				(grid[0][1] == @mark && grid[0][2] == @mark) ||
				(grid[1][0] == @mark && grid[2][0] == @mark)
				return [0, 0] 
			end
		end
		
		if grid[0][2] == nil
			if (grid[1][1] == @mark && grid[2][0] == @mark) ||
				(grid[1][2] == @mark && grid[2][2] ==@mark) ||
				(grid[0][0] == @mark && grid[0][1] == @mark)
				return [0, 2] 
			end
		end

		if grid[2][0] == nil
			if (grid[0][0] == @mark && grid[1][0] == @mark) ||
				(grid[1][1] == @mark && grid[2][2] == @mark) ||
				(grid[2][1] == @mark && grid[2][2] == @mark)
				return [2, 0] 
			end
		end

	end


end

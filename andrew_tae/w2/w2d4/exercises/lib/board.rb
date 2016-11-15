
class Board
	attr_accessor :grid
	def initialize(grid=[[nil,nil,nil],[nil,nil,nil],[nil,nil,nil]])
		@grid = grid
	end

	def grid
		@grid
	end

	def place_mark (position, mark)
		
		@grid[position[0]][position[1]] = mark
	end

	def empty? (position)
		if @grid[position[0]][position[1]]
			return false
		end

		true
	end

	def winner
		idx1 = 0 
		#check for row
		until idx1 == grid.length
			if grid[idx1].uniq.length == 1 && grid[idx1][0] != nil
					return grid[idx1][0]
			end
			idx1 += 1
		end
		#check for left diagonal
		if @grid[0][0] == @grid[1][1] && grid[1][1] == grid[2][2]	&&
			 @grid[0][0] != nil
			return grid[0][0]
		end

		#check for right diagonal
		if @grid[0][2] == @grid[1][1] && grid[1][1] == grid[2][0]	&&
			 @grid[0][2] != nil
			return grid[0][2]
		end

		#check for column
		idx1 = 0
		until idx1 == @grid.length
			if @grid[0][idx1] == @grid[1][idx1] && @grid[1][idx1] == @grid[2][idx1] &&
					@grid[0][idx1]!= nil
			return @grid[0][idx1]
			end
		idx1 += 1
		end		

	end

	def over?

		if winner 
			return true
		end

		idx1 = 0
		rows = [false,false,false]	
		until idx1 == @grid.length 
			unless @grid[idx1].include?(nil)
				rows[idx1] = true
			end
			idx1 += 1
		end

		if rows.include?(false)
			return false
		end

		true

	end
	



end

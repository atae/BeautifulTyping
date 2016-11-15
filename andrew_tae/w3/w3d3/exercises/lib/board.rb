class Board
	attr_accessor :grid, :default_grid

	def self.default_grid
		@default_grid = [[[]*10]*10]*10
	end


	def initialize (gridsize=Board.default_grid)
		@grid = gridsize
	end



	def count
		ships = 0
		board_ship_scan do
			ships += 1
		end
		ships
	end

	def empty?(position=0)
		if position != 0
			if grid[position[0]][position[1]] == :s || 
					grid[position[0]][position[1]] == :x
				return false
			end
		else
			board_ship_scan do
				return false
			end	
		end
			 true
	end

	def board_ship_scan(&blk)
		grid.each do |row|
			row.each do |space|
				if space == :x || space == :s
					blk.call
				end
			end
		end
	end

	def [](pos)
    row, col = pos
    grid[row][col]
  end

  def []=(pos, val)
    row, col = pos
    grid[row][col] = val
  end
	
	def full?
		counter = 0
		row_length = grid[0].length
		column_length = grid.length
	
		board_ship_scan do 
			counter += 1
		end

		if counter < column_length * row_length
			return false
		end

		true
	end

	def place_random_ship
		if full?
			raise "Board is full."
		end
		
		column = Random.rand(0..grid.length-1)
		length = Random.rand(0..grid[0].length-1)
		grid[column][length] = :s
		
	end
		
	def won?
		board_ship_scan do
			return false
		end

		return true
	end




end

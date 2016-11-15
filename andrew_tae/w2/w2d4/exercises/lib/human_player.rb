class HumanPlayer

attr_accessor :name, :mark

	def initialize(name)
		@name = name
		@mark = mark
	end

	def get_move
		puts "Where would you like to place your mark?"
		input = gets.chomp
		move = input.split(', ')
		move[0] = move[0].to_i
		move[1] = move[1].to_i
		move
	end

	def display(board)
		puts "#{board.grid}"
	end


end

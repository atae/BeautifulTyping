class HumanPlayer

	
	def get_play
		puts "Enter position."
		input = gets.chomp
		position = input.split(',')
		position.each {|value| value.to_i}
		position
	end

end

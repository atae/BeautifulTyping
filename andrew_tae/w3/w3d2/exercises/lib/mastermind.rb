require 'byebug'

class Code
  attr_reader :pegs
	PEGS = {
  	'R' => 'Red',
  	'B' => 'Blue',
  	'Y' => 'Yellow',
  	'O' => 'Orange',
  	'G' => 'Green',
  	'P' => 'Purple'
  	}

  def initialize(array)
  	@pegs = array
  end

  def self.parse(colors)

 	 sequence = colors.upcase.split('')
 	
 	sequence.each do |value|
 		if PEGS[value] == nil
 			raise "Invalid color"
 		end
 	end

 	 self.new(sequence)


  end

 	def self.random
 		#byebug
 		sequence = []
 		colors = Code::PEGS.keys
 		4.times do
	 		sequence << colors[rand(0..5)]
	 	end

	 	self.new(sequence)
 	end

 	def [](args)
 		#byebug
 		@pegs[0]
 	end

 	def exact_matches(comparison)
 		i = 0
 		matches = 0
 		until i == self.pegs.length
 			if self.pegs[i] == comparison.pegs[i]
 				matches += 1
 			end
 			i += 1
 		end
 		matches
 	end

 	def near_matches(comparison)
 		i = 0
 		#byebug
 		nearMatch = 0
 		matched_letters = []
 		selfCheck = self.pegs
 		until i == self.pegs.length
 			if selfCheck.include?(comparison.pegs[i]) && 
 				selfCheck[i] != comparison.pegs[i]
 				nearMatch += 1
 				selfCheck.shift
 			end
 			i += 1
 		end

 		nearMatch
 	end

 	def ==(*args)
 		i = 0
 		matching = false
 		until i == @pegs.length
 			if @pegs[i] == args[0][i]
 				matching = true
 			end
 			i += 1
 		end

 		if matching
 			return true
 		end

 		return false
 	
 	end

end


class Game
  attr_reader :secret_code

  def initialize (secret="random")
  	if secret.class == Code
  		@secret_code = secret
  	else
  		@secret_code = Code.random
  	end
  end

  def get_guess
  	puts "Enter your guess."
  	input = $stdin.gets.chomp
  	parsed = Code.parse(input)
  	Code.new(parsed)
  end

  def display_matches(guess)
  	exact_matches = @secret_code.exact_matches(guess)
  	near_matches = @secret_code.near_matches(guess)

  	puts "You have #{exact_matches} exact matches."
  	puts "You have #{near_matches} near matches." 
  end

end

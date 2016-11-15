require "byebug"
class Hangman
  attr_reader :guesser, :referee, :board, :found
 
  def initialize(players)
  	@guesser = players[:guesser]
  	@referee = players[:referee]
  end

  def setup
  	length = referee.pick_secret_word
  	guesser.register_secret_length(length)
  	@board = ['_']*length
  end

  def take_turn
  	guess = guesser.guess
		@found = referee.check_guess(guess)
    update_board(guess)
    guesser.handle_response
  end

  def update_board(guess)
  	found.each do |value|
  		@board[value] = guess
  end

  end

end

class HumanPlayer




end

class ComputerPlayer
	attr_reader :secret_word, :dictionary, :secret_length

	def initialize(dictionary)
  	@dictionary = dictionary
    @secret_length = 0
  end

 	def register_secret_length(secret_length)
    @secret_length = secret_length
	end

  def candidate_words
    dictionary.each do |word|
      if word.length > secret_length
        dictionary.delete(word)
      end
    end

    dictionary
  end


	def guess(board)
		@board = board
		letter_count = {}

		dictionary.each do |word|
			letters = word.split('')
			letters.each do |letter|
				if letter_count[letter]
					letter_count[letter] += 1
				else
					letter_count[letter] = 1
				end
			end
		end

		board.each do |guessed|
			if letter_count.has_key?(guessed)
				letter_count.delete(guessed)
			end
		end

		highest_letter = letter_count.max_by{|k,v| v}[0]
	end

  def pick_secret_word
  	@secret_word = @dictionary[rand{0..dictionary.length-1}].split('')
  	@secret_word.length
  end

  def check_guess(guess)
  	@guess = guess
  	found = []
  	i = 0
   	@secret_word.each_with_index do |el, index|
  		if guess == el
  			found << index
  		end
  	end

  	found
  end

  def handle_response(guess, found = [])
  	
  	if found == []
  		dictionary.each do |word|
  			if word.include?(guess)
  				dictionary.delete(word)
  			end
  		end
  	else

  	found.each do |position|
      dictionary.each do |word|
        unless word[position] == guess
          dictionary.delete(word)
        end

        parsed = word.split('')

    		leftover_positions = (0..@secret_length).to_a - found
      	
      	leftover_positions.each do |leftover|
      		if word[leftover] == guess
      			dictionary.delete(word)
      		end
	     	end

      end
     end 
  	end
  end



end

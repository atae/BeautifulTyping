# Towers of Hanoi
#
# Write a Towers of Hanoi game:
# http://en.wikipedia.org/wiki/Towers_of_hanoi
#
# In a class `TowersOfHanoi`, keep a `towers` instance variable that is an array
# of three arrays. Each subarray should represent a tower. Each tower should
# store integers representing the size of its discs. Expose this instance
# variable with an `attr_reader`.
#
# You'll want a `#play` method. In a loop, prompt the user using puts. Ask what
# pile to select a disc from. The pile should be the index of a tower in your
# `@towers` array. Use gets
# (http://andreacfm.com/2011/06/11/learning-ruby-gets-and-chomp.html) to get an
# answer. Similarly, find out which pile the user wants to move the disc to.
# Next, you'll want to do different things depending on whether or not the move
# is valid. Finally, if they have succeeded in moving all of the discs to
# another pile, they win! The loop should end.
#
# You'll want a `TowersOfHanoi#render` method. Don't spend too much time on
# this, just get it playable.
#
# Think about what other helper methods you might want. Here's a list of all the
# instance methods I had in my TowersOfHanoi class:
# * initialize
# * play
# * render
# * won?
# * valid_move?(from_tower, to_tower)
# * move(from_tower, to_tower)
#
# Make sure that the game works in the console. There are also some specs to
# keep you on the right track:
#
# ```bash
# bundle exec rspec spec/towers_of_hanoi_spec.rb
# ```
#
# Make sure to run bundle install first! The specs assume you've implemented the
# methods named above.
# 

class TowersOfHanoi
	attr_reader :towers

	def initialize 
		@towers = [[3,2,1],[],[]]
	end

	def play
		exit = false
		until exit == true
			self.render
			puts "Which pile would you like to select the disc from?"
				from_tower = gets.chomp.to_i - 1
			puts "Which pile would you like to move the disc to?"
				to_tower = gets.chomp.to_i - 1

			if self.valid_move?(from_tower, to_tower)
				self.move(from_tower, to_tower)
			else
				puts "Invalid move."
			end


			if self.won?
				"You won! Exit? Y/N"
				until input = "Y" || input = "y" || input ="N" || input = "n"
					if input = "Y" || input = "y"
						self.initialize
					elsif input = "N" || input = "n"
						exit = true
					else
						"Invalid input."
					end
				end
			end
		end
	end

	def move(from_tower, to_tower)
		@towers[to_tower].unshift(@towers[from_tower].pop) 
	end

	def valid_move?(from_tower, to_tower)
		if @towers[from_tower].size == 0
			return false
		end

		if @towers[to_tower][0] == nil || @towers[to_tower][0] > @towers[from_tower][-1]
			return true
		end
	end


	def render
		@renderArray = [[],[],[]]

		idx1 = 0
		until idx1 == @renderArray.length 
			idx2 = 1
			until idx2 == @towers[idx1].length			
				if @towers[idx1][idx2] != nil || @towers[idx1][idx2] != 0 
					@renderArray[idx1] << " #{@towers[idx1][idx2]} "
					idx2 += 1
				end
			end
			@renderArray[idx1].unshift("Pile #{idx1+1}:")
			idx1 += 1
		end

		i = 0

		until i == @renderArray.length 
			puts @renderArray[i].join()
			i += 1
		end
	end


	def won?
		if @towers[1].size == 3 || @towers[2].size == 3
			return true
		end
	end


end

# game = TowersOfHanoi.new#
# game.play
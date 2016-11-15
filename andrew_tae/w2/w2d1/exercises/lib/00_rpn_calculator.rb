class RPNCalculator < Array
	def initialize
		@values=[]
		@solution = 0
	end

	def push(value)
		@values << value
	end

	def plus
		calculator_check
		sum = @values.pop + @values.pop
		@values << sum
		sum
	end

	def minus
		calculator_check
		second_number = @values.pop
		first_number = @values.pop
		difference = first_number - second_number
		@values << difference
		difference
	end

	def times
		calculator_check
		product = @values.pop * @values.pop
		@values << product
		product
	end

	def divide
		calculator_check
		second_number = @values.pop.to_f
		first_number = @values.pop.to_f
		quotient = first_number / second_number
		@values << quotient
		quotient
	end

	def calculator_check
		if @values.length <= 1
			raise "calculator is empty"
		end
	end

	def value
		@values[-1]
	end

	def tokens(string)
		tokens = string.split(' ')
		i = 0
		until i == tokens.count
			if tokens[i] == "*" || tokens[i] == "/" || tokens[i] == "+" || tokens[i] == "-"
				tokens[i] = tokens[i].to_sym
			else
				tokens[i] = tokens[i].to_i
			end
			i += 1
		end
		
	 tokens

	end

	def evaluate(string)
		tokens = tokens(string)
		i = 0
		until i == tokens.count
			if tokens[i].class == Fixnum
				@values << tokens[i]
			elsif tokens[i] == :+
				self.plus
			elsif tokens[i] == :-
				self.minus
			elsif tokens[i] == :*
				self.times
			else tokens[i] == :/
				self.divide
			end

			i += 1
		end

		value
	end

end


if __FILE__ == $PROGRAM_NAME
	calculator = RPNCalculator.new
	if ARGV[0]
		calculations = File.open(ARGV[0])
		if calculations
			calculations.each {|line| puts calculator.evaluate(line)}
		end

	else
			puts "Enter your values. Press enter twice to submit."
			line = ""
			input = " "
				until input == ""

					input = gets.chomp
					if input == Fixnum				
						line << input.to_i + " "
					else
						line << input + " "
					end

				end
			puts calculator.evaluate(line)
	end
end


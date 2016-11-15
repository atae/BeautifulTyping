require "byebug"

module InWords
	def in_words
		unique = {
			0 => "zero",
			1 => "one",
			2 => "two",
			3 => "three",
			4 => "four",
			5 => "five",
			6 => "six",
			7 => "seven",
			8 => "eight",
			9 => "nine",
			10 => "ten",
			11 => "eleven",
			12 => "twelve",
			13 => "thirteen",
			14 => "fourteen",
			15 => "fifteen",
			16 => "sixteen",
			17 => "seventeen",
			18 => "eighteen",
			19 => "nineteen"		
		}

		tens = {
			2 => "twenty",
			3 => "thirty",
			4 => "forty",
			5 => "fifty",
			6 => "sixty",
			7 => "seventy",
			8 => "eighty",
			9 => "ninety"
		}

		hundreds = {
			1 => "one hundred",
			2 => "two hundred",
			3 => "three hundred",
			4 => "four hundred",
			5 => "five hundred",
			6 => "six hundred",
			7 => "seven hundred",
			8 => "eight hundred",
			9 => "nine hundred"
		}

		magnitudes = {
			0 => "thousand",
 	 		1 => "million",
  		2 => "billion",
  		3 => "trillion"
		}

	
		words = ""
		string = self.to_s
		num_array = []
		i = 0
		if string.length%3 == 0
			until i == string.length
				num_array << string.slice(i..i+2)
				i += 3
			end
		elsif string.length%3 == 1
			num_array << string[0]
			i = 1
			until i == string.length
				num_array << string.slice(i..i+2)
				i += 3
			end
		elsif string.length%3 == 2
			num_array << string.slice(0..1)
			i = 2
			until i == string.length
				num_array << string.slice(i..i+2)
				i += 3
			end
		end

		magnitude_words = []
		i = num_array.length
		until i == 0
			magnitude_words << magnitudes[i-1]
			i -= 1
		end
		empty_magnitude = false

		num_array = num_array.map {|value| value.to_i}
		i = 0
		until i == num_array.length
			#byebug

			if i != 0 && empty_magnitude == false
				words << magnitude_words[i] + " "
				if num_array[i] == 0 
					i += 1
					empty_magnitude = true
					next
				end

				
			end




			if num_array[i] < 20 
				if empty_magnitude == true && num_array[i] == 0
					i += 1
					next
				end
 				words << unique[num_array[i]] + " "

			elsif num_array[i] < 100
							
					words << tens[(num_array[i] - (num_array[i]%10))/10] + " "
					
					if num_array[i]%10 != 0
					words << unique[num_array[i]%10] + " "
					end

			elsif num_array[i] < 1000
				
					words << hundreds[(num_array[i] - num_array[i]%100)/100] + " "

					if num_array[i]%100 != 0
					words << (num_array[i]%100).in_words + " "
					end

			end
				i += 1
				if num_array[i] != 0
					empty_magnitude = false
				end
			end

			
			
	


		words.slice!(-1)
		words
	end

end

class Fixnum
	include InWords
end

class Bignum
	include InWords
end
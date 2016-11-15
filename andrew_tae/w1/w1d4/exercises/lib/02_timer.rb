class Timer
	attr_accessor :seconds
	def initialize
		@seconds = 0
	end

	def time_string 
		string = ""
		time_array = [0,0,0]
		if @seconds >= 3600
			until @seconds <= 3600
				@seconds -= 3600
				time_array[0] += 1
			end
		end

		if @seconds >= 60
			until @seconds <= 60
				@seconds -= 60
				time_array[1] += 1
			end
		end

		time_array[2] = @seconds


		time_array.each do |value|
			if value < 10
					string << "0#{value}:"
			else
					string << "#{value}:"
			end
		end

		string.chop
	end
		



end
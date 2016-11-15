require 'byebug'
class Book
attr_accessor :title
	Lowercase = ["and","the","a","an","in", 'of']
	


	def title=(title)
		#byebug
		parsed_title = []
		split_title = title.split(" ")
		i = 0
		until i == split_title.length
			if Lowercase.include?(split_title[i]) && i != 0
				parsed_title << split_title[i]
			else
				parsed_title << split_title[i].capitalize
			end
			i += 1
		end

		@title = parsed_title.join(' ')

	end

end

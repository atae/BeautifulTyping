def echo(text)
	text
end

def shout(text)
	text.upcase
end

def repeat(text, repeat=2)
	repeated = ""
	(repeat-1).times {repeated += text + " "}
	repeated << text
end

def start_of_word(text, limit)
	text.slice(0,limit)
end

def first_word(text)
	split_text = text.split(' ')
	split_text[0]
end

LITTLE_WORDS = ['and', 'over', 'the']
def titleize(text)
	split_text = text.split(' ')
	titleized = []

	split_text.each_with_index do |word, index|
		if index!= 0 && LITTLE_WORDS.include?(word)
			titleized << word
		else
			titleized << word.capitalize
		end
	end

	titleized.join(' ')
end




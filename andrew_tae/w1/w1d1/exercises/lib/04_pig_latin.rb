VOWELS = ['a','e','i','o','u']

def translate(sentence)
	translated = []
	split_text = sentence.split(' ')

split_text.each do |text|
	if VOWELS.include?(text[0])
		translated << text+"ay"
	elsif text[0] == "q"
		translated << text[2..text.length] + "quay"
	elsif text[0..2] == "squ"
		translated << text[3..text.length] + "squay"
	elsif VOWELS.include?(text[1]) 	
		translated << text[1..text.length] + text[0] + "ay"
	elsif VOWELS.include?(text[2])
		translated << text[2..text.length] + text[0..1] + "ay"
	else
		translated << text[3..text.length] + text[0..2] + "ay"
	end

end

	translated.join(' ')
end
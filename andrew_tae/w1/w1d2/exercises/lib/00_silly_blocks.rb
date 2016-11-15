def reverser(&blk)
	text = yield
	split = text.split(' ')
	reverse = []
	split.each {|text| reverse << text.reverse}
	reverse.join(' ')
end

def adder(value=1, &blk)
	yield + value
end

def repeater(repeat=1, &blk)
repeat.times do
	yield
end

end


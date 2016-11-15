class Dictionary
	attr_accessor :entries

	def initialize
		@entries = {}
	end

	def add(options = {})
		if options.class == Hash
			@entries = @entries.merge(options)
		else
			@entries[options] = nil
		end

	end

	def keywords
		@entries.keys.sort
	end

	def include?(key)
		@entries.include?(key)
	end

	def find(search)
		search_hits = {}
		@entries.each do |key,value|
			if key.slice(0...search.length) == search
				search_hits[key] = value
			end
		end
		search_hits
	end

	def printable
		sorted = self.keywords
		printable = []
		sorted.each do |key|
			printable << "[#{key}] \"#{@entries[key]}\""
		end
		printable.join("\n")
		
	end
end

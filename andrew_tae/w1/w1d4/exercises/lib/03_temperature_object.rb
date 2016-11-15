class Temperature
  def initialize(options={})
  	@options = options
  end

  def in_fahrenheit
  	if @options.has_key?(:f)
  		return @options[:f]
  	elsif @options.has_key?(:c)
  		return (@options[:c] * 9.0/5.0) + 32
  	end
  end

  def in_celsius
  	if @options.has_key?(:c)
  		return @options[:c]
  	elsif @options.has_key?(:f)
  		return (@options[:f] - 32) * 5.0 / 9.0
  	end
  end

  def self.from_celsius(temp)
  	Temperature.new(:c => temp)
  end

  def self.from_fahrenheit(temp)
  	Temperature.new(:f => temp)
  end


end

class Celsius < Temperature
	def initialize(temp)
		@options = {:c => temp}
	end

end


class Fahrenheit < Temperature
	def initialize(temp)
		@options = {:f => temp}
	end

end
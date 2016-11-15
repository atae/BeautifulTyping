def add(num1, num2)
	num1 + num2
end

def subtract(num1,num2)
	num1 - num2
end

def sum(array)
	sum = 0
	array.each {|value| sum += value}
	sum
end

def multiply(*num)
	product = 1
	num.each {|value| product *= value}
	product
end 

def power(base,exponent)
	base ** exponent
end

def factorial(number)
	i = 0
	result = 1

	until i == number + 1
		i == 0 ? result = 1 : result *= i
		i += 1
	end

	result
end

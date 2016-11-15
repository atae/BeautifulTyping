require 'byebug'
# Sum
#
# Write an Array method, `sum`, that returns the sum of the elements in the
# array. You may assume that all of the elements are integers.

class Array
  def sum
    total = 0
    self.each {|value| total += value}
    total
  end
end

# Square
#
# Write an array method, `square`, that returns a new array containing the
# squares of each element. You should also implement a "bang!" version of this
# method, which mutates the original array.

class Array
  def square!
    self.each_with_index {|value,index| self[index] = self[index] ** 2}
    self
  end

  def square
    newArray = self.dup.square!
    newArray
  end
end

# Finding Uniques
#
# Monkey-patch the Array class with your own `uniq` method, called
# `my_uniq`. The method should return the unique elements, in the order
# they first appeared:
#
# ```ruby
# [1, 2, 1, 3, 3].my_uniq # => [1, 2, 3]
# ```
#
# Do not use the built-in `uniq` method!

class Array
  def my_uniq
    unique = []
    idx1 = 0
    until idx1 == self.length
      unless unique.include?(self[idx1])
        unique << self[idx1]
      end
      idx1 += 1
    end
    unique
  end
end

# Two Sum
#
# Write a new `Array#two_sum` method that finds all pairs of positions
# where the elements at those positions sum to zero.
#
# NB: ordering matters. I want each of the pairs to be sorted smaller
# index before bigger index. I want the array of pairs to be sorted
# "dictionary-wise":
#
# ```ruby
# [-1, 0, 2, -2, 1].two_sum # => [[0, 4], [2, 3]]
# ```
#
# * `[0, 2]` before `[1, 2]` (smaller first elements come first)
# * `[0, 1]` before `[0, 2]` (then smaller second elements come first)

class Array
  def two_sum
    #byebug
    sums = []
    idx1 = 0
    until idx1 == self.length
      idx2 = idx1 + 1
      until idx2 >= self.length
        if (self[idx1] + self[idx2]) == 0
          sums << [idx1,idx2]
        end
        idx2 += 1
      end
      idx1 += 1
    end
    sums
  end
end

# Median
#
# Write a method that finds the median of a given array of integers. If
# the array has an odd number of integers, return the middle item from the
# sorted array. If the array has an even number of integers, return the
# average of the middle two items from the sorted array.

class Array
  def median
    #byebug
    values = self.sort!
    if self.length == 0
      return nil
    elsif self.length == 1
      return self[0]
    elsif self.length%2 == 0
      solution = (values[self.length/2.0 - 1] + values[(self.length/2.0)]) / 2.0
    else
      solution = values[(self.length/2.0) - 0.5] 
    end
    solution
  end
end

# My Transpose
#
# To represent a *matrix*, or two-dimensional grid of numbers, we can
# write an array containing arrays which represent rows:
#
# ```ruby
# rows = [
#     [0, 1, 2],
#     [3, 4, 5],
#     [6, 7, 8]
#   ]
#
# row1 = rows[0]
# row2 = rows[1]
# row3 = rows[2]
# ```
#
# We could equivalently have stored the matrix as an array of
# columns:
#
# ```ruby
# cols = [
#     [0, 3, 6],
#     [1, 4, 7],
#     [2, 5, 8]
#   ]
# ```
#
# Write a method, `my_transpose`, which will convert between the
# row-oriented and column-oriented representations. You may assume square
# matrices for simplicity's sake. Usage will look like the following:
#
# ```ruby
# matrix = [
#   [0, 1, 2],
#   [3, 4, 5],
#   [6, 7, 8]
# ]
#
# matrix.my_transpose
#  # => [[0, 3, 6],
#  #    [1, 4, 7],
#  #    [2, 5, 8]]
# ```
#
# Don't use the built-in `transpose` method!

class Array
  def my_transpose
   #byebug
   column_length = self.length
   row_length = self[0].length

   transposed = Array.new(row_length) {Array.new(column_length)}
   column = 0
   #byebug
   until column == column_length
     row = 0
    until row == row_length
      transposed[row][column] = self[column][row]
      row += 1
    end

    column += 1
  end

  transposed
    
    
  end
end

# Bonus: Refactor your `Array#my_transpose` method to work with any rectangular
# matrix (not necessarily a square one).

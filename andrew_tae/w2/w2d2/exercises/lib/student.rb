require "byebug"
class Student
	attr_accessor :first_name, :last_name, :courses
	def initialize(first_name, last_name)
		@first_name = first_name
		@last_name = last_name
		@courses = []
		@course_load_hash = {}
	end

	def name
		@first_name + " " + @last_name
	end

	def enroll(new_course)
		@courses.each do |enrolled|
			if enrolled.conflicts_with?(new_course)	
				raise "Time conflict detected."
			end
		end
		
		unless @courses.include?(new_course)
		@courses << new_course
		end

		new_course.students << self
	end

	def course_load
		departments = Hash.new(0)
		 i = 0
		
		until i == @courses.length
			course = @courses[i]
			departments[course.department] += course.credits
			i += 1
		end

		 departments
	end

end

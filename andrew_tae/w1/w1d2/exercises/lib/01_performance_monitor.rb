def measure(repeats=1, &blk)
	totals = 0

	repeats.times do
		start = Time.now
			yield
		finish = Time.now	
		totals += (finish - start)
	end

	totals/repeats
end
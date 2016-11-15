class Friend
  def greeting(name = nil)
  	unless name
	  	return "Hello!"
	  end

	  "Hello, #{name}!"
  end
end

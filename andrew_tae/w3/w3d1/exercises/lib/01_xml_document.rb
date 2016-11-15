require "byebug"

class XmlDocument
  attr_accessor :indent

  def initialize (indent_mode=false)
    @indent_mode = indent_mode
    @indent_num = 0

  end

  def increase_indents
    @indent_num += 1
    nil
  end

  def decrease_indents
    @indent_num -= 1
    nil
  end

  def indents
    @indent = ""
    @indent_num.times do
      @indent << "  "
    end
    @indent
  end

  def closing_indents
    @indent.chomp.chomp
  end

  def method_missing(method_name, *args, &blk)
    if args[0] == nil && block_given? == false
      return "<#{method_name}/>"
    elsif args[0].class == Hash
      attribute = args[0].keys
      if @indent_mode == false
        return "<#{method_name} #{attribute[0]}=\"#{args[0][attribute[0]]}\"/>"
      else
        return "#{indents}<#{method_name} #{attribute[0]}=\"#{args[0][attribute[0]]}\"/>\n"
      end
    else
      if @indent_mode == false
        return "<#{method_name}>#{yield}</#{method_name}>"
      else
        return "#{indents}#{increase_indents}<#{method_name}>\n#{yield}#{decrease_indents}#{indents}</#{method_name}>\n"
      end
    end
  end
end

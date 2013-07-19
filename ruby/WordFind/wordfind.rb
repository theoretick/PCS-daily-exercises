
def find_words( puzzle, words)
	results = Array.new()
  puzzle_string = puzzle.join('')
  row_length = puzzle.first.length

     # "----"
     # "WORD"

    # a = "cruel world"
    # a.scan(/\w+/)        #=> ["cruel", "world"]

  words.each do |word|

    puzzle_string.scan(word).each {|result| results << result}
    # puzzle_string.scan(word.reverse).each {|result| results << result.reverse}


  end

	return results
end

##################################################

# combine to single line, use index for linebreaks
# check neighbor
#

# match first char
# match


# if 1+ word, split
def separate(dirty_array)
  split_pieces = []
  dirty_array.each do |elem|
    split_pieces << elem.split(/[^a-zA-Z]/)
  end
  flat_array = split_pieces.flatten
  return flat_array.reject! { |c| c.empty? }
end

# returns true if word is equivalent reversed, else false
def reversed?(puzzle, target)
  if puzzle.reverse == target
    return true
  else
    return false
  end
end

# returns true of word is identical, else false
def same?(puzzle, target)
  if puzzle == target
    return true
  else
    return false
  end
end



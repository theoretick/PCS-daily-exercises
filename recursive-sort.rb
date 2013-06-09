#
#

j = [3,2,4,5,3,5,6]

def sorter(unsorted, sorted=[])
  tail = unsorted.first

  if unsorted.length > 1
    sorter(unsorted, unsorted.first)
  else
    if sorted.first > tail

    end
  end
end

puts sorter(j)
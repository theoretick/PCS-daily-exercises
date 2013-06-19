#
# Sum of Cubes implementation using recursion and tail recursion
#

require 'minitest/autorun'

def soc_tail(num, total=0)
  if num == 1
  end
end

def soc(num)
  if number == 1
    return num
  else
    total = num**3 + soc(num-1)
  end
end


#################################################
# Tests
#################################################

class Test_Soc < MiniTest::Unit::TestCase

  def test_soc3_instanceof_Fixnum
    assert_instance_of Fixnum, soc(3)
  end

  def test_soc3_equals_36
    assert_equal 36, soc(3)
  end

  def test_soc4_equals_100
    assert_equal 100, soc(4)
  end

  def test_soc5_equals_225
    assert_equal 225, soc(5)
  end
end

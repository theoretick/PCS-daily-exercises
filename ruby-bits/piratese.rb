#
# exercise: piratese
#

require 'minitest/autorun'

class PirateString < String

  def initialize(in_string)
    super in_string.to_s
    @in_string = s.gsub(/Are/,'Yarr')
    @simple = in_string.index(?+)
  end

  def to_s
    @in_string.gsub(/Are/, 'Yarr')
  end
end

puts PirateString.new("Are you there?")
puts PirateString.new("Are you there?").to_s

class TestPirateString < MiniTest::Test
  def test_PirateString_to_s
    assert_equal 'Yarr you there?', PirateString.new('Are you there?').to_s
  end
end

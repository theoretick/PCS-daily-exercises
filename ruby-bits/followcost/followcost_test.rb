##################################################
# TESTS -- followcost project
##################################################

require 'minitest/autorun'
require_relative 'followcost'

class TestFollowCost < MiniTest::Unit::TestCase

  def test_date_parser
    assert_in_delta 1646, 50, FollowCost.date_parser("Sat Dec  6 18:22:15 2008")
  end

  def calculate_milliscobles_of_theoretick
    assert_in_delta 2.9, 0.5, FollowCost.calculate_milliscobles()
  end

  def test_followcost_complete_with_fetch
    assert_in_delta 2.9, 0.5, FollowCost.fetch('theoretick')
  end
end

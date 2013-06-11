#
#
#

require "net/http"
#require 'minitest/autorun'
require "active_support"

class Zipcode
  def self.distance_to_from(from, to)
    # can I move this out of the method?
    url = URI("http://maps.googleapis.com/maps/api/distancematrix/json?origins=#{from}&destinations=#{to}&mode=bicycling&sensor=false")
    response = Net::HTTP.get(url)
    parsed_response = ActiveSupport::JSON.decode(response)
    return parsed_response["rows"].first["elements"].first
  end
end

class Zip_Test < MiniTest::Unit::Test
  def test_distance_11206_to_95032
    assert_equal 11111, Zipcode.distance_to_from(11206, 95032)
  end
end


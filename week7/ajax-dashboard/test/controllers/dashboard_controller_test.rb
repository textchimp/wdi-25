require 'test_helper'

class DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get uptime" do
    get dashboard_uptime_url
    assert_response :success
  end

  test "should get cpu_hog" do
    get dashboard_cpu_hog_url
    assert_response :success
  end

  test "should get info" do
    get dashboard_info_url
    assert_response :success
  end

end

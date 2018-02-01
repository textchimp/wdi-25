class DashboardController < ApplicationController

  def uptime
    headers['Access-Control-Allow-Origin'] = '*'
    up = `uptime`

    render plain: up   #  { :plain => up }

    # render :new   # views/dashboard/new.html.erb

  end

  def cpu_hog
    headers['Access-Control-Allow-Origin'] = '*'
    hog = `ps xr | head -n 2`.split("\n")[1]
    time = `date`
    response = {
      biggest_hog: hog,
      current_time: time
    }

    @hogdata = hog

    # render json: response

    respond_to do |format|
        format.html   # render views/dashboard/cpu_hog.html.erb
        format.json { render json: response }
    end

  end

  def info
  end
end

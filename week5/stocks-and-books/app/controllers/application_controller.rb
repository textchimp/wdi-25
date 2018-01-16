class ApplicationController < ActionController::Base

  # protect_from_forgery with: :exception

  def cl( obj )
    @cl_debugstring = obj.to_json
  end


end

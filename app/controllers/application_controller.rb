class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def after_sign_in_path_for(resource)
    admin_index_path
  end
end

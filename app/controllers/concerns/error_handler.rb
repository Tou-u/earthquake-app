module ErrorHandler
  extend ActiveSupport::Concern

  included do
    rescue_from StandardError do |exception|
      render_error(500, exception.message)
    end

    rescue_from ActionController::ParameterMissing do |exception|
      render_error(400, exception.message)
    end

    rescue_from ActionDispatch::Http::Parameters::ParseError do |exception|
      render_error(400, exception.message)
    end

    rescue_from ActiveRecord::RecordNotFound do |exception|
      render_error(404, exception.message)
    end
  end

  private

  def render_error(status, message)
    render json: { error: message }, status: status
  end
end
# Load the Rails application.
require_relative "application"

Rails.application.configure do
  config.hosts << "earthquake.rodrigort.com"
end

# Initialize the Rails application.
Rails.application.initialize!

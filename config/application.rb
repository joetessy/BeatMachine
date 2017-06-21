require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BeatMachine
  class Application < Rails::Application

    config.paperclip_defaults = {
      :storage => :s3,
      s3_protocol: 'https',
      :s3_host_name => "s3-#{ENV["AWS_REGION"]}.amazonaws.com",
      :s3_credentials => {
        :bucket => ENV["AWS_BUCKET"],
        :access_key_id => ENV["AWS_ACCESS_KEY_ID"],
        :secret_access_key => ENV["AWS_SECRET_ACCESS_KEY"],
        :s3_region => ENV["AWS_REGION"]
      }
    }
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

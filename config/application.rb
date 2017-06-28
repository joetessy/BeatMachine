require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BeatMachine
  class Application < Rails::Application
    config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
    config.paperclip_defaults = {
      :storage => :s3,
      :s3_region => ENV["AWS_REGION"],
      :s3_credentials => {
        :bucket => ENV["s3_bucket"],
        :access_key_id => ENV["s3_access_key_id"],
        :secret_access_key => ENV["s3_secret_access_key"],
        :s3_region => ENV["s3_region"]
      }
    }

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

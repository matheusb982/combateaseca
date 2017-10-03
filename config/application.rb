require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactRailsCrudTutorial
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
      config.load_defaults 5.1

      # Settings in config/environments/* take precedence over those specified here.
        # Application configuration should go into files in config/initializers
        # -- all .rb files in that directory are automatically loaded.
        #Assets
        config.assets.enabled = true
        config.public_file_server.enabled = true
        config.assets.paths << Rails.root.join('/app/assets/fonts')

        config.i18n.default_locale = "pt-BR"

        config.time_zone = 'Brasilia'

        config.active_record.default_timezone = :local

        config.generators do |generate|
          generate.helper false
          generate.assets false
          generate.view_specs false
          generate.helper_specs false
          generate.test_framework false
        end


  end
end

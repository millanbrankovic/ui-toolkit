# Require any additional compass plugins here.
require "compass-normalize"

require 'autoprefixer-rails'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css, browsers: ['last 2 version', '> 1%', 'ie 10'])
  end
end

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "assets/stylesheets"
sass_dir = "sass"
images_dir = "assets/images"
javascripts_dir = "assets/js"
fonts_dir = "assets/fonts"

# output_style = :expanded or :nested or :compact or :compressed
output_style = :expanded

# Enable relative paths to assets via compass helper functions. Options "true", "false"
relative_assets = true

# Disable debugging comments that display the original location of your selectors. Options "true", "false"
line_comments = false
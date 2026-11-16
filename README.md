# tla_bootstrap_sass
 
 Subtheme for Bootstrap 5 - SASS Starter Kit

 See https://www.drupal.org/docs/contributed-themes/bootstrap-45-barrio-sass-starter-kit for installation instructions

## Icon assets

The TLA theme uses inline SVG, image assets and Bootstrap icons. Material Icons
is not used by its templates or the FLAT interface. The theme overrides
`bootstrap_barrio/material_design_icons` to disable that library, including on
existing sites whose stored icon-set setting still selects it. Fresh theme
installs default to no additional icon font. Bootstrap icons remain enabled.

After replacing the theme info file, clear Drupal caches and fully reload the
page. No database update is required. Changes are included in the next image
build. This YAML-only change needs a Drupal cache clear and a full browser
reload.

## Header logo

The bundled header logo is a transparent 276×110 lossless WebP, sized for a
55px-high display at twice the pixel density. It is 9,094 bytes versus 34,759
bytes for the original PNG. The original PNG remains available. The branding
preprocessor upgrades only the known theme image URL, preserving custom logos.
Explicit image dimensions and proportional CSS prevent stretching and reserve
space before loading. Fresh installs select the theme's default logo.

Deploy the WebP, theme info/PHP/template/CSS/library files together, then clear
Drupal caches and reload. Refresh PHP OPcache if timestamp validation is off.
Existing sites using a separately uploaded logo keep that setting; select the
default theme logo in Appearance to use the optimized bundled asset there.

## Account forms

The theme supplies the local login panel, branding, account links, and the
registration/password-reset back link independently of `flat_shib_auth`. When
the module supplies its login panels, the theme retains them without duplication.
The existing account-page CSS applies in both cases, including the responsive
two-column layout when institutional login is available. Deploy the theme PHP
and bundled `images/mpi-logo.png` and `images/tla-logo-with-text.png` together,
then clear Drupal caches. No database update is needed.

Account pages have an additional 2rem of space below the header. A login form
without an institutional panel is centered at a maximum width of 390px; the
two-panel layout remains available when Shibboleth supplies its panel.

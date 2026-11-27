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

## Front page collection cards

`templates/layout/page--front.html.twig` renders the six collection cards from
a small list at the top of the block, one `<article>` each: image, heading link
and description. The title link is stretched over the whole card in CSS, so
each card has a single link and the images are decorative (`alt=""`).

The styling is in `css/front_page.css`, attached to the front page only through
the `front-page` library. It sits in the `theme` CSS group so it loads after
`style.css` and overrides the older fixed-width `.category` rules there, which
can stay as they are. The cards use the shared `--flat-*` tokens, so they follow
the collection browser's sun/moon toggle (`body.dark-mode`), which also darkens
the page background; header and footer keep their colours. In dark mode they
use the raised surface so they stand out from the page. Every row of the grid is
as tall as its tallest card, so all cards in a block are the same height, and a
card is only as tall as its own content: a card without a description has no
room reserved for one. Pictures are 16:9 and at most 12rem high. The grid is
three columns on the 1084px page, two on tablets and one on phones.

Hovering a card and reaching it with the keyboard (`:focus-visible` on the title
link) give the same look: accent border, deeper shadow, lift, image zoom and an
arrow nudge. The card state replaces the browser's focus ring. The lift, zoom,
arrow nudge and the scroll-in fade only run when the visitor has not asked for
reduced motion; the border and shadow change still shows then.

Deploy the template, `css/front_page.css` and the libraries file together, then
clear Drupal caches. No database update is needed.

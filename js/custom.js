/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.tla_bootstrap_sass = {
    attach: function (context, settings) {

      // Custom code here

      // Main navigation menu accessibility.
      $('#navigation-inner .button > a, #navigation-inner .expanded > a:first-child').attr('aria-expanded', 'false').focus(function (e) {
        // Delay to reduce double-triggering with click event.
        setTimeout(function () {
          e.target.parentElement.classList.add('menu-expanded');
          e.target.setAttribute('aria-expanded', 'true');
        }, 100);
      }).click(function (e) {
        e.target.parentElement.classList.toggle('menu-expanded');
        e.target.setAttribute('aria-expanded', e.target.parentElement.classList.contains('menu-expanded') ? 'true' : 'false');
        e.preventDefault();
      }).parent().find('a').addBack().blur(function () {
        // Wait for next element to gain focus.
        setTimeout(function () {
          let trigger = document.querySelector('#navigation-inner .menu-expanded');
          // Check if focused element is still in the expanded menu.
          if (trigger !== null && !trigger.contains(document.activeElement)) {
            trigger.classList.remove('menu-expanded');
            trigger.querySelector(':scope > a:first-child').setAttribute('aria-expanded', 'false');
          }
        }, 10);
      });

    }
  };

})(jQuery, Drupal);
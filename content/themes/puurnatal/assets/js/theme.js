var avadaVars = {
	"admin_ajax": "http:\/\/puurnatal.nl\/wp-admin\/admin-ajax.php",
	"admin_ajax_nonce": "1029676e8c",
	"protocol": "",
	"theme_url": "http:\/\/puurnatal.nl\/wp-content\/themes\/Avada",
	"dropdown_goto": "Go to...",
	"mobile_nav_cart": "Shopping Cart",
	"page_smoothHeight": "false",
	"flex_smoothHeight": "false",
	"language_flag": "",
	"infinite_blog_finished_msg": "<em>All posts displayed.<\/em>",
	"infinite_finished_msg": "<em>All items displayed.<\/em>",
	"infinite_blog_text": "<em>Loading the next set of posts...<\/em>",
	"portfolio_loading_text": "<em>Loading Portfolio Items...<\/em>",
	"faqs_loading_text": "<em>Loading FAQ Items...<\/em>",
	"order_actions": "Details",
	"avada_rev_styles": "1",
	"avada_styles_dropdowns": "1",
	"blog_grid_column_spacing": "40",
	"blog_pagination_type": "Pagination",
	"carousel_speed": "2500",
	"counter_box_speed": "1000",
	"content_break_point": "800",
	"disable_mobile_animate_css": "0",
	"disable_mobile_image_hovers": "1",
	"portfolio_pagination_type": "Pagination",
	"form_bg_color": "#ffffff",
	"header_transparency": "0",
	"header_padding_bottom": "0px",
	"header_padding_top": "0px",
	"header_position": "Left",
	"header_sticky": "0",
	"header_sticky_tablet": "0",
	"header_sticky_mobile": "0",
	"header_sticky_type2_layout": "menu_and_logo",
	"sticky_header_shrinkage": "0",
	"is_responsive": "1",
	"is_ssl": "false",
	"isotope_type": "masonry",
	"layout_mode": "wide",
	"lightbox_animation_speed": "Fast",
	"lightbox_arrows": "1",
	"lightbox_autoplay": "0",
	"lightbox_behavior": "all",
	"lightbox_desc": "1",
	"lightbox_deeplinking": "1",
	"lightbox_gallery": "1",
	"lightbox_opacity": "0.875",
	"lightbox_path": "vertical",
	"lightbox_post_images": "1",
	"lightbox_skin": "metro-black",
	"lightbox_slideshow_speed": "5000",
	"lightbox_social": "1",
	"lightbox_title": "1",
	"lightbox_video_height": "720",
	"lightbox_video_width": "1280",
	"logo_alignment": "Center",
	"logo_margin_bottom": "10px",
	"logo_margin_top": "5px",
	"megamenu_max_width": "1100",
	"mobile_menu_design": "modern",
	"nav_height": "39",
	"nav_highlight_border": "3",
	"page_title_fading": "1",
	"pagination_video_slide": "0",
	"related_posts_speed": "2500",
	"submenu_slideout": "1",
	"side_header_break_point": "1023",
	"sidenav_behavior": "Hover",
	"site_width": "100%",
	"slider_position": "above",
	"slideshow_autoplay": "1",
	"slideshow_speed": "7000",
	"smooth_scrolling": "0",
	"status_lightbox": "1",
	"status_totop_mobile": "1",
	"status_vimeo": "1",
	"status_yt": "1",
	"testimonials_speed": "4000",
	"tfes_animation": "sides",
	"tfes_autoplay": "1",
	"tfes_interval": "3000",
	"tfes_speed": "800",
	"tfes_width": "150",
	"title_style_type": "single",
	"title_margin_top": "0px",
	"title_margin_bottom": "31px",
	"typography_responsive": "1",
	"typography_sensitivity": "0.60",
	"typography_factor": "1.50",
	"woocommerce_shop_page_columns": "",
	"woocommerce_checkout_error": "Not all fields have been filled in correctly.",
	"side_header_width": "240"
};

var generateCarousel = function () {
	if (jQuery().carouFredSel) {
		jQuery('.puur-carousel').each(function () {

			// Initialize the needed variables from data fields
			var $imageSize = (jQuery(this).attr('data-imagesize')) ? jQuery(this).data('imagesize') : 'fixed',
				$centerVertically = (jQuery(this).attr('data-metacontent') && 'yes' === jQuery(this).data('metacontent')) ? false : true,
				$autoplay = (jQuery(this).attr('data-autoplay') && 'yes' === jQuery(this).data('autoplay')) ? true : false,
				$timeoutDuration = (jQuery(this).parents('.related-posts').length) ? avadaVars.related_posts_speed : avadaVars.carousel_speed,
				$scrollEffect = (jQuery(this).attr('data-scrollfx')) ? jQuery(this).data('scrollfx') : 'scroll',
				$scrollItems = (jQuery(this).attr('data-scrollitems')) ? jQuery(this).data('scrollitems') : null,
				$touchScroll = (jQuery(this).attr('data-touchscroll') && 'yes' === jQuery(this).data('touchscroll')) ? true : false,
				$touchScrollClass = ($touchScroll) ? ' puur-carousel-swipe' : '',
				$columnMaximum = (jQuery(this).attr('data-columns')) ? jQuery(this).data('columns') : 6,
				$itemMargin = (jQuery(this).attr('data-itemmargin')) ? parseInt(jQuery(this).data('itemmargin')) : 44,
				$itemMinWidth = (jQuery(this).attr('data-itemwidth')) ? parseInt(jQuery(this).data('itemwidth')) + $itemMargin : 180 + $itemMargin,
				$carouselWidth = jQuery(this).width(),
				$carouselHeight = (jQuery(this).parent().hasClass('puur-image-carousel') && 'fixed' === $imageSize) ? '115px' : 'variable',
				$maxNumberOfItems = Math.floor($carouselWidth / $itemMinWidth);

			// Shift the wrapping positioning container $itemMargin to the left
			jQuery(this).find('.puur-carousel-positioner').css('margin-left', '-' + $itemMargin + 'px');

			// Add $itemMargin as left margin to all items
			jQuery(this).find('.puur-carousel-item').css('margin-left', $itemMargin + 'px');

			// Shift the left navigation button $itemMargin to the right
			jQuery(this).find('.puur-nav-prev').css('margin-left', $itemMargin + 'px');

			// Initialize the carousel
			jQuery(this).find('ul').carouFredSel({
				circular: true,
				infinite: true,
				responsive: true,
				centerVertically: $centerVertically,
				height: $carouselHeight,
				width: '100%',
				auto: {
					play: $autoplay,
					timeoutDuration: parseInt($timeoutDuration)
				},
				items: {
					height: $carouselHeight,
					width: $itemMinWidth,
					visible: {
						min: 1,
						max: $columnMaximum
					}
				},
				scroll: {
					pauseOnHover: true,
					items: $scrollItems,
					fx: $scrollEffect
				},
				swipe: {
					onTouch: $touchScroll,
					onMouse: $touchScroll,
					options: {
						excludedElements: 'button, input, select, textarea, a, .noSwipe'
					}
				},
				prev: jQuery(this).find('.puur-nav-prev'),
				next: jQuery(this).find('.puur-nav-next'),
				onCreate: function (data) {

					// Make the images visible once the carousel is loaded
					jQuery(this).find('.puur-carousel-item-wrapper').css('visibility', 'inherit');

					// Make the navigation visible once the carousel is loaded
					jQuery(this).parents('.puur-carousel').find('.puur-carousel-nav').css('visibility', 'inherit');

					// Remove overflow: hidden to  make carousel stretch full width
					if (jQuery(this).parents('.puur-woo-featured-products-slider').length) {
						jQuery(this).parent().css('overflow', '');
					}

					// Set the line-height of the main ul element to the height of the wrapping container
					if ($centerVertically) {
						jQuery(this).css('line-height', jQuery(this).parent().height() + 'px');
					}

					// Set the ul element to top: auto position to make is respect top padding
					jQuery(this).css('top', 'auto');

					// Set the position of the right navigation element to make it fit the overall carousel width
					jQuery(this).parents('.puur-carousel').find('.puur-nav-next').each(function () {
						jQuery(this).css('left', jQuery(this).parents('.puur-carousel').find('.puur-carousel-wrapper').width() - jQuery(this).width());
					});

					// Resize the placeholder images correctly in "fixed" picture size carousels
					if ('fixed' === $imageSize) {
						jQuery(this).find('.puur-placeholder-image').each(function () {
							jQuery(this).css('height', jQuery(this).parents('.puur-carousel-item').siblings().first().find('img').height());

						});
					}

					jQuery(window).trigger('resize');
				},
				currentVisible: function ($items) {
					return $items;
				}
			}, {

				// Set custom class name to the injected carousel container
				wrapper: {
					classname: 'puur-carousel-wrapper' + $touchScrollClass
				}
			});
		});
	}
};

var fusionReanimateSlider = function (contentContainer) {
	var slideContent = contentContainer.find('.slide-content');

	jQuery(slideContent).each(function () {

		jQuery(this).stop(true, true);

		jQuery(this).css('opacity', '0');
		jQuery(this).css('margin-top', '50px');

		jQuery(this).animate({
			'opacity': '1',
			'margin-top': '0'
		}, 1000);

	});
};

// Calculate the responsive type values for font size and line height for all heading tags
var fusionCalculateResponsiveTypeValues = function ($customSensitivity, $customMinimumFontSizeFactor, $customMobileBreakPoint, $elements) {

	// Setup options
	var $sensitivity = $customSensitivity || 1,
		$minimumFontSizeFactor = $customMinimumFontSizeFactor || 1.5,
		$bodyFontSize = parseInt(jQuery('body').css('font-size')),
		$minimumFontSize = $bodyFontSize * $minimumFontSizeFactor,
		$mobileBreakPoint = ($customMobileBreakPoint || 0 === $customMobileBreakPoint) ? $customMobileBreakPoint : 800,
		$windowSiteWidthRatio,
		$resizeFactor;

	var calculateValues = function () {
		var $siteWidth;

		// Get the site width for responsive type
		if (jQuery(window).width() >= $mobileBreakPoint) {

			// Get px based site width from Theme Options
			if (avadaVars.site_width.indexOf('px')) {
				$siteWidth = parseInt(avadaVars.site_width);

				// If site width is percentage based, use default site width
			} else {
				$siteWidth = 1100;
			}

			// If we are below $mobileBreakPoint of viewport width, set $mobileBreakPoint as site width
		} else {
			$siteWidth = $mobileBreakPoint;
		}

		// The resizing factor can be finetuned through a custom sensitivity; values below 1 decrease resizing speed
		$windowSiteWidthRatio = jQuery(window).width() / $siteWidth;
		$resizeFactor = 1 - ((1 - $windowSiteWidthRatio) * $sensitivity);

		// If window width is smaller than site width then let's adjust the headings
		if (jQuery(window).width() <= $siteWidth) {

			// Loop over all heading tegs
			jQuery($elements).each(function () {

				// Only decrease font-size if the we stay above $minimumFontSize
				if (jQuery(this).data('fontsize') * $resizeFactor > $minimumFontSize) {
					jQuery(this).css({
						'font-size': Math.round(jQuery(this).data('fontsize') * $resizeFactor * 1000) / 1000,
						'line-height': (Math.round(jQuery(this).data('lineheight') * $resizeFactor * 1000) / 1000) + 'px'
					});

					// If decreased font size would become too small, natural font size is above $minimumFontSize, set font size to $minimumFontSize
				} else if (jQuery(this).data('fontsize') > $minimumFontSize) {
					jQuery(this).css({
						'font-size': $minimumFontSize,
						'line-height': (Math.round(jQuery(this).data('lineheight') * $minimumFontSize / jQuery(this).data('fontsize') * 1000) / 1000) + 'px'
					});
				}
			});

			// If window width is larger than site width, delete any resizing styles
		} else {
			jQuery($elements).each(function () {

				// If initially an inline font size was set, restore it
				if (jQuery(this).data('inline-fontsize')) {
					jQuery(this).css('font-size', jQuery(this).data('fontsize'));

					// Otherwise remove inline font size
				} else {
					jQuery(this).css('font-size', '');
				}

				// If initially an inline line height was set, restore it
				if (jQuery(this).data('inline-lineheight')) {
					jQuery(this).css('line-height', jQuery(this).data('lineheight') + 'px');

					// Otherwise remove inline line height
				} else {
					jQuery(this).css('line-height', '');
				}

			});
		}
	};

	calculateValues();

	jQuery(window).on('resize orientationchange', calculateValues);
};

window.avadaTop = window.avadaBottom = false;
window.lastWindowPosition = 0;
window.lastWindowHeight = jQuery(window).height();

if (undefined === window.$ilInstances) {
	window.$ilInstances = [];
}

function fusionSideHeaderScroll() {
	var $mediaQueryIpad = Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)') || Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)'),
		$documentHeight,
		$windowPosition,
		$windowHeight,
		$bodyHeight,
		$adminbarHeight,
		$sideHeader,
		$sideHeaderWrapper,
		$sideHeaderHeight,
		$boxedWrapperOffset,
		$topOffset;

	if (!$mediaQueryIpad) {
		$documentHeight = jQuery(document).height();
		$windowPosition = jQuery(window).scrollTop();
		$windowHeight = jQuery(window).height();
		$bodyHeight = jQuery('body').height();
		$adminbarHeight = jQuery('#wpadminbar').height();
		$sideHeader = jQuery('#side-header');
		$sideHeaderWrapper = jQuery('.side-header-wrapper');
		$sideHeaderHeight = $sideHeaderWrapper.outerHeight();
		$boxedWrapperOffset = 0;

		if (jQuery('body').hasClass('layout-boxed-mode') && jQuery('body').hasClass('side-header-right')) {
			$sideHeader = jQuery('.side-header-wrapper');
			$boxedWrapperOffset = jQuery('#boxed-wrapper').offset().top;
		}

		if (Modernizr.mq('only screen and (max-width:' + avadaVars.side_header_break_point + 'px)')) {

			if (!$sideHeader.hasClass('puur-is-sticky')) {
				$sideHeader.css({
					'bottom': '',
					'position': ''
				});
			}

			return;
		}

		if ($sideHeaderHeight + $adminbarHeight > $windowHeight) {
			$sideHeader.css('height', 'auto');
			if ($windowPosition > window.lastWindowPosition) {
				if (window.avadaTop) {
					window.avadaTop = false;
					$topOffset = ($sideHeaderWrapper.offset().top > 0) ? $sideHeaderWrapper.offset().top - $boxedWrapperOffset : $adminbarHeight;
					$sideHeader.attr('style', 'top: ' + $topOffset + 'px; height: auto;');
				} else if (!window.avadaBottom && $windowPosition + $windowHeight > $sideHeaderHeight + $sideHeaderWrapper.offset().top && $sideHeaderHeight + $adminbarHeight < $bodyHeight) {
					window.avadaBottom = true;
					$sideHeader.attr('style', 'position: fixed; bottom: 0; top: auto; height: auto;');
				}
			} else if ($windowPosition < window.lastWindowPosition) {
				if (window.avadaBottom) {
					window.avadaBottom = false;
					$topOffset = ($sideHeaderWrapper.offset().top > 0) ? $sideHeaderWrapper.offset().top - $boxedWrapperOffset : $adminbarHeight;
					$sideHeader.attr('style', 'top: ' + $topOffset + 'px; height: auto;');
				} else if (!window.avadaTop && $windowPosition + $adminbarHeight < $sideHeaderWrapper.offset().top) {
					window.avadaTop = true;
					$sideHeader.attr('style', 'position: fixed; height: auto;');
				}
			} else {
				window.avadaTop = window.avadaBottom = false;

				$topOffset = ($sideHeaderWrapper.offset().top > 0) ? $sideHeaderWrapper.offset().top - $boxedWrapperOffset : $adminbarHeight;

				if ($windowHeight > window.lastWindowHeight && $bodyHeight > $sideHeaderWrapper.offset().top + $boxedWrapperOffset + $sideHeaderHeight && $windowPosition + $windowHeight > $sideHeaderWrapper.offset().top + $sideHeaderHeight) {
					$topOffset += $windowHeight - window.lastWindowHeight;
				}
				$sideHeader.attr('style', 'top:' + $topOffset + 'px; height: auto;');
			}
		} else {
			window.avadaTop = true;
			$sideHeader.attr('style', 'position: fixed;');
		}

		window.lastWindowPosition = $windowPosition;
		window.lastWindowHeight = $windowHeight;
	}
}

function addStylesForOldIEVersions() {

	// IE10
	if ('10.0' == cssua.ua.ie) {
		jQuery('head').append('<style type="text/css">.layout-boxed-mode .puur-footer-parallax { left: auto; right: auto; }.puur-imageframe,.imageframe-align-center{font-size: 0px; line-height: normal;}.puur-button.button-pill,.puur-button.button-pill:hover{filter: none;}.puur-header-shadow:after, .header-shadow#side-header:before, body.side-header-right .header-shadow#side-header:before{ display: none }.search input,.searchform input {padding-left:10px;} .avada-select-parent .select-arrow,.select-arrow{height:33px;background-color:' + avadaVars.form_bg_color + '}.search input{padding-left:5px;}header .tagline{margin-top:3px;}.star-rating span:before {letter-spacing: 0;}.avada-select-parent .select-arrow,.gravity-select-parent .select-arrow,.wpcf7-select-parent .select-arrow,.select-arrow{background: #fff;}.star-rating{width: 5.2em;}.star-rating span:before {letter-spacing: 0.1em;}</style>');
	}

	// IE11
	if ('11.0' == cssua.ua.ie) {
		jQuery('head').append('<style type="text/css">.layout-boxed-mode .puur-footer-parallax { left: auto; right: auto; }</style>');
	}
}

// Get WP admin bar height
function getAdminbarHeight() {
	var $adminbarHeight = 0;

	if (jQuery('#wpadminbar').length) {
		$adminbarHeight = parseInt(jQuery('#wpadminbar').outerHeight());
	}

	return $adminbarHeight;
}

// Get current height of sticky header
function getStickyHeaderHeight() {
	var $stickyHeaderType = 1,
		$stickyHeaderHeight = 0,
		$mediaQueryIpad = Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)') || Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)');

	// Set header type to 2 for headers v4, v5
	if (jQuery('.puur-header-v4').length || jQuery('.puur-header-v5').length) {
		$stickyHeaderType = 2;
	}

	// Sticky header is enabled
	if ('1' == avadaVars.header_sticky && jQuery('.puur-header-wrapper').length) {

		// Desktop mode - headers v1, v2, v3
		if (1 == $stickyHeaderType) {
			$stickyHeaderHeight = jQuery('.puur-header').outerHeight() - 1;

			// For headers v1 - v3 the sticky header min height is always 65px
			if ($stickyHeaderHeight < 64) {
				$stickyHeaderHeight = 64;
			}

			// Desktop mode - headers v4, v5
		} else {
			$stickyHeaderHeight = jQuery('.puur-secondary-main-menu').outerHeight();

			if ('menu_and_logo' === avadaVars.header_sticky_type2_layout) {
				$stickyHeaderHeight += jQuery('.puur-header').outerHeight();
			}
		}

		// Mobile mode
		if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {

			// Sticky header is enabled on mobile
			if ('1' == avadaVars.header_sticky_mobile) {

				// Classic mobile menu
				if (jQuery('.puur-mobile-menu-design-classic').length) {
					$stickyHeaderHeight = jQuery('.puur-secondary-main-menu').outerHeight();
				}

				// Modern mobile menu
				if (jQuery('.puur-mobile-menu-design-modern').length) {
					$stickyHeaderHeight = jQuery('.puur-header').outerHeight();
				}

				// Sticky header is disabled on mobile
			} else {
				$stickyHeaderHeight = 0;
			}
		}

		// Tablet mode
		if ('1' != avadaVars.header_sticky_tablet && $mediaQueryIpad) {
			$stickyHeaderHeight = 0;
		}
	}

	return $stickyHeaderHeight;
}

// Calculate height of sticky header on page load
function getWaypointTopOffset() {
	var $stickyHeaderHeight = 0,
		$mediaQueryIpad = Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)') || Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)'),
		$stickyHeaderType = 1;

	if (jQuery('.puur-header-v4').length || jQuery('.puur-header-v5').length) {
		$stickyHeaderType = 2;
	}

	// Sticky header is enabled
	if ('1' == avadaVars.header_sticky && jQuery('.puur-header-wrapper').length) {

		// Desktop mode - headers v1, v2, v3
		if (1 == $stickyHeaderType) {
			$stickyHeaderHeight = jQuery('.puur-header').outerHeight() - 1;

			// Desktop mode - headers v4, v5
		} else {

			// Menu only
			$stickyHeaderHeight = jQuery('.puur-secondary-main-menu').outerHeight();

			// Menu and logo
			if ('menu_and_logo' === avadaVars.header_sticky_type2_layout) {
				$stickyHeaderHeight += jQuery('.puur-header').outerHeight() - 1;
			}
		}

		// Mobile mode
		if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {

			// Sticky header is enabled on mobile
			if ('1' == avadaVars.header_sticky_mobile) {
				$stickyHeaderHeight = jQuery('.puur-header').outerHeight() - 1;

				// Sticky header is disabled on mobile
			} else {
				$stickyHeaderHeight = 0;
			}
		}

		// Tablet mode
		if ('1' != avadaVars.header_sticky_tablet && $mediaQueryIpad) {
			$stickyHeaderHeight = 0;
		}
	}

	return $stickyHeaderHeight;
}

function getWaypointOffset($object) {
	var $offset = $object.data('animationoffset'),
		$adminbarHeight,
		$stickyHeaderHeight;

	if (undefined === $offset) {
		$offset = 'bottom-in-view';
	}

	if ('top-out-of-view' === $offset) {
		$adminbarHeight = getAdminbarHeight();
		$stickyHeaderHeight = getWaypointTopOffset();

		$offset = $adminbarHeight + getWaypointTopOffset();
	}

	return $offset;
}

/**
 * Avada Quanity buttons add-back
 */
function avadaAddQuantityBoxes($quantitySelector) {

	var $quantityBoxes;

	if (!$quantitySelector) {
		$quantitySelector = '.qty';
	}

	$quantityBoxes = jQuery('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').find($quantitySelector);

	if ($quantityBoxes && 'date' != $quantityBoxes.prop('type')) {

		// Add plus and minus boxes
		$quantityBoxes.parent().addClass('buttons_added').prepend('<input type="button" value="-" class="minus" />');
		$quantityBoxes.addClass('input-text').after('<input type="button" value="+" class="plus" />');

		// Target quantity inputs on product pages
		jQuery('input' + $quantitySelector + ':not(.product-quantity input' + $quantitySelector + ')').each(function () {
			var $min = parseFloat(jQuery(this).attr('min'));

			if ($min && $min > 0 && parseFloat(jQuery(this).val()) < $min) {
				jQuery(this).val($min);
			}
		});

		jQuery('.plus, .minus').unbind('click');

		jQuery('.plus, .minus').on('click', function () {

			// Get values
			var $quantityBox = jQuery(this).parent().find($quantitySelector),
				$currentQuantity = parseFloat($quantityBox.val()),
				$maxQuantity = parseFloat($quantityBox.attr('max')),
				$minQuantity = parseFloat($quantityBox.attr('min')),
				$step = $quantityBox.attr('step');

			// Fallback default values
			if (!$currentQuantity || '' === $currentQuantity || 'NaN' === $currentQuantity) {
				$currentQuantity = 0;
			}
			if ('' === $maxQuantity || 'NaN' === $maxQuantity) {
				$maxQuantity = '';
			}

			if ('' === $minQuantity || 'NaN' === $minQuantity) {
				$minQuantity = 0;
			}
			if ('any' === $step || '' === $step || undefined === $step || 'NaN' === parseFloat($step)) {
				$step = 1;
			}

			// Change the value
			if (jQuery(this).is('.plus')) {

				if ($maxQuantity && ($maxQuantity == $currentQuantity || $currentQuantity > $maxQuantity)) {
					$quantityBox.val($maxQuantity);
				} else {
					$quantityBox.val($currentQuantity + parseFloat($step));
				}

			} else {

				if ($minQuantity && ($minQuantity == $currentQuantity || $currentQuantity < $minQuantity)) {
					$quantityBox.val($minQuantity);
				} else if ($currentQuantity > 0) {
					$quantityBox.val($currentQuantity - parseFloat($step));
				}

			}

			// Trigger change event
			$quantityBox.trigger('change');
		});
	}
}

(function (jQuery) {

	'use strict';

	jQuery('.tfs-slider').each(function () {
		var thisTFSlider = this;

		if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
			jQuery(thisTFSlider).data('parallax', 0);
			jQuery(thisTFSlider).data('full_screen', 0);
		}

		if (cssua.ua.tablet_pc) {
			jQuery(thisTFSlider).data('parallax', 0);
		}

		if (cssua.ua.mobile) {
			jQuery(thisTFSlider).data('parallax', 0);
		}
	});

	// Waypoint
	jQuery.fn.init_waypoint = function () {
		if (jQuery().waypoint) {

			// Counters Box
			jQuery('.puur-counter-box').not('.puur-modal .puur-counter-box').each(function () {
				var $offset = getWaypointOffset(jQuery(this));

				jQuery(this).waypoint(function () {
					jQuery(this).find('.display-counter').each(function () {
						jQuery(this).$fusionBoxCounting();
					});
				}, {
					triggerOnce: true,
					offset: $offset
				});
			});

			// Counter Circles
			jQuery('.counter-circle-wrapper').not('.puur-accordian .counter-circle-wrapper, .puur-tabs .counter-circle-wrapper, .puur-modal .counter-circle-wrapper').each(function () {
				var $offset = getWaypointOffset(jQuery(this));

				jQuery(this).waypoint(function () {
					jQuery(this).puur_recalc_circles(true);
					jQuery(this).puur_draw_circles();
				}, {
					triggerOnce: true,
					offset: $offset
				});
			});

			// Counter Circles Responsive Resizing
			jQuery('.counter-circle-wrapper').not('.puur-modal .counter-circle-wrapper').each(function () {
				var $offset = getWaypointOffset(jQuery(this)),
					$adminbarHeight,
					$stickyHeaderHeight;

				if ('top-out-of-view' === $offset) {
					$adminbarHeight = getAdminbarHeight(),
						$stickyHeaderHeight = getWaypointTopOffset();

					$offset = $adminbarHeight + getWaypointTopOffset();
				}

				jQuery(this).waypoint(function () {
					var counterCircles = jQuery(this);

					jQuery(window).on('resize', function () {
						counterCircles.puur_redraw_circles();
					});
				}, {
					triggerOnce: true,
					offset: $offset
				});
			});

			// Progressbar
			jQuery('.puur-progressbar').not('.puur-modal .puur-progressbar').each(function () {
				var $offset = getWaypointOffset(jQuery(this));

				jQuery(this).waypoint(function () {
					jQuery(this).puur_draw_progress();
				}, {
					triggerOnce: true,
					offset: $offset
				});
			});

			// Content Boxes Timeline Design
			jQuery('.puur-content-boxes').each(function () {
				var $offset = getWaypointOffset(jQuery(this));

				jQuery(this).waypoint(function () {
					var $delay = 0;

					jQuery(this).find('.content-box-column').each(function () {
						var $element = this,
							$animationType,
							$animationDuration;

						setTimeout(function () {
							jQuery($element).find('.puur-animated').css('visibility', 'visible');

							// This code is executed for each appeared element
							$animationType = jQuery($element).find('.puur-animated').data('animationtype');
							$animationDuration = jQuery($element).find('.puur-animated').data('animationduration');

							jQuery($element).find('.puur-animated').addClass($animationType);

							if ($animationDuration) {
								jQuery($element).find('.puur-animated').css('-moz-animation-duration', $animationDuration + 's');
								jQuery($element).find('.puur-animated').css('-webkit-animation-duration', $animationDuration + 's');
								jQuery($element).find('.puur-animated').css('-ms-animation-duration', $animationDuration + 's');
								jQuery($element).find('.puur-animated').css('-o-animation-duration', $animationDuration + 's');
								jQuery($element).find('.puur-animated').css('animation-duration', $animationDuration + 's');
							}

							if (jQuery($element).parents('.puur-content-boxes').hasClass('content-boxes-timeline-horizontal') ||
								jQuery($element).parents('.puur-content-boxes').hasClass('content-boxes-timeline-vertical')) {
								jQuery($element).addClass('puur-appear');
							}
						}, $delay);

						$delay += parseInt(jQuery(this).parents('.puur-content-boxes').attr('data-animation-delay'));
					});
				}, {
					triggerOnce: true,
					offset: $offset
				});
			});

			// CSS Animations
			jQuery('.puur-animated').each(function () {
				var $offset = getWaypointOffset(jQuery(this)),
					$adminbarHeight,
					$stickyHeaderHeight;

				if ('top-out-of-view' === $offset) {
					$adminbarHeight = getAdminbarHeight();
					$stickyHeaderHeight = getStickyHeaderHeight();

					$offset = $adminbarHeight + $stickyHeaderHeight;
				}

				jQuery(this).waypoint(function () {

					var $animationType,
						$animationDuration,
						$currentElement;

					if (!jQuery(this).parents('.puur-delayed-animation').length) {
						jQuery(this).css('visibility', 'visible');

						// This code is executed for each appeared element
						$animationType = jQuery(this).data('animationtype'),
							$animationDuration = jQuery(this).data('animationduration');

						jQuery(this).addClass($animationType);

						if ($animationDuration) {
							jQuery(this).css('-moz-animation-duration', $animationDuration + 's');
							jQuery(this).css('-webkit-animation-duration', $animationDuration + 's');
							jQuery(this).css('-ms-animation-duration', $animationDuration + 's');
							jQuery(this).css('-o-animation-duration', $animationDuration + 's');
							jQuery(this).css('animation-duration', $animationDuration + 's');

							// Remove the animation class, when the animation is finished; this is done
							// to prevent conflicts with image hover effects
							$currentElement = jQuery(this);
							setTimeout(function () {
								$currentElement.removeClass($animationType);
							}, $animationDuration * 1000);
						}
					}

				}, {
					triggerOnce: true,
					offset: $offset
				});
			});
		}
	};

	// Recalculate carousel elements
	jQuery.fn.puur_recalculate_carousel = function () {
		jQuery(this).not('.puur-woo-featured-products-slider').each(function () {
			var $carousel = jQuery(this),
				$imageSize = jQuery(this).data('imagesize'),
				$imageHeights,
				$neededHeight;

			// Timeout needed for size changes to take effect, before weaccess them
			setTimeout(function () {

				// Set the position of the right navigation element to make it fit the overall carousel width
				$carousel.find('.puur-nav-next').each(function () {
					jQuery(this).css('left', $carousel.find('.puur-carousel-wrapper').width() - jQuery(this).width());
				});

				// Resize the placeholder images correctly in "fixed" picture size carousels
				if ('fixed' === $imageSize) {
					$imageHeights = $carousel.find('.puur-carousel-item').map(function () {
							return jQuery(this).find('img').height();
						}).get(),
						$neededHeight = Math.max.apply(null, $imageHeights);

					$carousel.find('.puur-placeholder-image').each(function () {
						jQuery(this).css('height', $neededHeight);
					});
					if (jQuery($carousel).parents('.puur-image-carousel').length >= 1) {
						$carousel.find('.puur-image-wrapper').each(function () {
							jQuery(this).css('height', $neededHeight);
							jQuery(this).css('width', '100%');
							jQuery(this).find('> a').css('line-height', ($neededHeight - 2) + 'px');
						});
					}
				}
			}, 5);
		});
	};

	// Animate counter boxes
	jQuery.fn.$fusionBoxCounting = function () {
		var $countValue = jQuery(this).data('value'),
			$countDirection = jQuery(this).data('direction'),
			$delimiter = jQuery(this).data('delimiter'),
			$fromValue = 0,
			$toValue = $countValue,
			$counterBoxSpeed = avadaVars.counter_box_speed,
			$counterBoxInterval = Math.round(avadaVars.counter_box_speed / 100);

		if (!$delimiter) {
			$delimiter = '';
		}

		if ('down' === $countDirection) {
			$fromValue = $countValue;
			$toValue = 0;
		}

		jQuery(this).countTo({
			from: $fromValue,
			to: $toValue,
			refreshInterval: $counterBoxInterval,
			speed: $counterBoxSpeed,
			formatter: function (value, options) {
				value = value.toFixed(options.decimals);
				value = value.replace(/\B(?=(\d{3})+(?!\d))/g, $delimiter);

				if ('-0' == value) {
					value = 0;
				}

				return value;
			}
		});
	};

	// Animate counter circles
	jQuery.fn.puur_draw_circles = function () {
		var circle = jQuery(this),
			countdown = circle.children('.counter-circle').attr('data-countdown'),
			filledcolor = circle.children('.counter-circle').attr('data-filledcolor'),
			unfilledcolor = circle.children('.counter-circle').attr('data-unfilledcolor'),
			scale = circle.children('.counter-circle').attr('data-scale'),
			size = circle.children('.counter-circle').attr('data-size'),
			speed = circle.children('.counter-circle').attr('data-speed'),
			strokesize = circle.children('.counter-circle').attr('data-strokesize'),
			percentage = circle.children('.counter-circle').attr('data-percent');

		if (scale) {
			scale = jQuery('body').css('color');
		}

		if (countdown) {
			circle.children('.counter-circle').attr('data-percent', 100);

			circle.children('.counter-circle').easyPieChart({
				barColor: filledcolor,
				trackColor: unfilledcolor,
				scaleColor: scale,
				scaleLength: 5,
				lineCap: 'round',
				lineWidth: strokesize,
				size: size,
				rotate: 0,
				animate: {
					duration: speed,
					enabled: true
				}
			});
			circle.children('.counter-circle').data('easyPieChart').enableAnimation();
			circle.children('.counter-circle').data('easyPieChart').update(percentage);
		} else {
			circle.children('.counter-circle').easyPieChart({
				barColor: filledcolor,
				trackColor: unfilledcolor,
				scaleColor: scale,
				scaleLength: 5,
				lineCap: 'round',
				lineWidth: strokesize,
				size: size,
				rotate: 0,
				animate: {
					duration: speed,
					enabled: true
				}
			});
		}
	};

	jQuery.fn.puur_recalc_circles = function ($animate) {
		var $counterCirclesWrapper = jQuery(this),
			$currentSize,
			$originalSize,
			$fusionCountersCircleWidth;

		// Make sure that only currently visible circles are redrawn; important e.g. for tabs
		if ($counterCirclesWrapper.is(':hidden')) {
			return;
		}

		$counterCirclesWrapper.attr('data-currentsize', $counterCirclesWrapper.width());
		$counterCirclesWrapper.removeAttr('style');
		$counterCirclesWrapper.children().removeAttr('style');
		$currentSize = $counterCirclesWrapper.data('currentsize');
		$originalSize = $counterCirclesWrapper.data('originalsize');
		$fusionCountersCircleWidth = $counterCirclesWrapper.parent().width();

		// Overall container width is smaller than one counter circle; e.g. happens for elements in column shortcodes
		if ($fusionCountersCircleWidth < $counterCirclesWrapper.data('currentsize')) {

			$counterCirclesWrapper.css({
				'width': $fusionCountersCircleWidth,
				'height': $fusionCountersCircleWidth,
				'line-height': $fusionCountersCircleWidth + 'px'
			});
			$counterCirclesWrapper.find('.puur-counter-circle').each(function () {
				jQuery(this).css({
					'width': $fusionCountersCircleWidth,
					'height': $fusionCountersCircleWidth,
					'line-height': $fusionCountersCircleWidth + 'px',
					'font-size': 50 * $fusionCountersCircleWidth / 220
				});
				jQuery(this).data('size', $fusionCountersCircleWidth);
				jQuery(this).data('strokesize', $fusionCountersCircleWidth / 220 * 11);
				if (!$animate) {
					jQuery(this).data('animate', false);
				}
				jQuery(this).attr('data-size', $fusionCountersCircleWidth);
				jQuery(this).attr('data-strokesize', $fusionCountersCircleWidth / 220 * 11);
			});

		} else {
			$counterCirclesWrapper.css({
				'width': $originalSize,
				'height': $originalSize,
				'line-height': $originalSize + 'px'
			});
			$counterCirclesWrapper.find('.puur-counter-circle').each(function () {
				jQuery(this).css({
					'width': $originalSize,
					'height': $originalSize,
					'line-height': $originalSize + 'px',
					'font-size': 50 * $originalSize / 220
				});

				jQuery(this).data('size', $originalSize);
				jQuery(this).data('strokesize', $originalSize / 220 * 11);
				if (!$animate) {
					jQuery(this).data('animate', false);
				}
				jQuery(this).attr('data-size', $originalSize);
				jQuery(this).attr('data-strokesize', $originalSize / 220 * 11);
			});

		}
	};

	jQuery.fn.puur_redraw_circles = function () {
		var $counterCirclesWrapper = jQuery(this);

		// Make sure that only currently visible circles are redrawn; important e.g. for tabs
		if ($counterCirclesWrapper.is(':hidden')) {
			return;
		}

		$counterCirclesWrapper.puur_recalc_circles(false);
		$counterCirclesWrapper.find('canvas').remove();
		$counterCirclesWrapper.find('.counter-circle').removeData('easyPieChart');
		$counterCirclesWrapper.puur_draw_circles();
	};

	// Animate progress bar
	jQuery.fn.puur_draw_progress = function () {
		var progressbar = jQuery(this),
			percentage;
		if (jQuery('html').hasClass('lt-ie9')) {
			progressbar.css('visibility', 'visible');
			progressbar.each(function () {
				percentage = progressbar.find('.progress').attr('aria-valuenow');
				progressbar.find('.progress').css('width', '0%');
				progressbar.find('.progress').animate({
					width: percentage + '%'
				}, 'slow');
			});
		} else {
			progressbar.find('.progress').css('width', function () {
				return jQuery(this).attr('aria-valuenow') + '%';
			});
		}
	};

	// Set flip boxes equal front/back height
	jQuery.fn.fusionCalcFlipBoxesHeight = function () {
		var flipBox = jQuery(this),
			outerHeight,
			height,
			topMargin = 0;

		flipBox.find('.flip-box-front').css('min-height', '');
		flipBox.find('.flip-box-back').css('min-height', '');
		flipBox.find('.flip-box-front-inner').css('margin-top', '');
		flipBox.find('.flip-box-back-inner').css('margin-top', '');
		flipBox.css('min-height', '');

		setTimeout(function () {
			if (flipBox.find('.flip-box-front').outerHeight() > flipBox.find('.flip-box-back').outerHeight()) {
				height = flipBox.find('.flip-box-front').height();
				if (cssua.ua.ie && '8' == cssua.ua.ie.substr(0, 1)) {
					outerHeight = flipBox.find('.flip-box-front').height();
				} else {
					outerHeight = flipBox.find('.flip-box-front').outerHeight();
				}
				topMargin = (height - flipBox.find('.flip-box-back-inner').outerHeight()) / 2;

				flipBox.find('.flip-box-back').css('min-height', outerHeight);
				flipBox.css('min-height', outerHeight);
				flipBox.find('.flip-box-back-inner').css('margin-top', topMargin);
			} else {
				height = flipBox.find('.flip-box-back').height();
				if (cssua.ua.ie && '8' == cssua.ua.ie.substr(0, 1)) {
					outerHeight = flipBox.find('.flip-box-back').height();
				} else {
					outerHeight = flipBox.find('.flip-box-back').outerHeight();
				}
				topMargin = (height - flipBox.find('.flip-box-front-inner').outerHeight()) / 2;

				flipBox.find('.flip-box-front').css('min-height', outerHeight);
				flipBox.css('min-height', outerHeight);
				flipBox.find('.flip-box-front-inner').css('margin-top', topMargin);
			}

			if (cssua.ua.ie && '8' == cssua.ua.ie.substr(0, 1)) {
				flipBox.find('.flip-box-back').css('height', '100%');
			}

		}, 100);
	};

	// Fusion scroller plugin to change css while scrolling
	jQuery.fn.fusionScroller = function (options) {
		var settings = jQuery.extend({
				type: 'opacity',
				offset: 0,
				endOffset: ''
			}, options),
			divs = jQuery(this);

		divs.each(function () {
			var offset,
				height,
				endOffset,
				currentElement = this;

			jQuery(window).on('scroll', function () {

				var st,
					diff,
					diffPercentage,
					opacity,
					blur;

				offset = jQuery(currentElement).offset().top;
				if (jQuery('body').hasClass('admin-bar')) {
					offset = jQuery(currentElement).offset().top - jQuery('#wpadminbar').outerHeight();
				}
				if (0 < settings.offset) {
					offset = jQuery(currentElement).offset().top - settings.offset;
				}
				height = jQuery(currentElement).outerHeight();

				endOffset = offset + height;
				if (settings.endOffset && jQuery(settings.endOffset).length) {
					endOffset = jQuery(settings.endOffset).offset().top;
				}

				st = jQuery(this).scrollTop();

				if (st >= offset && st <= endOffset) {
					diff = endOffset - st;
					diffPercentage = (diff / height) * 100;

					if ('opacity' === settings.type) {
						opacity = (diffPercentage / 100) * 1;
						jQuery(currentElement).css({
							'opacity': opacity
						});
					} else if ('blur' === settings.type) {
						diffPercentage = 100 - diffPercentage;
						blur = 'blur(' + ((diffPercentage / 100) * 50) + 'px)';
						jQuery(currentElement).css({
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur
						});
					} else if ('fading_blur' === settings.type) {
						opacity = (diffPercentage / 100) * 1;
						diffPercentage = 100 - diffPercentage;
						blur = 'blur(' + ((diffPercentage / 100) * 50) + 'px)';
						jQuery(currentElement).css({
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur,
							'opacity': opacity
						});
					}
				}

				if (st < offset) {
					if ('opacity' === settings.type) {
						jQuery(currentElement).css({
							'opacity': 1
						});
					} else if ('blur' === settings.type) {
						blur = 'blur(0px)';
						jQuery(currentElement).css({
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur
						});
					} else if ('fading_blur' === settings.type) {
						blur = 'blur(0px)';
						jQuery(currentElement).css({
							'opacity': 1,
							'-webkit-filter': blur,
							'-ms-filter': blur,
							'-o-filter': blur,
							'-moz-filter': blur,
							'filter': blur
						});
					}
				}
			});
		});
	};

	// Change active tab when a link containing a tab ID is clicked; on and off page
	jQuery.fn.fusionSwitchTabOnLinkClick = function ($customID) {

		var $linkHash,
			$linkID;

		// The custom_id is used for on page links

		if ($customID) {
			$linkHash = $customID;
		} else {
			$linkHash = ('#_' == document.location.hash.substring(0, 2)) ? document.location.hash.replace('#_', '#') : document.location.hash;
		}
		$linkID = ('#_' == $linkHash.substring(0, 2)) ? $linkHash.split('#_')[1] : $linkHash.split('#')[1];

		if ($linkHash && jQuery(this).find('.nav-tabs li a[href="' + $linkHash + '"]').length) {
			jQuery(this).find('.nav-tabs li').removeClass('active');
			jQuery(this).find('.nav-tabs li a[href="' + $linkHash + '"]').parent().addClass('active');

			jQuery(this).find('.tab-content .tab-pane').removeClass('in').removeClass('active');
			jQuery(this).find('.tab-content .tab-pane[id="' + $linkID + '"]').addClass('in').addClass('active');
		}

		if ($linkHash && jQuery(this).find('.nav-tabs li a[id="' + $linkID + '"]').length) {
			jQuery(this).find('.nav-tabs li').removeClass('active');
			jQuery(this).find('.nav-tabs li a[id="' + $linkID + '"]').parent().addClass('active');

			jQuery(this).find('.tab-content .tab-pane').removeClass('in').removeClass('active');
			jQuery(this).find('.tab-content .tab-pane[id="' + jQuery(this).find('.nav-tabs li a[id="' + $linkID + '"]').attr('href').split('#')[1] + '"]').addClass('in').addClass('active');
		}
	};

	// Max height for columns and content boxes
	jQuery.fn.equalHeights = function ($minHeight, $maxHeight) {

		var $tallest;

		if (Modernizr.mq('only screen and (min-width: ' + avadaVars.content_break_point + 'px)') || Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)')) {
			$tallest = ($minHeight) ? $minHeight : 0;

			this.each(function () {
				jQuery(this).css('min-height', '0');
				jQuery(this).css('height', 'auto');
				jQuery(this).find('.puur-column-table').css('height', 'auto');

				if (jQuery(this).outerHeight() > $tallest) {
					$tallest = jQuery(this).outerHeight();
				}
			});

			if (($maxHeight) && $tallest > $maxHeight) {
				$tallest = $maxHeight;
			}

			return this.each(function () {
				var $newHeight = $tallest;

				// If $newHeight is 0, then there is no content in any of the columns. Set the empty column param, so that bg images can be scaled correctly
				if ('0' == $newHeight) {
					jQuery(this).attr('data-empty-column', 'true');
				}

				// Needed for vertically centered columns
				if (jQuery(this).children('.puur-column-table').length) {
					$newHeight = $tallest - (jQuery(this).outerHeight() - jQuery(this).height());
				}

				jQuery(this).css('min-height', $newHeight);
				jQuery(this).find('.puur-column-table').height($newHeight);
			});
		} else {
			return this.each(function () {
				jQuery(this).css('min-height', '');
				jQuery(this).find('.puur-column-table').css('height', '');
			});
		}
	};

	// Set the bg image dimensions of an empty column as data attributes
	jQuery.fn.puur_set_bg_img_dims = function () {
		jQuery(this).each(function () {

			var $backgroundImage,
				$imageHeight,
				$imageWidth;

			if (('<div class="puur-clearfix"></div>' === jQuery.trim(jQuery(this).html()) || '' === jQuery.trim(jQuery(this).html())) && jQuery(this).data('bg-url')) {

				// For background image we need to setup the image object to get the natural heights
				$backgroundImage = new Image();
				$backgroundImage.src = jQuery(this).data('bg-url');
				$imageHeight = parseInt($backgroundImage.naturalHeight);
				$imageWidth = parseInt($backgroundImage.naturalWidth);

				// IE8, Opera fallback
				$backgroundImage.onload = function () {
					$imageHeight = parseInt(this.height);
					$imageWidth = parseInt(this.width);
				};

				// Set the
				jQuery(this).attr('data-bg-height', $imageHeight);
				jQuery(this).attr('data-bg-width', $imageWidth);
			}
		});
	};

	// Calculate the correct aspect ratio respecting height of an empty column with bg image
	jQuery.fn.puur_calculate_empty_column_height = function () {

		jQuery(this).each(function () {

			var $imageHeight,
				$imageWidth,
				$containerWidth,
				$widthRatio,
				$calculatedContainerHeight;

			if ((jQuery(this).parents('.puur-equal-height-columns').length && (Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)') || true === jQuery(this).data('empty-column'))) || !jQuery(this).parents('.puur-equal-height-columns').length) {
				if ('<div class="puur-clearfix"></div>' === jQuery.trim(jQuery(this).html()) || '' === jQuery.trim(jQuery(this).html())) {
					$imageHeight = jQuery(this).data('bg-height');
					$imageWidth = jQuery(this).data('bg-width');
					$containerWidth = jQuery(this).outerWidth();
					$widthRatio = $containerWidth / $imageWidth;
					$calculatedContainerHeight = $imageHeight * $widthRatio;

					jQuery(this).height($calculatedContainerHeight);
				}
			}
		});
	};

	// Reinitialize google map; needed when maps are loaded inside of hidden containers
	jQuery.fn.reinitializeGoogleMap = function () {
		var fusionMapObject = jQuery(this).data('plugin_puur_maps'),
			map,
			center,
			markers,
			i;

		if (fusionMapObject) {
			map = fusionMapObject.map,
				center = map.getCenter(),
				markers = fusionMapObject.markers;

			google.maps.event.trigger(map, 'resize');
			map.setCenter(center);
			if (markers) {
				for (i = 0; i < markers.length; i++) {
					google.maps.event.trigger(markers[i], 'click');
					google.maps.event.trigger(markers[i], 'click');
				}
			}
		}
	};

	// Initialize fusion filters and corresponding posts
	jQuery.fn.fusionFiltersInitialization = function ($posts) {

		var $filters,
			$filterActive,
			$filterActiveLink,
			$filterActiveDataSlug;

		// Check if filters are displayed
		if (jQuery(this).length) {

			// Show the filters container
			jQuery(this).fadeIn();

			// Set needed variables
			$filters = jQuery(this).find('.puur-filter');
			$filterActive = jQuery(this).find('.puur-active');
			$filterActiveLink = $filterActive.children('a');
			$filterActiveDataSlug = $filterActiveLink.attr('data-filter').substr(1);

			// Loop through filters
			if ($filters) {
				$filters.each(function () {
					var $filter = jQuery(this),
						$filterName = $filter.children('a').data('filter');

					// Loop through initial post set
					if ($posts) {

						// If "All" filter is deactivated, hide posts for later check for active filter
						if ($filterActiveDataSlug.length) {
							$posts.hide();
						}

						$posts.each(function () {
							var $post = jQuery(this),
								$postGalleryName = $post.find('.puur-rollover-gallery').data('rel');

							// If a post belongs to an invisible filter, fade it in
							if ($post.hasClass($filterName.substr(1))) {
								if ($filter.hasClass('puur-hidden')) {
									$filter.removeClass('puur-hidden');
								}
							}

							// If "All" filter is deactivated, only show the items of the first filter (which is auto activated)
							if ($filterActive.length && $post.hasClass($filterActive)) {
								$post.show();

								// Set the lightbox gallery
								$post.find('.puur-rollover-gallery').attr('data-rel', $postGalleryName.replace('gallery', $filterActive));
							}
						});
					}
				});
			}

			if ($filterActiveDataSlug.length) {

				// Relayout the posts according to filter selection
				jQuery(instance.elements).isotope({
					filter: '.' + $filterActive
				});

				// Create new lightbox instance for the new gallery
				window.$ilInstances.push(jQuery('[data-rel="iLightbox[' + $filterActive + ']"], [rel="iLightbox[' + $filterActive + ']"]').iLightBox(window.avadaLightBox.prepare_options('iLightbox[' + $filterActive + ']')));

				// Refresh the lightbox
				window.avadaLightBox.refresh_lightbox();

				// Set active filter to lightbox created
				$filterActiveLink.data('lightbox', 'created');
			}
		}
	};

	// Initialize parallax footer
	jQuery.fn.puur_footer_parallax = function () {
		var $footer = jQuery(this),
			$sliderHeight,
			$footerHeight;

		// Needed timeout for dynamic footer content
		setTimeout(function () {
			var $wrapperHeight = ('fixed' === $footer.css('position')) ? jQuery('#wrapper').outerHeight() : jQuery('#wrapper').outerHeight() - $footer.outerHeight();

			// On desktops enable parallax footer effect
			if ($footer.outerHeight() < jQuery(window).height() && $wrapperHeight > jQuery(window).height() && ('Top' === avadaVars.header_position || ('Top' !== avadaVars.header_position && jQuery(window).height() > jQuery('.side-header-wrapper').height())) && (Modernizr.mq('only screen and (min-width:' + parseInt(avadaVars.side_header_break_point) + 'px)') && !Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)') && !Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)'))) {
				$footer.css({
					'position': '',
					'margin': '',
					'padding': ''
				});
				jQuery('#main').css('margin-bottom', $footer.outerHeight());

				if (1 <= jQuery('.tfs-slider').length && 1 == jQuery('.tfs-slider').data('parallax') && $footer.hasClass('puur-footer-parallax')) {
					$sliderHeight = jQuery('.tfs-slider').parents('#sliders-container').outerHeight();
					$footerHeight = $footer.outerHeight();
					if ($sliderHeight > $footerHeight) {
						jQuery('#main').css('min-height', $sliderHeight + 100);
					} else if ($footerHeight > $sliderHeight) {
						jQuery('#main').css('min-height', $footerHeight + 100);
					}
				}

				// On mobiles the footer will be static
			} else {
				$footer.css({
					'position': 'static',
					'margin': '0',
					'padding': '0'
				});
				jQuery('#main').css('margin-bottom', '');
			}
		}, 1);
	};

	jQuery.fn.puur_countdown = function () {

		var $countdown = jQuery(this),
			$timer = $countdown.data('timer').split('-'),
			$GMToffset = $countdown.data('gmt-offset'),
			$omitWeeks = $countdown.data('omit-weeks');

		$countdown.countDown({
			gmtOffset: $GMToffset,
			omitWeeks: $omitWeeks,
			targetDate: {

				'year': $timer[0],
				'month': $timer[1],
				'day': $timer[2],
				'hour': $timer[3],
				'min': $timer[4],
				'sec': $timer[5]
			}

		});

		$countdown.css('visibility', 'visible');
	};

	jQuery.fn.puur_deactivate_mobile_image_hovers = function () {
		if (1 != avadaVars.disable_mobile_image_hovers) {
			if (Modernizr.mq('only screen and (max-width:' + avadaVars.side_header_break_point + 'px)')) {
				jQuery(this).removeClass('puur-image-hovers');
			} else {
				jQuery(this).addClass('puur-image-hovers');
			}
		}
	};

	// Add/remove the mobile title class, depending on available space and title length
	jQuery.fn.puur_responsive_title_shortcode = function () {
		jQuery(this).each(function () {
			var $titleWrapper = jQuery(this),
				$title = $titleWrapper.find('h1, h2, h3, h4, h5, h6'),
				$titleMinWidth = ($title.data('min-width')) ? $title.data('min-width') : $title.outerWidth(),
				$wrappingParent = $titleWrapper.parent(),
				$wrappingParentWidth = ($titleWrapper.parents('.slide-content').length) ? $wrappingParent.width() : $wrappingParent.outerWidth();

			if ((0 === $titleMinWidth || false === $titleMinWidth || '0' === $titleMinWidth) && (0 === $wrappingParentWidth || false === $wrappingParentWidth || '0' === $wrappingParentWidth)) {
				$titleWrapper.removeClass('puur-border-below-title');
			} else if ($titleMinWidth + 100 >= $wrappingParentWidth) {
				$titleWrapper.addClass('puur-border-below-title');
				$title.data('min-width', $titleMinWidth);
			} else {
				$titleWrapper.removeClass('puur-border-below-title');
			}
		});
	};

	// Smooth scrolling to anchor target
	jQuery.fn.puur_scroll_to_anchor_target = function () {
		var $href = jQuery(this).attr('href'),
			$hrefHash = $href.substr($href.indexOf('#')).slice(1),
			$target = jQuery('#' + $hrefHash),
			$adminbarHeight,
			$stickyHeaderHeight,
			$currentScrollPosition,
			$newScrollPosition,
			$halfScrollAmount,
			$halfScrollPosition;

		if ($target.length && '' !== $hrefHash) {
			$adminbarHeight = getAdminbarHeight();
			$stickyHeaderHeight = getStickyHeaderHeight();
			$currentScrollPosition = jQuery(document).scrollTop();
			$newScrollPosition = $target.offset().top - $adminbarHeight - $stickyHeaderHeight;
			$halfScrollAmount = Math.abs($currentScrollPosition - $newScrollPosition) / 2;

			if ($currentScrollPosition > $newScrollPosition) {
				$halfScrollPosition = $currentScrollPosition - $halfScrollAmount;
			} else {
				$halfScrollPosition = $currentScrollPosition + $halfScrollAmount;
			}

			jQuery('html, body').animate({
				scrollTop: $halfScrollPosition
			}, {
				duration: 400,
				easing: 'easeInExpo',
				complete: function () {

					$adminbarHeight = getAdminbarHeight();
					$stickyHeaderHeight = getStickyHeaderHeight();

					$newScrollPosition = ($target.offset().top - $adminbarHeight - $stickyHeaderHeight);

					jQuery('html, body').animate({
						scrollTop: $newScrollPosition
					}, 450, 'easeOutExpo');

				}

			});

			// On page tab link
			if ($target.hasClass('tab-link')) {
				jQuery('.puur-tabs').fusionSwitchTabOnLinkClick();
			}

			return false;
		}
	};

})(jQuery);

jQuery(window).load(function () { // Start window_load_1

	var columnClasses,
		reviewsCycleArgs,
		iosVersion,
		i;

	// Static layout
	if ('0' == avadaVars.is_responsive) {
		columnClasses = ['col-sm-0', 'col-sm-1', 'col-sm-2', 'col-sm-3', 'col-sm-4', 'col-sm-5', 'col-sm-6', 'col-sm-7', 'col-sm-8', 'col-sm-9', 'col-sm-10', 'col-sm-11', 'col-sm-12'];
		jQuery('.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12').each(function () {
			for (i = 0; i < columnClasses.length; i++) {
				if (-1 !== jQuery(this).attr('class').indexOf(columnClasses[i])) {
					jQuery(this).addClass('col-xs-' + i);
				}
			}
		});
	}

	// Initialize Waypoint
	setTimeout(function () {
		jQuery(window).init_waypoint();
		jQuery.waypoints('viewportHeight');
	}, 300);

	// Counters Box - Modals
	jQuery('.puur-modal .puur-counter-box').each(function () {
		jQuery(this).appear(function () {
			jQuery(this).find('.display-counter').each(function () {
				jQuery(this).$fusionBoxCounting();
			});
		});
	});

	// Counter Circles - Toggles, Tabs, Modals
	jQuery('.puur-accordian .counter-circle-wrapper, .puur-tabs .counter-circle-wrapper, .puur-modal .counter-circle-wrapper').each(function () {
		jQuery(this).appear(function () {
			jQuery(this).puur_draw_circles();
		});
	});

	// Progressbar - Modals
	jQuery('.puur-modal .puur-progressbar').each(function () {
		jQuery(this).appear(function () {
			jQuery(this).puur_draw_progress();
		});
	});

	// Flip Boxes
	jQuery('.flip-box-inner-wrapper').each(function () {
		jQuery(this).fusionCalcFlipBoxesHeight();
	});

	jQuery(window).resize(function () {
		jQuery('.flip-box-inner-wrapper').each(function () {
			jQuery(this).fusionCalcFlipBoxesHeight();
		});
	});

	// Testimonials
	function onBefore(curr, next, opts, fwd) {
		var $ht = jQuery(this).height();

		// Set the active testimonial class for resize event
		jQuery(this).parent().children().removeClass('active-testimonial');
		jQuery(this).addClass('active-testimonial');

		// Set the container's height to that of the current slide
		jQuery(this).parent().animate({
			height: $ht
		}, 500);
	}

	if (jQuery().cycle) {
		reviewsCycleArgs = {
			fx: 'fade',
			before: onBefore,
			containerResize: 0,
			containerResizeHeight: 1,
			height: 'auto',
			width: '100%',
			fit: 1,
			speed: 500,
			delay: 0
		};

		if (avadaVars.testimonials_speed) {
			reviewsCycleArgs.timeout = parseInt(avadaVars.testimonials_speed);
		}

		reviewsCycleArgs.pager = '.testimonial-pagination';

		jQuery('.puur-testimonials .reviews').each(function () {
			if (1 == jQuery(this).children().length) {
				jQuery(this).children().fadeIn();
			}

			reviewsCycleArgs.pager = '#' + jQuery(this).parent().find('.testimonial-pagination').attr('id');

			reviewsCycleArgs.random = jQuery(this).parent().data('random');
			jQuery(this).cycle(reviewsCycleArgs);
		});

		jQuery(window).resize(function () {
			jQuery('.puur-testimonials .reviews').each(function () {
				jQuery(this).css('height', jQuery(this).children('.active-testimonial').height());
			});
		});
	}

	// Toggles
	jQuery(document).on('click dblclick', '.puur-accordian .panel-title a', function (e) {

		var clickedToggle,
			toggleContentToActivate;

		e.preventDefault();

		clickedToggle = jQuery(this);
		toggleContentToActivate = jQuery(jQuery(this).data('target')).find('.panel-body');

		if (clickedToggle.hasClass('active')) {
			clickedToggle.parents('.puur-accordian').find('.panel-title a').removeClass('active');
		} else {
			clickedToggle.parents('.puur-accordian').find('.panel-title a').removeClass('active');
			clickedToggle.addClass('active');

			setTimeout(function () {
				toggleContentToActivate.find('.shortcode-map').each(function () {
					jQuery(this).reinitializeGoogleMap();
				});

				if (toggleContentToActivate.find('.puur-carousel').length) {
					generateCarousel();
				}

				toggleContentToActivate.find('.puur-portfolio').each(function () {
					jQuery(this).find('.puur-portfolio-wrapper').isotope();
				});

				// To make premium sliders work in tabs.
				if (toggleContentToActivate.find('.flexslider, .rev_slider_wrapper, .ls-container').length) {
					jQuery(window).trigger('resize');
				}

				// Flip Boxes.
				toggleContentToActivate.find('.flip-box-inner-wrapper').each(function () {
					jQuery(this).fusionCalcFlipBoxesHeight();
				});

				// Columns.
				toggleContentToActivate.find('.puur-fullwidth.puur-equal-height-columns').each(function () {
					jQuery(this).find('.puur-layout-column .puur-column-wrapper').equalHeights();
				});

				// Block element.
				toggleContentToActivate.find('.puur-blog-shortcode').each(function () {
					var columns = 2,
						gridWidth;
					for (i = 1; i < 7; i++) {
						if (jQuery(this).find('.puur-blog-layout-grid').hasClass('puur-blog-layout-grid-' + i)) {
							columns = i;
						}
					}

					gridWidth = Math.floor(100 / columns * 100) / 100 + '%';
					jQuery(this).find('.puur-blog-layout-grid').find('.puur-post-grid').css('width', gridWidth);

					jQuery(this).find('.puur-blog-layout-grid').isotope();

					// Reinitialize select arrows
					//calcSelectArrowDimensions();
				});
			}, 350);
		}
	});

	// Initialize Bootstrap Modals
	jQuery('.puur-modal').each(function () {
		jQuery('#wrapper').append(jQuery(this));
	});

	jQuery('.puur-modal').bind('hidden.bs.modal', function () {
		jQuery('html').css('overflow', '');
	});

	jQuery('.puur-modal').bind('show.bs.modal', function () {
		var $slidingbar = jQuery('#slidingbar'),
			modalWindow,
			$activeTestimonial;

		jQuery('html').css('overflow', 'visible');

		modalWindow = jQuery(this);

		// Reinitialize dynamic content
		setTimeout(function () {

			// Autoplay youtube videos, if the params have been set accordingly in the video shortcodes
			modalWindow.find('.puur-youtube').find('iframe').each(function (i) {

				var func;
				if (1 === jQuery(this).parents('.puur-video').data('autoplay') || 'true' === jQuery(this).parents('.puur-video').data('autoplay')) {
					jQuery(this).parents('.puur-video').data('autoplay', 'false');

					func = 'playVideo';
					this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
				}
			});

			// Autoplay vimeo videos, if the params have been set accordingly in the video shortcodes
			modalWindow.find('.puur-vimeo').find('iframe').each(function (i) {
				if (1 === jQuery(this).parents('.puur-video').data('autoplay') || 'true' === jQuery(this).parents('.puur-video').data('autoplay')) {
					jQuery(this).parents('.puur-video').data('autoplay', 'false');

					$f(jQuery(this)[0]).api('play');
				}
			});

			// To make premium sliders work in tabs
			if (modalWindow.find('.flexslider, .rev_slider_wrapper, .ls-container').length) {
				jQuery(window).trigger('resize');
			}

			// Flip Boxes
			modalWindow.find('.flip-box-inner-wrapper').each(function () {
				jQuery(this).fusionCalcFlipBoxesHeight();
			});

			// Reinitialize carousels
			if (modalWindow.find('.puur-carousel').length) {
				generateCarousel();
			}

			// Reinitialize blog shortcode isotope grid
			modalWindow.find('.puur-blog-shortcode').each(function () {
				var columns = 2,
					gridWidth;

				for (i = 1; i < 7; i++) {
					if (jQuery(this).find('.puur-blog-layout-grid').hasClass('puur-blog-layout-grid-' + i)) {
						columns = i;
					}
				}

				gridWidth = Math.floor(100 / columns * 100) / 100 + '%';
				jQuery(this).find('.puur-blog-layout-grid').find('.puur-post-grid').css('width', gridWidth);

				jQuery(this).find('.puur-blog-layout-grid').isotope();

				//calcSelectArrowDimensions();
			});

			// Reinitialize google maps
			modalWindow.find('.shortcode-map').each(function () {
				jQuery(this).reinitializeGoogleMap();
			});

			// Reinitialize portfolio
			modalWindow.find('.puur-portfolio').each(function () {
				jQuery(this).find('.puur-portfolio-wrapper').isotope();
			});

			// Reinitialize testimonial height; only needed for hidden wrappers
			if ($slidingbar.find('.puur-testimonials').length) {
				$activeTestimonial = $slidingbar.find('.puur-testimonials .reviews').children('.active-testimonial');

				$slidingbar.find('.puur-testimonials .reviews').height($activeTestimonial.height());
			}

			// Reinitialize select arrows
			//calcSelectArrowDimensions();
		}, 350);
	});

	if (1 == jQuery('#sliders-container .tfs-slider').data('parallax')) {
		jQuery('.puur-modal').css('top', jQuery('.header-wrapper').height());
	}

	// Stop videos in modals when closed
	jQuery('.puur-modal').each(function () {
		jQuery(this).on('hide.bs.modal', function () {

			// Youtube
			jQuery(this).find('iframe').each(function (i) {
				var func = 'pauseVideo';
				this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
			});

			// Vimeo
			jQuery(this).find('.puur-vimeo iframe').each(function (i) {
				$f(this).api('pause');
			});
		});
	});

	jQuery('[data-toggle=modal]').on('click', function (e) {
		e.preventDefault();
	});

	jQuery('.puur-modal-text-link').click(function (e) {
		e.preventDefault();
	});

	if (cssua.ua.mobile || cssua.ua.tablet_pc) {
		jQuery('.puur-popover, .puur-tooltip').each(function () {
			jQuery(this).attr('data-trigger', 'click');
			jQuery(this).data('trigger', 'click');
		});
	}

	// Initialize Bootstrap Popovers
	jQuery('[data-toggle~="popover"]').popover({
		container: 'body'
	});

	// Initialize Bootstrap Tabs
	// Initialize vertical tabs content container height
	if (jQuery('.vertical-tabs').length) {
		jQuery('.vertical-tabs .tab-content .tab-pane').each(function () {

			var videoWidth;

			if (jQuery(this).parents('.vertical-tabs').hasClass('clean')) {
				jQuery(this).css('min-height', jQuery('.vertical-tabs .nav-tabs').outerHeight() - 10);
			} else {
				jQuery(this).css('min-height', jQuery('.vertical-tabs .nav-tabs').outerHeight());
			}

			if (jQuery(this).find('.video-shortcode').length) {
				videoWidth = parseInt(jQuery(this).find('.puur-video').css('max-width').replace('px', ''));
				jQuery(this).css({
					'float': 'none',
					'max-width': videoWidth + 60
				});
			}
		});
	}

	jQuery(window).on('resize', function () {
		if (jQuery('.vertical-tabs').length) {
			jQuery('.vertical-tabs .tab-content .tab-pane').css('min-height', jQuery('.vertical-tabs .nav-tabs').outerHeight());
		}
	});

	// Initialize Bootstrap Tooltip
	jQuery('[data-toggle="tooltip"]').each(function () {

		var $container;

		if (jQuery(this).parents('.puur-header-wrapper').length) {
			$container = '.puur-header-wrapper';
		} else if (jQuery(this).parents('#side-header').length) {
			$container = '#side-header';
		} else {
			$container = 'body';
		}

		jQuery(this).tooltip({
			container: $container
		});
	});

	jQuery('.puur-tooltip').hover(function () {

		// Get the current title attribute
		var $title = jQuery(this).attr('title');

		// Store it in a data var
		jQuery(this).attr('data-title', $title);

		// Set the title to nothing so we don't see the tooltips
		jQuery(this).attr('title', '');

	});

	jQuery('.puur-tooltip').click(function () {

		// Retrieve the title from the data attribute
		var $title = jQuery(this).attr('data-title');

		// Return the title to what it was
		jQuery(this).attr('title', $title);

		jQuery(this).blur();

	});

	// Events Calendar Reinitialize Scripts
	jQuery('.tribe_events_filters_close_filters, .tribe_events_filters_show_filters').on('click', function () {
		var tribeEvents = jQuery(this);

		setTimeout(function () {
			jQuery(tribeEvents).parents('#tribe-events-content-wrapper').find('.puur-blog-layout-grid').isotope();
		});
	});

	generateCarousel();

	// Equal Heights Elements
	jQuery('.content-boxes-icon-boxed').each(function () {
		jQuery(this).find('.content-box-column .content-wrapper-boxed').equalHeights();
		jQuery(this).find('.content-box-column .content-wrapper-boxed').css('overflow', 'visible');
	});

	jQuery(window).on('resize', function () {
		jQuery('.content-boxes-icon-boxed').each(function () {
			jQuery(this).find('.content-box-column .content-wrapper-boxed').equalHeights();
			jQuery(this).find('.content-box-column .content-wrapper-boxed').css('overflow', 'visible');
		});
	});

	jQuery('.content-boxes-clean-vertical').each(function () {
		jQuery(this).find('.content-box-column .col').equalHeights();
		jQuery(this).find('.content-box-column .col').css('overflow', 'visible');
	});

	jQuery(window).on('resize', function () {
		jQuery('.content-boxes-clean-vertical').each(function () {
			jQuery(this).find('.content-box-column .col').equalHeights();
			jQuery(this).find('.content-box-column .col').css('overflow', 'visible');
		});
	});

	jQuery('.content-boxes-clean-horizontal').each(function () {
		jQuery(this).find('.content-box-column .col').equalHeights();
		jQuery(this).find('.content-box-column .col').css('overflow', 'visible');
	});

	jQuery(window).on('resize', function () {
		jQuery('.content-boxes-clean-horizontal').each(function () {
			jQuery(this).find('.content-box-column .col').equalHeights();
			jQuery(this).find('.content-box-column .col').css('overflow', 'visible');
		});
	});

	jQuery('.double-sidebars.woocommerce .social-share > li').equalHeights();

	jQuery('.puur-fullwidth.puur-equal-height-columns').each(function () {
		jQuery(this).find('.puur-layout-column .puur-column-wrapper').not(function ($index, $element) {
			return jQuery($element).parents('.puur-column-wrapper').length ? 1 : 0;
		}).equalHeights();
	});

	jQuery('.puur-fullwidth.puur-equal-height-columns .puur-builder-row').each(function () {
		jQuery(this).find('.puur-layout-column .puur-column-wrapper').not(function ($index, $element) {
			return jQuery($element).parent('.puur-column-wrapper').length ? 1 : 0;
		}).equalHeights();
	});

	jQuery('.puur-layout-column .puur-column-wrapper').puur_set_bg_img_dims();
	jQuery('.puur-layout-column .puur-column-wrapper').puur_calculate_empty_column_height();

	jQuery(window).on('resize', function () {
		jQuery('.puur-fullwidth.puur-equal-height-columns').each(function () {
			jQuery(this).find('.puur-layout-column .puur-column-wrapper').not(function ($index, $element) {
				return jQuery($element).parents('.puur-column-wrapper').length ? 1 : 0;
			}).equalHeights();
		});

		jQuery('.puur-fullwidth.puur-equal-height-columns .puur-builder-row').each(function () {
			jQuery(this).find('.puur-layout-column .puur-column-wrapper').not(function ($index, $element) {
				return jQuery($element).parent('.puur-column-wrapper').length ? 1 : 0;
			}).equalHeights();
		});

		jQuery('.puur-layout-column .puur-column-wrapper').puur_calculate_empty_column_height();
	});

	/**
	 * Icon Hack for iOS7 on Buttons
	 */
	if (cssua.ua.ios) {
		iosVersion = parseInt(cssua.ua.ios);
		if (7 == iosVersion) {
			jQuery('.button-icon-divider-left, .button-icon-divider-right').each(function () {
				var height = jQuery(this).parent().outerHeight();
				jQuery(this).css('height', height);

			});
		}
	}
}); // End window_load_1

jQuery(document).ajaxComplete(function () {
	jQuery('.wpcf7-response-output').each(function () {
		if (jQuery(this).hasClass('wpcf7-mail-sent-ng') && !jQuery(this).find('.alert-icon').length) {
			jQuery(this).addClass('puur-alert');
			if (jQuery('body').hasClass('rtl')) {
				jQuery(this).append('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-exclamation-triangle"></i></span>');
			} else {
				jQuery(this).prepend('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-exclamation-triangle"></i></span>');
			}
		}

		if (jQuery(this).hasClass('wpcf7-validation-errors') && !jQuery(this).find('.alert-icon').length) {
			jQuery(this).addClass('puur-alert');
			if (jQuery('body').hasClass('rtl')) {
				jQuery(this).append('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-exclamation-triangle"></i></span>');
			} else {
				jQuery(this).prepend('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-exclamation-triangle"></i></span>');
			}
		}

		if (jQuery(this).hasClass('wpcf7-mail-sent-ok') && !jQuery(this).find('.alert-icon').length) {
			jQuery(this).addClass('puur-alert');
			if (jQuery('body').hasClass('rtl')) {
				jQuery(this).append('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-check-circle"></i></span>');
			} else {
				jQuery(this).prepend('<button class="close toggle-alert" aria-hidden="true" data-dismiss="alert" type="button">&times;</button><span class="alert-icon"><i class="fa fa-lg fa-check-circle"></i></span>');
			}
		}
	});

	jQuery('.wpcf7-response-output.puur-alert .close').click(function (e) {
		e.preventDefault();

		jQuery(this).parent().slideUp();
	});

	avadaAddQuantityBoxes();
});

jQuery(document).ready(function ($) { // Start document_ready_1

	var titleSep,
		titleSepClassString,
		titleMainSepClassString,
		sidebar1Float,
		slidingbarState,
		$adminbarHeight,
		$stickyHeaderHeight,
		$tabToActivate,
		$buttonHeight,
		$countdownID,
		$titleSep,
		$titleSepClassString,
		$titleMainSepClassString,
		$styles,
		tabToActivate,
		i,
		froogaloopLoaded;

	addStylesForOldIEVersions();

	avadaAddQuantityBoxes();

	// Deactivate image hover animations on mobiles
	jQuery('body').puur_deactivate_mobile_image_hovers();
	jQuery(window).on('resize', function () {
		jQuery('body').puur_deactivate_mobile_image_hovers();
	});

	// Setup the countdown shortcodes
	jQuery('.puur-countdown-counter-wrapper').each(function () {
		$countdownID = jQuery(this).attr('id');
		jQuery('#' + $countdownID).puur_countdown();
	});

	// Make the side header scrolling happen
	jQuery(window).on('scroll', fusionSideHeaderScroll);
	jQuery(window).on('resize', fusionSideHeaderScroll);

	// Loop through all headings
	// jQuery('h1, h2, h3, h4, h5, h6').each(
	// 	function () {

	// 		// If there are inline styles on the element initially, store information about it in data attribute
	// 		if (jQuery(this).prop('style')['font-size']) {
	// 			jQuery(this).attr('data-inline-fontsize', true);
	// 		}

	// 		if (jQuery(this).prop('style')['font-size']) {
	// 			jQuery(this).attr('data-inline-lineheight', true);
	// 		}

	// 		// Set the original font size and line height to every heading as data attribute
	// 		jQuery(this).attr('data-fontsize', parseInt(jQuery(this).css('font-size')));
	// 		jQuery(this).attr('data-lineheight', parseInt(jQuery(this).css('line-height')));
	// 	}
	// );

	// Setup responsive type for headings if enabled in Theme Options
	if (1 == avadaVars.typography_responsive) {

		// Calculate responsive type values
		fusionCalculateResponsiveTypeValues(avadaVars.typography_sensitivity, avadaVars.typography_factor, 800, 'h1, h2, h3, h4, h5, h6');
	}

	jQuery('.tfs-slider').each(function () {
		fusionCalculateResponsiveTypeValues(jQuery(this).data('typo_sensitivity'), jQuery(this).data('typo_factor'), 800, '.tfs-slider h2, .tfs-slider h3');
	});

	// Carousel resize
	jQuery(window).on('resize', function () {
		jQuery('.puur-carousel').puur_recalculate_carousel();
	});

	// Enable autoplaying videos when not in a modal
	jQuery('.puur-video').each(function () {
		if (!jQuery(this).parents('.puur-modal').length && 1 == jQuery(this).data('autoplay') && jQuery(this).is(':visible')) {
			jQuery(this).find('iframe').each(function (i) {
				jQuery(this).attr('src', jQuery(this).attr('src').replace('autoplay=0', 'autoplay=1'));
			});
		}
	});

	froogaloopLoaded = false;
	if (Number(avadaVars.status_vimeo) && jQuery('.puur-vimeo').length) {
		jQuery.getScript('https://secure-a.vimeocdn.com/js/froogaloop2.min.js').done(
			function (script, textStatus) {
				froogaloopLoaded = true;
			}
		);
	}

	// Video resize
	jQuery(window).on('resize', function () {

		var vimeoPlayers = document.querySelectorAll('iframe'),
			player,
			i,
			length = vimeoPlayers.length,
			func = 'pauseVideo';

		// Stop autoplaying youtube video when not visible on resize
		jQuery('.puur-youtube').each(function () {
			if (!jQuery(this).is(':visible') && (!jQuery(this).parents('.puur-modal').length || jQuery(this).parents('.puur-modal').is(':visible'))) {
				jQuery(this).find('iframe').each(function (i) {
					this.contentWindow.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
				});
			}
		});

		// Stop autoplaying vimeo video when not visible on resize
		if (froogaloopLoaded) {

			for (i = 0; i < length; i++) {
				if (!jQuery(vimeoPlayers[i]).is(':visible') && (!jQuery(vimeoPlayers[i]).parents('.puur-modal').length || jQuery(vimeoPlayers[i]).parents('.puur-modal').is(':visible'))) {
					player = $f(vimeoPlayers[i]);
					player.api('pause');
				}
			}
		}
	});

	// Handle parallax footer
	jQuery('.puur-footer-parallax').puur_footer_parallax();

	jQuery(window).on('resize', function () {
		jQuery('.puur-footer-parallax').puur_footer_parallax();
	});

	// Disable bottom margin on empty footer columns
	jQuery('.puur-footer .puur-footer-widget-area .puur-column').each(
		function () {
			if (jQuery(this).is(':empty')) {
				jQuery(this).css('margin-bottom', '0');
			}
		}
	);

	if ('1' != avadaVars.disable_mobile_animate_css && cssua.ua.mobile) {
		jQuery('body').addClass('dont-animate');
	} else {
		jQuery('body').addClass('do-animate');
	}

	// Comment form title changes
	if (jQuery('.comment-respond .comment-reply-title').length && !jQuery('.comment-respond .comment-reply-title').parents('.woocommerce-tabs').length) {
		$titleSep = avadaVars.title_style_type.split(' ');
		$titleSepClassString = '';
		$titleMainSepClassString = '';

		for (i = 0; i < $titleSep.length; i++) {
			$titleSepClassString += ' sep-' + $titleSep[i];
		}

		if ($titleSepClassString.indexOf('underline') > -1) {
			$titleMainSepClassString = $titleSepClassString;
		}

		if (jQuery('body').hasClass('rtl')) {
			jQuery('.comment-respond .comment-reply-title').addClass('title-heading-right');
		} else {
			jQuery('.comment-respond .comment-reply-title').addClass('title-heading-left');
		}

		$styles = ' style="margin-top:' + avadaVars.title_margin_top + ';margin-bottom:' + avadaVars.title_margin_bottom + ';"';

		jQuery('.comment-respond .comment-reply-title').wrap('<div class="puur-title title puur-title-size-three' + $titleSepClassString + '"' + $styles + '></div>');

		if ($titleSepClassString.indexOf('underline') == -1) {
			jQuery('.comment-respond .comment-reply-title').parent().append('<div class="title-sep-container"><div class="title-sep' + $titleSepClassString + ' "></div></div>');
		}
	}

	// Sidebar Position
	if (1 <= jQuery('#sidebar-2').length) {
		sidebar1Float = jQuery('#sidebar').css('float');
		jQuery('body').addClass('sidebar-position-' + sidebar1Float);
	}

	jQuery('.puur-flip-box').mouseover(function () {
		jQuery(this).addClass('hover');
	});

	jQuery('.puur-flip-box').mouseout(function () {
		jQuery(this).removeClass('hover');
	});

	jQuery('.puur-accordian .panel-title a').click(function (e) {
		e.preventDefault();
	});

	jQuery('.my-show').click(function () {
		jQuery('.my-hidden').css('visibility', 'visible');
	});

	if (jQuery('.demo_store').length) {
		jQuery('#wrapper').css('margin-top', jQuery('.demo_store').outerHeight());
		if (0 < jQuery('#slidingbar-area').outerHeight()) {
			jQuery('.header-wrapper').css('margin-top', '0');
		}
		if (jQuery('.sticky-header').length) {
			jQuery('.sticky-header').css('margin-top', jQuery('.demo_store').outerHeight());
		}
	}

	// Slidingbar initialization
	slidingbarState = 0;

	// Open slidingbar on page load if .open_onload class is present
	if (jQuery('#slidingbar-area.open_onload').length) {
		jQuery('#slidingbar').slideDown(240, 'easeOutQuad');
		jQuery('.sb-toggle').addClass('open');
		slidingbarState = 1;

		// Reinitialize google maps
		if (jQuery('#slidingbar .shortcode-map').length) {
			jQuery('#slidingbar').find('.shortcode-map').each(function () {
				jQuery(this).reinitializeGoogleMap();
			});
		}

		jQuery('#slidingbar-area').removeClass('open_onload');
	}

	// Handle the slidingbar toggle click
	jQuery('.sb-toggle').click(function () {
		var $slidingbar = jQuery(this).parents('#slidingbar-area').children('#slidingbar'),
			$activeTestimonial;

		// Expand
		if (0 === slidingbarState) {
			$slidingbar.slideDown(240, 'easeOutQuad');
			jQuery('.sb-toggle').addClass('open');
			slidingbarState = 1;

			// Reinitialize google maps
			if ($slidingbar.find('.shortcode-map').length) {
				$slidingbar.find('.shortcode-map').each(function () {
					jQuery(this).reinitializeGoogleMap();
				});
			}

			// Reinitialize carousels
			if ($slidingbar.find('.puur-carousel').length) {
				generateCarousel();
			}

			jQuery('#slidingbar').find('.puur-carousel').puur_recalculate_carousel();

			// Reinitialize testimonial height; only needed for hidden wrappers
			if ($slidingbar.find('.puur-testimonials').length) {
				$activeTestimonial = $slidingbar.find('.puur-testimonials .reviews').children('.active-testimonial');

				$slidingbar.find('.puur-testimonials .reviews').height($activeTestimonial.height());
			}

			//Collapse
		} else if (1 == slidingbarState) {
			$slidingbar.slideUp(240, 'easeOutQuad');
			jQuery('.sb-toggle').removeClass('open');
			slidingbarState = 0;
		}
	});

	// Foter without social icons
	if (!jQuery('.puur-social-links-footer').find('.puur-social-networks').children().length) {
		jQuery('.puur-social-links-footer').hide();
		jQuery('.puur-footer-copyright-area .puur-copyright-notice').css('padding-bottom', '0');
	}

	// To top
	if (jQuery().UItoTop) {
		if (cssua.ua.mobile && '1' == avadaVars.status_totop_mobile) {
			jQuery().UItoTop({
				easingType: 'easeOutQuart'
			});
		} else if (!cssua.ua.mobile) {
			jQuery().UItoTop({
				easingType: 'easeOutQuart'
			});
		}
	}

	// Sticky header resizing control
	jQuery(window).on('resize', function () {

		// Check for woo demo bar which can take on 2 lines and thus sticky position must be calculated
		if (jQuery('.demo_store').length) {
			jQuery('#wrapper').css('margin-top', jQuery('.demo_store').outerHeight());
			if (jQuery('.sticky-header').length) {
				jQuery('.sticky-header').css('margin-top', jQuery('.demo_store').outerHeight());
			}
		}

		if (jQuery('.sticky-header').length) {
			if (765 > jQuery(window).width()) {
				jQuery('body.admin-bar #header-sticky.sticky-header').css('top', '46px');
			} else {
				jQuery('body.admin-bar #header-sticky.sticky-header').css('top', '32px');
			}
		}
	});

	// Side header main nav
	if ('classic' === avadaVars.mobile_menu_design) {
		jQuery('.sh-mobile-nav-holder').append('<div class="mobile-selector"><span>' + avadaVars.dropdown_goto + '</span></div>');
		jQuery('.sh-mobile-nav-holder .mobile-selector').append('<div class="selector-down"></div>');
	}
	jQuery('.sh-mobile-nav-holder').append(jQuery('.nav-holder .puur-navbar-nav').clone());
	jQuery('.sh-mobile-nav-holder .puur-navbar-nav').attr('id', 'mobile-nav');
	jQuery('.sh-mobile-nav-holder ul#mobile-nav').removeClass('puur-navbar-nav');
	jQuery('.sh-mobile-nav-holder ul#mobile-nav').children('.cart').remove();
	jQuery('.sh-mobile-nav-holder ul#mobile-nav .mobile-nav-item').children('.login-box').remove();

	jQuery('.sh-mobile-nav-holder ul#mobile-nav li').children('#main-nav-search-link').each(function () {
		jQuery(this).parents('li').remove();
	});
	jQuery('.sh-mobile-nav-holder ul#mobile-nav').find('li').each(function () {
		var classes = 'mobile-nav-item';

		if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor')) {
			classes += ' mobile-current-nav-item';
		}
		jQuery(this).attr('class', classes);
		if (jQuery(this).attr('id')) {
			jQuery(this).attr('id', jQuery(this).attr('id').replace('menu-item', 'mobile-menu-item'));
		}
		jQuery(this).attr('style', '');
	});
	jQuery('.sh-mobile-nav-holder .mobile-selector').click(function () {
		if (jQuery('.sh-mobile-nav-holder #mobile-nav').hasClass('mobile-menu-expanded')) {
			jQuery('.sh-mobile-nav-holder #mobile-nav').removeClass('mobile-menu-expanded');
		} else {
			jQuery('.sh-mobile-nav-holder #mobile-nav').addClass('mobile-menu-expanded');
		}
		jQuery('.sh-mobile-nav-holder #mobile-nav').slideToggle(200, 'easeOutQuad');
	});

	// Make mobile menu sub-menu toggles
	if (1 == avadaVars.submenu_slideout) {
		jQuery('.header-wrapper .mobile-topnav-holder .mobile-topnav li, .header-wrapper .mobile-nav-holder .navigation li, .sticky-header .mobile-nav-holder .navigation li, .sh-mobile-nav-holder .navigation li').each(function () {
			var classes = 'mobile-nav-item';

			if (jQuery(this).hasClass('current-menu-item') || jQuery(this).hasClass('current-menu-parent') || jQuery(this).hasClass('current-menu-ancestor') || jQuery(this).hasClass('mobile-current-nav-item')) {
				classes += ' mobile-current-nav-item';
			}
			jQuery(this).attr('class', classes);

			if (jQuery(this).find(' > ul').length) {
				jQuery(this).prepend('<span href="#" aria-haspopup="true" class="open-submenu"></span>');

				jQuery(this).find(' > ul').hide();
			}
		});

		jQuery('.header-wrapper .mobile-topnav-holder .open-submenu, .header-wrapper .mobile-nav-holder .open-submenu, .sticky-header .mobile-nav-holder .open-submenu, .sh-mobile-nav-holder .open-submenu').click(function (e) {
			e.stopPropagation();
			jQuery(this).parent().children('.sub-menu').slideToggle(200, 'easeOutQuad');

		});
	}

	// One page scrolling effect
	$adminbarHeight = getAdminbarHeight();
	$stickyHeaderHeight = getStickyHeaderHeight();

	jQuery(window).on('resize scroll', function () {
		$adminbarHeight = getAdminbarHeight();
		$stickyHeaderHeight = getStickyHeaderHeight();
	});

	// Ititialize ScrollSpy script
	jQuery('body').scrollspy({
		target: '.puur-menu',
		offset: parseInt($adminbarHeight + $stickyHeaderHeight + 1)
	});

	// Reset ScrollSpy offset to correct height after page is fully loaded, may be needed for
	jQuery(window).load(function () {
		$adminbarHeight = getAdminbarHeight();
		$stickyHeaderHeight = getStickyHeaderHeight();

		jQuery('body').data()['bs.scrollspy'].options.offset = parseInt($adminbarHeight + $stickyHeaderHeight + 1);
	});

	jQuery('.puur-menu a:not([href="#"], .puur-megamenu-widgets-container a, .search-link), .puur-mobile-nav-item a:not([href="#"], .search-link), .puur-button:not([href="#"], input, button), .puur-one-page-text-link:not([href="#"])').click(function (e) {

		var $currentHref,
			$currentPath,
			$target,
			$targetArray,
			$targetID,
			$targetPath,
			$targetPathLastChar,
			$targetWindow;

		if (jQuery(this).hasClass('avada-noscroll') || jQuery(this).parent().hasClass('avada-noscroll')) {
			return true;
		}

		if (this.hash) {

			// Current path
			$currentHref = window.location.href.split('#');
			$currentPath = ('/' === $currentHref[0].charAt($currentHref[0].length - 1)) ? $currentHref[0] : $currentHref[0] + '/';

			// Target path
			$targetWindow = (jQuery(this).attr('target')) ? jQuery(this).attr('target') : '_self';
			$target = jQuery(this).attr('href');
			$targetArray = $target.split('#');
			$targetID = ('undefined' !== typeof $targetArray[1]) ? $targetArray[1] : null;
			$targetPath = $targetArray[0];
			$targetPathLastChar = $targetPath.substring($targetPath.length - 1, $targetPath.length);

			if ('/' != $targetPathLastChar) {
				$targetPath = $targetPath + '/';
			}

			e.preventDefault();

			// If the link is outbound add an underscore right after the hash tag to make sure the link isn't present on the loaded page
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || '#' === $target.charAt(0)) {
				jQuery(this).puur_scroll_to_anchor_target();
				if (jQuery(this).parents('.puur-flyout-menu').length) {
					jQuery('.puur-flyout-menu-toggle').trigger('click');
				}
			} else {
				window.open($targetPath + '#_' + $targetID, $targetWindow);
			}
		}
	});

	// Side nav drop downs
	jQuery('.side-nav-left .side-nav li').each(function () {
		if (jQuery(this).find('> .children').length) {
			if (jQuery('.rtl').length) {
				jQuery(this).find('> a').prepend('<span class="arrow"></span>');
			} else {
				jQuery(this).find('> a').append('<span class="arrow"></span>');
			}
		}
	});

	jQuery('.side-nav-right .side-nav li').each(function () {
		if (jQuery(this).find('> .children').length) {
			if (jQuery('body.rtl').length) {
				jQuery(this).find('> a').append('<span class="arrow"></span>');
			} else {
				jQuery(this).find('> a').prepend('<span class="arrow"></span>');
			}
		}
	});

	jQuery('.side-nav .current_page_item').each(function () {
		if (jQuery(this).find('.children').length) {
			jQuery(this).find('.children').show('slow');
		}
	});

	jQuery('.side-nav .current_page_item').each(function () {
		if (jQuery(this).parent().hasClass('side-nav')) {
			jQuery(this).find('ul').show('slow');
		}

		if (jQuery(this).parent().hasClass('children')) {
			jQuery(this).parents('ul').show('slow');
		}
	});

	if ('ontouchstart' in document.documentElement || navigator.msMaxTouchPoints) {
		jQuery('.puur-main-menu li.menu-item-has-children > a, .puur-secondary-menu li.menu-item-has-children > a, .order-dropdown > li .current-li').on('click', function (e) {
			var link = jQuery(this);
			if (link.hasClass('hover')) {
				link.removeClass('hover');
				return true;
			} else {
				link.addClass('hover');
				jQuery('.puur-main-menu li.menu-item-has-children > a, .puur-secondary-menu li.menu-item-has-children > a, .order-dropdown > li .current-li').not(this).removeClass('hover');
				return false;
			}
		});

		jQuery('.sub-menu li, .puur-mobile-nav-item li').not('li.menu-item-has-children').on('click', function (e) {
			var link = jQuery(this).find('a').attr('href');
			if ('_blank' != jQuery(this).find('a').attr('target')) { // Fix for #1564
				window.location = link;
			}

			return true;
		});
	}

	// Touch support for win phone devices
	jQuery('.puur-main-menu li.menu-item-has-children > a, .puur-secondary-menu li.menu-item-has-children > a, .side-nav li.page_item_has_children > a').each(function () {
		jQuery(this).attr('aria-haspopup', 'true');
	});

	// Ubermenu responsive fix
	if (1 <= jQuery('.megaResponsive').length) {
		jQuery('.mobile-nav-holder.main-menu').addClass('set-invisible');
	}

	// WPML search form input add
	if ('' !== avadaVars.language_flag) {
		jQuery('.search-field, .searchform').each(function () {
			if (!jQuery(this).find('input[name="lang"]').length && !jQuery(this).parents('.searchform').find('input[name="lang"]').length) {
				jQuery(this).append('<input type="hidden" name="lang" value="' + avadaVars.language_flag + '"/>');
			}
		});
	}

	// New spinner for WPCF7
	jQuery('<div class="puur-slider-loading"></div>').insertAfter('.wpcf7 .ajax-loader');
	jQuery('.wpcf7 img.ajax-loader').remove();

	jQuery('.wpcf7-form .wpcf7-submit').on('click', function () {
		jQuery(this).parents('.wpcf7-form').find('.puur-slider-loading').show();
	});

	jQuery(document).ajaxComplete(function (event, request, settings) {
		if (jQuery('.wpcf7-form').find('.puur-slider-loading').filter(':visible').length) {
			jQuery('.wpcf7-form').find('.puur-slider-loading').hide();
		}

	});

	jQuery('#wrapper .puur-sharing-box').each(function () {
		if (!jQuery('meta[property="og:title"]').length) {
			jQuery('head title').after('<meta property="og:title" content="' + jQuery(this).data('title') + '"/>');
			jQuery('head title').after('<meta property="og:description" content="' + jQuery(this).data('description') + '"/>');
			jQuery('head title').after('<meta property="og:type" content="article"/>');
			jQuery('head title').after('<meta property="og:url" content="' + jQuery(this).data('link') + '"/>');
			jQuery('head title').after('<meta property="og:image" content="' + jQuery(this).data('image') + '"/>');
		}
	});

	// Remove title separators and padding, when there is not enough space
	jQuery('.puur-title').puur_responsive_title_shortcode();

	jQuery(window).on('resize', function () {
		jQuery('.puur-title').puur_responsive_title_shortcode();
	});

	// Position main menu search box correctly
	if ('Top' == avadaVars.header_position) {
		jQuery(window).on('resize', function () {
			jQuery('.main-nav-search').each(function () {
				var searchForm,
					searchFormWidth,
					searchFormLeftEdge,
					searchFormRightEdge,
					searchMenuItemLeftEdge,
					windowRightEdge;

				if (jQuery(this).hasClass('search-box-open')) {
					searchForm = jQuery(this).find('.main-nav-search-form');
					searchFormWidth = searchForm.outerWidth();
					searchFormLeftEdge = searchForm.offset().left;
					searchFormRightEdge = searchFormLeftEdge + searchFormWidth;
					searchMenuItemLeftEdge = searchForm.parent().offset().left;
					windowRightEdge = jQuery(window).width();

					if (!jQuery('body.rtl').length) {
						if ((searchFormLeftEdge < searchMenuItemLeftEdge && searchFormLeftEdge < 0) || (searchFormLeftEdge == searchMenuItemLeftEdge && searchFormLeftEdge - searchFormWidth < 0)) {
							searchForm.css({
								'left': '0',
								'right': 'auto'
							});
						} else {
							searchForm.css({
								'left': 'auto',
								'right': '0'
							});
						}
					} else {
						if ((searchFormLeftEdge == searchMenuItemLeftEdge && searchFormRightEdge > windowRightEdge) || (searchFormLeftEdge < searchMenuItemLeftEdge && searchFormRightEdge + searchFormWidth > windowRightEdge)) {
							searchForm.css({
								'left': 'auto',
								'right': '0'
							});
						} else {
							searchForm.css({
								'left': '0',
								'right': 'auto'
							});
						}
					}
				}
			});
		});
	}

	// Tabs
	// On page load
	// Direct linked tab handling
	jQuery('.puur-tabs').fusionSwitchTabOnLinkClick();

	//On Click Event
	jQuery('.nav-tabs li').click(function (e) {

		var clickedTab = jQuery(this),
			tabContentToActivate = clickedTab.find('a').attr('href'),
			mapID = clickedTab.attr('id'),
			navTabsHeight;

		clickedTab.parents('.puur-tabs').find('.nav li').removeClass('active');

		if (clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.puur-woo-slider').length) {
			navTabsHeight = 0;
			if (clickedTab.parents('.puur-tabs').hasClass('horizontal-tabs')) {
				navTabsHeight = clickedTab.parents('.puur-tabs').find('.nav').height();
			}
			clickedTab.parents('.puur-tabs').height(clickedTab.parents('.puur-tabs').find('.tab-content').outerHeight(true) + navTabsHeight);
		}

		/*
		// Scroll mobile tabs to correct position; Disabled because it is jumpy
		if ( clickedTab.parents( '.nav' ).hasClass( 'puur-mobile-tab-nav' ) ) {
			setTimeout( function(){
				jQuery( 'html, body' ).animate({
					scrollTop: clickedTab.offset().top - clickedTab.outerHeight()
				}, 100 );
			}, 350 );
		}
		*/

		setTimeout(function () {

			// Google maps
			clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.shortcode-map').each(function () {
				jQuery(this).reinitializeGoogleMap();
			});

			// Image Carousels
			if (clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.puur-carousel').length) {
				generateCarousel();
			}

			// Portfolio
			clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.puur-portfolio').each(function () {
				var $portfolioWrapper = jQuery(this).find('.puur-portfolio-wrapper'),
					$portfolioWrapperID = $portfolioWrapper.attr('id');

				// Done for multiple instances of portfolio shortcode. Isotope needs ids to distinguish between instances
				if ($portfolioWrapperID) {
					$portfolioWrapper = jQuery('#' + $portfolioWrapperID);
				}

				$portfolioWrapper.isotope();
			});

			// Make premium sliders and other elements work
			jQuery(window).trigger('resize');

			// Flip Boxes
			clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.flip-box-inner-wrapper').each(function () {
				jQuery(this).fusionCalcFlipBoxesHeight();
			});

			// Make WooCommerce shortcodes work
			if (clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.puur-woo-slider').length) {
				clickedTab.parents('.puur-tabs').css('height', '');
			}

			jQuery('.crossfade-images').each(function () {
				fusionResizeCrossfadeImagesContainer(jQuery(this));
				fusionResizeCrossfadeImages(jQuery(this));
			});

			// Blog
			clickedTab.parents('.puur-tabs').find(tabContentToActivate).find('.puur-blog-shortcode').each(function () {
				var columns = 2,
					gridWidth,
					i;
				for (i = 1; i < 7; i++) {
					if (jQuery(this).find('.puur-blog-layout-grid').hasClass('puur-blog-layout-grid-' + i)) {
						columns = i;
					}
				}

				gridWidth = Math.floor(100 / columns * 100) / 100 + '%';
				jQuery(this).find('.puur-blog-layout-grid').find('.puur-post-grid').css('width', gridWidth);

				jQuery(this).find('.puur-blog-layout-grid').isotope();

				//calcSelectArrowDimensions();
			});

			// Reinitialize select arrows
			//calcSelectArrowDimensions();
		}, 350);

		e.preventDefault();
	});

	// Tabs Widget


	// When page loads
	jQuery('.vertical-tabs').each(function () {
		jQuery(this).find('.nav li:first').addClass('active').show(); //Activate first tab
		jQuery(this).find('.tab-pane:first').show(); //Show first tab content
	});

	//On Click Event
	jQuery('.vertical-tabs .nav li').click(function (e) {
		tabToActivate = jQuery(this).find('a').attr('href');

		jQuery(this).parent().find(' > li').removeClass('active'); //Remove all 'active' classes
		jQuery(this).addClass('active'); // Add 'active' class to selected tab

		jQuery(this).parents('.vertical-tabs').find('.tab-pane').hide(); //Hide all tab content
		jQuery(this).parents('.vertical-tabs').find(tabToActivate).fadeIn(); //Fade in the new active tab content
	});

	jQuery('.tooltip-shortcode, .puur-secondary-header .puur-social-networks li, .puur-author-social .puur-social-networks li, .puur-footer-copyright-area .puur-social-networks li, .puur-footer-widget-area .puur-social-networks li, .sidebar .puur-social-networks li, .social_links_shortcode li, .share-box li, .social-icon, .social li').mouseenter(function (e) {
		jQuery(this).find('.popup').hoverFlow(e.type, {
			'opacity': 'show'
		});
	});

	jQuery('.tooltip-shortcode, .puur-secondary-header .puur-social-networks li, .puur-author-social .puur-social-networks li, .puur-footer-copyright-area .puur-social-networks li, .puur-footer-widget-area .puur-social-networks li, .sidebar .puur-social-networks li, .social_links_shortcode li, .share-box li, .social-icon, .social li').mouseleave(function (e) {
		jQuery(this).find('.popup').hoverFlow(e.type, {
			'opacity': 'hide'
		});
	});

	// Make sure protfolio fixed width placeholders are sized correctly on resize
	jQuery(window).on('resize', function () {
		jQuery('.puur-portfolio .puur-portfolio-wrapper').each(function () {

			// Resize the placeholder images correctly in "fixed" picture size carousels
			if ('fixed' === jQuery(this).data('picturesize')) {
				jQuery(this).find('.puur-placeholder-image').each(function () {
					jQuery(this).css({
						'height': jQuery(this).parents('.puur-portfolio-post').siblings().find('img').first().height(),
						'width': jQuery(this).parents('.puur-portfolio-post').siblings().find('img').first().width()
					});

				});
			}
		});
	});

	// Handle the portfolio filter clicks
	jQuery('.puur-portfolio .puur-filters a').click(function (e) {

		// Relayout isotope based on filter selection
		var $filterActive = jQuery(this).data('filter'),
			$lightboxInstances = [],
			$portfolioID = jQuery(this).parents('.puur-portfolio').data('id');

		e.preventDefault();

		if (!$portfolioID) {
			$portfolioID = '';
		}

		jQuery(this).parents('.puur-portfolio').find('.puur-portfolio-wrapper').isotope({
			filter: $filterActive
		});

		// Remove active filter class from old filter item and add it to new
		jQuery(this).parents('.puur-filters').find('.puur-filter').removeClass('puur-active');
		jQuery(this).parent().addClass('puur-active');

		jQuery(this).parents('.puur-portfolio').find('.puur-portfolio-wrapper').find('.puur-portfolio-post').each(function () {
			var $postID = '',
				$filterSelector,
				$lightboxString;

			// For individual per post galleries set the post id
			if ('individual' === avadaVars.lightbox_behavior && jQuery(this).find('.puur-rollover-gallery').length) {
				$postID = jQuery(this).find('.puur-rollover-gallery').data('id');
			}

			if ($filterActive.length > 1) {
				$filterSelector = $filterActive.substr(1);
				$lightboxString = 'iLightbox[' + $filterSelector + $postID + $portfolioID + ']';
			} else {
				$filterSelector = 'puur-portfolio-post';
				$lightboxString = 'iLightbox[gallery' + $postID + $portfolioID + ']';
			}

			if (jQuery(this).hasClass($filterSelector) || 1 == $filterActive.length) {

				// Make sure that if $postID is empty the filter category is only added once to the lightbox array
				if ($filterActive.length > 1 && jQuery.inArray($filterSelector + $postID + $portfolioID, $lightboxInstances) === -1) {
					$lightboxInstances.push($filterSelector + $postID + $portfolioID);
				} else if (1 === $filterActive.length && -1 === jQuery.inArray($postID + $portfolioID, $lightboxInstances)) {
					$lightboxInstances.push('gallery' + $postID + $portfolioID);
				}

				jQuery(this).find('.puur-rollover-gallery').attr('data-rel', $lightboxString);
				jQuery(this).find('.puur-portfolio-gallery-hidden a').attr('data-rel', $lightboxString);
			}
		});

		// Check if we need to create a new gallery
		if ('created' !== jQuery(this).data('lightbox')) {

			// Create new lightbox instance for the new galleries
			jQuery.each($lightboxInstances, function ($key, $value) {
				window.$ilInstances.push(jQuery('[data-rel="iLightbox[' + $value + ']"], [rel="iLightbox[' + $value + ']"]').iLightBox(window.avadaLightBox.prepare_options('iLightbox[' + $value + ']')));
			});

			// Set filter to lightbox created
			jQuery(this).data('lightbox', 'created');
		}

		// Refresh the lightbox
		window.avadaLightBox.refresh_lightbox();
	});

	// Setup filters and click events for faq elements
	jQuery('.puur-faq-shortcode').each(function () {

		// Initialize the filters and corresponding posts
		// Check if filters are displayed
		var $faqsElement = jQuery(this),
			$filtersWrapper = $faqsElement.find('.puur-filters'),
			$filters,
			$filterActiveElement,
			$filterActive,
			$posts;

		// Make the faq posts visible
		$faqsElement.find('.puur-faqs-wrapper').fadeIn();

		if ($filtersWrapper.length) {

			// Make filters visible
			$filtersWrapper.fadeIn();

			// Set needed variables
			$filters = $filtersWrapper.find('.puur-filter');
			$filterActiveElement = $filtersWrapper.find('.puur-active').children('a');
			$filterActive = $filterActiveElement.attr('data-filter').substr(1);
			$posts = jQuery(this).find('.puur-faqs-wrapper .puur-faq-post');

			// Loop through filters
			if ($filters) {
				$filters.each(function () {
					var $filter = jQuery(this),
						$filterName = $filter.children('a').data('filter');

					// Loop through post set
					if ($posts) {

						// If "All" filter is deactivated, hide posts for later check for active filter
						if ($filterActive.length) {
							$posts.hide();
						}

						$posts.each(function () {
							var $post = jQuery(this);

							// If a post belongs to an invisible filter, fade the filter in
							if ($post.hasClass($filterName.substr(1))) {
								if ($filter.hasClass('puur-hidden')) {
									$filter.removeClass('puur-hidden');
								}
							}

							// If "All" filter is deactivated, only show the items of the first filter (which is auto activated)
							if ($filterActive.length && $post.hasClass($filterActive)) {
								$post.show();
							}
						});
					}
				});
			}
		}

		// Handle the filter clicks
		$faqsElement.find('.puur-filters a').click(function (e) {

			var selector = jQuery(this).attr('data-filter');

			e.preventDefault();

			// Fade out the faq posts and fade in the ones matching the selector
			$faqsElement.find('.puur-faqs-wrapper .puur-faq-post').fadeOut();
			setTimeout(function () {
				$faqsElement.find('.puur-faqs-wrapper .puur-faq-post' + selector).fadeIn();
			}, 400);

			// Set the active
			jQuery(this).parents('.puur-filters').find('.puur-filter').removeClass('puur-active');
			jQuery(this).parent().addClass('puur-active');
		});
	});

	function isScrolledIntoView(elem) {
		var docViewTop = jQuery(window).scrollTop(),
			docViewBottom = docViewTop + jQuery(window).height(),
			elemTop = jQuery(elem).offset().top,
			elemBottom = elemTop + jQuery(elem).height();

		return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	jQuery('.puur-alert .close').click(function (e) {
		e.preventDefault();

		jQuery(this).parent().slideUp();
	});

	jQuery('input, textarea').placeholder();

	function checkForImage(url) {
		return (null !== url.match(/\.(jpeg|jpg|gif|png)$/));
	}

	if (Modernizr.mq('only screen and (max-width: 479px)')) {
		jQuery('.overlay-full.layout-text-left .slide-excerpt p').each(function () {
			var excerpt = jQuery(this).html(),
				wordArray = excerpt.split(/[\s\.\?]+/), // Split based on regular expression for spaces
				maxWords = 10, // Max number of words
				$totalWords = wordArray.length, // Current total of words
				newString = '',
				i;

			// Roll back the textarea value with the words that it had previously before the maximum was reached
			if ($totalWords > maxWords + 1) {
				for (i = 0; i < maxWords; i++) {
					newString += wordArray[i] + ' ';
				}
				jQuery(this).html(newString);
			}
		});

		jQuery('.puur-portfolio .puur-rollover-gallery').each(function () {
			var img = jQuery(this).attr('href');

			if (true === checkForImage(img)) {
				jQuery(this).parents('.puur-image-wrapper').find('> img').attr('src', img).attr('width', '').attr('height', '');
			}
			jQuery(this).parents('.puur-portfolio-post').css('width', 'auto');
			jQuery(this).parents('.puur-portfolio-post').css('height', 'auto');
			jQuery(this).parents('.puur-portfolio-one:not(.puur-portfolio-one-text)').find('.puur-portfolio-post').css('margin', '0');
		});

		if (jQuery('.puur-portfolio').length) {
			jQuery('.puur-portfolio-wrapper').isotope();
		}
	}

	if (Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)')) {
		jQuery('.tabs-vertical').addClass('tabs-horizontal').removeClass('tabs-vertical');
	}

	jQuery(window).on('resize', function () {
		if (Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)')) {
			jQuery('.tabs-vertical').addClass('tabs-original-vertical');
			jQuery('.tabs-vertical').addClass('tabs-horizontal').removeClass('tabs-vertical');
		} else {
			jQuery('.tabs-original-vertical').removeClass('tabs-horizontal').addClass('tabs-vertical');
		}
	});

	// Text area limit expandability
	jQuery('.textarea-comment').each(function () {
		jQuery(this).css('max-width', jQuery('#content').width());
	});

	jQuery(window).on('resize', function () {
		jQuery('.textarea-comment').each(function () {
			jQuery(this).css('max-width', jQuery('#content').width());
		});
	});

	if (Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)')) {
		jQuery('.fullwidth-faded').each(function () {
			var bkgdImg = jQuery(this).css('background-image');
			jQuery(this).parent().css('background-image', bkgdImg);
			jQuery(this).remove();
		});
	}

	// Remove gravity IE specific class
	jQuery('.gform_wrapper').each(function () {
		jQuery(this).removeClass('gf_browser_ie');
	});

	// Content Boxes Link Area
	jQuery('.link-area-box').on('click', function () {
		if (jQuery(this).data('link')) {
			if ('_blank' === jQuery(this).data('link-target')) {
				window.open(jQuery(this).data('link'), '_blank');
				jQuery(this).find('.heading-link').removeAttr('href');
				jQuery(this).find('.puur-read-more').removeAttr('href');
			} else {
				window.location = jQuery(this).data('link');
			}
			jQuery(this).find('.heading-link').attr('target', '');
			jQuery(this).find('.puur-read-more').attr('target', '');
		}
	});

	// Clean Horizontal and Vertical
	jQuery('.link-type-button').each(function () {
		if (jQuery(this).parents('.content-boxes-clean-vertical').length >= 1) {
			$buttonHeight = jQuery('.puur-read-more-button').outerHeight();
			jQuery(this).find('.puur-read-more-button').css('top', $buttonHeight / 2);
		}
	});

	jQuery('.link-area-link-icon .puur-read-more-button, .link-area-link-icon .puur-read-more, .link-area-link-icon .heading').mouseenter(function () {
		jQuery(this).parents('.link-area-link-icon').addClass('link-area-link-icon-hover');
	});
	jQuery('.link-area-link-icon .puur-read-more-button, .link-area-link-icon .puur-read-more, .link-area-link-icon .heading').mouseleave(function () {
		jQuery(this).parents('.link-area-link-icon').removeClass('link-area-link-icon-hover');
	});

	jQuery('.link-area-box').mouseenter(function () {
		jQuery(this).addClass('link-area-box-hover');
	});
	jQuery('.link-area-box').mouseleave(function () {
		jQuery(this).removeClass('link-area-box-hover');
	});
}); // End document_ready_1

jQuery(window).load(function () {
	if (undefined === cssua.ua.mobile) {

		// Change opacity of page title bar on scrolling
		if ('1' == avadaVars.page_title_fading) {
			if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
				jQuery('.puur-page-title-wrapper').fusionScroller({
					type: 'opacity',
					offset: 0
				});
			} else {
				jQuery('.puur-page-title-wrapper').fusionScroller({
					type: 'opacity',
					offset: 100
				});
			}
		}

		// Fading and blur effect for new fade="" param on full width boxes
		jQuery('.fullwidth-faded').fusionScroller({
			type: 'fading_blur'
		});
	}
});

/*
 * Dynamic javascript File Port
 */
function insertParam(url, parameterName, parameterValue, atStart) {

	var replaceDuplicates = true,
		cl,
		urlhash,
		sourceUrl,
		urlParts,
		newQueryString,
		parameters,
		i,
		parameterParts;

	if (0 < url.indexOf('#')) {
		cl = url.indexOf('#');
		urlhash = url.substring(url.indexOf('#'), url.length);
	} else {
		urlhash = '';
		cl = url.length;
	}
	sourceUrl = url.substring(0, cl);

	urlParts = sourceUrl.split('?');
	newQueryString = '';

	if (1 < urlParts.length) {
		parameters = urlParts[1].split('&');
		for (i = 0;
			(i < parameters.length); i++) {
			parameterParts = parameters[i].split('=');
			if (!(replaceDuplicates && parameterParts[0] == parameterName)) {
				if ('' === newQueryString) {
					newQueryString = '?' + parameterParts[0] + '=' + (parameterParts[1] ? parameterParts[1] : '');
				} else {
					newQueryString += '&';
					newQueryString += parameterParts[0] + '=' + (parameterParts[1] ? parameterParts[1] : '');
				}
			}
		}
	}
	if ('' === newQueryString) {
		newQueryString = '?';
	}

	if (atStart) {
		newQueryString = '?' + parameterName + '=' + parameterValue + (newQueryString.length > 1 ? '&' + newQueryString.substring(1) : '');
	} else {
		if ('' !== newQueryString && '?' != newQueryString) {
			newQueryString += '&';
		}
		newQueryString += parameterName + '=' + (parameterValue ? parameterValue : '');
	}
	return urlParts[0] + newQueryString + urlhash;
}

// Define YTReady function.
window.YTReady = (function () {
	var onReadyFuncs = [],
		apiIsReady = false;

	/* @param func function	 Function to execute on ready
	 * @param func Boolean	  If true, all qeued functions are executed
	 * @param bBefore Boolean  If true, the func will added to the first
	 position in the queue*/
	return function (func, bBefore) {
		if (true === func) {
			apiIsReady = true;
			while (onReadyFuncs.length) {

				// Removes the first func from the array, and execute func
				onReadyFuncs.shift()();
			}
		} else if ('function' === typeof func) {
			if (apiIsReady) {
				func();
			} else {
				onReadyFuncs[bBefore ? 'unshift' : 'push'](func);
			}
		}
	};
})();

function registerYoutubePlayers() {
	if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
		window.$youtube_players = [];

		jQuery('.tfs-slider').each(function () {
			var $slider = jQuery(this);

			$slider.find('[data-youtube-video-id]').find('iframe').each(function () {
				var $iframe = jQuery(this);

				window.YTReady(function () {
					window.$youtube_players[$iframe.attr('id')] = new YT.Player($iframe.attr('id'), {
						events: {
							'onReady': onPlayerReady($iframe.parents('li')),
							'onStateChange': onPlayerStateChange($iframe.attr('id'), $slider)
						}
					});
				});
			});
		});
	}
}

// Load the YouTube iFrame API
function loadYoutubeIframeAPI() {

	var tag,
		firstScriptTag;

	if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
		tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/iframe_api';
		firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}
}

// This function will be called when the API is fully loaded
function onYouTubePlayerAPIReady() {
	window.YTReady(true);
}

function onPlayerStateChange($frame, $slider) {
	return function ($event) {
		if ($event.data == YT.PlayerState.PLAYING) {
			jQuery($slider).flexslider('pause');
		}

		if ($event.data == YT.PlayerState.PAUSED) {
			jQuery($slider).flexslider('play');
		}

		if ($event.data == YT.PlayerState.BUFFERING) {
			jQuery($slider).flexslider('pause');
		}

		if ($event.data == YT.PlayerState.ENDED) {
			if ('1' == jQuery($slider).data('autoplay')) {
				jQuery($slider).flexslider('play');
			}
		}
	};
}

function onPlayerReady($slide) {
	return function ($event) {
		if ('yes' === jQuery($slide).data('mute')) {
			$event.target.mute();
		}
	};
}

function ytVidId(url) {
	var p = /^(?:https?:)?(\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	return (url.match(p)) ? RegExp.$1 : false;
}

function playVideoAndPauseOthers(slider) {

	// Play the youtube video inside the current slide
	var $currentSliderIframes = jQuery(slider).find('[data-youtube-video-id]').find('iframe'),
		$currentSlide = jQuery(slider).data('flexslider').slides.eq(jQuery(slider).data('flexslider').currentSlide),
		$currentSlideIframe = $currentSlide.find('[data-youtube-video-id]').find('iframe');

	// Stop all youtube videos
	$currentSliderIframes.each(function (i) {

		// Don't stop current video, but all others
		if (jQuery(this).attr('id') != $currentSlideIframe.attr('id')) {
			window.$youtube_players[jQuery(this).attr('id')].stopVideo(); // Stop instead of pause for preview images
		}
	});

	if ($currentSlideIframe.length) {
		if (!$currentSlideIframe.parents('li').hasClass('clone') && $currentSlideIframe.parents('li').hasClass('flex-active-slide') && 'yes' === $currentSlideIframe.parents('li').attr('data-autoplay')) { // Play only if autoplay is setup

			window.$youtube_players[$currentSlideIframe.attr('id')].playVideo();
		}

		if ('yes' === $currentSlide.attr('data-mute')) {
			window.$youtube_players[$currentSlideIframe.attr('id')].mute();
		}
	}

	jQuery(slider).find('video').each(function (i) {
		if ('function' === typeof jQuery(this)[0].pause) {
			jQuery(this)[0].pause();
		}
		if (!jQuery(this).parents('li').hasClass('clone') && jQuery(this).parents('li').hasClass('flex-active-slide') && 'yes' === jQuery(this).parents('li').attr('data-autoplay')) {
			if ('function' === typeof jQuery(this)[0].play) {
				jQuery(this)[0].play();
			}
		}
	});
}

jQuery(document).ready(function () {

	var iframes;

	jQuery('.puur-fullwidth.video-background').each(function () {
		if (jQuery(this).find('[data-youtube-video-id]')) {
			window.yt_vid_exists = true;
		}
	});

	iframes = jQuery('iframe');
	jQuery.each(iframes, function (i, v) {
		var src = jQuery(this).attr('src'),
			newSrc,
			newSrc2,
			newSrc3;

		if (src) {
			if (Number(avadaVars.status_vimeo) && 1 <= src.indexOf('vimeo')) {
				jQuery(this).attr('id', 'player_' + (i + 1));
				newSrc = insertParam(src, 'api', '1', false);
				newSrc2 = insertParam(newSrc, 'player_id', 'player_' + (i + 1), false);
				newSrc3 = insertParam(newSrc2, 'wmode', 'opaque', false);

				jQuery(this).attr('src', newSrc3);
			}

			if (Number(avadaVars.status_yt) && ytVidId(src)) {
				jQuery(this).attr('id', 'player_' + (i + 1));

				newSrc = insertParam(src, 'enablejsapi', '1', false);
				newSrc2 = insertParam(newSrc, 'wmode', 'opaque', false);

				jQuery(this).attr('src', newSrc2);

				window.yt_vid_exists = true;
			}
		}
	});

	jQuery('.full-video, .video-shortcode, .wooslider .slide-content, .puur-portfolio-carousel .puur-video').not('#bbpress-forums .full-video, #bbpress-forums .video-shortcode, #bbpress-forums .wooslider .slide-content, #bbpress-forums .puur-portfolio-carousel .puur-video').fitVids();
	jQuery('#bbpress-forums').fitVids();

	registerYoutubePlayers();

	loadYoutubeIframeAPI();
});

jQuery(window).load(function () {
	jQuery('.puur-youtube-flash-fix').remove();
});

// Control header-v1 and sticky on tfs parallax pages

// Setting some global vars. Those are also needed for the correct header resizing on none parallax slider pages
window.origLogoHeight = jQuery('.header-wrapper').find('.logo').height();
window.origLogoContainerMarginTop = String(jQuery('.header-wrapper').find('.logo').data('margin-top'));
window.origLogoContainerMarginBottom = String(jQuery('.header-wrapper').find('.logo').data('margin-bottom'));
window.origMenuHeight = jQuery('.header-wrapper .puur-navbar-nav > li > a').outerHeight();
if (jQuery('#wrapper').length >= 1) {
	window.wrapperPosition = jQuery('#wrapper').position().left;
} else {
	window.wrapperPosition;
}
window.isParallaxTFSSlider = false;

if (!window.origLogoContainerMarginTop) {
	window.origLogoContainerMarginTop = '0px';
}

if (!window.origLogoContainerMarginBottom) {
	window.origLogoContainerMarginBottom = '0px';
}

jQuery(window).load(function () {
	var headerHeight = jQuery('.puur-header-wrapper').height(),
		vimeoPlayers = jQuery('.flexslider').find('iframe'),
		player,
		wpadminbarHeight,
		pageSmoothHeight,
		flexSmoothHeight;

	if (jQuery('.sidebar').is(':visible')) {
		jQuery('.post-content .puur-portfolio').each(function () {
			var columns = jQuery(this).data('columns');
			jQuery(this).addClass('puur-portfolio-' + columns + '-sidebar');
		});
	}

	// Portfolio isotope loading
	if (jQuery().isotope && jQuery('.puur-portfolio .puur-portfolio-wrapper').length) {
		jQuery('.puur-portfolio .puur-portfolio-wrapper').each(function () {

			var $isotopeFilter,
				$filtersContainer,
				$filters,
				$filterActive,
				$filterActiveLink,
				$filterActiveDataSlug,
				$posts,
				$lightboxInstances,
				$portfolioWrapper,
				$portfolioWrapperID,
				$placeholderImages,
				$videos;

			jQuery(this).next('.puur-load-more-button').fadeIn();

			// Resize the placeholder images correctly in "fixed" picture size carousels
			if ('fixed' === jQuery(this).data('picturesize')) {
				jQuery(this).find('.puur-placeholder-image').each(function () {
					jQuery(this).css({
						'height': jQuery(this).parents('.puur-portfolio-post').siblings().find('img').first().height(),
						'width': jQuery(this).parents('.puur-portfolio-post').siblings().find('img').first().width()
					});

				});
			} else {
				jQuery(this).find('.puur-placeholder-image').each(function () {
					jQuery(this).css({
						'width': jQuery(this).parents('.puur-portfolio-post').siblings().first().find('img').width()
					});

				});
			}

			$isotopeFilter = '',
				$filtersContainer = jQuery(this).parents('.puur-portfolio').find('.puur-filters');

			// Check if filters are displayed
			if ($filtersContainer.length) {

				// Set needed variables
				$filters = $filtersContainer.find('.puur-filter');
				$filterActive = $filtersContainer.find('.puur-active');
				$filterActiveLink = $filterActive.children('a');
				$filterActiveDataSlug = $filterActiveLink.attr('data-filter').substr(1);
				$posts = jQuery(this).find('.puur-portfolio-post');
				$lightboxInstances = [];

				// Loop through filters
				if ($filters) {
					$filters.each(function () {
						var $filter = jQuery(this),
							$filterName = $filter.children('a').data('filter');

						// Loop through initial post set
						if ($posts) {

							// If "All" filter is deactivated, hide posts for later check for active filter
							if ($filterActiveDataSlug.length) {
								$posts.hide();
							}

							jQuery('.puur-filters').show();

							$posts.each(function () {
								var $post = jQuery(this),
									$postGalleryName = $post.find('.puur-rollover-gallery').data('rel'),
									$lightboxFilter;

								// If a post belongs to an invisible filter, fade filter in
								if ($post.hasClass($filterName.substr(1))) {
									if ($filter.hasClass('puur-hidden')) {
										$filter.removeClass('puur-hidden');
									}
								}

								// If "All" filter is deactivated, only show the items of the first filter (which is auto activated)
								if ($filterActiveDataSlug.length && $post.hasClass($filterActiveDataSlug)) {
									$post.show();

									// Set the lightbox gallery
									if ($postGalleryName) {
										$lightboxFilter = $postGalleryName.replace('gallery', $filterActiveDataSlug);

										$post.find('.puur-rollover-gallery').attr('data-rel', $lightboxFilter);
										if (jQuery.inArray($lightboxFilter, $lightboxInstances) === -1) {
											$lightboxInstances.push($lightboxFilter);
										}
									}
								}
							});
						}
					});
				}

				if ($filterActiveDataSlug.length) {

					// If "All" filter is deactivated set the sotope filter to the first active element
					$isotopeFilter = '.' + $filterActiveDataSlug;

					// Create new lightbox instance for the new galleries
					jQuery.each($lightboxInstances, function ($key, $value) {
						window.$ilInstances.push(jQuery('[data-rel="' + $value + '"], [rel="' + $value + '"]').iLightBox(window.avadaLightBox.prepare_options($value)));
					});

					// Refresh the lightbox
					window.avadaLightBox.refresh_lightbox();

					// Set active filter to lightbox created
					$filterActiveLink.data('lightbox', 'created');
				}
			}

			// Refresh the scrollspy script for one page layouts
			jQuery('[data-spy="scroll"]').each(function () {
				var $spy = jQuery(this).scrollspy('refresh');
			});

			$portfolioWrapper = jQuery(this),
				$portfolioWrapperID = $portfolioWrapper.attr('id');

			// Done for multiple instances of portfolio shortcode. Isotope needs ids to distinguish between instances.
			if ($portfolioWrapperID) {
				$portfolioWrapper = jQuery('#' + $portfolioWrapperID);
			}

			setTimeout(function () {

				// Initialize isotope depending on the portfolio layout
				if ($portfolioWrapper.parent().hasClass('puur-portfolio-one')) {
					window.$portfolio_isotope = $portfolioWrapper;
					window.$portfolio_isotope.isotope({

						// Isotope options
						itemSelector: '.puur-portfolio-post',
						layoutMode: 'vertical',
						transformsEnabled: false,
						isOriginLeft: jQuery('.rtl').length ? false : true,
						filter: $isotopeFilter
					});
				} else {
					window.$portfolio_isotope = $portfolioWrapper;
					window.$portfolio_isotope.isotope({

						// Isotope options
						itemSelector: '.puur-portfolio-post',
						resizable: true,
						layoutMode: avadaVars.isotope_type,
						transformsEnabled: false,
						isOriginLeft: jQuery('.rtl').length ? false : true,
						filter: $isotopeFilter
					});
				}
			}, 1);

			// Fade in placeholder images
			$placeholderImages = jQuery(this).find('.puur-portfolio-post .puur-placeholder-image');
			$placeholderImages.each(function () {
				jQuery(this).parents('.puur-portfolio-content-wrapper, .puur-image-wrapper').animate({
					opacity: 1
				});
			});

			// Fade in videos
			$videos = jQuery(this).find('.puur-portfolio-post .puur-video');
			$videos.each(function () {
				jQuery(this).animate({
					opacity: 1
				});
				jQuery(this).parents('.puur-portfolio-content-wrapper').animate({
					opacity: 1
				});
			});

			$videos.fitVids();

			// Portfolio Images Loaded Check
			window.$portfolio_images_index = 0;

			jQuery(this).imagesLoaded().progress(function ($instance, $image) {
				if (jQuery($image.img).parents('.puur-portfolio-content-wrapper').length >= 1) {
					jQuery($image.img, $placeholderImages).parents('.puur-portfolio-content-wrapper').delay(100 * window.$portfolio_images_index).animate({
						opacity: 1
					});
				} else {
					jQuery($image.img, $placeholderImages).parents('.puur-image-wrapper').delay(100 * window.$portfolio_images_index).animate({
						opacity: 1
					});
				}

				window.$portfolio_images_index++;
			});

			setTimeout(
				function () {
					jQuery(window).trigger('resize');
				}, 250
			);
		});
	}

	if (jQuery().flexslider) {

		if (Number(avadaVars.status_vimeo)) {

			jQuery('.flexslider').find('iframe').each(function () {
				var id = jQuery(this).attr('id');

				if (id) {
					$f(id).addEvent('ready', function (playerID) {
						var froogaloop = $f(playerID),
							slide = jQuery('#' + playerID).parents('li');

						froogaloop.addEvent('play', function (data) {
							jQuery('#' + playerID).parents('li').parent().parent().flexslider('pause');
						});

						froogaloop.addEvent('pause', function (data) {
							if ('yes' === jQuery(slide).attr('data-loop')) {
								jQuery('#' + playerID).parents('li').parent().parent().flexslider('pause');
							} else {
								jQuery('#' + playerID).parents('li').parent().parent().flexslider('play');
							}
						});
					});
				}
			});

			/*
			// WIP
			function addEvent( element, eventName, callback ) {
				if ( element.addEventListener ) {
					element.addEventListener( eventName, callback, false );
				} else {
					element.attachEvent( eventName, callback, false );
				}
			}
			*/

		}

		jQuery('.tfs-slider').each(function () {
			var thisTFSlider = this,
				firstSlide = jQuery(thisTFSlider).find('li').get(0),
				sliderHeight,
				sliderWidth,
				percentageWidth,
				aspectRatio,
				compareWidth,
				boxedModeWidth,
				slideContent,
				resizeWidth,
				resizeHeight;

			if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
				jQuery(thisTFSlider).data('parallax', 0);
				jQuery(thisTFSlider).data('full_screen', 0);
			}

			if (cssua.ua.tablet_pc) {
				jQuery(thisTFSlider).data('parallax', 0);
			}

			if (cssua.ua.mobile || Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
				jQuery(thisTFSlider).data('parallax', 0);
			}

			wpadminbarHeight = 0;
			if (1 <= jQuery('#wpadminbar').length) {
				wpadminbarHeight = jQuery('#wpadminbar').height();
			}

			if (1 <= jQuery(thisTFSlider).parents('#sliders-container').length && 1 === jQuery(thisTFSlider).data('parallax')) {
				jQuery('.puur-header').addClass('puur-header-backface');
			}

			if (1 == jQuery(thisTFSlider).data('full_screen')) {
				sliderHeight = jQuery(window).height();

				if ('above' === avadaVars.slider_position) {
					sliderHeight = sliderHeight - (headerHeight + wpadminbarHeight);
				}

				if (0 === jQuery(thisTFSlider).data('parallax')) {
					if (1 == avadaVars.header_transparency || 'above' === avadaVars.slider_position) {
						sliderHeight = jQuery(window).height() - wpadminbarHeight;
					} else {
						sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
					}
				}

				if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
					if ('below' === avadaVars.slider_position) {
						sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
					} else {
						sliderHeight = jQuery(window).height() - wpadminbarHeight;
					}
				}

				jQuery(thisTFSlider).find('video').each(function () {
					var aspectRatio = jQuery(this).width() / jQuery(this).height(),
						arcSliderWidth = aspectRatio * sliderHeight,
						arcSliderLeft = '-' + ((arcSliderWidth - jQuery(thisTFSlider).width()) / 2) + 'px',
						compareWidth = jQuery(thisTFSlider).parent().parent().parent().width(),
						$position;

					if (jQuery(thisTFSlider).parents('.post-content').length) {
						compareWidth = jQuery(thisTFSlider).width();
					}

					if (compareWidth > arcSliderWidth) {
						arcSliderWidth = '100%';
						arcSliderLeft = 0;
						$position = 'static';
					} else {
						$position = 'absolute';
					}
					jQuery(this).width(arcSliderWidth);
					jQuery(this).css({
						'left': arcSliderLeft,
						'position': $position
					});
				});
			} else {
				sliderWidth = jQuery(thisTFSlider).data('slider_width');

				if (-1 != sliderWidth.indexOf('%')) {
					sliderWidth = jQuery(firstSlide).find('.background-image').data('imgwidth');
					if (!sliderWidth && !cssua.ua.mobile) {
						sliderWidth = jQuery(firstSlide).find('video').width();
					}

					if (!sliderWidth) {
						sliderWidth = 940;
					}

					jQuery(thisTFSlider).data('first_slide_width', sliderWidth);

					if (sliderWidth < jQuery(thisTFSlider).data('slider_width')) {
						sliderWidth = jQuery(thisTFSlider).data('slider_width');
					}

					percentageWidth = true;
				} else {
					sliderWidth = parseInt(jQuery(thisTFSlider).data('slider_width'));
				}

				sliderHeight = parseInt(jQuery(thisTFSlider).data('slider_height'));
				aspectRatio = sliderHeight / sliderWidth;

				if (aspectRatio < 0.5) {
					aspectRatio = 0.5;
				}

				compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();
				if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
					compareWidth = jQuery(thisTFSlider).width();
				}
				sliderHeight = aspectRatio * compareWidth;

				if (sliderHeight > parseInt(jQuery(thisTFSlider).data('slider_height'))) {
					sliderHeight = parseInt(jQuery(thisTFSlider).data('slider_height'));
				}

				if (sliderHeight < 200) {
					sliderHeight = 200;
				}
			}

			if (1 == jQuery(thisTFSlider).data('full_screen')) {
				jQuery(thisTFSlider).css('max-width', '100%');
				jQuery(thisTFSlider).find('.slides, .background').css('width', '100%');
			}

			if (('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) && !jQuery(thisTFSlider).hasClass('fixed-width-slider') && 1 == jQuery(thisTFSlider).data('parallax')) {
				jQuery(thisTFSlider).css('max-width', jQuery('#wrapper').width());
				if (jQuery('body').hasClass('side-header-left')) {
					jQuery(thisTFSlider).css('left', jQuery('#side-header').width());
				} else if (jQuery('body').hasClass('side-header-right')) {
					jQuery(thisTFSlider).css('right', jQuery('#side-header').width());
				}
			}

			jQuery(thisTFSlider).parents('.puur-slider-container').css('height', sliderHeight);
			jQuery(thisTFSlider).css('height', sliderHeight);
			jQuery(thisTFSlider).find('.background, .mobile_video_image').css('height', sliderHeight);

			if (1 <= jQuery('.layout-boxed-mode').length) {
				boxedModeWidth = jQuery('.layout-boxed-mode #wrapper').width();
				jQuery(thisTFSlider).css('width', boxedModeWidth);
				jQuery(thisTFSlider).css('margin-left', 'auto');
				jQuery(thisTFSlider).css('margin-right', 'auto');

				if (1 == jQuery(thisTFSlider).data('parallax') && !Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
					jQuery(thisTFSlider).css('left', '50%');
					if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
						boxedModeWidth = jQuery('.layout-boxed-mode #wrapper').width() - jQuery('.layout-boxed-mode #side-header').width();
						if ('Right' === avadaVars.header_position) {
							boxedModeWidth = jQuery('.layout-boxed-mode #wrapper').width() + jQuery('.layout-boxed-mode #side-header').width();
						}
						jQuery(thisTFSlider).css('margin-left', '-' + Math.floor(boxedModeWidth / 2) + 'px');
					} else {
						jQuery(thisTFSlider).css('margin-left', '-' + (boxedModeWidth / 2) + 'px');
					}
				}
				jQuery(thisTFSlider).find('.slides, .background').css('width', '100%');
			}

			if (cssua.ua.mobile) {
				jQuery(thisTFSlider).find('.puur-button').each(function () {
					jQuery(this).removeClass('button-xlarge button-large button-medium');
					jQuery(this).addClass('button-small');
				});
				jQuery(thisTFSlider).find('li').each(function () {
					jQuery(this).attr('data-autoplay', 'no');
					jQuery(this).data('autoplay', 'no');
				});
			}

			jQuery(thisTFSlider).find('a.button').each(function () {
				jQuery(this).data('old', jQuery(this).attr('class'));
			});

			if (Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)')) {
				jQuery(thisTFSlider).find('.puur-button').each(function () {
					jQuery(this).data('old', jQuery(this).attr('class'));
					jQuery(this).removeClass('button-xlarge button-large button-medium');
					jQuery(this).addClass('button-small');
				});
			} else {
				jQuery(thisTFSlider).find('a.button').each(function () {
					jQuery(this).attr('class', jQuery(this).data('old'));
				});
			}

			if (1 == jQuery(thisTFSlider).data('parallax')) {

				if (Modernizr.mq('only screen and (min-width: ' + avadaVars.side_header_break_point + 'px)') && (0 === avadaVars.header_transparency || '0' === avadaVars.header_transparency || false === avadaVars.header_transparency) && 'below' === avadaVars.slider_position) {
					slideContent = jQuery(thisTFSlider).find('.slide-content-container');

					jQuery(slideContent).each(function () {
						jQuery(this).css('padding-top', headerHeight + 'px');
					});
				}

				jQuery(window).scroll(function () {
					if (jQuery(window).scrollTop() >= jQuery(thisTFSlider).parents('#sliders-container').position().top + jQuery(thisTFSlider).parents('#sliders-container').height()) {
						jQuery(thisTFSlider).css('display', 'none');
					} else {
						jQuery(thisTFSlider).css('display', 'block');
					}
				});
			}

			resizeWidth = jQuery(window).width();
			resizeHeight = jQuery(window).height();

			jQuery(window).on('resize', function () { // Start_tfslider_resize

				var headerHeight,
					wpadminbarHeight,
					sliderHeight,
					sliderWidth,
					maxHeight,
					percentageWidth,
					aspectRatio,
					compareWidth,
					boxedModeWidth,
					wrappingContainer,
					fixedWidthCenter,
					slideContent,
					$navigationArrowsTranslate;

				if (jQuery(window).width() != resizeWidth || jQuery(window).height() != resizeHeight) {
					headerHeight = jQuery('.puur-header-wrapper').height();
					wpadminbarHeight = 0;

					if (1 <= jQuery('#wpadminbar').length) {
						wpadminbarHeight = jQuery('#wpadminbar').height();
					}

					if (1 == jQuery(thisTFSlider).data('full_screen')) {
						sliderHeight = jQuery(window).height();

						if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)') && jQuery('#side-header').length) {
							headerHeight = jQuery('#side-header').outerHeight();
						}

						if ('above' === avadaVars.slider_position) {
							sliderHeight = sliderHeight - (headerHeight + wpadminbarHeight);
						}

						if (0 === jQuery(thisTFSlider).data('parallax')) {
							if (1 == avadaVars.header_transparency || 'above' === avadaVars.slider_position) {
								sliderHeight = jQuery(window).height() - wpadminbarHeight;
							} else {
								sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
							}
						}

						if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
							if ('below' === avadaVars.slider_position) {
								sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
							} else {
								sliderHeight = jQuery(window).height() - wpadminbarHeight;
							}
						}

						maxHeight = Math.max.apply(
							null,
							jQuery(thisTFSlider).find('.slide-content').map(function () {
								return jQuery(this).outerHeight();
							}).get()
						);

						maxHeight = maxHeight + 40;

						if (sliderHeight < maxHeight) {
							sliderHeight = maxHeight;
						}

						// Timeout to prevent self hosted video position breaking on re-size with sideheader.
						setTimeout(function () {
							jQuery(thisTFSlider).find('video').each(function () {
								var aspectRatio = jQuery(this).width() / jQuery(this).height(),
									arcSliderWidth = aspectRatio * sliderHeight,
									arcSliderLeft = '-' + ((arcSliderWidth - jQuery(thisTFSlider).width()) / 2) + 'px',
									compareWidth = jQuery(thisTFSlider).parent().parent().parent().width(),
									$position;

								if (jQuery(thisTFSlider).parents('.post-content').length) {
									compareWidth = jQuery(thisTFSlider).width();
								}

								if (compareWidth > arcSliderWidth) {
									arcSliderWidth = '100%';
									arcSliderLeft = 0;
									$position = 'static';
								} else {
									$position = 'absolute';
								}
								jQuery(this).width(arcSliderWidth);
								jQuery(this).css({
									'left': arcSliderLeft,
									'position': $position
								});
							});
						}, 100);
					} else {
						sliderWidth = jQuery(thisTFSlider).data('slider_width');

						if (-1 != sliderWidth.indexOf('%')) {
							sliderWidth = jQuery(thisTFSlider).data('first_slide_width');

							if (sliderWidth < jQuery(thisTFSlider).data('slider_width')) {
								sliderWidth = jQuery(thisTFSlider).data('slider_width');
							}

							percentageWidth = true;
						} else {
							sliderWidth = parseInt(jQuery(thisTFSlider).data('slider_width'));
						}

						sliderHeight = parseInt(jQuery(thisTFSlider).data('slider_height'));
						aspectRatio = sliderHeight / sliderWidth;

						if (aspectRatio < 0.5) {
							aspectRatio = 0.5;
						}

						compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();
						if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
							compareWidth = jQuery(thisTFSlider).width();
						}
						sliderHeight = aspectRatio * compareWidth;

						if (sliderHeight > parseInt(jQuery(thisTFSlider).data('slider_height'))) {
							sliderHeight = parseInt(jQuery(thisTFSlider).data('slider_height'));
						}

						if (sliderHeight < 200) {
							sliderHeight = 200;
						}

						jQuery(thisTFSlider).find('video').each(function () {
							var aspectRatio = jQuery(this).width() / jQuery(this).height(),
								arcSliderWidth = aspectRatio * sliderHeight,
								arcSliderLeft,
								compareWidth;

							if (arcSliderWidth < sliderWidth && !jQuery(thisTFSlider).hasClass('full-width-slider')) {
								arcSliderWidth = sliderWidth;
							}

							arcSliderLeft = '-' + ((arcSliderWidth - jQuery(thisTFSlider).width()) / 2) + 'px';
							compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();
							if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
								compareWidth = jQuery(thisTFSlider).width();
							}
							if (compareWidth > arcSliderWidth && true === percentageWidth && 1 != jQuery(thisTFSlider).data('full_screen')) {
								arcSliderWidth = '100%';
								arcSliderLeft = 0;
							}
							jQuery(this).width(arcSliderWidth);
							jQuery(this).css('left', arcSliderLeft);
						});
					}

					if (Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)')) {
						jQuery(thisTFSlider).find('.puur-button').each(function () {
							jQuery(this).removeClass('button-xlarge button-large button-medium');
							jQuery(this).addClass('button-small');
						});
					} else {
						jQuery(thisTFSlider).find('.puur-button').each(function () {
							jQuery(this).attr('class', jQuery(this).data('old'));
						});
					}

					if (1 == jQuery(thisTFSlider).data('full_screen') && 'fade' === jQuery(thisTFSlider).data('animation')) {
						jQuery(thisTFSlider).css('max-width', '100%');
						jQuery(thisTFSlider).find('.slides, .background').css('width', '100%');
					}

					if (('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) && !jQuery(thisTFSlider).hasClass('fixed-width-slider') && 1 == jQuery(thisTFSlider).data('parallax')) {
						jQuery(thisTFSlider).css('max-width', jQuery('#wrapper').width());
						if (jQuery('body').hasClass('side-header-left')) {
							jQuery(thisTFSlider).css('left', jQuery('#side-header').width());
						} else if (jQuery('body').hasClass('side-header-right')) {
							jQuery(thisTFSlider).css('right', jQuery('#side-header').width());
						}
					}

					jQuery(thisTFSlider).parents('.puur-slider-container').css('height', sliderHeight);
					jQuery(thisTFSlider).parents('.puur-slider-container').css('max-height', sliderHeight);
					jQuery(thisTFSlider).css('height', sliderHeight);
					jQuery(thisTFSlider).find('.background, .mobile_video_image').css('height', sliderHeight);

					if (1 <= jQuery('.layout-boxed-mode').length && 0 === jQuery(thisTFSlider).parents('.post-content').length) {
						boxedModeWidth = jQuery('.layout-boxed-mode #wrapper').width();
						jQuery(thisTFSlider).css('width', boxedModeWidth);
						jQuery(thisTFSlider).css('margin-left', 'auto');
						jQuery(thisTFSlider).css('margin-right', 'auto');

						if (1 == jQuery(thisTFSlider).data('parallax') && !Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
							jQuery(thisTFSlider).css('left', '50%');
							if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
								boxedModeWidth = jQuery('.layout-boxed-mode #wrapper').width() - jQuery('.layout-boxed-mode #side-header').width();
								if ('Right' === avadaVars.header_position) {
									boxedModeWidth = jQuery('.layout-boxed-mode #wrapper').width() + jQuery('.layout-boxed-mode #side-header').width();
								}
								jQuery(thisTFSlider).css('margin-left', '-' + Math.floor(boxedModeWidth / 2) + 'px');
							} else {
								jQuery(thisTFSlider).css('margin-left', '-' + (boxedModeWidth / 2) + 'px');
							}
						}

						if ('slide' !== jQuery(thisTFSlider).data('animation')) {
							jQuery(thisTFSlider).find('.slides').css('width', '100%');
						}
						jQuery(thisTFSlider).find('.background').css('width', '100%');
					}

					if (1 === jQuery(thisTFSlider).data('parallax') && !Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
						jQuery(thisTFSlider).css('position', 'fixed');
						if ('absolute' !== jQuery('.puur-header-wrapper').css('position')) {
							jQuery('.puur-header-wrapper').css('position', 'relative');

							$navigationArrowsTranslate = 'translate(0, ' + (headerHeight / 2) + 'px)';

							if ('below' === avadaVars.slider_position) {
								jQuery(thisTFSlider).parents('.puur-slider-container').css('margin-top', '-' + headerHeight + 'px');
							}
						} else {
							$navigationArrowsTranslate = 'translate(0, 0)';
						}
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-webkit-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-ms-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-o-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-moz-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('transform', $navigationArrowsTranslate);

						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('position', 'relative');
						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('z-index', '3');
						jQuery('.puur-header-wrapper').css('z-index', '5');
						jQuery('.puur-header-wrapper').css('height', headerHeight);

						if (jQuery(thisTFSlider).hasClass('fixed-width-slider')) {
							if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
								if (jQuery(thisTFSlider).parents('#sliders-container').length) {
									wrappingContainer = jQuery('#sliders-container');
								} else {
									wrappingContainer = jQuery('#main');
								}

								if (wrappingContainer.width() < parseFloat(jQuery(thisTFSlider).parent().css('max-width'))) {
									jQuery(thisTFSlider).css('max-width', wrappingContainer.width());
								} else {
									jQuery(thisTFSlider).css('max-width', jQuery(thisTFSlider).parent().css('max-width'));
								}

								if (wrappingContainer.width() < parseFloat(jQuery(thisTFSlider).parent().css('max-width'))) {
									jQuery(thisTFSlider).css('max-width', wrappingContainer.width());
								} else {
									jQuery(thisTFSlider).css('max-width', jQuery(thisTFSlider).parent().css('max-width'));
								}

								if ('Left' === avadaVars.header_position) {
									fixedWidthCenter = '-' + ((jQuery(thisTFSlider).width() - jQuery('#side-header').width()) / 2) + 'px';
								} else {
									fixedWidthCenter = '-' + ((jQuery(thisTFSlider).width() + jQuery('#side-header').width()) / 2) + 'px';
								}

								if ((-1) * fixedWidthCenter > jQuery(thisTFSlider).width()) {
									fixedWidthCenter = (-1) * jQuery(thisTFSlider).width();
								}
							} else {
								fixedWidthCenter = '-' + (jQuery(thisTFSlider).width() / 2) + 'px';
							}
							jQuery(thisTFSlider).css('left', '50%');
							jQuery(thisTFSlider).css('margin-left', fixedWidthCenter);
						}

						jQuery(thisTFSlider).find('.flex-control-nav').css('bottom', (headerHeight / 2));

						if ((0 === avadaVars.header_transparency || '0' === avadaVars.header_transparency || false === avadaVars.header_transparency) && 'below' === avadaVars.slider_position) {
							slideContent = jQuery(thisTFSlider).find('.slide-content-container');
							jQuery(slideContent).each(function () {
								jQuery(this).css('padding-top', headerHeight + 'px');
							});
						}
					} else if (1 == jQuery(thisTFSlider).data('parallax') && Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
						jQuery(thisTFSlider).css('position', 'relative');
						jQuery(thisTFSlider).css('left', '0');
						jQuery(thisTFSlider).css('margin-left', '0');
						if ('absolute' !== jQuery('.puur-header-wrapper').css('position')) {
							jQuery('.puur-header-wrapper').css('position', 'relative');
						}
						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('position', 'relative');
						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('z-index', '3');
						jQuery('.puur-header-wrapper').css('z-index', '5');
						jQuery('.puur-header-wrapper').css('height', 'auto');
						jQuery(thisTFSlider).parents('.puur-slider-container').css('margin-top', '');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-webkit-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-ms-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-o-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-moz-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('transform', 'translate(0, 0)');

						jQuery(thisTFSlider).find('.flex-control-nav').css('bottom', 0);

						if ((0 === avadaVars.header_transparency || '0' === avadaVars.header_transparency || false === avadaVars.header_transparency) && 'below' === avadaVars.slider_position) {
							slideContent = jQuery(thisTFSlider).find('.slide-content-container');
							jQuery(slideContent).each(function () {
								jQuery(this).css('padding-top', '');
							});
						}
					}

					if (Modernizr.mq('only screen and (max-width: 640px)')) {
						jQuery(thisTFSlider).parents('.puur-slider-container').css('height', sliderHeight);
						jQuery(thisTFSlider).css('height', sliderHeight);
						jQuery(thisTFSlider).find('.background, .mobile_video_image').css('height', sliderHeight);
					} else if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
						jQuery(thisTFSlider).parents('.puur-slider-container').css('height', sliderHeight);
						jQuery(thisTFSlider).css('height', sliderHeight);
						jQuery(thisTFSlider).find('.background, .mobile_video_image').css('height', sliderHeight);
					} else {
						jQuery(thisTFSlider).parents('.puur-slider-container').css('height', sliderHeight);
						jQuery(thisTFSlider).css('height', sliderHeight);
						jQuery(thisTFSlider).find('.background, .mobile_video_image').css('height', sliderHeight);
					}

					slideContent = jQuery(thisTFSlider).find('.slide-content-container');

					if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
						jQuery(thisTFSlider).parents('.puur-slider-container').css('height', 'auto');
						jQuery(thisTFSlider).css('height', 'auto');
						jQuery(thisTFSlider).parents('.puur-slider-container').css('max-height', 'none');
						jQuery(thisTFSlider).find('.mobile_video_image').each(function () {
							var imgURL = jQuery('.mobile_video_image').css('background-image').replace('url(', '').replace(')', ''),
								previewImage,
								mobilePreviewHeight;

							if (imgURL) {
								previewImage = new Image();
								previewImage.name = imgURL;
								previewImage.src = imgURL;
								previewImage.onload = function () {
									var ar = this.height / this.width,
										compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();
									if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
										compareWidth = jQuery(thisTFSlider).width();
									}
									mobilePreviewHeight = ar * compareWidth;
									if (mobilePreviewHeight < sliderHeight) {
										jQuery(thisTFSlider).find('.mobile_video_image').css('height', mobilePreviewHeight);
										jQuery(thisTFSlider).css('height', mobilePreviewHeight);
									}
								};
							}
						});
					}

					if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
						if (jQuery(thisTFSlider).parents('#sliders-container').length >= 1) {
							slideContent = jQuery(thisTFSlider).parents('#sliders-container').find('.slide-content-container');
							jQuery(slideContent).each(function () {
								if (!Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
									if (jQuery(this).hasClass('slide-content-right')) {
										jQuery(this).find('.slide-content').css('margin-right', '100px');
									} else if (jQuery(this).hasClass('slide-content-left')) {
										jQuery(this).find('.slide-content').css('margin-left', '100px');
									}
								} else {
									jQuery(this).find('.slide-content').css('margin-left', '');
									jQuery(this).find('.slide-content').css('margin-right', '');
								}
							});
						}
					}

					if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
						jQuery('.puur-header-wrapper').css('height', '');
					}

					resizeWidth = jQuery(window).width();
					resizeHeight = jQuery(window).height();
				}
			}); // // end_tfslider_resize

			if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
				jQuery(thisTFSlider).css('max-width', '100%');
				if ('slide' !== jQuery(thisTFSlider).data('animation')) {
					jQuery(thisTFSlider).find('.slides').css('max-width', '100%');
				}
			}

			jQuery(thisTFSlider).find('video').each(function () {
				if ('function' === typeof jQuery(this)[0].pause) {
					jQuery(this)[0].pause();
				}
			});

			jQuery(thisTFSlider).flexslider({
				animation: jQuery(thisTFSlider).data('animation'),
				slideshow: jQuery(thisTFSlider).data('autoplay'),
				slideshowSpeed: jQuery(thisTFSlider).data('slideshow_speed'),
				animationSpeed: jQuery(thisTFSlider).data('animation_speed'),
				controlNav: Boolean(Number(jQuery(thisTFSlider).data('pagination_circles'))),
				directionNav: Boolean(Number(jQuery(thisTFSlider).data('nav_arrows'))),
				animationLoop: Boolean(Number(jQuery(thisTFSlider).data('loop'))),
				smoothHeight: true,
				pauseOnHover: false,
				useCSS: true,
				video: true,
				touch: true,
				prevText: '&#xe61e;',
				nextText: '&#xe620;',
				start: function (slider) {

					var wpadminbarHeight = 0,
						maxHeight,
						sliderHeight,
						sliderWidth,
						percentageWidth,
						compareWidth,
						wrappingContainer,
						fixedWidthCenter,
						$navigationArrowsTranslate;

					jQuery(thisTFSlider).parent().find('.puur-slider-loading').remove();

					if (1 <= jQuery('#wpadminbar').length) {
						wpadminbarHeight = jQuery('#wpadminbar').height();
					}

					jQuery(slider.slides.eq(slider.currentSlide)).find('.slide-content-container').show();

					// Remove title separators and padding, when there is not enough space
					jQuery(slider.slides.eq(slider.currentSlide)).find('.puur-title').puur_responsive_title_shortcode();

					maxHeight = Math.max.apply(
						null,
						jQuery(thisTFSlider).find('.slide-content').map(function () {
							return jQuery(this).outerHeight();
						}).get()
					);

					maxHeight = maxHeight + 40;

					if (1 == jQuery(thisTFSlider).data('full_screen')) {
						sliderHeight = jQuery(window).height();

						if ('above' === avadaVars.slider_position) {
							sliderHeight = sliderHeight - (headerHeight + wpadminbarHeight);
						}

						if (0 === jQuery(thisTFSlider).data('parallax')) {
							if (1 == avadaVars.header_transparency || 'above' === avadaVars.slider_position) {
								sliderHeight = jQuery(window).height() - wpadminbarHeight;
							} else {
								sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
							}
						}

						if (Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
							if ('below' === avadaVars.slider_position) {
								if (jQuery('#side-header').length) {
									sliderHeight = jQuery(window).height() - (jQuery('#side-header').outerHeight() + wpadminbarHeight);
								} else {
									sliderHeight = jQuery(window).height() - (headerHeight + wpadminbarHeight);
								}
							} else {
								sliderHeight = jQuery(window).height() - wpadminbarHeight;
							}
						}

						if (sliderHeight < maxHeight) {
							sliderHeight = maxHeight;
						}

						jQuery(thisTFSlider).find('video').each(function () {
							var aspectRatio = jQuery(this).width() / jQuery(this).height(),
								arcSliderWidth = aspectRatio * sliderHeight,
								arcSliderLeft = '-' + ((arcSliderWidth - jQuery(thisTFSlider).width()) / 2) + 'px';

							compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();

							if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
								compareWidth = jQuery(thisTFSlider).width();
							}
							if (compareWidth > arcSliderWidth) {
								arcSliderWidth = '100%';
								arcSliderLeft = 0;
							}
							jQuery(this).width(arcSliderWidth);
							jQuery(this).css('left', arcSliderLeft);
						});
					} else {
						sliderWidth = jQuery(thisTFSlider).data('slider_width');

						if (-1 != sliderWidth.indexOf('%')) {
							sliderWidth = jQuery(firstSlide).find('.background-image').data('imgwidth');
							if (!sliderWidth && !cssua.ua.mobile) {
								sliderWidth = jQuery(firstSlide).find('video').width();
							}

							if (!sliderWidth) {
								sliderWidth = 940;
							}

							jQuery(thisTFSlider).data('first_slide_width', sliderWidth);

							if (sliderWidth < jQuery(thisTFSlider).data('slider_width')) {
								sliderWidth = jQuery(thisTFSlider).data('slider_width');
							}

							percentageWidth = true;
						} else {
							sliderWidth = parseInt(jQuery(thisTFSlider).data('slider_width'));
						}

						sliderHeight = parseInt(jQuery(thisTFSlider).data('slider_height'));
						aspectRatio = sliderHeight / sliderWidth;

						if (aspectRatio < 0.5) {
							aspectRatio = 0.5;
						}

						compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();
						if (1 <= jQuery(thisTFSlider).parents('.post-content').length) {
							compareWidth = jQuery(thisTFSlider).width();
						}
						sliderHeight = aspectRatio * compareWidth;

						if (sliderHeight > parseInt(jQuery(thisTFSlider).data('slider_height'))) {
							sliderHeight = parseInt(jQuery(thisTFSlider).data('slider_height'));
						}

						if (sliderHeight < 200) {
							sliderHeight = 200;
						}

						if (sliderHeight < maxHeight) {
							sliderHeight = maxHeight;
						}

						jQuery(thisTFSlider).find('video').each(function () {
							var aspectRatio = jQuery(this).width() / jQuery(this).height(),
								arcSliderWidth = aspectRatio * sliderHeight,
								arcSliderLeft,
								compareWidth;

							if (arcSliderWidth < sliderWidth && !jQuery(thisTFSlider).hasClass('full-width-slider')) {
								arcSliderWidth = sliderWidth;
							}

							arcSliderLeft = '-' + ((arcSliderWidth - jQuery(thisTFSlider).width()) / 2) + 'px';
							compareWidth = jQuery(thisTFSlider).parent().parent().parent().width();
							if (jQuery(thisTFSlider).parents('.post-content').length >= 1) {
								compareWidth = jQuery(thisTFSlider).width();
							}
							if (compareWidth > arcSliderWidth && true === percentageWidth && 1 != jQuery(thisTFSlider).data('full_screen')) {
								arcSliderWidth = '100%';
								arcSliderLeft = 0;
							}
							jQuery(this).width(arcSliderWidth);
							jQuery(this).css('left', arcSliderLeft);
						});
					}

					jQuery(thisTFSlider).parents('.puur-slider-container').css('max-height', sliderHeight);
					jQuery(thisTFSlider).parents('.puur-slider-container').css('height', sliderHeight);
					jQuery(thisTFSlider).css('height', sliderHeight);
					jQuery(thisTFSlider).find('.background, .mobile_video_image').css('height', sliderHeight);

					/* WIP
					if ( jQuery( thisTFSlider ).data( 'full_screen' ) == 0 && (cssua.ua.mobile && cssua.ua.mobile != 'ipad' ) || jQuery( thisTFSlider ).parents( '.post-content' ).length >= 1) {
						jQuery( thisTFSlider ).parents( '.puur-slider-container' ).css( 'height', 'auto' );
						jQuery( thisTFSlider ).find( '.mobile_video_image' ).each( function() {
							var imgURL = jQuery( '.mobile_video_image' ).css( 'background-image' ).replace( 'url(', '' ).replace( ')', '' );
							if (imgURL) {
								var previewImage = new Image();
								previewImage.name = imgURL;
								previewImage.src = imgURL;
								previewImage.onload = function() {
									var ar = this.height / this.width;
									var compareWidth = jQuery( thisTFSlider ).parent().parent().parent().width();
									if ( jQuery( thisTFSlider ).parents( '.post-content' ).length >= 1) {
										compareWidth = jQuery( thisTFSlider ).width();
									}
									var mobilePreviewHeight = ar * compareWidth;
									if (mobilePreviewHeight < sliderHeight) {
										jQuery( thisTFSlider ).find( '.mobile_video_image' ).css( 'height', mobilePreviewHeight);
										jQuery( thisTFSlider ).find( '.mobile_video_image' ).css( 'height', mobilePreviewHeight);
									}
								};
							}
						});
						if ( jQuery( slider.slides.eq( slider.currentSlide ) ).find( 'video' ).length >= 1 && jQuery( slider.slides.eq( slider.currentSlide ) ).find( '.mobile_video_image' ).length >= 1) {
							var imgURL = jQuery( slider.slides.eq( slider.currentSlide ) ).find( '.mobile_video_image' ).css( 'background-image' ).replace( 'url(', '' ).replace( ')', '' );
							if (imgURL) {
								var previewImage = new Image();
								previewImage.name = imgURL;
								previewImage.src = imgURL;
								previewImage.onload = function() {
									var ar = sliderHeight / this.width;
									var compareWidth = jQuery( thisTFSlider ).parent().parent().parent().width();
									if ( jQuery( thisTFSlider ).parents( '.post-content' ).length >= 1) {
										compareWidth = jQuery( thisTFSlider ).width();
									}
									var mobilePreviewHeight = ar * compareWidth;
									if (mobilePreviewHeight < sliderHeight) {
										jQuery( thisTFSlider ).find( '.mobile_video_image' ).css( 'height', mobilePreviewHeight);
										jQuery( thisTFSlider ).css( 'height', mobilePreviewHeight);
									}
								};
							}
						}
					}*/

					if (1 === jQuery(thisTFSlider).data('parallax') && !Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
						jQuery(thisTFSlider).css('position', 'fixed');
						if ('absolute' != jQuery('.puur-header-wrapper').css('position')) {
							jQuery('.puur-header-wrapper').css('position', 'relative');
							$navigationArrowsTranslate = 'translate(0, ' + (headerHeight / 2) + 'px)';

							if ('below' === avadaVars.slider_position) {
								jQuery(thisTFSlider).parents('.puur-slider-container').css('margin-top', '-' + headerHeight + 'px');
							}
						} else {
							$navigationArrowsTranslate = 'translate(0, 0)';
						}
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-webkit-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-ms-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-o-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-moz-transform', $navigationArrowsTranslate);
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('transform', $navigationArrowsTranslate);

						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('position', 'relative');
						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('z-index', '3');
						jQuery('.puur-header-wrapper').css('z-index', '5');
						jQuery('.puur-header-wrapper').css('height', headerHeight);

						if (1 == jQuery(thisTFSlider).data('full_screen')) {
							jQuery(slider).find('.flex-control-nav').css('bottom', (headerHeight / 2));
						} else {
							jQuery(slider).find('.flex-control-nav').css('bottom', 0);
						}

						if (jQuery(thisTFSlider).hasClass('fixed-width-slider')) {
							if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
								if (jQuery(thisTFSlider).parents('#sliders-container').length) {
									wrappingContainer = jQuery('#sliders-container');
								} else {
									wrappingContainer = jQuery('#main');
								}

								if (wrappingContainer.width() < parseFloat(jQuery(thisTFSlider).parent().css('max-width'))) {
									jQuery(thisTFSlider).css('max-width', wrappingContainer.width());
								} else {
									jQuery(thisTFSlider).css('max-width', jQuery(thisTFSlider).parent().css('max-width'));
								}

								if ('Left' === avadaVars.header_position) {
									fixedWidthCenter = '-' + ((jQuery(thisTFSlider).width() - jQuery('#side-header').width()) / 2) + 'px';
								} else {
									fixedWidthCenter = '-' + ((jQuery(thisTFSlider).width() + jQuery('#side-header').width()) / 2) + 'px';
								}

								if ((-1) * fixedWidthCenter > jQuery(thisTFSlider).width()) {
									fixedWidthCenter = (-1) * jQuery(thisTFSlider).width();
								}
							} else {
								fixedWidthCenter = '-' + (jQuery(thisTFSlider).width() / 2) + 'px';
							}
							jQuery(thisTFSlider).css('left', '50%');
							jQuery(thisTFSlider).css('margin-left', fixedWidthCenter);
						}

						if ((0 === avadaVars.header_transparency || '0' === avadaVars.header_transparency || false === avadaVars.header_transparency) && 'below' === avadaVars.slider_position) {
							slideContent = jQuery(thisTFSlider).find('.slide-content-container');
							jQuery(slideContent).each(function () {
								jQuery(this).css('padding-top', headerHeight + 'px');
							});
						}

					} else if (1 == jQuery(thisTFSlider).data('parallax') && Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
						jQuery(thisTFSlider).css('position', 'relative');
						jQuery(thisTFSlider).css('left', '0');
						jQuery(thisTFSlider).css('margin-left', '0');
						if ('absolute' !== jQuery('.puur-header-wrapper').css('position')) {
							jQuery('.puur-header-wrapper').css('position', 'relative');
						}
						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('position', 'relative');
						jQuery('#main, .puur-footer-widget-area, .puur-footer-copyright-area, .puur-page-title-bar').css('z-index', '3');
						jQuery('.puur-header-wrapper').css('z-index', '5');
						jQuery('.puur-header-wrapper').css('height', 'auto');
						jQuery(thisTFSlider).parents('.puur-slider-container').css('margin-top', '');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-webkit-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-ms-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-o-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('-moz-transform', 'translate(0, 0)');
						jQuery(thisTFSlider).find('.flex-direction-nav li a').css('transform', 'translate(0, 0)');

						jQuery(thisTFSlider).find('.flex-control-nav').css('bottom', 0);

						if ((0 === avadaVars.header_transparency || '0' === avadaVars.header_transparency || false === avadaVars.header_transparency) && 'below' === avadaVars.slider_position) {
							slideContent = jQuery(thisTFSlider).find('.slide-content-container');
							jQuery(slideContent).each(function () {
								jQuery(this).css('padding-top', '');
							});
						}
					}

					slideContent = jQuery(thisTFSlider).find('.slide-content-container');

					jQuery(slider.slides.eq(slider.currentSlide)).find('video').each(function () {
						if ('yes' === jQuery(this).parents('li').attr('data-autoplay')) {
							if ('function' === typeof jQuery(this)[0].play) {
								jQuery(this)[0].play();
							}
						}
					});

					/* WIP
					jQuery( slider.slides.eq( slider.currentSlide ) ).find( 'iframe' ).each( function() {
						if ( jQuery( this ).parents( 'li' ).attr( 'data-autoplay' ) == 'yes' ) {
							jQuery( thisTFSlider ).flexslider( 'pause' );
							var video = this;
							setTimeout( function() {
								video.contentWindow.postMessage( '{"event":"command","func":"' + 'playVideo' + '","args":""}', '*' );
							}, 1000);
						}
					});
					*/

					if ('Left' === avadaVars.header_position || 'Right' === avadaVars.header_position) {
						if (jQuery(thisTFSlider).parents('#sliders-container').length >= 1) {
							slideContent = jQuery(thisTFSlider).parents('#sliders-container').find('.slide-content-container');
							jQuery(slideContent).each(function () {
								if (!Modernizr.mq('only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)')) {
									if (jQuery(this).hasClass('slide-content-right')) {
										jQuery(this).find('.slide-content').css('margin-right', '100px');
									} else if (jQuery(this).hasClass('slide-content-left')) {
										jQuery(this).find('.slide-content').css('margin-left', '100px');
									}
								}
							});
						}
					}

					fusionReanimateSlider(slideContent);

					// Control Videos
					if ('undefined' !== typeof (slider.slides) && 0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {

						// Vimeo
						if (Number(avadaVars.status_vimeo)) {
							$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');

							if ('yes' === jQuery(slider.slides.eq(slider.currentSlide)).data('autoplay')) {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('play');
							}
							if ('yes' === jQuery(slider.slides.eq(slider.currentSlide)).data('mute')) {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('setVolume', 0);
							}
						}

						playVideoAndPauseOthers(slider);
					}

					jQuery(thisTFSlider).find('.overlay-link').hide();
					jQuery(slider.slides.eq(slider.currentSlide)).find('.overlay-link').show();

					// Resize videos
					jQuery(thisTFSlider).find('[data-youtube-video-id], [data-vimeo-video-id]').each(
						function () {
							var $this = jQuery(this);
							setTimeout(
								function () {
									resizeVideo($this);
								}, 500
							);
						}
					);

					// Reinitialize waypoint
					jQuery.waypoints('viewportHeight');
					jQuery.waypoints('refresh');

				},
				before: function (slider) {
					jQuery(thisTFSlider).find('.slide-content-container').hide();

					// Control Videos
					if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {

						// Vimeo
						if (Number(avadaVars.status_vimeo)) {
							jQuery(thisTFSlider).find('iframe').each(function () {
								$f(jQuery(this)[0]).api('pause');
							});

							if ('yes' === jQuery(slider.slides.eq(slider.currentSlide)).data('autoplay')) {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('play');
							}
							if ('yes' === jQuery(slider.slides.eq(slider.currentSlide)).data('mute')) {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('setVolume', 0);
							}
						}
					}

					playVideoAndPauseOthers(slider);
				},
				after: function (slider) {
					jQuery(slider.slides.eq(slider.currentSlide)).find('.slide-content-container').show();

					// Remove title separators and padding, when there is not enough space
					jQuery(slider.slides.eq(slider.currentSlide)).find('.puur-title').puur_responsive_title_shortcode();

					slideContent = jQuery(thisTFSlider).find('.slide-content-container');

					fusionReanimateSlider(slideContent);

					// Control Videos
					if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {

						// Vimeo
						if (Number(avadaVars.status_vimeo)) {
							jQuery(thisTFSlider).find('iframe').each(function () {
								$f(jQuery(this)[0]).api('pause');
							});

							if ('yes' === jQuery(slider.slides.eq(slider.currentSlide)).data('autoplay')) {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('play');
							}
							if ('yes' === jQuery(slider.slides.eq(slider.currentSlide)).data('mute')) {
								$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('setVolume', 0);
							}
						}
					}

					jQuery(thisTFSlider).find('.overlay-link').hide();
					jQuery(slider.slides.eq(slider.currentSlide)).find('.overlay-link').show();

					jQuery(slider.slides.eq(slider.currentSlide)).find('[data-youtube-video-id], [data-vimeo-video-id]').each(function () {
						resizeVideo(jQuery(this));
					});

					playVideoAndPauseOthers(slider);

					jQuery('[data-spy="scroll"]').each(function () {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				}
			});
		});

		if ('false' === avadaVars.page_smoothHeight) {
			pageSmoothHeight = false;
		} else {
			pageSmoothHeight = true;
		}

		jQuery('.puur-blog-layout-grid .flexslider').flexslider({
			slideshow: Boolean(Number(avadaVars.slideshow_autoplay)),
			slideshowSpeed: Number(avadaVars.slideshow_speed),
			video: true,
			smoothHeight: pageSmoothHeight,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function (slider) {
				jQuery(slider).removeClass('puur-flexslider-loading');

				if ('undefined' !== typeof (slider.slides) && 0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}

				// Reinitialize waypoints
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function (slider) {
				if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}

					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}

					/* ------------------  YOUTUBE FOR AUTOSLIDER ------------------ */
					playVideoAndPauseOthers(slider);
				}
			},
			after: function (slider) {
				if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}

					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function () {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});

		if ('false' === avadaVars.flex_smoothHeight) {
			flexSmoothHeight = false;
		} else {
			flexSmoothHeight = true;
		}

		jQuery('.puur-flexslider').flexslider({
			slideshow: Boolean(Number(avadaVars.slideshow_autoplay)),
			slideshowSpeed: avadaVars.slideshow_speed,
			video: true,
			smoothHeight: flexSmoothHeight,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function (slider) {

				// Remove Loading
				slider.removeClass('puur-flexslider-loading');

				// For dynamic content, like equalHeights
				jQuery(window).trigger('resize');

				if ('undefined' !== typeof (slider.slides) && 0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}

				// Reinitialize waypoint
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function (slider) {
				if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}

					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}

					/* ------------------  YOUTUBE FOR AUTOSLIDER ------------------ */
					playVideoAndPauseOthers(slider);
				}
			},
			after: function (slider) {
				if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}

					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function () {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});

		jQuery('.flexslider:not(.tfs-slider)').flexslider({
			slideshow: Boolean(Number(avadaVars.slideshow_autoplay)),
			slideshowSpeed: avadaVars.slideshow_speed,
			video: true,
			smoothHeight: flexSmoothHeight,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function (slider) {

				// Remove Loading
				slider.removeClass('puur-flexslider-loading');

				if ('undefined' !== typeof (slider.slides) && 0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}

				// Reinitialize waypoint
				jQuery.waypoints('viewportHeight');
				jQuery.waypoints('refresh');
			},
			before: function (slider) {
				if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.status_vimeo)) {
						$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
					}
					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}

					/* ------------------  YOUTUBE FOR AUTOSLIDER ------------------ */
					playVideoAndPauseOthers(slider);
				}
			},
			after: function (slider) {
				if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
					} else {
						jQuery(slider).find('.flex-control-nav').hide();
					}
					if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
						window.YTReady(function () {
							new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
								events: {
									'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
								}
							});
						});
					}
				} else {
					if (Number(avadaVars.pagination_video_slide)) {
						jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
					} else {
						jQuery(slider).find('.flex-control-nav').show();
					}
				}
				jQuery('[data-spy="scroll"]').each(function () {
					var $spy = jQuery(this).scrollspy('refresh');
				});
			}
		});

		/* ------------------ PREV & NEXT BUTTON FOR FLEXSLIDER (YOUTUBE) ------------------ */
		jQuery('.flex-next, .flex-prev').click(function () {

			/* WIP
			playVideoAndPauseOthers( jQuery( this ).parents( '.flexslider' ) );
			*/
		});
	}

	if (jQuery().isotope) {

		jQuery('.puur-blog-layout-grid').each(function () {
			var columns = 2,
				gridWidth,
				$gridContainer = jQuery(this),
				i;

			for (i = 1; i < 7; i++) {
				if (jQuery(this).hasClass('puur-blog-layout-grid-' + i)) {
					columns = i;
				}
			}

			gridWidth = Math.floor(100 / columns * 100) / 100 + '%';
			$gridContainer.find('.puur-post-grid').css('width', gridWidth);
			$gridContainer.isotope({
				layoutMode: 'masonry',
				itemSelector: '.puur-post-grid',
				transformsEnabled: false,
				isOriginLeft: jQuery('body.rtl').length ? false : true,
				resizable: true
			});

			if (($gridContainer.hasClass('puur-blog-layout-grid-4') || $gridContainer.hasClass('puur-blog-layout-grid-5') || $gridContainer.hasClass('puur-blog-layout-grid-6')) && Modernizr.mq('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)')) {
				gridWidth = Math.floor(100 / 3 * 100) / 100 + '%';
				$gridContainer.find('.puur-post-grid').css('width', gridWidth);
				$gridContainer.isotope({
					layoutMode: 'masonry',
					itemSelector: '.puur-post-grid',
					transformsEnabled: false,
					isOriginLeft: jQuery('body.rtl').length ? false : true,
					resizable: true
				});
			}

			setTimeout(
				function () {
					jQuery(window).trigger('resize');
					$gridContainer.isotope();
				}, 250
			);
		});
	}

	if (Boolean(Number(avadaVars.avada_rev_styles))) {
		jQuery('.rev_slider_wrapper').each(function () {
			var revSliderWrapper = jQuery(this),
				revSliderID,
				newDimension;

			if (1 <= revSliderWrapper.length && -1 == revSliderWrapper.attr('class').indexOf('tp-shadow')) {
				jQuery('<div class="shadow-left">').appendTo(this);
				jQuery('<div class="shadow-right">').appendTo(this);

				revSliderWrapper.addClass('avada-skin-rev');
			}

			if (!jQuery(this).find('.tp-leftarrow').hasClass('preview1') && !jQuery(this).find('.tp-leftarrow').hasClass('preview2') && !jQuery(this).find('.tp-leftarrow').hasClass('preview3') && !jQuery(this).find('.tp-leftarrow').hasClass('preview4')) {
				jQuery(this).addClass('avada-skin-rev-nav');

				if (revSliderWrapper.find('.tp-leftarrow').height() > revSliderWrapper.height() / 4 && revSliderWrapper.find('.tp-leftarrow').height() < revSliderWrapper.height()) {
					revSliderID = revSliderWrapper.attr('id');
					newDimension = revSliderWrapper.height() / 4;
					if (revSliderWrapper.children('.avada-rev-arrows').length) {
						revSliderWrapper.children('.avada-rev-arrows').empty();
						revSliderWrapper.children('.avada-rev-arrows').append('<style type="text/css">#' + revSliderID + ' .tp-leftarrow, #' + revSliderID + ' .tp-rightarrow{margin-top:-' + newDimension / 2 + 'px !important;width:' + newDimension + 'px !important;height:' + newDimension + 'px !important;}#' + revSliderID + ' .tp-leftarrow:before, #' + revSliderID + ' .tp-rightarrow:before{line-height:' + newDimension + 'px;font-size:' + newDimension / 2 + 'px;}</style>');
					} else {
						revSliderWrapper.prepend('<div class="avada-rev-arrows"><style type="text/css">#' + revSliderID + ' .tp-leftarrow, #' + revSliderID + ' .tp-rightarrow{margin-top:-' + newDimension / 2 + 'px !important;width:' + newDimension + 'px !important;height:' + newDimension + 'px !important;}#' + revSliderID + ' .tp-leftarrow:before, #' + revSliderID + ' .tp-rightarrow:before{line-height:' + newDimension + 'px;font-size:' + newDimension / 2 + 'px;}</style></div>');
					}
				}

				jQuery(window).on('resize', function () {
					var revSliderID,
						newDimension;
					if (revSliderWrapper.find('.tp-leftarrow').height() > revSliderWrapper.height() / 4 && revSliderWrapper.find('.tp-leftarrow').height() < revSliderWrapper.height()) {
						revSliderID = revSliderWrapper.attr('id');
						newDimension = revSliderWrapper.height() / 4;
						if (revSliderWrapper.children('.avada-rev-arrows').length) {
							revSliderWrapper.children('.avada-rev-arrows').empty();
							revSliderWrapper.children('.avada-rev-arrows').append('<style type="text/css">#' + revSliderID + ' .tp-leftarrow, #' + revSliderID + ' .tp-rightarrow{margin-top:-' + newDimension / 2 + 'px !important;width:' + newDimension + 'px !important;height:' + newDimension + 'px !important;}#' + revSliderID + ' .tp-leftarrow:before, #' + revSliderID + ' .tp-rightarrow:before{line-height:' + newDimension + 'px;font-size:' + newDimension / 2 + 'px;}</style>');
						} else {
							revSliderWrapper.prepend('<div class="avada-rev-arrows"><style type="text/css">#' + revSliderID + ' .tp-leftarrow, #' + revSliderID + ' .tp-rightarrow{margin-top:-' + newDimension / 2 + 'px !important;width:' + newDimension + 'px !important;height:' + newDimension + 'px !important;}#' + revSliderID + ' .tp-leftarrow:before, #' + revSliderID + ' .tp-rightarrow:before{line-height:' + newDimension + 'px;font-size:' + newDimension / 2 + 'px;}</style></div>');
						}
					} else {
						revSliderWrapper.children('.avada-rev-arrows').remove();
					}
				});
			}

		});
	}
});

jQuery(document).ready(function () {

	var wooThumbWidth;

	if (jQuery().flexslider && 1 <= jQuery('.woocommerce .images #carousel').length) {
		wooThumbWidth = 100;

		if (jQuery('body.woocommerce .sidebar').is(':visible')) {
			wooThumbWidth = 100;
		} else {
			wooThumbWidth = 118;
		}

		if ('undefined' !== typeof jQuery('.woocommerce .images #carousel').data('flexslider')) {
			jQuery('.woocommerce .images #carousel').flexslider('destroy');
			jQuery('.woocommerce .images #slider').flexslider('destroy');
		}

		jQuery('.woocommerce .images #carousel').flexslider({
			animation: 'slide',
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: wooThumbWidth,
			itemMargin: 9,
			touch: false,
			useCSS: false,
			asNavFor: '.woocommerce .images #slider',
			smoothHeight: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function (slider) {
				jQuery(slider).removeClass('puur-flexslider-loading');
			}
		});

		jQuery('.woocommerce .images #slider').flexslider({
			animation: 'slide',
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			smoothHeight: true,
			touch: true,
			useCSS: false,
			sync: '.woocommerce .images #carousel',
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			start: function (slider) {
				jQuery(slider).removeClass('puur-flexslider-loading');
			}
		});
	}

	if (2 <= jQuery().flexslider && jQuery('.flexslider-attachments').length) {
		if ('undefined' !== typeof jQuery('.flexslider-attachments').data('flexslider')) {
			jQuery('.flexslider-attachments').flexslider('destroy');
		}

		jQuery('.flexslider-attachments').flexslider({
			slideshow: Boolean(Number(avadaVars.slideshow_autoplay)),
			slideshowSpeed: avadaVars.slideshow_speed,
			video: false,
			smoothHeight: false,
			pauseOnHover: false,
			useCSS: false,
			prevText: '&#xf104;',
			nextText: '&#xf105;',
			controlNav: 'thumbnails',
			start: function (slider) {
				jQuery(slider).find('.puur-slider-loading').remove();

				// Remove Loading
				slider.removeClass('puur-flexslider-loading');
			}
		});
	}
});

jQuery(window).load(function () {

	var eislideshowArgs,
		lastTimelineDate,
		collapseMonthVisible,
		$infiniteScrollContainer;

	if ('Click' === avadaVars.sidenav_behavior) {
		jQuery('.side-nav li a').on('click', function (e) {
			if (jQuery(this).parent('.page_item_has_children').length) {
				if (jQuery(this).parent().find('> .children').length && !jQuery(this).parent().find('> .children').is(':visible')) {
					jQuery(this).parent().find('> .children').stop(true, true).slideDown('slow');
				} else {
					jQuery(this).parent().find('> .children').stop(true, true).slideUp('slow');
				}
			}

			if (jQuery(this).parent('.page_item_has_children.current_page_item').length) {
				return false;
			}
		});
	} else {
		jQuery('.side-nav li').hoverIntent({
			over: function () {
				if (jQuery(this).find('> .children').length) {
					jQuery(this).find('> .children').stop(true, true).slideDown('slow');
				}
			},
			out: function () {
				if (0 === jQuery(this).find('.current_page_item').length && false === jQuery(this).hasClass('current_page_item')) {
					jQuery(this).find('.children').stop(true, true).slideUp('slow');
				}
			},
			timeout: 500
		});
	}

	if (jQuery().eislideshow) {
		eislideshowArgs = {
			autoplay: Boolean(Number(avadaVars.tfes_autoplay))
		};

		if (avadaVars.tfes_animation) {
			eislideshowArgs.animation = avadaVars.tfes_animation;
		}
		if (avadaVars.tfes_interval) {
			eislideshowArgs.slideshow_interval = avadaVars.tfes_interval;
		}
		if (avadaVars.tfes_speed) {
			eislideshowArgs.speed = avadaVars.tfes_speed;
		}
		if (avadaVars.tfes_width) {
			eislideshowArgs.thumbMaxWidth = avadaVars.tfes_width;
		}

		jQuery('#ei-slider').eislideshow(eislideshowArgs);
	}

	// Timeline vars and click events for infinite scroll
	lastTimelineDate = jQuery('.puur-blog-layout-timeline').find('.puur-timeline-date').last().text();
	collapseMonthVisible = true;

	jQuery('.puur-blog-layout-timeline').find('.puur-timeline-date').click(function () {
		jQuery(this).next('.puur-collapse-month').slideToggle();
	});

	jQuery('.puur-timeline-icon').find('.puur-icon-bubbles').click(function () {
		if (collapseMonthVisible) {
			jQuery(this).parent().next('.puur-blog-layout-timeline').find('.puur-collapse-month').slideUp();
			collapseMonthVisible = false;
		} else {
			jQuery(this).parent().next('.puur-blog-layout-timeline').find('.puur-collapse-month').slideDown();
			collapseMonthVisible = true;
		}
	});

	// Setup infinite scroll for each blog instance; main blog page and blog shortcodes
	jQuery('.puur-posts-container-infinite').each(function () {

		// Set the correct container for blog shortcode infinite scroll
		var $blogInfiniteContainer = jQuery(this),
			$originalPosts = jQuery(this).find('.post'),
			$parentWrapperClasses,
			$fusionPostsContainer,
			$currentPage,
			$loadMoreButton;

		if (jQuery(this).find('.puur-blog-layout-timeline').length) {
			$blogInfiniteContainer = jQuery(this).find('.puur-blog-layout-timeline');
		}

		// If more than one blog shortcode is on the page, make sure the infinite scroll selectors are correct
		$parentWrapperClasses = '';
		if ($blogInfiniteContainer.parents('.puur-blog-shortcode').length) {
			$parentWrapperClasses = '.' + $blogInfiniteContainer.parents('.puur-blog-shortcode').attr('class').replace(/\ /g, '.') + ' ';
		}

		// Infite scroll for main blog page and blog shortcode
		jQuery($blogInfiniteContainer).infinitescroll({

			navSelector: $parentWrapperClasses + 'div.pagination',

			// Selector for the paged navigation (it will be hidden)
			nextSelector: $parentWrapperClasses + 'a.pagination-next',

			// Selector for the NEXT link (to page 2)
			itemSelector: $parentWrapperClasses + 'div.pagination .current, ' + $parentWrapperClasses + 'article.post:not( .puur-archive-description ), ' + $parentWrapperClasses + '.puur-collapse-month, ' + $parentWrapperClasses + '.puur-timeline-date',

			// Selector for all items you'll retrieve
			loading: {
				finishedMsg: avadaVars.infinite_finished_msg,
				msg: jQuery('<div class="puur-loading-container puur-clearfix"><div class="puur-loading-spinner"><div class="puur-spinner-1"></div><div class="puur-spinner-2"></div><div class="puur-spinner-3"></div></div><div class="puur-loading-msg">' + avadaVars.infinite_blog_text + '</div>')
			},
			errorCallback: function () {
				if (jQuery($blogInfiniteContainer).hasClass('isotope')) {
					jQuery($blogInfiniteContainer).isotope();
				}
			}
		}, function (posts) {

			var columns,
				gridWidth,
				i;

			// Timeline layout specific actions
			if (jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-timeline')) {

				// Check if the last already displayed moth is the same as the first newly loaded; if so, delete one label
				if (jQuery(posts).first('.puur-timeline-date').text() == lastTimelineDate) {
					jQuery(posts).first('.puur-timeline-date').remove();
				}

				// Set the last timeline date to lat of the currently loaded
				lastTimelineDate = jQuery($blogInfiniteContainer).find('.puur-timeline-date').last().text();

				// Append newly loaded items of the same month to the container that is already there
				jQuery($blogInfiniteContainer).find('.puur-timeline-date').each(function () {
					jQuery(this).next('.puur-collapse-month').append(jQuery(this).nextUntil('.puur-timeline-date', '.puur-post-timeline'));
				});

				// If all month containers are collapsed, also collapse the new ones
				if (!collapseMonthVisible) {
					setTimeout(function () {
						jQuery($blogInfiniteContainer).find('.puur-collapse-month').hide();
					}, 200);
				}

				// Delete empty collapse-month containers
				setTimeout(function () {
					jQuery($blogInfiniteContainer).find('.puur-collapse-month').each(function () {
						if (!jQuery(this).children().length) {
							jQuery(this).remove();
						}
					});
				}, 10);

				// Reset the click event for the collapse-month toggle
				jQuery($blogInfiniteContainer).find('.puur-timeline-date').unbind('click');
				jQuery($blogInfiniteContainer).find('.puur-timeline-date').click(function () {
					jQuery(this).next('.puur-collapse-month').slideToggle();
				});
			}

			// Grid layout specific actions
			if (jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-grid') &&
				jQuery().isotope
			) {
				jQuery(posts).hide();

				// Get the amount of columns
				columns = 2;
				for (i = 1; i < 7; i++) {
					if (jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-grid-' + i)) {
						columns = i;
					}
				}

				// Calculate grid with
				gridWidth = Math.floor(100 / columns * 100) / 100 + '%';
				jQuery($blogInfiniteContainer).find('.post').css('width', gridWidth);

				// Add and fade in new posts when all images are loaded
				imagesLoaded(posts, function () {
					jQuery(posts).fadeIn();

					// Relayout isotope
					if (jQuery($blogInfiniteContainer).hasClass('isotope')) {
						jQuery($blogInfiniteContainer).isotope('appended', jQuery(posts));
						jQuery($blogInfiniteContainer).isotope();
					}

					// Refresh the scrollspy script for one page layouts
					jQuery('[data-spy="scroll"]').each(function () {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				});
			}

			// Initialize flexslider for post slideshows
			jQuery($blogInfiniteContainer).find('.flexslider').flexslider({
				slideshow: Boolean(Number(avadaVars.slideshow_autoplay)),
				slideshowSpeed: avadaVars.slideshow_speed,
				video: true,
				pauseOnHover: false,
				useCSS: false,
				prevText: '&#xf104;',
				nextText: '&#xf105;',
				start: function (slider) {

					// Remove Loading
					slider.removeClass('puur-flexslider-loading');

					if ('undefined' !== typeof (slider.slides) && 0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
						if (Number(avadaVars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
						} else {
							jQuery(slider).find('.flex-control-nav').hide();
						}
						if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
							window.YTReady(function () {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
					} else {
						if (Number(avadaVars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
						} else {
							jQuery(slider).find('.flex-control-nav').show();
						}
					}

					// Reinitialize waypoints
					jQuery.waypoints('viewportHeight');
					jQuery.waypoints('refresh');
				},
				before: function (slider) {
					if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
						if (Number(avadaVars.status_vimeo)) {
							$f(slider.slides.eq(slider.currentSlide).find('iframe')[0]).api('pause');
						}

						if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
							window.YTReady(function () {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}

						/* ------------------  YOUTUBE FOR AUTOSLIDER ------------------ */
						/* WIP
						playVideoAndPauseOthers( slider );
						*/
					}
				},
				after: function (slider) {
					if (0 !== slider.slides.eq(slider.currentSlide).find('iframe').length) {
						if (Number(avadaVars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '-20px');
						} else {
							jQuery(slider).find('.flex-control-nav').hide();
						}

						if (Number(avadaVars.status_yt) && true === window.yt_vid_exists) {
							window.YTReady(function () {
								new YT.Player(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), {
									events: {
										'onStateChange': onPlayerStateChange(slider.slides.eq(slider.currentSlide).find('iframe').attr('id'), slider)
									}
								});
							});
						}
					} else {
						if (Number(avadaVars.pagination_video_slide)) {
							jQuery(slider).find('.flex-control-nav').css('bottom', '0px');
						} else {
							jQuery(slider).find('.flex-control-nav').show();
						}
					}
					jQuery('[data-spy="scroll"]').each(function () {
						var $spy = jQuery(this).scrollspy('refresh');
					});
				}
			});

			// Trigger fitvids
			jQuery(posts).each(function () {
				jQuery(this).find('.full-video, .video-shortcode, .wooslider .slide-content').fitVids();
			});

			// Hide the load more button, if the currently loaded page is already the last page
			$fusionPostsContainer = $blogInfiniteContainer;
			if (jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-timeline')) {
				$fusionPostsContainer = jQuery($blogInfiniteContainer).parents('.puur-posts-container-infinite');
			}

			$currentPage = $fusionPostsContainer.find('.current').html();
			$fusionPostsContainer.find('.current').remove();

			if ($fusionPostsContainer.data('pages') == $currentPage) {
				$fusionPostsContainer.parent().find('.puur-loading-container').hide();
				$fusionPostsContainer.parent().find('.puur-load-more-button').hide();
			}

			// Activate lightbox for the newly added posts
			if ('individual' === avadaVars.lightbox_behavior || !$originalPosts.find('.puur-post-slideshow').length) {
				window.avadaLightBox.activate_lightbox(jQuery(posts));

				$originalPosts = $blogInfiniteContainer.find('.post');
			}

			// Refresh the lightbox, needed in any case
			window.avadaLightBox.refresh_lightbox();
			jQuery(window).trigger('resize');

			// Trigger resize so that any parallax sections below get recalculated.
			setTimeout(function () {
				jQuery(window).trigger('resize');
			}, 500);

		});

		// Setup infinite scroll manual loading
		if ((jQuery($blogInfiniteContainer).hasClass('puur-blog-archive') && 'load_more_button' === avadaVars.blog_pagination_type) ||
			jQuery($blogInfiniteContainer).hasClass('puur-posts-container-load-more') ||
			(jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-timeline') && jQuery($blogInfiniteContainer).parent().hasClass('puur-posts-container-load-more'))
		) {
			jQuery($blogInfiniteContainer).infinitescroll('unbind');

			// Load more posts button click
			if (jQuery($blogInfiniteContainer).hasClass('puur-blog-archive')) {
				$loadMoreButton = jQuery($blogInfiniteContainer).parent().find('.puur-load-more-button');
			} else {
				$loadMoreButton = jQuery($blogInfiniteContainer).parents('.puur-blog-archive').find('.puur-load-more-button');
			}

			$loadMoreButton.on('click', function (e) {
				e.preventDefault();

				// Use the retrieve method to get the next set of posts
				jQuery($blogInfiniteContainer).infinitescroll('retrieve');

				// Trigger isotope for correct positioning
				if (jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-grid')) {
					jQuery($blogInfiniteContainer).isotope();
				}
			});
		}

		// Hide the load more button, if there is only one page
		$fusionPostsContainer = $blogInfiniteContainer;
		if (jQuery($blogInfiniteContainer).hasClass('puur-blog-layout-timeline') && jQuery($blogInfiniteContainer).parents('.puur-blog-layout-timeline-wrapper').length) {
			$fusionPostsContainer = jQuery($blogInfiniteContainer).parents('.puur-posts-container-infinite');
		}

		if (1 == $fusionPostsContainer.data('pages')) {
			$fusionPostsContainer.parent().find('.puur-loading-container').hide();
			$fusionPostsContainer.parent().find('.puur-load-more-button').hide();
		}
	});

	/*
	 Portfolio infinite scroll
	 Setup infinite scroll for each portfolio instance.
	 */
	jQuery('.puur-portfolio-paging-infinite, .puur-portfolio-paging-load-more-button').each(function () {
		var $portfolioInfiniteScrollContainer = jQuery(this),
			$portfolioInfiniteScrollContainerClasses = '.' + $portfolioInfiniteScrollContainer.attr('class').replace(/\ /g, '.') + ' ';

		// Initialize the infinite scroll object
		$portfolioInfiniteScrollContainer.children('.puur-portfolio-wrapper').infinitescroll({
			navSelector: $portfolioInfiniteScrollContainerClasses + '.pagination',

			// Selector for the paged navigation (it will be hidden)
			nextSelector: $portfolioInfiniteScrollContainerClasses + '.pagination-next',

			// Selector for the NEXT link (to page 2)
			itemSelector: $portfolioInfiniteScrollContainerClasses + 'div.pagination .current, ' + $portfolioInfiniteScrollContainerClasses + ' .puur-portfolio-post',

			// Selector for all items you'll retrieve
			loading: {
				finishedMsg: avadaVars.infinite_finished_msg,
				msg: jQuery('<div class="puur-loading-container puur-clearfix"><div class="puur-loading-spinner"><div class="puur-spinner-1"></div><div class="puur-spinner-2"></div><div class="puur-spinner-3"></div></div><div class="puur-loading-msg">' + avadaVars.infinite_blog_text + '</div>')
			},
			errorCallback: function () {
				$portfolioInfiniteScrollContainer.find('.puur-portfolio-wrapper').isotope();
			}

		}, function ($posts) {

			var $filters;

			if (jQuery().isotope) {

				$filters = $portfolioInfiniteScrollContainer.find('.puur-filters').find('.puur-filter'),
					$posts = jQuery($posts);

				// Hide posts while loading
				$posts.hide();

				// Make sure images are loaded before the posts get shown
				imagesLoaded($posts, function () {

					var $placeholderImages,
						$videos,
						$filterActiveElement,
						$filterActive,
						$currentPage;

					// Fade in placeholder images
					$placeholderImages = jQuery($posts).find('.puur-placeholder-image');
					$placeholderImages.parents('.puur-portfolio-content-wrapper, .puur-image-wrapper').animate({
						opacity: 1
					});

					// Fade in videos
					$videos = jQuery($posts).find('.puur-video');
					$videos.each(function () {
						jQuery(this).animate({
							opacity: 1
						});
						jQuery(this).parents('.puur-portfolio-content-wrapper').animate({
							opacity: 1
						});
					});

					$videos.fitVids();

					// Portfolio Images Loaded Check
					window.$portfolio_images_index = 0;
					jQuery($posts).imagesLoaded().progress(function ($instance, $image) {
						if (jQuery($image.img).parents('.puur-portfolio-content-wrapper').length >= 1) {
							jQuery($image.img, $placeholderImages).parents('.puur-portfolio-content-wrapper').delay(100 * window.$portfolio_images_index).animate({
								opacity: 1
							});
						} else {
							jQuery($image.img, $placeholderImages).parents('.puur-image-wrapper').delay(100 * window.$portfolio_images_index).animate({
								opacity: 1
							});
						}

						window.$portfolio_images_index++;
					});

					if ($filters) {

						// Loop through all filters
						$filters.each(function () {
							var $filter = jQuery(this),
								$filterName = $filter.children('a').data('filter'),
								$filterWidth,
								$filterMarginRight,
								$post;

							if ($posts) {

								// Loop through the newly loaded posts
								$posts.each(function () {
									$post = jQuery(this);

									// Check if one of the new posts has the class of a still hidden filter
									if ($post.hasClass($filterName.substr(1))) {
										if ($filter.hasClass('puur-hidden')) {

											if (!Modernizr.mq('only screen and (max-width: ' + avadaVars.content_break_point + 'px)')) {

												// Animate the filter to make it visible
												$filterWidth = $filter.css('width'),
													$filterMarginRight = $filter.css('margin-right');

												$filter.css('width', 0);
												$filter.css('margin-right', 0);
												$filter.removeClass('puur-hidden');

												$filter.animate({
													'width': $filterWidth,
													'margin-right': $filterMarginRight
												}, 400, function () {

													// Finally remove animation style values
													$filter.removeAttr('style');
												});
											} else {
												$filter.fadeIn(400, function () {
													$filter.removeClass('puur-hidden');
												});
											}
										}
									}
								});
							}
						});
					}

					// Check if filters are displayed
					if ($portfolioInfiniteScrollContainer.find('.puur-filters').length) {

						// Display new posts based on filter selection
						$filterActiveElement = $portfolioInfiniteScrollContainer.find('.puur-filters').find('.puur-filter.puur-active a'),
							$filterActive = $filterActiveElement.attr('data-filter').substr(1);

						// If active filter is not the "All" filter
						if ($filterActive.length) {

							// Show the new posts matching the active filter
							$posts.each(function () {
								var $post = jQuery(this),
									$postGalleryName = $post.find('.puur-rollover-gallery').data('rel');

								if ($post.hasClass($filterActive)) {
									$post.fadeIn();

									// Set the lightbox gallery
									if ($postGalleryName) {
										$post.find('.puur-rollover-gallery').attr('data-rel', $postGalleryName.replace('gallery', $filterActive));
									}
								}
							});

							// Check if we need to create a new gallery
							if ('created' !== $filterActiveElement.data('lightbox')) {

								// Create new lightbox instance for the new gallery
								window.$ilInstances.push(jQuery('[data-rel^="iLightbox[' + $filterActive + ']"]').iLightBox(window.avadaLightBox.prepare_options('iLightbox[' + $filterActive + ']')));

								// Set active filter to lightbox created
								$filterActiveElement.data('lightbox', 'created');
							}

							// Refresh the lightbox, needed in any case
							window.avadaLightBox.refresh_lightbox();

						} else {
							$posts.fadeIn();
						}
					} else {
						$posts.fadeIn();
					}

					// Trigger isotope for correct positioning
					$portfolioInfiniteScrollContainer.find('.puur-portfolio-wrapper').isotope('appended', $posts);

					// Trigger fitvids
					$posts.each(function () {
						jQuery(this).find('.full-video, .video-shortcode, .wooslider .slide-content').fitVids();
					});

					// Refresh the scrollspy script for one page layouts
					jQuery('[data-spy="scroll"]').each(function () {
						var $spy = jQuery(this).scrollspy('refresh');
					});

					// Hide the load more button, if the currently loaded page is already the last page
					$currentPage = $portfolioInfiniteScrollContainer.find('.current').html();
					$portfolioInfiniteScrollContainer.find('.current').remove();

					if ($portfolioInfiniteScrollContainer.data('pages') == $currentPage) {
						$portfolioInfiniteScrollContainer.find('.puur-loading-container').hide();
						$portfolioInfiniteScrollContainer.find('.puur-load-more-button').hide();
					}
				});
			}
		});

		// Hide the load more button, if there is only one page
		if ('1' == $portfolioInfiniteScrollContainer.data('pages')) {
			$portfolioInfiniteScrollContainer.find('.puur-loading-container').hide();
			$portfolioInfiniteScrollContainer.find('.puur-load-more-button').hide();
		}

		// Setup infinite scroll manual loading
		if ($portfolioInfiniteScrollContainer.hasClass('puur-portfolio-paging-load-more-button')) {
			$portfolioInfiniteScrollContainer.find('.puur-portfolio-wrapper').infinitescroll('unbind');

			$portfolioInfiniteScrollContainer.find('.puur-load-more-button').on('click', function (e) {
				e.preventDefault();

				// Use the retrieve method to get the next set of posts
				$portfolioInfiniteScrollContainer.find('.puur-portfolio-wrapper').infinitescroll('retrieve');

				// Trigger isotope for correct positioning
				$portfolioInfiniteScrollContainer.find('.puur-portfolio-wrapper').isotope();
			});
		}
	});
});

// Prevent anchor jumping on page load
if (location.hash && '#_' === location.hash.substring(0, 2)) {

	// Add the anchor link to the hidden a tag
	jQuery('.puur-page-load-link').attr('href', '#' + location.hash.substring(2));

	// Scroll the page
	jQuery(window).load(function () {
		if (jQuery('.puur-blog-shortcode').length) {
			setTimeout(function () {
				jQuery('.puur-page-load-link').puur_scroll_to_anchor_target();
			}, 300);
		} else {
			jQuery('.puur-page-load-link').puur_scroll_to_anchor_target();
		}
	});
}


/* Header scripts */
jQuery( document ).ready( function() {

	'use strict';

	var iframeLoaded;

	// Position dropdown menu correctly
	jQuery.fn.puur_position_menu_dropdown = function( variables ) {

			if ( ( 'Top' === avadaVars.header_position && ! jQuery( 'body.rtl' ).length ) || 'Left' === avadaVars.header_position  ) {
				return jQuery( this ).children( '.sub-menu' ).each( function() {

					var submenu,
					    submenuPosition,
					    submenuLeft,
					    submenuTop,
					    submenuHeight,
					    submenuWidth,
					    submenuBottomEdge,
					    submenuRightEdge,
					    browserBottomEdge,
					    browserRightEdge,
					    submenuNewTopPos,
					    adminbarHeight,
					    sideHeaderTop;

					// Reset attributes
					jQuery( this ).removeAttr( 'style' );
					jQuery( this ).show();
					jQuery( this ).removeData( 'shifted' );

					submenu = jQuery( this );

					if ( submenu.length ) {
						submenuPosition   = submenu.offset();
						submenuLeft       = submenuPosition.left;
						submenuTop        = submenuPosition.top;
						submenuHeight     = submenu.height();
						submenuWidth      = submenu.outerWidth();
						submenuBottomEdge = submenuTop + submenuHeight;
						submenuRightEdge  = submenuLeft + submenuWidth;
						browserBottomEdge = jQuery( window ).height();
						browserRightEdge  = jQuery( window ).width();

						if (	jQuery( '#wpadminbar' ).length ) {
							adminbarHeight = jQuery( '#wpadminbar' ).height();
						} else {
							adminbarHeight = 0;
						}

						if ( jQuery( '#side-header' ).length ) {
							sideHeaderTop = jQuery( '#side-header' ).offset().top - adminbarHeight;
						}

						// Current submenu goes beyond browser's right edge
						if ( submenuRightEdge > browserRightEdge ) {

							// If there are 2 or more submenu parents position this submenu below last one
							if ( submenu.parent().parent( '.sub-menu' ).parent().parent( '.sub-menu' ).length ) {
								submenu.css({
									'left': '0',
									'top': submenu.parent().parent( '.sub-menu' ).height()
								});

							// First or second level submenu
							} else {

								// First level submenu
								if ( ! submenu.parent().parent( '.sub-menu' ).length ) {
									submenu.css( 'left', ( -1 ) * submenuWidth + submenu.parent().width() );

								// Second level submenu
								} else {
									submenu.css({
										'left': ( -1 ) * submenuWidth
									});
								}
							}

							submenu.data( 'shifted', 1 );

						// Parent submenu had to be shifted
						} else if ( submenu.parent().parent( '.sub-menu' ).length ) {
							if ( submenu.parent().parent( '.sub-menu' ).data( 'shifted' ) ) {
								submenu.css( 'left', ( -1 ) * submenuWidth );
								submenu.data( 'shifted', 1 );
							}
						}

						// Calculate dropdown vertical position on side header.
						if ( 'Top' !== avadaVars.header_position && submenuBottomEdge > sideHeaderTop + browserBottomEdge && jQuery( window ).height() >= jQuery( '.side-header-wrapper' ).height() ) {
							if ( submenuHeight < browserBottomEdge  ) {
								submenuNewTopPos = ( -1 ) * ( submenuBottomEdge - sideHeaderTop - browserBottomEdge + 20 );
							} else {
								submenuNewTopPos = ( -1 ) * ( submenuTop - adminbarHeight );
							}
							submenu.css( 'top', submenuNewTopPos );
						}
					}
				});
			} else {
				return jQuery( this ).children( '.sub-menu' ).each( function() {

					var submenu,
					    submenuPosition,
					    submenuLeftEdge,
					    submenuTop,
					    submenuHeight,
					    submenuWidth,
					    submenuBottomEdge,
					    browserBottomEdge,
					    adminbarHeight,
					    sideHeaderTop,
					    submenuNewTopPos;

					// Reset attributes
					jQuery( this ).removeAttr( 'style' );
					jQuery( this ).removeData( 'shifted' );

					submenu = jQuery( this );

					if ( submenu.length ) {
						submenuPosition   = submenu.offset();
						submenuLeftEdge   = submenuPosition.left;
						submenuTop        = submenuPosition.top;
						submenuHeight     = submenu.height();
						submenuWidth      = submenu.outerWidth();
						submenuBottomEdge = submenuTop + submenuHeight;
						browserBottomEdge = jQuery( window ).height();

						if ( jQuery( '#wpadminbar' ).length ) {
							adminbarHeight = jQuery( '#wpadminbar' ).height();
						} else {
							adminbarHeight = 0;
						}

						if ( jQuery( '#side-header' ).length ) {
							sideHeaderTop = jQuery( '#side-header' ).offset().top - adminbarHeight;
						}

						// Current submenu goes beyond browser's left edge
						if ( 0 < submenuLeftEdge ) {

							//If there are 2 or more submenu parents position this submenu below last one
							if ( submenu.parent().parent( '.sub-menu' ).parent().parent( '.sub-menu' ).length ) {
								if ( 'Right' === avadaVars.header_position ) {
									submenu.css({
										'left': '0',
										'top': submenu.parent().parent( '.sub-menu' ).height()
									});
								} else {
									submenu.css({
										'right': '0',
										'top': submenu.parent().parent( '.sub-menu' ).height()
									});
								}

							// First or second level submenu
							} else {

								// First level submenu
								if ( ! submenu.parent().parent( '.sub-menu' ).length ) {
									submenu.css( 'right', ( -1 ) * submenuWidth + submenu.parent().width() );

								// Second level submenu
								} else {
									submenu.css({
										'right': ( -1 ) * submenuWidth
									});
								}
							}

							submenu.data( 'shifted', 1 );

						// Parent submenu had to be shifted
						} else if ( submenu.parent().parent( '.sub-menu' ).length ) {
							if ( submenu.parent().parent( '.sub-menu' ).data( 'shifted' ) ) {
								submenu.css( 'right', ( -1 ) * submenuWidth );
							}
						}

						// Calculate dropdown vertical position on side header
						if ( 'Top' !== avadaVars.header_position && submenuBottomEdge > sideHeaderTop + browserBottomEdge && jQuery( window ).height() >= jQuery( '.side-header-wrapper' ).height() ) {
							if ( submenuHeight < browserBottomEdge  ) {
								submenuNewTopPos = ( -1 ) * ( submenuBottomEdge - sideHeaderTop - browserBottomEdge + 20 );
							} else {
								submenuNewTopPos = ( -1 ) * ( submenuTop - adminbarHeight );
							}
							submenu.css( 'top', submenuNewTopPos );
						}
					}
				});
			}
	};

	// Recursive function for positioning menu items correctly on load
	jQuery.fn.walk_through_menu_items = function() {
		jQuery( this ).puur_position_menu_dropdown();

		if ( jQuery( this ).find( '.sub-menu' ).length ) {
			jQuery( this ).find( '.sub-menu li' ).walk_through_menu_items();
		} else {
			return;
		}
	};

	// Position the cart dropdown vertically on side-header layouts
	jQuery.fn.position_cart_dropdown = function() {
		if ( 'Top' !== avadaVars.header_position ) {
			jQuery( this ).each( function() {

				var cartDropdown,
				    cartDropdownTop,
				    cartDropdownHeight,
				    cartDropdownBottomEdge,
				    adminbarHeight,
				    sideHeaderTop,
				    browserBottomEdge,
				    cartDropdownNewTopPos;

				jQuery( this ).css( 'top', '' );

				cartDropdown           = jQuery( this ),
				cartDropdownTop        = cartDropdown.offset().top,
				cartDropdownHeight     = cartDropdown.height(),
				cartDropdownBottomEdge = cartDropdownTop + cartDropdownHeight,
				adminbarHeight         = ( jQuery( '#wpadminbar' ).length ) ? jQuery( '#wpadminbar' ).height() : 0,
				sideHeaderTop          = jQuery( '#side-header' ).offset().top - adminbarHeight,
				browserBottomEdge      = jQuery( window ).height();

				if ( cartDropdownBottomEdge > sideHeaderTop + browserBottomEdge && jQuery( window ).height() >= jQuery( '.side-header-wrapper' ).height() ) {
					if ( cartDropdownHeight < browserBottomEdge ) {
						cartDropdownNewTopPos = ( -1 ) * ( cartDropdownBottomEdge - sideHeaderTop - browserBottomEdge + 20 );
					} else {
						cartDropdownNewTopPos = ( -1 ) * ( cartDropdownTop - adminbarHeight );
					}

					cartDropdown.css( 'top', cartDropdownNewTopPos );
				}
			});
		}
	};

	// Position the search form vertically on side-header layouts
	jQuery.fn.position_menu_search_form = function() {
		if ( 'Top' !== avadaVars.header_position ) {
			jQuery( this ).each( function() {

				var searchForm,
				    searchFormTop,
				    searchFormHeight,
				    searchFormBottomEdge,
				    adminbarHeight,
				    sideHeaderTop,
				    browserBottomEdge,
				    searchFormNewTopPos;

				jQuery( this ).css( 'top', '' );

				searchForm = jQuery( this ),
				searchFormTop        = searchForm.offset().top,
				searchFormHeight     = searchForm.outerHeight(),
				searchFormBottomEdge = searchFormTop + searchFormHeight,
				adminbarHeight       = ( jQuery( '#wpadminbar' ).length ) ? jQuery( '#wpadminbar' ).height() : 0,
				sideHeaderTop        = jQuery( '#side-header' ).offset().top - adminbarHeight,
				browserBottomEdge    = jQuery( window ).height();

				if ( searchFormBottomEdge > sideHeaderTop + browserBottomEdge && jQuery( window ).height() >= jQuery( '.side-header-wrapper' ).height() ) {
					searchFormNewTopPos = ( -1 ) * ( searchFormBottomEdge - sideHeaderTop - browserBottomEdge + 20 );

					searchForm.css( 'top', searchFormNewTopPos );
				}
			});
		}
	};

	// Position mega menu correctly
	jQuery.fn.puur_position_megamenu = function( variables ) {

		var referenceElem,
		    mainNavContainer,
		    mainNavContainerPosition,
		    mainNavContainerWidth,
		    mainNavContainerLeftEdge,
		    mainNavContainerRightEdge;

		// Side header left handling
		if ( jQuery( '.side-header-left' ).length ) {
			return this.each( function() {
				jQuery( this ).children( 'li' ).each( function() {
					var liItem = jQuery( this ),
					    megamenuWrapper = liItem.find( '.puur-megamenu-wrapper' ),
					    megamenuWrapperLeft,
					    megamenuWrapperTop,
					    megamenuWrapperHeight,
					    megamenuBottomEdge,
					    adminbarHeight,
					    sideHeaderTop,
					    browserBottomEdge,
					    megamenuWrapperNewTopPos;

					if ( megamenuWrapper.length ) {
						megamenuWrapper.removeAttr( 'style' );

						megamenuWrapperLeft   = jQuery( '#side-header' ).outerWidth() - 1;
						megamenuWrapperTop    = megamenuWrapper.offset().top;
						megamenuWrapperHeight = megamenuWrapper.height();
						megamenuBottomEdge    = megamenuWrapperTop + megamenuWrapperHeight;
						adminbarHeight        = ( jQuery( '#wpadminbar' ).length ) ? jQuery( '#wpadminbar' ).height() : 0;
						sideHeaderTop         = jQuery( '#side-header' ).offset().top - adminbarHeight;
						browserBottomEdge     = jQuery( window ).height();
						megamenuWrapperNewTopPos;

						if ( ! jQuery( 'body.rtl' ).length ) {
							megamenuWrapper.css( 'left', megamenuWrapperLeft );
						} else {
							megamenuWrapper.css({ 'left': megamenuWrapperLeft, 'right': 'auto' });
						}

						if ( megamenuBottomEdge > sideHeaderTop + browserBottomEdge && jQuery( window ).height() >= jQuery( '.side-header-wrapper' ).height() ) {
							if ( megamenuWrapperHeight < browserBottomEdge ) {
								megamenuWrapperNewTopPos = ( -1 ) * ( megamenuBottomEdge - sideHeaderTop - browserBottomEdge + 20 );
							} else {
								megamenuWrapperNewTopPos = ( -1 ) * ( megamenuWrapperTop - adminbarHeight );
							}

							megamenuWrapper.css( 'top', megamenuWrapperNewTopPos );
						}
					}
				});
			});
		}

		// Side header right handling
		if ( jQuery( '.side-header-right' ).length ) {
			return this.each( function() {
				jQuery( this ).children( 'li' ).each( function() {
					var liItem = jQuery( this ),
					    megamenuWrapper = liItem.find( '.puur-megamenu-wrapper' ),
					    megamenuWrapperLeft,
					    megamenuWrapperTop,
					    megamenuWrapperHeight,
					    megamenuBottomEdge,
					    adminbarHeight,
					    sideHeaderTop,
					    browserBottomEdge,
					    megamenuWrapperNewTopPos;

					if ( megamenuWrapper.length ) {
						megamenuWrapper.removeAttr( 'style' );

						megamenuWrapperLeft   = ( -1 ) * megamenuWrapper.outerWidth();
						megamenuWrapperTop    = megamenuWrapper.offset().top;
						megamenuWrapperHeight = megamenuWrapper.height();
						megamenuBottomEdge    = megamenuWrapperTop + megamenuWrapperHeight;
						adminbarHeight        = ( jQuery( '#wpadminbar' ).length ) ? jQuery( '#wpadminbar' ).height() : 0;
						sideHeaderTop         = jQuery( '#side-header' ).offset().top - adminbarHeight;
						browserBottomEdge     = jQuery( window ).height();

						if ( ! jQuery( 'body.rtl' ).length ) {
							megamenuWrapper.css( 'left', megamenuWrapperLeft );
						} else {
							megamenuWrapper.css({ 'left': megamenuWrapperLeft, 'right': 'auto' });
						}

						if ( megamenuBottomEdge > sideHeaderTop + browserBottomEdge && jQuery( window ).height() >= jQuery( '.side-header-wrapper' ).height() ) {
							if ( megamenuWrapperHeight < browserBottomEdge ) {
								megamenuWrapperNewTopPos = ( -1 ) * ( megamenuBottomEdge - sideHeaderTop - browserBottomEdge + 20 );
							} else {
								megamenuWrapperNewTopPos = ( -1 ) * ( megamenuWrapperTop - adminbarHeight );
							}

							megamenuWrapper.css( 'top', megamenuWrapperNewTopPos );
						}
					}
				});
			});
		}

		// Top header handling
		referenceElem = '';
		if ( jQuery( '.puur-header-v4' ).length ) {
			referenceElem = jQuery( this ).parent( '.puur-main-menu' ).parent();
		} else {
			referenceElem = jQuery( this ).parent( '.puur-main-menu' );
		}

		if ( jQuery( this ).parent( '.puur-main-menu' ).length ) {

			mainNavContainer          = referenceElem,
			mainNavContainerPosition  = mainNavContainer.offset(),
			mainNavContainerWidth     = mainNavContainer.width(),
			mainNavContainerLeftEdge  = mainNavContainerPosition.left,
			mainNavContainerRightEdge = mainNavContainerLeftEdge + mainNavContainerWidth;

			if ( ! jQuery( 'body.rtl' ).length ) {
				return this.each( function() {

					jQuery( this ).children( 'li' ).each( function() {
						var liItem                  = jQuery( this ),
						    liItemPosition          = liItem.offset(),
						    megamenuWrapper         = liItem.find( '.puur-megamenu-wrapper' ),
						    megamenuWrapperWidth    = megamenuWrapper.outerWidth(),
						    megamenuWrapperPosition = 0,
						    referenceAvadaRow       = 0;

						// Check if there is a megamenu
						if ( megamenuWrapper.length ) {
							megamenuWrapper.removeAttr( 'style' );

							// Set megamenu max width

							if ( jQuery( '.puur-secondary-main-menu' ).length ) {
								referenceAvadaRow = jQuery( '.puur-header-wrapper .puur-secondary-main-menu .puur-row' );
							} else {
								referenceAvadaRow = jQuery( '.puur-header-wrapper .puur-row' );
							}

							if ( megamenuWrapper.hasClass( 'col-span-12' ) && ( referenceAvadaRow.width() < megamenuWrapper.data( 'maxwidth' ) ) ) {
								megamenuWrapper.css( 'width', referenceAvadaRow.width() );
							} else {
								megamenuWrapper.removeAttr( 'style' );
							}

							// Reset the megmenu width after resizing the menu
							megamenuWrapperWidth = megamenuWrapper.outerWidth();

							if ( liItemPosition.left + megamenuWrapperWidth > mainNavContainerRightEdge ) {
								megamenuWrapperPosition = -1 * ( liItemPosition.left - ( mainNavContainerRightEdge - megamenuWrapperWidth ) );

								if ( 'right' === avadaVars.logo_alignment.toLowerCase() ) {
									if ( liItemPosition.left + megamenuWrapperPosition < mainNavContainerLeftEdge ) {
										megamenuWrapperPosition = -1 * ( liItemPosition.left - mainNavContainerLeftEdge );
									}
								}

								megamenuWrapper.css( 'left', megamenuWrapperPosition );
							}
						}
					});
				});

			} else {
				return this.each( function() {
					jQuery( this ).children( 'li' ).each( function() {
						var liItem                  = jQuery( this ),
						    liItemPosition          = liItem.offset(),
						    liItemRightEdge         = liItemPosition.left + liItem.outerWidth(),
						    megamenuWrapper         = liItem.find( '.puur-megamenu-wrapper' ),
						    megamenuWrapperWidth    = megamenuWrapper.outerWidth(),
						    megamenuWrapperPosition = 0,
						    referenceAvadaRow;

						// Check if there is a megamenu
						if ( megamenuWrapper.length ) {
							megamenuWrapper.removeAttr( 'style' );

							if ( jQuery( '.puur-secondary-main-menu' ).length ) {
								referenceAvadaRow = jQuery( '.puur-header-wrapper .puur-secondary-main-menu .puur-row' );
							} else {
								referenceAvadaRow = jQuery( '.puur-header-wrapper .puur-row' );
							}

							if ( megamenuWrapper.hasClass( 'col-span-12' ) && ( referenceAvadaRow.width() < megamenuWrapper.data( 'maxwidth' ) ) ) {
								megamenuWrapper.css( 'width', referenceAvadaRow.width() );
							} else {
								megamenuWrapper.removeAttr( 'style' );
							}

							if ( liItemRightEdge - megamenuWrapperWidth < mainNavContainerLeftEdge ) {

								megamenuWrapperPosition = -1 * ( megamenuWrapperWidth - ( liItemRightEdge - mainNavContainerLeftEdge ) );

								if ( 'left' === avadaVars.logo_alignment.toLowerCase() || ( 'center' === avadaVars.logo_alignment.toLowerCase() && ! jQuery( '.header-v5' ).length ) || jQuery( this ).parents( '.sticky-header' ).length ) {
									if ( liItemRightEdge - megamenuWrapperPosition > mainNavContainerRightEdge ) {
										megamenuWrapperPosition = -1 * ( mainNavContainerRightEdge - liItemRightEdge );
									}
								}

								megamenuWrapper.css( 'right', megamenuWrapperPosition );
							}
						}
					});
				});
			}
		}
	};

	jQuery.fn.calc_megamenu_responsive_column_widths = function( variables ) {
		jQuery( this ).find( '.puur-megamenu-menu' ).each( function() {
			var megamenuHolder          = jQuery( this ).find( '.puur-megamenu-holder' ),
			    megamenuHolderFullWidth = megamenuHolder.data( 'width' ),
			    referenceFusionRow      = ( jQuery( '.puur-secondary-main-menu' ).length ) ? jQuery( '.puur-header-wrapper .puur-secondary-main-menu .puur-row' ) : jQuery( '.puur-header-wrapper .puur-row' ),
			    availableSpace          = referenceFusionRow.width(),
			    mainPaddingLeft;

			if ( 'Top' !== avadaVars.header_position ) {
				mainPaddingLeft = jQuery( '#main' ).css( 'padding-left' ).replace( 'px', '' );
				availableSpace = jQuery( window ).width() - mainPaddingLeft - jQuery( '#side-header' ).outerWidth();
			}

			if ( availableSpace < megamenuHolderFullWidth ) {
				megamenuHolder.css( 'width', availableSpace );

				if ( ! megamenuHolder.parents( '.puur-megamenu-wrapper' ).hasClass( 'puur-megamenu-fullwidth' ) ) {
					megamenuHolder.find( '.puur-megamenu-submenu' ).each( function() {
						var submenu      = jQuery( this ),
						    submenuWidth = submenu.data( 'width' ) * availableSpace / megamenuHolderFullWidth;

						submenu.css( 'width', submenuWidth );
					});
				}
			} else {
				megamenuHolder.css( 'width', megamenuHolderFullWidth );

				if ( ! megamenuHolder.parents( '.puur-megamenu-wrapper' ).hasClass( 'puur-megamenu-fullwidth' ) ) {
					megamenuHolder.find( '.puur-megamenu-submenu' ).each( function() {
						jQuery( this ).css( 'width', jQuery( this ).data( 'width' ) );
					});
				}
			}
		});
	};

	jQuery.fn.position_last_top_menu_item = function( variables ) {

		var lastItem,
		    lastItemLeftPos,
		    lastItemWidth,
		    lastItemChild,
		    parentContainer,
		    parentContainerLeftPos,
		    parentContainerWidth;

		if ( jQuery( this ).children( 'ul' ).length || jQuery( this ).children( 'div' ).length ) {
			lastItem               = jQuery( this );
			lastItemLeftPos        = lastItem.position().left;
			lastItemWidth          = lastItem.outerWidth();
			parentContainer        = jQuery( '.puur-secondary-header .puur-row' );
			parentContainerLeftPos = parentContainer.position().left;
			parentContainerWidth   = parentContainer.outerWidth();

			if ( lastItem.children( 'ul' ).length ) {
				lastItemChild =  lastItem.children( 'ul' );
			} else if ( lastItem.children( 'div' ).length ) {
				lastItemChild =  lastItem.children( 'div' );
			}

			if ( ! jQuery( 'body.rtl' ).length ) {
				if ( lastItemLeftPos + lastItemChild.outerWidth() > parentContainerLeftPos + parentContainerWidth ) {
					lastItemChild.css( 'right', '-1px' ).css( 'left', 'auto' );

					lastItemChild.find( '.sub-menu' ).each( function() {
						jQuery( this ).css( 'right', '100px' ).css( 'left', 'auto' );
					});
				}
			} else {
				if ( lastItemChild.position().left < lastItemLeftPos ) {
					lastItemChild.css( 'left', '-1px' ).css( 'right', 'auto' );

					lastItemChild.find( '.sub-menu' ).each( function() {
						jQuery( this ).css( 'left', '100px' ).css( 'right', 'auto' );
					});
				}
			}
		}
	};

	// IE8 fixes
	jQuery( '.puur-main-menu > ul > li:last-child' ).addClass( 'puur-last-menu-item' );
	if ( cssua.ua.ie && '8' == cssua.ua.ie.substr( 0, 1 ) ) {
		jQuery( '.puur-header-shadow' ).removeClass( 'puur-header-shadow' );
	}

	// Calculate main menu dropdown submenu position
	if ( jQuery.fn.puur_position_menu_dropdown ) {
		jQuery( '.puur-dropdown-menu, .puur-dropdown-menu li' ).mouseenter( function() {
			jQuery( this ).puur_position_menu_dropdown();
		});

		jQuery( '.puur-dropdown-menu > ul > li' ).each( function() {
			jQuery( this ).walk_through_menu_items();
		});

		jQuery( window ).on( 'resize', function() {
			jQuery( '.puur-dropdown-menu > ul > li' ).each( function() {
				jQuery( this ).walk_through_menu_items();
			});
		});
	}

	// Set overflow state of main nav items; done to get rid of menu overflow
	jQuery( '.puur-dropdown-menu' ).mouseenter( function() {
		jQuery( this ).css( 'overflow', 'visible' );
	});
	jQuery( '.puur-dropdown-menu' ).mouseleave( function() {
		jQuery( this ).css( 'overflow', '' );
	});

	// Search icon show/hide
	jQuery( document ).click( function() {
		jQuery( '.puur-main-menu-search .puur-custom-menu-item-contents' ).hide();
		jQuery( '.puur-main-menu-search' ).removeClass( 'puur-main-menu-search-open' );
		jQuery( '.puur-main-menu-search' ).find( 'style' ).remove();
	});

	jQuery( '.puur-main-menu-search' ).click( function( e ) {
		e.stopPropagation();
	});

	jQuery( '.puur-main-menu-search .puur-main-menu-icon' ).click( function( e ) {
		e.stopPropagation();

		if ( 'block' === jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).css( 'display' ) ) {
			jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).hide();
			jQuery( this ).parent().removeClass( 'puur-main-menu-search-open' );

			jQuery( this ).parent().find( 'style' ).remove();
		} else {
			jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).removeAttr( 'style' );
			jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).show();
			jQuery( this ).parent().addClass( 'puur-main-menu-search-open' );

			jQuery( this ).parent().append( '<style>.puur-main-menu{overflow:visible!important;</style>' );
			jQuery( this ).parent().find( '.puur-custom-menu-item-contents .s' ).focus();

			// Position main menu search box on click positioning
			if ( 'Top' === avadaVars.header_position ) {
				if ( ! jQuery( 'body.rtl' ).length && jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).offset().left < 0 ) {
					jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).css({
						'left': '0',
						'right': 'auto'
					});
				}

				if ( jQuery( 'body.rtl' ).length && jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).offset().left + jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).width()  > jQuery( window ).width() ) {
					jQuery( this ).parent().find( '.puur-custom-menu-item-contents' ).css({
						'left': 'auto',
						'right': '0'
					});
				}
			}
		}
	});

	// Calculate megamenu position
	if ( jQuery.fn.puur_position_megamenu ) {
		jQuery( '.puur-main-menu > ul' ).puur_position_megamenu();

		jQuery( '.puur-main-menu .puur-megamenu-menu' ).mouseenter( function() {
			jQuery( this ).parent().puur_position_megamenu();
		});

		jQuery( window ).resize( function() {
			jQuery( '.puur-main-menu > ul' ).puur_position_megamenu();
		});
	}

	// Calculate megamenu column widths
	if ( jQuery.fn.calc_megamenu_responsive_column_widths ) {
		jQuery( '.puur-main-menu > ul' ).calc_megamenu_responsive_column_widths();

		jQuery( window ).resize( function() {
			jQuery( '.puur-main-menu > ul' ).calc_megamenu_responsive_column_widths();
		});
	}

	// Top Menu last item positioning
	jQuery( '.puur-header-wrapper .puur-secondary-menu > ul > li:last-child' ).position_last_top_menu_item();

	fusionRepositionMenuItem( '.puur-main-menu .puur-main-menu-cart' );
	fusionRepositionMenuItem( '.puur-secondary-menu .puur-menu-login-box' );

	function fusionRepositionMenuItem( $menuItem ) {

		// Position main menu cart dropdown correctly
		if ( 'Top' === avadaVars.header_position ) {
			jQuery( $menuItem ).mouseenter( function( e ) {

				if ( jQuery( this ).find( '> div' ).length && jQuery( this ).find( '> div' ).offset().left < 0 ) {
					jQuery( this ).find( '> div' ).css({
						'left': '0',
						'right': 'auto'
					});
				}

				if ( jQuery( this ).find( '> div' ).length && jQuery( this ).find( '> div' ).offset().left + jQuery( this ).find( '> div' ).width()  > jQuery( window ).width() ) {
					jQuery( this ).find( '> div' ).css({
						'left': 'auto',
						'right': '0'
					});
				}
			});

			jQuery( window ).on( 'resize', function() {
				jQuery( $menuItem ).find( '> div' ).each( function() {
					var $menuItemDropdown          = jQuery( this ),
					    $menuItemDropdownWidth     = $menuItemDropdown.outerWidth(),
					    $menuItemDropdownLeftEdge  = $menuItemDropdown.offset().left,
					    $menuItemDropdownRightEdge = $menuItemDropdownLeftEdge + $menuItemDropdownWidth,
					    $menuItemLeftEdge          = $menuItemDropdown.parent().offset().left,
					    windowRightEdge            = jQuery( window ).width();

					if ( ! jQuery( 'body.rtl' ).length ) {
						if ( ( $menuItemDropdownLeftEdge < $menuItemLeftEdge && $menuItemDropdownLeftEdge < 0 ) || ( $menuItemDropdownLeftEdge == $menuItemLeftEdge && $menuItemDropdownLeftEdge - $menuItemDropdownWidth < 0 ) ) {
							$menuItemDropdown.css({
								'left': '0',
								'right': 'auto'
							});
						} else {
							$menuItemDropdown.css({
								'left': 'auto',
								'right': '0'
							});
						}
					} else {
						if ( ( $menuItemDropdownLeftEdge == $menuItemLeftEdge && $menuItemDropdownRightEdge > windowRightEdge ) || ( $menuItemDropdownLeftEdge < $menuItemLeftEdge && $menuItemDropdownRightEdge + $menuItemDropdownWidth > windowRightEdge )  ) {
							$menuItemDropdown.css({
								'left': 'auto',
								'right': '0'
							});
						} else {
							$menuItemDropdown.css({
								'left': '0',
								'right': 'auto'
							});
						}
					}
				});
			});
		}
	}

	// Reinitialize google map on megamenu
	jQuery( '.puur-megamenu-menu' ).mouseenter( function() {
		if ( jQuery( this ).find( '.shortcode-map' ).length ) {
			jQuery( this ).find( '.shortcode-map' ).each( function() {
				jQuery( this ).reinitializeGoogleMap();
			});
		}
	});

	// Make iframes in megamenu widget area load correctly in Safari and IE
	// Safari part - load the iframe correctly
	iframeLoaded = false;

	jQuery( '.puur-megamenu-menu' ).mouseover(
		function() {
			jQuery( this ).find( '.puur-megamenu-widgets-container iframe' ).each( function() {
				if ( ! iframeLoaded ) {
					jQuery( this ).attr( 'src', jQuery( this ).attr( 'src' ) );
				}
				iframeLoaded = true;
			});
		}
	);

	// IE part - making the megamenu stay on hover
	jQuery( '.puur-megamenu-wrapper iframe' ).mouseover(
		function() {
			jQuery( this ).parents( '.puur-megamenu-widgets-container' ).css( 'display', 'block' );
			jQuery( this ).parents( '.puur-megamenu-wrapper' ).css({ 'opacity': '1', 'visibility': 'visible' });
		}
	);

	jQuery( '.puur-megamenu-wrapper iframe' ).mouseout(
		function() {
			jQuery( this ).parents( '.puur-megamenu-widgets-container' ).css( 'display', '' );
			jQuery( this ).parents( '.puur-megamenu-wrapper' ).css({ 'opacity': '', 'visibility': '' });
		}
	);

	// Position main menu cart dropdown correctly on side-header
	jQuery( '.puur-navbar-nav .cart' ).find( '.cart-contents' ).position_cart_dropdown();

	jQuery( window ).on( 'resize', function() {
		jQuery( '.puur-navbar-nav .cart' ).find( '.cart-contents' ).position_cart_dropdown();
	});

	// Position main menu search form correctly on side-header
	jQuery( '.puur-navbar-nav .search-link' ).click( function() {
		setTimeout( function() {
			jQuery( '.puur-navbar-nav .search-link' ).parent().find( '.main-nav-search-form' ).position_menu_search_form();
		}, 5 );
	});

	jQuery( window ).on( 'resize', function() {
		jQuery( '.puur-navbar-nav .main-nav-search' ).find( '.main-nav-search-form' ).position_menu_search_form();
	});

	/**
	 * Mobile Navigation
	 */
	jQuery( '.puur-mobile-nav-holder' ).not( '.puur-mobile-sticky-nav-holder' ).each( function() {
		var $mobileNavHolder = jQuery( this ),
		    $mobileNav       = '',
		    $menu            = jQuery( this ).parent().find( '.puur-main-menu, .puur-secondary-menu' ).not( '.puur-sticky-menu' );

		if ( $menu.length ) {
			if ( 'classic' === avadaVars.mobile_menu_design ) {
				$mobileNavHolder.append( '<div class="puur-mobile-selector"><span>' + avadaVars.dropdown_goto + '</span></div>' );
				jQuery( this ).find( '.puur-mobile-selector' ).append( '<div class="puur-selector-down"></div>' );
			}

			jQuery( $mobileNavHolder ).append( jQuery( $menu ).find( '> ul' ).clone() );

			$mobileNav = jQuery( $mobileNavHolder ).find( '> ul' );
			$mobileNav.removeClass( 'puur-middle-logo-ul' );

			$mobileNav.find( '.puur-middle-logo-menu-logo, .puur-caret, .puur-menu-login-box .puur-custom-menu-item-contents, .puur-menu-cart .puur-custom-menu-item-contents, .puur-main-menu-search, li> a > span > .button-icon-divider-left, li > a > span > .button-icon-divider-right' ).remove();

			if ( 'classic' === avadaVars.mobile_menu_design ) {
				$mobileNav.find( '.puur-menu-cart > a' ).html( avadaVars.mobile_nav_cart );
			} else {
				$mobileNav.find( '.puur-main-menu-cart' ).remove();
			}

			$mobileNav.find( 'li' ).each( function() {

				var classes = 'puur-mobile-nav-item';
				if ( jQuery( this ).data( 'classes' ) ) {
					classes += ' ' + jQuery( this ).data( 'classes' );
				}

				jQuery( this ).find( '> a > .menu-text' ).removeAttr( 'class' ).addClass( 'menu-text' );

				if ( jQuery( this ).hasClass( 'current-menu-item' ) || jQuery( this ).hasClass( 'current-menu-parent' ) || jQuery( this ).hasClass( 'current-menu-ancestor' ) ) {
					classes += ' puur-mobile-current-nav-item';
				}

				jQuery( this ).attr( 'class', classes );

				if ( jQuery( this ).attr( 'id' ) ) {
					jQuery( this ).attr( 'id', jQuery( this ).attr( 'id' ).replace( 'menu-item', 'mobile-menu-item' ) );
				}

				jQuery( this ).attr( 'style', '' );
			});

			jQuery( this ).find( '.puur-mobile-selector' ).click( function() {
				if ( $mobileNav.hasClass( 'mobile-menu-expanded' ) ) {
					$mobileNav.removeClass( 'mobile-menu-expanded' );
				} else {
					$mobileNav.addClass( 'mobile-menu-expanded' );
				}

				$mobileNav.slideToggle( 200, 'easeOutQuad' );
			});
		}
	});

	jQuery( '.puur-mobile-sticky-nav-holder' ).each( function() {
		var $mobileNavHolder = jQuery( this ),
		    $mobileNav       = '',
		    $menu            = jQuery( this ).parent().find( '.puur-sticky-menu' );

		if ( 'classic' === avadaVars.mobile_menu_design ) {
			$mobileNavHolder.append( '<div class="puur-mobile-selector"><span>' + avadaVars.dropdown_goto + '</span></div>' );
			jQuery( this ).find( '.puur-mobile-selector' ).append( '<div class="puur-selector-down"></div>' );
		}

		jQuery( $mobileNavHolder ).append( jQuery( $menu ).find( '> ul' ).clone() );

		$mobileNav = jQuery( $mobileNavHolder ).find( '> ul' );

		$mobileNav.find( '.puur-middle-logo-menu-logo, .puur-menu-cart, .puur-menu-login-box, .puur-main-menu-search' ).remove();

		$mobileNav.find( 'li' ).each( function() {
			var classes = 'puur-mobile-nav-item';
			if ( jQuery( this ).data( 'classes' ) ) {
				classes += ' ' + jQuery( this ).data( 'classes' );
			}

			if ( jQuery( this ).hasClass( 'current-menu-item' ) || jQuery( this ).hasClass( 'current-menu-parent' ) || jQuery( this ).hasClass( 'current-menu-ancestor' ) ) {
				classes += ' puur-mobile-current-nav-item';
			}

			jQuery( this ).attr( 'class', classes );

			if ( jQuery( this ).attr( 'id' ) ) {
				jQuery( this ).attr( 'id', jQuery( this ).attr( 'id' ).replace( 'menu-item', 'mobile-menu-item' ) );
			}

			jQuery( this ).attr( 'style', '' );
		});

		jQuery( this ).find( '.puur-mobile-selector' ).click( function() {
			if ( $mobileNav.hasClass( 'mobile-menu-expanded' ) ) {
				$mobileNav.removeClass( 'mobile-menu-expanded' );
			} else {
				$mobileNav.addClass( 'mobile-menu-expanded' );
			}

			$mobileNav.slideToggle( 200, 'easeOutQuad' );
		});
	});

	// Make megamenu items mobile ready
	jQuery( '.puur-mobile-nav-holder > ul > li' ).each( function() {
		jQuery( this ).find( '.puur-megamenu-widgets-container' ).remove();

		jQuery( this ).find( '.puur-megamenu-holder > ul' ).each( function() {
			jQuery( this ).attr( 'class', 'sub-menu' );
			jQuery( this ).attr( 'style', '' );
			jQuery( this ).find( '> li' ).each( function() {

				// Add menu needed menu classes to li elements
				var classes = 'puur-mobile-nav-item',
				    parentLi;

				if ( jQuery( this ).data( 'classes' ) ) {
					classes += ' ' + jQuery( this ).data( 'classes' );
				}

				if ( jQuery( this ).hasClass( 'current-menu-item' ) || jQuery( this ).hasClass( 'current-menu-parent' ) || jQuery( this ).hasClass( 'current-menu-ancestor' ) || jQuery( this ).hasClass( 'puur-mobile-current-nav-item' ) ) {
					classes += ' puur-mobile-current-nav-item';
				}
				jQuery( this ).attr( 'class', classes );

				// Append column titles and title links correctly
				if ( ! jQuery( this ).find( '.puur-megamenu-title a, > a' ).length ) {
					jQuery( this ).find( '.puur-megamenu-title' ).each( function() {
						if ( ! jQuery( this ).children( 'a' ).length ) {
							jQuery( this ).append( '<a href="#">' + jQuery( this ).text() + '</a>' );
						}
					});

					if ( ! jQuery( this ).find( '.puur-megamenu-title' ).length ) {

						parentLi = jQuery( this );

						jQuery( this ).find( '.sub-menu' ).each( function() {
							parentLi.after( jQuery( this ) );

						});
						jQuery( this ).remove();
					}
				}
				jQuery( this ).prepend( jQuery( this ).find( '.puur-megamenu-title a, > a' ) );

				jQuery( this ).find( '.puur-megamenu-title' ).remove();
			});
			jQuery( this ).closest( '.puur-mobile-nav-item' ).append( jQuery( this ) );
		});

		jQuery( this ).find( '.puur-megamenu-wrapper, .caret, .puur-megamenu-bullet' ).remove();
	});

	// Mobile Modern Menu
	jQuery( '.puur-mobile-menu-icons .puur-icon-bars' ).click( function( e ) {

		var $wrapper;

		e.preventDefault();

		if ( jQuery( '.puur-header-v4' ).length >= 1 || jQuery( '.puur-header-v5' ).length >= 1 ) {
			$wrapper = '.puur-secondary-main-menu';
		} else if ( jQuery( '#side-header' ).length >= 1 ) {
			$wrapper = '#side-header';
		} else {
			$wrapper = '.puur-header';
		}

		if ( jQuery( '.puur-is-sticky' ).length >= 1 && jQuery( '.puur-mobile-sticky-nav-holder' ).length >= 1 ) {
			jQuery( $wrapper ).find( '.puur-mobile-sticky-nav-holder' ).slideToggle( 200, 'easeOutQuad' );
		} else {
			jQuery( $wrapper ).find( '.puur-mobile-nav-holder' ).not( '.puur-mobile-sticky-nav-holder' ).slideToggle( 200, 'easeOutQuad' );
		}
	});

	jQuery( '.puur-mobile-menu-icons .puur-icon-search' ).click( function( e ) {
		e.preventDefault();

		jQuery( '.puur-secondary-main-menu .puur-secondary-menu-search, .side-header-wrapper .puur-secondary-menu-search' ).slideToggle( 200, 'easeOutQuad' );
	});

	// Collapse mobile menus when on page anchors are clicked
	jQuery( '.puur-mobile-nav-holder .puur-mobile-nav-item a:not([href="#"])' ).click( function() {
		var $target = jQuery( this.hash );
		if ( '' !== $target.length && this.hash.slice( 1 ) ) {
			if ( jQuery( this ).parents( '.puur-mobile-menu-design-classic' ).length ) {
				jQuery( this ).parents( '.puur-menu, .menu' )
					.hide()
					.removeClass( 'mobile-menu-expanded' );
			} else {
				jQuery( this ).parents( '.puur-mobile-nav-holder' ).hide();
			}
		}
	});

	// Make mobile menu sub-menu toggles
	if ( 1 == avadaVars.submenu_slideout ) {
		jQuery( '.puur-mobile-nav-holder > ul li' ).each( function() {
			var classes = 'puur-mobile-nav-item';

			if ( jQuery( this ).data( 'classes' ) ) {
				classes += ' ' + jQuery( this ).data( 'classes' );
			}

			if ( jQuery( this ).hasClass( 'current-menu-item' ) || jQuery( this ).hasClass( 'current-menu-parent' ) || jQuery( this ).hasClass( 'current-menu-ancestor' ) || jQuery( this ).hasClass( 'puur-mobile-current-nav-item' ) ) {
				classes += ' puur-mobile-current-nav-item';
			}

			jQuery( this ).attr( 'class', classes );

			if ( jQuery( this ).find( ' > ul' ).length ) {
				jQuery( this ).prepend( '<span href="#" aria-haspopup="true" class="puur-open-submenu"></span>' );

				jQuery( this ).find( ' > ul' ).hide();
			}
		});

		jQuery( '.puur-mobile-nav-holder .puur-open-submenu' ).click( function( e ) {
			e.stopPropagation();

			jQuery( this ).parent().children( '.sub-menu' ).slideToggle( 200, 'easeOutQuad' );
		});

		jQuery( '.puur-mobile-nav-holder a' ).click( function( e ) {
			if ( '#' === jQuery( this ).attr( 'href' ) ) {
				e.preventDefault();
				e.stopPropagation();

				jQuery( this ).prev( '.puur-open-submenu' ).trigger( 'click' );
			}
		} );
	}

	// Flyout Menu
	function setFlyoutActiveCSS() {

		var $flyoutMenuTopHeight;

		jQuery( 'body' ).bind( 'touchmove', function( e ) {
			if ( ! jQuery( e.target ).parents( '.puur-flyout-menu' ).length ) {
				e.preventDefault();
			}
		});

		window.$wpadminbarHeight = ( jQuery( '#wpadminbar' ).length ) ? jQuery( '#wpadminbar' ).height() : 0;
		$flyoutMenuTopHeight = jQuery( '.puur-header-v6-content' ).height() + window.$wpadminbarHeight;

		// Make usre the menu is opened in a way, that menu items do not collide with the header
		if ( jQuery( '.puur-header-v6' ).hasClass( 'puur-flyout-menu-active' ) ) {
			jQuery( '.puur-header-v6 .puur-flyout-menu' ).css({
				'height': 'calc(100% - ' + $flyoutMenuTopHeight + 'px)',
				'margin-top': $flyoutMenuTopHeight
			});

			if ( jQuery( '.puur-header-v6 .puur-flyout-menu .puur-menu' ).height() > jQuery( '.puur-header-v6 .puur-flyout-menu' ).height() ) {
				jQuery( '.puur-header-v6 .puur-flyout-menu' ).css( 'display', 'block' );
			}
		}

		// Make sure logo and menu stay sticky on flyout opened, even if sticky header is disabled
		if ( '0' == avadaVars.header_sticky ) {
			jQuery( '.puur-header-v6 .puur-header' ).css({
				'position': 'fixed',
				'width': '100%',
				'max-width': '100%',
				'top': window.$wpadminbarHeight,
				'z-index': '210'
			});

			jQuery( '.puur-header-sticky-height' ).css({
				'display': 'block',
				'height': jQuery( '.puur-header-v6 .puur-header' ).height()
			});
		}
	}

	function resetFlyoutActiveCSS() {
		setTimeout( function() {
			jQuery( '.puur-header-v6 .puur-flyout-menu' ).css( 'display', '' );

			if ( '0' == avadaVars.header_sticky ) {
				jQuery( '.puur-header-v6 .puur-header' ).attr( 'style', '' );
				jQuery( '.puur-header-sticky-height' ).attr( 'style', '' );
			}
			jQuery( 'body' ).unbind( 'touchmove' );
		}, 250 );
	}

	jQuery( '.puur-flyout-menu-icons .puur-flyout-menu-toggle' ).on( 'click', function() {
		var $flyoutContent = jQuery( this ).parents( '.puur-header-v6' );

		if ( $flyoutContent.hasClass( 'puur-flyout-active' ) ) {
			if ( $flyoutContent.hasClass( 'puur-flyout-search-active' ) ) {
				$flyoutContent.addClass( 'puur-flyout-menu-active' );

				setFlyoutActiveCSS();
			} else {
				$flyoutContent.removeClass( 'puur-flyout-active' );
				$flyoutContent.removeClass( 'puur-flyout-menu-active' );

				resetFlyoutActiveCSS();
			}
			$flyoutContent.removeClass( 'puur-flyout-search-active' );
		} else {
			$flyoutContent.addClass( 'puur-flyout-active' );
			$flyoutContent.addClass( 'puur-flyout-menu-active' );

			setFlyoutActiveCSS();
		}
	});

	jQuery( '.puur-flyout-menu-icons .puur-flyout-search-toggle' ).on( 'click', function() {
		var $flyoutContent = jQuery( this ).parents( '.puur-header-v6' );

		if ( $flyoutContent.hasClass( 'puur-flyout-active' ) ) {
			if ( $flyoutContent.hasClass( 'puur-flyout-menu-active' ) ) {
				$flyoutContent.addClass( 'puur-flyout-search-active' );

				// Set focus on search field if not on mobiles
				if ( Modernizr.mq( 'only screen and (min-width:'  + parseInt( avadaVars.side_header_break_point ) +  'px)' ) ) {
					$flyoutContent.find( '.puur-flyout-search .s' ).focus();
				}
			} else {
				$flyoutContent.removeClass( 'puur-flyout-active' );
				$flyoutContent.removeClass( 'puur-flyout-search-active' );

				resetFlyoutActiveCSS();
			}
			$flyoutContent.removeClass( 'puur-flyout-menu-active' );
		} else {
			$flyoutContent.addClass( 'puur-flyout-active' );
			$flyoutContent.addClass( 'puur-flyout-search-active' );

			// Set focus on search field if not on mobiles
			if ( Modernizr.mq( 'only screen and (min-width:'  + parseInt( avadaVars.side_header_break_point ) +  'px)' ) ) {
				$flyoutContent.find( '.puur-flyout-search .s' ).focus();
			}

			setFlyoutActiveCSS();
		}
	});
});

jQuery( window ).load( function() {

	var $animationDuration,
	    $headerParent,
	    $menuHeight,
	    $menuBorderHeight,
	    $logo,
	    $stickyHeaderScrolled,
	    $standardLogoHeight,
	    $logoImage,
	    resizeWidth,
	    resizeHeight;

	// Sticky Header
	if ( '1' == avadaVars.header_sticky && ( jQuery( '.puur-header-wrapper' ).length >= 1 || jQuery( '#side-header' ).length >= 1 )  ) {
		$animationDuration = 300;
		if ( '0' == avadaVars.sticky_header_shrinkage ) {
			$animationDuration = 0;
		}
		$headerParent                   = jQuery( '.puur-header' ).parent();
		window.$headerParentHeight      = $headerParent.outerHeight();
		window.$headerHeight            = jQuery( '.puur-header' ).outerHeight();
		$menuHeight                     = parseInt( avadaVars.nav_height );
		$menuBorderHeight               = parseInt( avadaVars.nav_highlight_border );
		window.$scrolled_header_height  = 65;
		$logo                           = ( jQuery( '.puur-logo img:visible' ).length ) ? jQuery( '.puur-logo img:visible' ) : '';
		$stickyHeaderScrolled           = false;
		window.$stickyTrigger           = jQuery( '.puur-header' );
		window.$wpadminbarHeight        = ( jQuery( '#wpadminbar' ).length ) ? jQuery( '#wpadminbar' ).height() : 0;
		window.$stickyTrigger_position  = ( window.$stickyTrigger.length ) ? Math.round( window.$stickyTrigger.offset().top ) - window.$wpadminbarHeight - window.$woo_store_notice : 0;
		window.$woo_store_notice        = ( jQuery( '.demo_store' ).length ) ? jQuery( '.demo_store' ).outerHeight() : 0;
		window.$sticky_header_type      = 1;
		window.$logo_height, window.$main_menu_height;
		window.$slider_offset           = 0;
		window.$site_width              = jQuery( '#wrapper' ).outerWidth();
		window.$media_query_test_1      = Modernizr.mq( 'only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)' ) ||  Modernizr.mq( 'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)' );
		window.$media_query_test_2      = Modernizr.mq( 'screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' );
		window.$media_query_test_3      = Modernizr.mq( 'screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' );
		window.$media_query_test_4      = Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' );
		$standardLogoHeight             = jQuery( '.puur-standard-logo' ).height() + parseInt( jQuery( '.puur-logo' ).data( 'margin-top' ) ) + parseInt( jQuery( '.puur-logo' ).data( 'margin-bottom' ) );

		window.$initial_desktop_header_height   = Math.max( window.$headerHeight, Math.max( $menuHeight + $menuBorderHeight, $standardLogoHeight ) + parseInt( jQuery( '.puur-header' ).find( '.puur-row' ).css( 'padding-top' ) ) + parseInt( jQuery( '.puur-header' ).find( '.puur-row' ).css( 'padding-bottom' ) ) );
		window.$initial_sticky_header_shrinkage = avadaVars.sticky_header_shrinkage;
		window.$sticky_can_be_shrinked          = true;

		if ( '0' == avadaVars.sticky_header_shrinkage ) {
			$animationDuration = 0;
			window.$scrolled_header_height = window.$headerHeight;
		}
		if ( $logo ) {

			// Getting the correct natural height of the visible logo
			if ( $logo.hasClass( 'puur-logo-2x' ) ) {
				$logoImage = new Image();
				$logoImage.src = $logo.attr( 'src' );
				window.original_logo_height = parseInt( $logo.height() ) + parseInt( avadaVars.logo_margin_top ) + parseInt( avadaVars.logo_margin_bottom );
			} else {

				// For normal logo we need to setup the image object to get the natural heights
				$logoImage = new Image();
				$logoImage.src = $logo.attr( 'src' );
				window.original_logo_height = parseInt( $logoImage.naturalHeight ) + parseInt( avadaVars.logo_margin_top ) + parseInt( avadaVars.logo_margin_bottom );

				// IE8, Opera fallback
				$logoImage.onload = function() {
					window.original_logo_height = parseInt( this.height ) + parseInt( avadaVars.logo_margin_top ) + parseInt( avadaVars.logo_margin_bottom );
				};
			}
		}

		// Different sticky header behavior for header v4/v5
		// Instead of header with logo, secondary menu is made sticky
		if ( jQuery( '.puur-header-v4' ).length >= 1 || jQuery( '.puur-header-v5' ).length >= 1 ) {
			window.$sticky_header_type = 2;
			if ( 'menu_and_logo' === avadaVars.header_sticky_type2_layout || ( Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) && 'modern' === avadaVars.mobile_menu_design ) ) {
				window.$stickyTrigger = jQuery( '.puur-sticky-header-wrapper' );
			} else {
				window.$stickyTrigger = jQuery( '.puur-secondary-main-menu' );
			}
			window.$stickyTrigger_position = Math.round( window.$stickyTrigger.offset().top ) - window.$wpadminbarHeight - window.$woo_store_notice;
		}

		if ( 1 == window.$sticky_header_type ) {
			if ( Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
				window.$scrolled_header_height = window.$headerHeight;
			} else {
				window.$original_sticky_trigger_height = jQuery( window.$stickyTrigger ).outerHeight();
			}
		}

		if ( 2 == window.$sticky_header_type ) {
			if ( 'classic' === avadaVars.mobile_menu_design ) {
				jQuery( $headerParent ).height( window.$headerParentHeight );
			}

			if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
				jQuery( $headerParent ).height( window.$headerParentHeight );
			} else {
				window.$scrolled_header_height = window.$headerParentHeight;
			}
		}

		// Side Header
		if ( jQuery( '#side-header' ).length >= 1 ) {
			window.$sticky_header_type = 3;
		}

		if ( jQuery( document ).height() - ( window.$initial_desktop_header_height - window.$scrolled_header_height ) < jQuery( window ).height() && 1 == avadaVars.sticky_header_shrinkage ) {
			window.$sticky_can_be_shrinked = false;
			jQuery( '.puur-header-wrapper' ).removeClass( 'puur-is-sticky' );
		} else {
			window.$sticky_can_be_shrinked = true;
		}

		resizeWidth = jQuery( window ).width();
		resizeHeight = jQuery( window ).height();

		jQuery( window ).resize( function() {
			var $menuHeight,
			    $menuBorderHeight,
			    $stickyTrigger,
			    $logoHeightWithMargin,
			    $mainMenuWidth,
			    $availableWidth,
			    $positionTop,
			    $scrolledLogoHeight,
			    $scrolledLogoContainerMargin;

			window.$media_query_test_1 = Modernizr.mq( 'only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: portrait)' ) ||  Modernizr.mq( 'only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)' );
			window.$media_query_test_2 = Modernizr.mq( 'screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' );
			window.$media_query_test_3 = Modernizr.mq( 'screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' );
			window.$media_query_test_4 = Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' );

			if ( '1' != avadaVars.header_sticky_tablet && ( window.$media_query_test_1 ) ) {
				jQuery( '.puur-header-wrapper, .puur-header-sticky-height, .puur-header, .puur-logo, .puur-header-wrapper .puur-main-menu > li a, .puur-header-wrapper .puur-secondary-main-menu' ).attr( 'style', '' );
				jQuery( '.puur-header-wrapper' ).removeClass( 'puur-is-sticky' );
			} else if ( '1' == avadaVars.header_sticky_tablet && ( window.$media_query_test_1 ) ) {
				$animationDuration = 0;
			}

			if ( '1' != avadaVars.header_sticky_mobile && window.$media_query_test_2 ) {
				jQuery( '.puur-header-wrapper, .puur-header-sticky-height, .puur-header, .puur-logo, .puur-header-wrapper .puur-main-menu > li a, .puur-header-wrapper .puur-secondary-main-menu' ).attr( 'style', '' );
				jQuery( '.puur-header-wrapper' ).removeClass( 'puur-is-sticky' );
			} else if ( '1' == avadaVars.header_sticky_mobile && window.$media_query_test_2 ) {
				$animationDuration = 0;
			}

			if ( jQuery( window ).width() != resizeWidth || jQuery( window ).height() != resizeHeight ) { // Check for actual resize
				$menuHeight = parseInt( avadaVars.nav_height );
				$menuBorderHeight = parseInt( avadaVars.nav_highlight_border );

				if ( jQuery( '#wpadminbar' ).length ) {
					window.$wpadminbarHeight = jQuery( '#wpadminbar' ).height();
				} else {
					window.$wpadminbarHeight = 0;
				}

				window.$woo_store_notice = ( jQuery( '.demo_store' ).length ) ? jQuery( '.demo_store' ).outerHeight() : 0;

				if ( jQuery( '.puur-is-sticky' ).length ) {
					$stickyTrigger = jQuery( '.puur-header' );

					if ( 2 == window.$sticky_header_type ) {
						if ( 'menu_only' === avadaVars.header_sticky_type2_layout && ( 'classic' === avadaVars.mobile_menu_design || ! window.$media_query_test_4 ) ) {
							$stickyTrigger = jQuery( '.puur-secondary-main-menu' );
						} else {
							$stickyTrigger = jQuery( '.puur-sticky-header-wrapper' );
						}
					}

					if ( jQuery( '#wpadminbar' ).length ) {

						// Unset the top value for all candidates
						jQuery( '.puur-header, .puur-sticky-header-wrapper, .puur-secondary-main-menu' ).css( 'top', '' );

						// Set top value for coreect selector
						jQuery( $stickyTrigger ).css( 'top', window.$wpadminbarHeight + window.$woo_store_notice );
					}

					if ( 'boxed' === avadaVars.layout_mode ) {
						jQuery( $stickyTrigger ).css( 'max-width', jQuery( '#wrapper' ).outerWidth() + 'px' );
					}
				}

				// Refresh header v1, v2, v3 and v6
				if ( 1 == window.$sticky_header_type ) {
					avadaVars.sticky_header_shrinkage = window.$initial_sticky_header_shrinkage;

					if ( jQuery( '.puur-secondary-header' ).length ) {
						window.$stickyTrigger_position = Math.round( jQuery( '.puur-secondary-header' ).offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice + jQuery( '.puur-secondary-header' ).outerHeight();

					// If there is no secondary header, trigger position is 0
					} else {
						window.$stickyTrigger_position = Math.round( jQuery( '.puur-header' ).offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice;
					}

					// Desktop mode
					if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
						$logoHeightWithMargin = jQuery( '.puur-logo img:visible' ).outerHeight() + parseInt( avadaVars.logo_margin_top ) + parseInt( avadaVars.logo_margin_bottom );
						$mainMenuWidth = 0;

						// Calculate actual menu width
						jQuery( '.puur-main-menu > ul > li' ).each( function() {
							$mainMenuWidth += jQuery( this ).outerWidth();
						});

						if ( jQuery( '.puur-header-v6' ).length ) {
							$mainMenuWidth = 0;
						}

						// Sticky desktop header
						if ( jQuery( '.puur-is-sticky' ).length ) {
							if ( $mainMenuWidth > ( jQuery( '.puur-header .puur-row' ).width() - jQuery( '.puur-logo img:visible' ).outerWidth() ) ) {
								window.$headerHeight = jQuery( '.puur-main-menu' ).outerHeight() + $logoHeightWithMargin;
								if ( jQuery( '.puur-header-v7' ).length ) {
									window.$headerHeight = jQuery( '.puur-middle-logo-menu' ).height();
								}

								// Headers v2 and v3 have a 1px bottom border
								if ( jQuery( '.puur-header-v2' ).length || jQuery( '.puur-header-v3' ).length ) {
									window.$headerHeight += 1;
								}
							} else {
								if ( '0' == avadaVars.sticky_header_shrinkage ) {
									if ( window.original_logo_height > $menuHeight + $menuBorderHeight ) {
										window.$headerHeight = window.original_logo_height;
									} else {
										window.$headerHeight = $menuHeight + $menuBorderHeight;
									}

									window.$headerHeight += parseInt( avadaVars.header_padding_top ) + parseInt( avadaVars.header_padding_bottom );

									// Headers v2 and v3 have a 1px bottom border
									if ( jQuery( '.puur-header-v2' ).length || jQuery( '.puur-header-v3' ).length ) {
										window.$headerHeight += 1;
									}
								} else {
									window.$headerHeight = 65;
								}
							}

							window.$scrolled_header_height = window.$headerHeight;

							jQuery( '.puur-header-sticky-height' ).css( 'height', window.$headerHeight );
							jQuery( '.puur-header' ).css( 'height', window.$headerHeight );

						// Non sticky desktop header
						} else {
							$availableWidth =  jQuery( '.puur-header .puur-row' ).width() - jQuery( '.puur-logo img:visible' ).outerWidth();
							if ( jQuery( '.puur-header-v7' ).length ) {
								$availableWidth =  jQuery( '.puur-header .puur-row' ).width();
							}
							if ( $mainMenuWidth > $availableWidth ) {
								window.$headerHeight = jQuery( '.puur-main-menu' ).outerHeight() + $logoHeightWithMargin;
								if ( jQuery( '.puur-header-v7' ).length ) {
									window.$headerHeight = jQuery( '.puur-middle-logo-menu' ).height();
								}
								avadaVars.sticky_header_shrinkage = '0';
							} else {
								if ( window.original_logo_height > $menuHeight + $menuBorderHeight ) {
									window.$headerHeight = window.original_logo_height;
								} else {
									window.$headerHeight = $menuHeight + $menuBorderHeight;
								}

								if ( jQuery( '.puur-header-v7' ).length ) {
									window.$headerHeight = jQuery( '.puur-main-menu' ).outerHeight();
								}
							}

							window.$headerHeight += parseInt( avadaVars.header_padding_top ) + parseInt( avadaVars.header_padding_bottom );

							// Headers v2 and v3 have a 1px bottom border
							if ( jQuery( '.puur-header-v2' ).length || jQuery( '.puur-header-v3' ).length ) {
								window.$headerHeight += 1;
							}

							window.$scrolled_header_height = 65;

							if ( '0' == avadaVars.sticky_header_shrinkage ) {
								window.$scrolled_header_height = window.$headerHeight;
							}

							jQuery( '.puur-header-sticky-height' ).css( 'height', window.$headerHeight );
							jQuery( '.puur-header' ).css( 'height', window.$headerHeight );
						}
					}

					// Mobile mode
					if ( Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
						jQuery( '.puur-header' ).css( 'height', '' );

						window.$headerHeight = jQuery( '.puur-header' ).outerHeight();
						window.$scrolled_header_height = window.$headerHeight;

						jQuery( '.puur-header-sticky-height' ).css( 'height', window.$scrolled_header_height );
					}
				}

				// Refresh header v4 and v5
				if ( 2 == window.$sticky_header_type ) {
					if ( 'modern' === avadaVars.mobile_menu_design ) {

						// Desktop mode and sticky active
						if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) && jQuery( '.puur-is-sticky' ).length && 'menu_only' === avadaVars.header_sticky_type2_layout ) {
							window.$headerParentHeight = jQuery( '.puur-header' ).parent().outerHeight() + jQuery( '.puur-secondary-main-menu' ).outerHeight();
						} else {
							window.$headerParentHeight = jQuery( '.puur-header' ).parent().outerHeight();
						}
						window.$scrolled_header_height = window.header_parent_height;

						// Desktop Mode
						if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
							window.$headerParentHeight = jQuery( '.puur-header' ).outerHeight() + jQuery( '.puur-secondary-main-menu' ).outerHeight();
							window.$stickyTrigger_position = Math.round( jQuery( '.puur-header' ).offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice + jQuery( '.puur-header' ).outerHeight();

							jQuery( $headerParent ).height( window.$headerParentHeight );
							jQuery( '.puur-header-sticky-height' ).css( 'height', '' );
						}

						// Mobile Mode
						if ( Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {

							// Trigger position basis is puur-secondary-header, if there is a secondary header
							if ( jQuery( '.puur-secondary-header' ).length ) {
								window.$stickyTrigger_position = Math.round( jQuery( '.puur-secondary-header' ).offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice + jQuery( '.puur-secondary-header' ).outerHeight();

							// If there is no secondary header, trigger position is 0
							} else {
								window.$stickyTrigger_position = Math.round( jQuery( '.puur-header' ).offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice;
							}

							jQuery( $headerParent ).height( '' );
							jQuery( '.puur-header-sticky-height' ).css( 'height', jQuery( '.puur-sticky-header-wrapper' ).outerHeight() ).hide();
						}
					}

					if ( 'classic' === avadaVars.mobile_menu_design ) {
						window.$headerParentHeight = jQuery( '.puur-header' ).outerHeight() + jQuery( '.puur-secondary-main-menu' ).outerHeight();
						window.$stickyTrigger_position = Math.round( jQuery( '.puur-header' ).offset().top ) - window.$wpadminbarHeight - window.$woo_store_notice + jQuery( '.puur-header' ).outerHeight();

						jQuery( $headerParent ).height( window.$headerParentHeight );
					}
				}

				// Refresh header v3
				if ( 3 == window.$sticky_header_type ) {
					$positionTop = '';

					// Desktop mode
					if ( ! Modernizr.mq( 'only screen and (max-width:' + avadaVars.side_header_break_point + 'px)' ) ) {
						jQuery( '#side-header-sticky' ).css({
							height: '',
							top: ''
						});

						if ( jQuery( '#side-header' ).hasClass( 'puur-is-sticky' ) ) {
							jQuery( '#side-header' ).css({
								top: '',
								position: ''
							});

							jQuery( '#side-header' ).removeClass( 'puur-is-sticky' );
						}
					}
				}

				if ( jQuery( document ).height() - ( window.$initial_desktop_header_height - window.$scrolled_header_height ) < jQuery( window ).height() && 1 == avadaVars.sticky_header_shrinkage ) {
					window.$sticky_can_be_shrinked = false;
					jQuery( '.puur-header-wrapper' ).removeClass( 'puur-is-sticky' );
					jQuery( '.puur-header-sticky-height' ).hide();
					jQuery( '.puur-header' ).css( 'height', '' );

					jQuery( '.puur-logo' ).css({
						'margin-top': '',
						'margin-bottom': ''
					});

					jQuery( '.puur-main-menu > ul > li > a' ).css({
						'height': '',
						'line-height': ''
					});

					jQuery( '.puur-logo img' ).css( 'height', '' );
				} else {
					window.$sticky_can_be_shrinked = true;

					// Resizing sticky header
					if ( jQuery( '.puur-is-sticky' ).length >= 1 ) {
						if ( 1 == window.$sticky_header_type && ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {

							// Animate Header Height
							if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
								if ( window.$headerHeight == window.$initial_desktop_header_height ) {
									jQuery( window.$stickyTrigger ).stop( true, true ).animate({
										height: window.$scrolled_header_height
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
										jQuery( this ).css( 'overflow', 'visible' );
									} });
									jQuery( '.puur-header-sticky-height' ).show();
									jQuery( '.puur-header-sticky-height' ).stop( true, true ).animate({
										height: window.$scrolled_header_height
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
										jQuery( this ).css( 'overflow', 'visible' );
									} });
								} else {
									jQuery( '.puur-header-sticky-height' ).show();
								}
							} else {
								jQuery( '.puur-header-sticky-height' ).css( 'height', window.$scrolled_header_height ).show();
							}

							// Animate Logo
							if ( '1' == avadaVars.sticky_header_shrinkage && window.$headerHeight == window.$initial_desktop_header_height ) {
								if ( $logo ) {
									$scrolledLogoHeight = $logo.height();

									if (  $scrolledLogoHeight < window.$scrolled_header_height - 10 ) {
										$scrolledLogoContainerMargin = ( window.$scrolled_header_height - $scrolledLogoHeight ) / 2;
									} else {
										$scrolledLogoHeight = window.$scrolled_header_height - 10;
										$scrolledLogoContainerMargin = 5;
									}

									$logo.stop( true, true ).animate({
										'height': $scrolledLogoHeight
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
										jQuery( this ).css( 'display', '' );
									}, step: function() {
										jQuery( this ).css( 'display', '' );
									} });
								}

								jQuery( '.puur-logo' ).stop( true, true ).animate({
									'margin-top': $scrolledLogoContainerMargin,
									'margin-bottom': $scrolledLogoContainerMargin
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });

								// Animate Menu Height
								if ( ! jQuery( '.puur-header-v6' ).length ) {
									jQuery( '.puur-main-menu > ul > li' ).not( '.puur-middle-logo-menu-logo' ).find( '> a' ).stop( true, true ).animate({
										height: window.$scrolled_header_height - $menuBorderHeight,
										'line-height': window.$scrolled_header_height - $menuBorderHeight
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });
								}
							}
						}
					}
				}

				resizeWidth = jQuery( window ).width();
				resizeHeight = jQuery( window ).height();
			}
		}); // End resize event

		jQuery( window ).scroll( function() {

			var $scrolledLogoHeight,
			    $scrolledLogoContainerMargin;

			if ( window.$sticky_can_be_shrinked ) {
				if ( '1' != avadaVars.header_sticky_tablet && ( window.$media_query_test_1 ) ) {
					return;
				} else if ( '1' == avadaVars.header_sticky_tablet && ( window.$media_query_test_1 ) ) {
					$animationDuration = 0;
				}

				if ( '1' != avadaVars.header_sticky_mobile && window.$media_query_test_2 ) {
					return;
				} else if ( '1' == avadaVars.header_sticky_mobile && window.$media_query_test_2 ) {
					$animationDuration = 0;
				}

				if ( 3 == window.$sticky_header_type && '1' != avadaVars.header_sticky_mobile ) {
					return;
				}

				if ( 3 == window.$sticky_header_type && '1' == avadaVars.header_sticky_mobile && ! window.$media_query_test_3 ) {
					return;
				}

				// Change the sticky trigger position to the bottom of the mobile menu
				if ( 0 === jQuery( '.puur-is-sticky' ).length && jQuery( '.puur-header, .puur-secondary-main-menu' ).find( '.puur-mobile-nav-holder > ul' ).is( ':visible' ) ) {
					window.$stickyTrigger_position = Math.round( jQuery( '.puur-header, .puur-sticky-header-wrapper' ).find( '.puur-mobile-nav-holder:visible' ).offset().top ) - window.$wpadminbarHeight - window.$woo_store_notice + jQuery( '.puur-header, .puur-sticky-header-wrapper' ).find( '.puur-mobile-nav-holder:visible' ).height();
				}

				// If sticky header is not active, reassign the triggers
				if ( 3 != window.$sticky_header_type && 0 === jQuery( '.puur-is-sticky' ).length && ! jQuery( '.puur-header, .puur-secondary-main-menu' ).find( '.puur-mobile-nav-holder > ul' ).is( ':visible' ) ) {
					window.$stickyTrigger = jQuery( '.puur-header' );
					window.$stickyTrigger_position = Math.round( window.$stickyTrigger.offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice;

					if ( 2 == window.$sticky_header_type ) {
						if ( 'menu_and_logo' === avadaVars.header_sticky_type2_layout || ( window.$media_query_test_4 && 'modern' === avadaVars.mobile_menu_design ) ) {
							window.$stickyTrigger = jQuery( '.puur-sticky-header-wrapper' );
						} else {
							window.$stickyTrigger = jQuery( '.puur-secondary-main-menu' );
						}
						window.$stickyTrigger_position = Math.round( window.$stickyTrigger.offset().top )  - window.$wpadminbarHeight - window.$woo_store_notice;
					}

					// Set sticky header height for header v4 and v5
					if ( 'modern' === avadaVars.mobile_menu_design && 2 == window.$sticky_header_type && ( window.$media_query_test_4 || 'menu_and_logo' === avadaVars.header_sticky_type2_layout ) ) {

						// Refresh header height on scroll
						window.$headerHeight = jQuery( window.$stickyTrigger ).outerHeight();
						window.$scrolled_header_height = window.$headerHeight;
						jQuery( '.puur-header-sticky-height' ).css( 'height', window.$scrolled_header_height ).show();
					}
				}

				if ( jQuery( window ).scrollTop() > window.$stickyTrigger_position ) { // Sticky header mode

					if ( false === $stickyHeaderScrolled ) {
						window.$woo_store_notice = ( jQuery( '.demo_store' ).length ) ? jQuery( '.demo_store' ).outerHeight() : 0;

						jQuery( '.puur-header-wrapper' ).addClass( 'puur-is-sticky' );
						jQuery( window.$stickyTrigger ).css( 'top', window.$wpadminbarHeight + window.$woo_store_notice );
						$logo = jQuery( '.puur-logo img:visible' );

						// Hide all mobile menus
						if ( 'modern' === avadaVars.mobile_menu_design ) {
							jQuery( '.puur-header, .puur-secondary-main-menu' ).find( '.puur-mobile-nav-holder' ).hide();
							jQuery( '.puur-secondary-main-menu .puur-main-menu-search .puur-custom-menu-item-contents' ).hide();
						} else {
							jQuery( '.puur-header, .puur-secondary-main-menu' ).find( '.puur-mobile-nav-holder > ul' ).hide();
						}

						if ( 'modern' === avadaVars.mobile_menu_design ) {

							// Hide normal mobile menu if sticky menu is set in sticky header
							if ( jQuery( '.puur-is-sticky' ).length >= 1 && jQuery( '.puur-mobile-sticky-nav-holder' ).length >= 1 && jQuery( '.puur-mobile-nav-holder' ).is( ':visible' ) ) {
								jQuery( '.puur-mobile-nav-holder' ).not( '.puur-mobile-sticky-nav-holder' ).hide();
							}
						}

						if ( 'boxed' === avadaVars.layout_mode ) {
							jQuery( window.$stickyTrigger ).css( 'max-width', jQuery( '#wrapper' ).outerWidth() );

						}

						if ( 1 == window.$sticky_header_type ) {

							// Animate Header Height
							if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
								if ( window.$headerHeight == window.$initial_desktop_header_height ) {
									jQuery( window.$stickyTrigger ).stop( true, true ).animate({
										height: window.$scrolled_header_height
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
										jQuery( this ).css( 'overflow', 'visible' );
									} });

									jQuery( '.puur-header-sticky-height' ).show();

									jQuery( '.puur-header-sticky-height' ).stop( true, true ).animate({
										height: window.$scrolled_header_height
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
										jQuery( this ).css( 'overflow', 'visible' );
									} });
								} else {
									jQuery( '.puur-header-sticky-height' ).show();
								}
							} else {
								jQuery( '.puur-header-sticky-height' ).css( 'height', window.$scrolled_header_height ).show();
							}

							// Add sticky shadow
							setTimeout( function() {
								jQuery( '.puur-header' ).addClass( 'puur-sticky-shadow' );
							}, 150 );

							if ( '1' == avadaVars.sticky_header_shrinkage && window.$headerHeight == window.$initial_desktop_header_height ) {

								// Animate header padding
								jQuery( window.$stickyTrigger ).find( '.puur-row' ).stop( true, true ).animate({
									'padding-top': 0,
									'padding-bottom': 0
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });

								// Animate Logo
								if ( $logo ) {
									$scrolledLogoHeight = $logo.height();

									$logo.attr( 'data-logo-height', $logo.height() );
									$logo.attr( 'data-logo-width', $logo.width() );

									if (  $scrolledLogoHeight < window.$scrolled_header_height - 10 ) {
										$scrolledLogoContainerMargin = ( window.$scrolled_header_height - $scrolledLogoHeight ) / 2;
									} else {
										$scrolledLogoHeight = window.$scrolled_header_height - 10;
										$scrolledLogoContainerMargin = 5;
									}

									$logo.stop( true, true ).animate({
										'height': $scrolledLogoHeight
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
										jQuery( this ).css( 'display', '' );
									}, step: function() {
										jQuery( this ).css( 'display', '' );
									} });
								}

								jQuery( '.puur-logo' ).stop( true, true ).animate({
									'margin-top': $scrolledLogoContainerMargin,
									'margin-bottom': $scrolledLogoContainerMargin
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });

								// Animate Menu Height
								if ( ! jQuery( '.puur-header-v6' ).length ) {
									jQuery( '.puur-main-menu > ul > li' ).not( '.puur-middle-logo-menu-logo' ).find( '> a' ).stop( true, true ).animate({
										height: window.$scrolled_header_height - $menuBorderHeight,
										'line-height': window.$scrolled_header_height - $menuBorderHeight
									}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });
								}
							}

						}

						if ( 2 == window.$sticky_header_type ) {
							if ( 'menu_and_logo' === avadaVars.header_sticky_type2_layout ) {
								jQuery( window.$stickyTrigger ).css( 'height', '' );

								// Refresh header height on scroll
								window.$headerHeight = jQuery( window.$stickyTrigger ).outerHeight();
								window.$scrolled_header_height = window.$headerHeight;
								jQuery( window.$stickyTrigger ).css( 'height', window.$scrolled_header_height );
								jQuery( '.puur-header-sticky-height' ).css( 'height', window.$scrolled_header_height );
							}

							jQuery( '.puur-header-sticky-height' ).show();
						}

						if ( 3 == window.$sticky_header_type && Modernizr.mq( 'only screen and (max-width:' + avadaVars.side_header_break_point + 'px)' ) ) {
							jQuery( '#side-header-sticky' ).css({
								height: jQuery( '#side-header' ).outerHeight()
							});

							jQuery( '#side-header' ).css({
								position: 'fixed',
								top: window.$wpadminbarHeight + window.$woo_store_notice
							}).addClass( 'puur-is-sticky' );
						}

						$stickyHeaderScrolled = true;
					}
				} else if ( jQuery( window ).scrollTop() <= window.$stickyTrigger_position ) {
					jQuery( '.puur-header-wrapper' ).removeClass( 'puur-is-sticky' );
					jQuery( '.puur-header' ).removeClass( 'puur-sticky-shadow' );
					$logo = jQuery( '.puur-logo img:visible' );

					if ( 'modern' === avadaVars.mobile_menu_design ) {

						// Hide sticky menu if sticky menu is set in normal header
						if ( 0 === jQuery( '.puur-is-sticky' ).length && jQuery( '.puur-mobile-sticky-nav-holder' ).length >= 1 && jQuery( '.puur-mobile-nav-holder' ).is( ':visible' ) ) {
							jQuery( '.puur-mobile-sticky-nav-holder' ).hide();
						}
					}

					if ( 1 == window.$sticky_header_type ) {

						// Animate Header Height to Original Size
						if ( ! Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {

							// Done to make sure that resize event while sticky is active doesn't lead to no animation on scroll up
							if ( 1 == window.$sticky_header_type && 65 == window.$headerHeight ) {
								window.$headerHeight = window.$initial_desktop_header_height;
							}

							if ( window.$headerHeight == window.$initial_desktop_header_height ) {
								jQuery( window.$stickyTrigger ).stop( true, true ).animate({
									height: window.$headerHeight
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
									jQuery( this ).css( 'overflow', 'visible' );
								}, step: function() {
									jQuery( this ).css( 'overflow', 'visible' );
								} });

								jQuery( '.puur-header-sticky-height' ).stop( true, true ).animate({
									height: window.$headerHeight
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
									jQuery( this ).css( 'overflow', 'visible' );
								}, step: function() {
									jQuery( this ).css( 'overflow', 'visible' );
								} });
							} else {
								if ( jQuery( '.puur-header-v7' ).length ) {
									jQuery( '.puur-header-sticky-height' ).css( 'height', jQuery( '.puur-middle-logo-menu' ).height() );
									jQuery( '.puur-header' ).css( 'height', jQuery( '.puur-middle-logo-menu' ).height() );
								}
							}
							jQuery( '.puur-header-sticky-height' ).hide();
						} else {
							jQuery( '.puur-header-sticky-height' ).hide().css( 'height', window.$headerHeight + $menuBorderHeight );
						}

						if ( '1' == avadaVars.sticky_header_shrinkage && window.$headerHeight == window.$initial_desktop_header_height ) {

							// Animate header padding to Original Size
							jQuery( window.$stickyTrigger ).find( '.puur-row' ).stop( true, true ).animate({
								'padding-top': avadaVars.header_padding_top,
								'padding-bottom': avadaVars.header_padding_bottom
							}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });

							// Animate Logo to Original Size
							if ( $logo ) {
								$logo.stop( true, true ).animate({
									'height': $logo.data( 'logo-height' )
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic', complete: function() {
									jQuery( this ).css( 'display', '' );
									jQuery( '.puur-sticky-logo-1x, .puur-sticky-logo-2x' ).css( 'height', '' );
								} });
							}

							jQuery( '.puur-logo' ).stop( true, true ).animate({
								'margin-top': jQuery( '.puur-logo' ).data( 'margin-top' ),
								'margin-bottom': jQuery( '.puur-logo' ).data( 'margin-bottom' )
							}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });

							// Animate Menu Height to Original Size
							if ( ! jQuery( '.puur-header-v6' ).length ) {
								jQuery( '.puur-main-menu > ul > li' ).not( '.puur-middle-logo-menu-logo' ).find( '> a' ).stop( true, true ).animate({
									height: $menuHeight,
									'line-height': $menuHeight
								}, { queue: false, duration: $animationDuration, easing: 'easeOutCubic' });
							}
						}
					}

					if ( 2 == window.$sticky_header_type ) {
						jQuery( '.puur-header-sticky-height' ).hide();

						if ( 'menu_and_logo' == avadaVars.header_sticky_type2_layout ) {
							jQuery( window.$stickyTrigger ).css( 'height', '' );

							// Refresh header height on scroll
							window.$headerHeight = jQuery( window.$stickyTrigger ).outerHeight();
							window.$scrolled_header_height = window.$headerHeight;
							jQuery( window.$stickyTrigger ).css( 'height', window.$scrolled_header_height );
							jQuery( '.puur-header-sticky-height' ).css( 'height', window.$scrolled_header_height );
						}

					}

					if ( 3 == window.$sticky_header_type && Modernizr.mq( 'only screen and (max-width:' + avadaVars.side_header_break_point + 'px)' ) ) {
						jQuery( '#side-header-sticky' ).css({
							height: ''
						});

						jQuery( '#side-header' ).css({
							'position': ''
						}).removeClass( 'puur-is-sticky' );
					}

					$stickyHeaderScrolled = false;
				}

			}
		});

		jQuery( window ).trigger( 'scroll' ); // Trigger scroll for page load

	}

	// Adjust mobile menu when it falls to 2 rows
	window.mobileMenuSepAdded = false;

	function adjustMobileMenuSettings() {
		var menuWidth = 0;

		if ( Modernizr.mq( 'only screen and (max-width: ' + avadaVars.side_header_break_point + 'px)' ) ) {
			jQuery( '.puur-secondary-menu > ul' ).children( 'li' ).each( function() {
				menuWidth += jQuery( this ).outerWidth( true ) + 2;
			});

			if ( menuWidth > jQuery( window ).width() && jQuery( window ).width() > 318 ) {
				if ( ! window.mobileMenuSepAdded ) {
					jQuery( '.puur-secondary-menu > ul' ).append( '<div class="puur-mobile-menu-sep"></div>' );
					jQuery( '.puur-secondary-menu > ul' ).css( 'position', 'relative' );
					jQuery( '.puur-mobile-menu-sep' ).css( {
						'position': 'absolute',
						'top': jQuery( '.puur-secondary-menu > ul > li' ).height() - 1 + 'px',
						'width': '100%',
						'border-bottom-width': '1px',
						'border-bottom-style': 'solid'
					});
					window.mobileMenuSepAdded = true;
				}
			} else {
				jQuery( '.puur-secondary-menu > ul' ).css( 'position', '' );
				jQuery( '.puur-secondary-menu > ul' ).find( '.puur-mobile-menu-sep' ).remove();
				window.mobileMenuSepAdded = false;
			}
		} else {
			jQuery( '.puur-secondary-menu > ul' ).css( 'position', '' );
			jQuery( '.puur-secondary-menu > ul' ).find( '.puur-mobile-menu-sep' ).remove();
			window.mobileMenuSepAdded = false;
		}
	}

	adjustMobileMenuSettings();

	jQuery( window ).on( 'resize', function() {
		adjustMobileMenuSettings();
	});
});

// Reintalize scripts after ajax
jQuery( document ).ajaxComplete( function() {

	var $stickyTrigger,
	    $menuBorderHeight,
	    $menuHeight;

	jQuery( window ).trigger( 'scroll' ); // Trigger scroll for page load

	if ( 1 <= jQuery( '.puur-is-sticky' ).length && window.$stickyTrigger && 3 != window.$sticky_header_type ) {
		$stickyTrigger    = jQuery( window.$stickyTrigger );
		$menuBorderHeight = parseInt( avadaVars.nav_highlight_border );
		$menuHeight       = $stickyTrigger.height() - $menuBorderHeight;

		if ( 2 == window.$sticky_header_type ) {
			$stickyTrigger = jQuery( '.puur-secondary-main-menu' );
			$menuHeight    = $stickyTrigger.find( '.puur-main-menu > ul > li > a' ).height();
		}

		jQuery( '.puur-main-menu > ul > li' ).not( '.puur-middle-logo-menu-logo' ).find( '> a' ).css({
			height: $menuHeight + 'px',
			'line-height': $menuHeight + 'px'
		});
	}
});


jQuery(document).ready(function(){
    jQuery('.puur-slider-container').css('height', jQuery(window).height());
    jQuery('.puur-slider-container').css('max-height', jQuery(window).height());
    jQuery('.tfs-slider.flexslider').css('height', jQuery(window).height());
    
});
jQuery(window).resize(function(){
    jQuery('.puur-slider-container').css('height', jQuery(window).height());
    jQuery('.puur-slider-container').css('max-height', jQuery(window).height());
    jQuery('.tfs-slider.flexslider').css('height', jQuery(window).height());
});


jQuery(document).ready(function(){
    jQuery('.equal').each(function(){  
        var highestBox = 0;

        jQuery(this).find('.eq-block').each(function(){
            if(jQuery(this).height() > highestBox){  
                highestBox = jQuery(this).height();  
            }
        })

        jQuery(this).find('.eq-block').height(highestBox);
    }); 

    var mainwidth = jQuery('.main-flex').width();
    jQuery('.tfs-slider.flexslider').css('max-width', jQuery('.main-flex').width());    
});

// CF7 Redirects
document.addEventListener( 'wpcf7submit', function( event ) {
    if ( '14194' == event.detail.contactFormId ) { // CF7 Contactformulier - 14194
		location = 'https://puurnatal.nl/contactformulier-verzonden/';
	}
	if ( '14241' == event.detail.contactFormId ) { // CF7 Zwangerschap - 14241
		location = 'https://puurnatal.nl/zwangerschap-aangemeld/';
	}
	if ( '14238' == event.detail.contactFormId ) { // CF7 Nazorg - 14238
		location = 'https://puurnatal.nl/nazorg-aangemeld/';
	}
	if ( '14234' == event.detail.contactFormId ) { // CF7 Kinderwens - 14234
		location = 'https://puurnatal.nl/kinderwensspreekuur-aangemeld/';
	}
	if ( '14231' == event.detail.contactFormId ) { // CF7 Kennismakingsgesprek - 14231
		location = 'https://puurnatal.nl/kennismakingsgesprek-aangemeld/';
	}
}, false );
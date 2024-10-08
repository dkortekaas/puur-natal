/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.2
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// SCROLLSPY CLASS DEFINITION
	// ==========================

	function ScrollSpy(element, options) {
		var process  = $.proxy(this.process, this);

		this.$body          = $('body');
		this.$scrollElement = $(element).is('body') ? $(window) : $(element);
		this.options        = $.extend({}, ScrollSpy.DEFAULTS, options);
		this.selector       = (this.options.target || '') + ' li > a';
		this.offsets        = [];
		this.targets        = [];
		this.activeTarget   = null;
		this.scrollHeight   = 0;

		this.$scrollElement.on('scroll.bs.scrollspy', process);
		this.refresh();
		this.process();
	}

	ScrollSpy.VERSION  = '3.3.2';

	ScrollSpy.DEFAULTS = {
		offset: 10
	};

	ScrollSpy.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	};

	ScrollSpy.prototype.refresh = function () {
		var offsetMethod = 'offset';
		var offsetBase   = 0;

		if (!$.isWindow(this.$scrollElement[0])) {
			offsetMethod = 'position';
			offsetBase   = this.$scrollElement.scrollTop();
		};

		this.offsets = [];
		this.targets = [];
		this.scrollHeight = this.getScrollHeight();

		var self     = this;

		this.$body
			.find(this.selector)
			.map(function () {
				var $el   = $(this);
				var href  = $el.data('target') || $el.attr('href');
				var $href = /^#./.test(href) && $(href);

				return ($href
					&& $href.length
					&& $href.is(':visible')
					&& [[$href[offsetMethod]().top + offsetBase, href]]) || null;
			})
			.sort(function (a, b) { return a[0] - b[0]; })
			.each(function () {
				self.offsets.push(this[0]);
				self.targets.push(this[1]);
			});
	};

	ScrollSpy.prototype.process = function () {
		var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset;
		var scrollHeight = this.getScrollHeight();
		var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height();
		var offsets      = this.offsets;
		var targets      = this.targets;
		var activeTarget = this.activeTarget;
		var i;

		if (this.scrollHeight != scrollHeight) {
			this.refresh();
		};

		if (scrollTop >= maxScroll) {
			return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
		};

		if (activeTarget && scrollTop < offsets[0]) {
			this.activeTarget = null;
			return this.clear();
		};

		for (i = offsets.length; i--;) {
			activeTarget != targets[i]
				&& scrollTop >= offsets[i]
				&& (!offsets[i + 1] || scrollTop <= offsets[i + 1])
				&& this.activate(targets[i]);
		};
	};

	ScrollSpy.prototype.activate = function (target) {
		this.activeTarget = target;

		this.clear();

	// ThemeFusion edit for Avada theme: added the full url anchors to the selector to make sure highlighting works correctly
	var $current_href = window.location.href.split( '#' ),
		$current_path = ( $current_href[0].charAt( $current_href[0].length - 1 ) == '/' ) ? $current_href[0] : $current_href[0] + '/';

	var selector = this.selector +
		'[data-target="' + target + '"],' +
		this.selector + '[href="' + target + '"],' +
		this.selector + '[href="' + $current_path + target + '"]';

	var active = $(selector)
		.parents('li')
		.addClass('current-menu-item');

	if (active.parent('.sub-menu').length) {
		active = active
		.closest('li.puur-dropdown-menu')
		.addClass('current-menu-item');
	};

		active.trigger('activate.bs.scrollspy');
	};

	ScrollSpy.prototype.clear = function () {
		$(this.selector)
			.parentsUntil(this.options.target, '.current-menu-item')
			.removeClass('current-menu-item');

	$(this.selector).parentsUntil(this.options.target, '.current-menu-parent').removeClass( 'current-menu-parent' );

	};


	// SCROLLSPY PLUGIN DEFINITION
	// ===========================

	function Plugin(option) {
		return this.each(function () {
			var $this   = $(this);
			var data    = $this.data('bs.scrollspy');
			var options = typeof option == 'object' && option;

			if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};

	var old = $.fn.scrollspy;

	$.fn.scrollspy             = Plugin;
	$.fn.scrollspy.Constructor = ScrollSpy;


	// SCROLLSPY NO CONFLICT
	// =====================

	$.fn.scrollspy.noConflict = function () {
		$.fn.scrollspy = old;
		return this;
	};


	// SCROLLSPY DATA-API
	// ==================

	$(window).on('load.bs.scrollspy.data-api', function () {
		$('[data-spy="scroll"]').each(function () {
			var $spy = $(this);
			Plugin.call($spy, $spy.data());
		});
	});

}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false; // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () { called = true });
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) };
    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();

    if (!$.support.transition) return;

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// COLLAPSE PUBLIC CLASS DEFINITION
	// ================================

	var Collapse = function (element, options) {
	this.$element	  = $(element);
	this.options	   = $.extend({}, Collapse.DEFAULTS, options);
	this.transitioning = null;

	if (this.options.parent) this.$parent = $(this.options.parent);
	if (this.options.toggle) this.toggle();
	};

	Collapse.DEFAULTS = {
	toggle: true
	};

	Collapse.prototype.dimension = function () {
	var hasWidth = this.$element.hasClass('width');
	return hasWidth ? 'width' : 'height';
	};

	Collapse.prototype.show = function () {
	if (this.transitioning || this.$element.hasClass('in')) return;

	var startEvent = $.Event('show.bs.collapse');
	this.$element.trigger(startEvent);
	if (startEvent.isDefaultPrevented()) return;

	var actives = this.$parent && this.$parent.find('> .puur-panel > .in');

	if (actives && actives.length) {
		var hasData = actives.data('bs.collapse');
		if (hasData && hasData.transitioning) return;
		actives.collapse('hide');
		hasData || actives.data('bs.collapse', null)
	}

	var dimension = this.dimension();

	this.$element
		.removeClass('collapse')
		.addClass('collapsing')
		[dimension](0);

	this.transitioning = 1;

	var complete = function () {
		this.$element
		.removeClass('collapsing')
		.addClass('collapse in')
		[dimension]('auto');
		this.transitioning = 0;
		this.$element.trigger('shown.bs.collapse');
	};

	if (!$.support.transition) return complete.call(this);

	var scrollSize = $.camelCase(['scroll', dimension].join('-'));

	this.$element
		.one($.support.transition.end, $.proxy(complete, this))
		.emulateTransitionEnd(350)
		[dimension](this.$element[0][scrollSize]);
	};

	Collapse.prototype.hide = function () {
	if (this.transitioning || !this.$element.hasClass('in')) return;

	var startEvent = $.Event('hide.bs.collapse');
	this.$element.trigger(startEvent);
	if (startEvent.isDefaultPrevented()) return;

	var dimension = this.dimension();

	this.$element
		[dimension](this.$element[dimension]())
		[0].offsetHeight;

	this.$element
		.addClass('collapsing')
		.removeClass('collapse')
		.removeClass('in');

	this.transitioning = 1;

	var complete = function () {
		this.transitioning = 0;
		this.$element
		.trigger('hidden.bs.collapse')
		.removeClass('collapsing')
		.addClass('collapse');
	};

	if (!$.support.transition) return complete.call(this);

	this.$element
		[dimension](0)
		.one($.support.transition.end, $.proxy(complete, this))
		.emulateTransitionEnd(350);
	};

	Collapse.prototype.toggle = function () {
	this[this.$element.hasClass('in') ? 'hide' : 'show']();
	};


	// COLLAPSE PLUGIN DEFINITION
	// ==========================

	var old = $.fn.collapse;

	$.fn.collapse = function (option) {
	return this.each(function () {
		var $this   = $(this);
		var data	= $this.data('bs.collapse');
		var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

		if (!data && options.toggle && option == 'show') option = !option;
		if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)));
		if (typeof option == 'string') data[option]();
	})
	};

	$.fn.collapse.Constructor = Collapse;


	// COLLAPSE NO CONFLICT
	// ====================

	$.fn.collapse.noConflict = function () {
	$.fn.collapse = old;
	return this;
	};


	// COLLAPSE DATA-API
	// =================

	$(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
	var $this   = $(this), href;
	var target  = $this.attr('data-target')
		|| e.preventDefault()
		|| (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
	var $target = $(target);
	var data	= $target.data('bs.collapse');
	var option  = data ? 'toggle' : $this.data();
	var parent  = $this.attr('data-parent');
	var $parent = parent && $(parent);

	if (!data || !data.transitioning) {
		if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed');
		$this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed');
	}

	$target.collapse(option);
	});

	jQuery('click.bs.collapse.data-api, [data-toggle=collapse]').each(function() {
		var parent = jQuery(this).attr('data-parent');

	if(jQuery(this).parents('.panel-group').length == 0) {
		var random = Math.floor((Math.random() * 10) + 1);
		var single_panel = jQuery(this).parents('.puur-panel');
		jQuery(this).attr('data-parent', 'accordian-' + random);
		jQuery(single_panel).wrap('<div class="accordian puur-accordian puur-single-accordian"><div class="panel-group" id="accordion-' + random + '"></div></div>');
	}
	});

}(jQuery);


/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// MODAL CLASS DEFINITION
	// ======================

	var Modal = function (element, options) {
	this.options   = options;
	this.$element  = $(element);
	this.$backdrop = '';
	this.isShown   = null;

	if (this.options.remote) {
		this.$element
		.find('.modal-content')
		.load(this.options.remote, $.proxy(function () {
			this.$element.trigger('loaded.bs.modal');
		}, this));
	}
	};

	Modal.DEFAULTS = {
	backdrop: true,
	keyboard: true,
	show: true
	};

	Modal.prototype.toggle = function (_relatedTarget) {
	return this[!this.isShown ? 'show' : 'hide'](_relatedTarget);
	};

	Modal.prototype.show = function (_relatedTarget) {
	var that = this;
	var e	= $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

	this.$element.trigger(e);

	if (this.isShown || e.isDefaultPrevented()) return;

	this.isShown = true;

	this.escape();

	this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

	this.backdrop(function () {
		var transition = $.support.transition && that.$element.hasClass('fade');

		if (!that.$element.parent().length) {
		that.$element.appendTo(document.body); // don't move modals dom position
		}

		that.$element
		.show()
		.scrollTop(0);

		if (transition) {
		that.$element[0].offsetWidth; // force reflow
		}

		that.$element
		.addClass('in')
		.attr('aria-hidden', false);

		that.enforceFocus();

		var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

		transition ?
		that.$element.find('.modal-dialog') // wait for modal to slide in
			.one($.support.transition.end, function () {
			that.$element.focus().trigger(e);
			})
			.emulateTransitionEnd(300) :
		that.$element.focus().trigger(e);
	})
	};

	Modal.prototype.hide = function (e) {
	if (e) e.preventDefault();

	e = $.Event('hide.bs.modal');

	this.$element.trigger(e);

	if (!this.isShown || e.isDefaultPrevented()) return;

	this.isShown = false;

	this.escape();

	$(document).off('focusin.bs.modal');

	this.$element
		.removeClass('in')
		.attr('aria-hidden', true)
		.off('click.dismiss.bs.modal');

	$.support.transition && this.$element.hasClass('fade') ?
		this.$element
		.one($.support.transition.end, $.proxy(this.hideModal, this))
		.emulateTransitionEnd(300) :
		this.hideModal();
	};

	Modal.prototype.enforceFocus = function () {
	$(document)
		.off('focusin.bs.modal') // guard against infinite focus loop
		.on('focusin.bs.modal', $.proxy(function (e) {
		if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
			this.$element.focus();
		}
		}, this));
	};

	Modal.prototype.escape = function () {
	if (this.isShown && this.options.keyboard) {
		this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
		e.which == 27 && this.hide();
		}, this));
	} else if (!this.isShown) {
		this.$element.off('keyup.dismiss.bs.modal');
	}
	};

	Modal.prototype.hideModal = function () {
	var that = this;
	this.$element.hide();
	this.backdrop(function () {
		that.removeBackdrop();
		that.$element.trigger('hidden.bs.modal');
	});
	};

	Modal.prototype.removeBackdrop = function () {
	this.$backdrop && this.$backdrop.remove();
	this.$backdrop = null;
	};

	Modal.prototype.backdrop = function (callback) {
	var animate = this.$element.hasClass('fade') ? 'fade' : '';

	if (this.isShown && this.options.backdrop) {
		var doAnimate = $.support.transition && animate;

		this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
		.appendTo(document.body);

		this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
		if (e.target !== e.currentTarget) return;
		this.options.backdrop == 'static'
			? this.$element[0].focus.call(this.$element[0])
			: this.hide.call(this);
		}, this));

		if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

		this.$backdrop.addClass('in');

		if (!callback) return;

		doAnimate ?
		this.$backdrop
			.one($.support.transition.end, callback)
			.emulateTransitionEnd(150) :
		callback();

	} else if (!this.isShown && this.$backdrop) {
		this.$backdrop.removeClass('in');

		$.support.transition && this.$element.hasClass('fade') ?
		this.$backdrop
			.one($.support.transition.end, callback)
			.emulateTransitionEnd(150) :
		callback();

	} else if (callback) {
		callback();
	}
	};


	// MODAL PLUGIN DEFINITION
	// =======================

	var old = $.fn.modal;

	$.fn.modal = function (option, _relatedTarget) {
	return this.each(function () {
		var $this   = $(this);
		var data	= $this.data('bs.modal');
		var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

		if (!data) $this.data('bs.modal', (data = new Modal(this, options)));
		if (typeof option == 'string') data[option](_relatedTarget);
		else if (options.show) data.show(_relatedTarget);
	});
	};

	$.fn.modal.Constructor = Modal;


	// MODAL NO CONFLICT
	// =================

	$.fn.modal.noConflict = function () {
	$.fn.modal = old;
	return this;
	};


	// MODAL DATA-API
	// ==============

	$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	var $this   = $(this);
	var href	= $this.attr('href');
	var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))); //strip for ie7
	var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

	if ($this.is('a')) e.preventDefault();

	$target
		.modal(option, this)
		.one('hide', function () {
		$this.is(':visible') && $this.focus();
		});
	});

	$(document)
	.on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
	.on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') });

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// TAB CLASS DEFINITION
	// ====================

	var Tab = function (element) {
	this.element = $(element);
	};

	Tab.prototype.show = function () {
	var $this	= this.element;
	var $ul	  = $this.closest('ul:not(.dropdown-menu)');
	var selector = $this.data('target');

	if (!selector) {
		selector = $this.attr('href');
		selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); //strip for ie7
	}

	if ($this.parent('li').hasClass('active')) return;

	var previous = $ul.find('.active:last a')[0];
	var e		= $.Event('show.bs.tab', {
		relatedTarget: previous
	});

	$this.trigger(e);

	if (e.isDefaultPrevented()) return;

	var $target = $(selector);

	this.activate($this.parent('li'), $ul);

	this.activate($target, $target.parent(), function () {
		$this.trigger({
		type: 'shown.bs.tab',
		relatedTarget: previous
		});
	});
	};

	Tab.prototype.activate = function (element, container, callback) {
		var $active	= container.find('> .active');
		var transition = callback
			&& $.support.transition
			&& $active.hasClass('fade');

		function next() {
			$active
			.removeClass('active')
			.find('> .dropdown-menu > .active')
			.removeClass('active');

			element.addClass('active');

			// ThemeFusion edit for Avada theme: needed for mobile tabs setup
			if ( element.parent( '.nav-tabs' ).length ) {
				element.parents( '.puur-tabs' ).find( '.nav' ).find( 'a[href="' + element.find( 'a' ).attr( 'href' ) + '"]' ).parent().addClass( 'active' );
			}

			if (transition) {
				element[0].offsetWidth; // reflow for transition
				element.addClass('in');
			} else {
				element.removeClass('fade');
			}

			if (element.parent('.dropdown-menu')) {
				element.closest('li.dropdown').addClass('active');
			}

			callback && callback();
		}

		transition ?
			$active
			.one($.support.transition.end, next)
			.emulateTransitionEnd(150) :
			next();

		$active.removeClass('in');
	};


	// TAB PLUGIN DEFINITION
	// =====================

	var old = $.fn.tab;

	$.fn.tab = function ( option ) {
	return this.each(function () {
		var $this = $(this);
		var data  = $this.data('bs.tab');

		if (!data) $this.data('bs.tab', (data = new Tab(this)));
		if (typeof option == 'string') data[option]();
	});
	};

	$.fn.tab.Constructor = Tab;


	// TAB NO CONFLICT
	// ===============

	$.fn.tab.noConflict = function () {
	$.fn.tab = old;
	return this;
	};


	// TAB DATA-API
	// ============

	$(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
	e.preventDefault();
	$(this).tab('show');
	});

}(jQuery);


/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// TOOLTIP PUBLIC CLASS DEFINITION
	// ===============================

	var Tooltip = function (element, options) {
		this.type       = null;
		this.options    = null;
		this.enabled    = null;
		this.timeout    = null;
		this.hoverState = null;
		this.$element   = null;
		this.inState    = null;

		this.init('tooltip', element, options);
	};

	Tooltip.VERSION  = '3.3.5';

	Tooltip.TRANSITION_DURATION = 150;

	Tooltip.DEFAULTS = {
		animation: true,
		placement: 'top',
		selector: false,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: 'hover focus',
		title: '',
		delay: 0,
		html: false,
		container: false,
		viewport: {
			selector: 'body',
			padding: 0
		}
	};

	Tooltip.prototype.init = function (type, element, options) {
		this.enabled   = true;
		this.type      = type;
		this.$element  = $(element);
		this.options   = this.getOptions(options);
		this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport));
		this.inState   = { click: false, hover: false, focus: false };

		if (this.$element[0] instanceof document.constructor && !this.options.selector) {
			throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
		}

		var triggers = this.options.trigger.split(' ');

		for (var i = triggers.length; i--;) {
			var trigger = triggers[i];

			if (trigger == 'click') {
				this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
			} else if (trigger != 'manual') {
				var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin';
				var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

				this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
				this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
			}
		}

		this.options.selector ?
			(this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
			this.fixTitle();
	};

	Tooltip.prototype.getDefaults = function () {
		return Tooltip.DEFAULTS;
	};

	Tooltip.prototype.getOptions = function (options) {
		options = $.extend({}, this.getDefaults(), this.$element.data(), options);

		if (options.delay && typeof options.delay == 'number') {
			options.delay = {
				show: options.delay,
				hide: options.delay
			}
		}

		return options;
	};

	Tooltip.prototype.getDelegateOptions = function () {
		var options  = {};
		var defaults = this.getDefaults();

		this._options && $.each(this._options, function (key, value) {
			if (defaults[key] != value) options[key] = value;
		});

		return options;
	};

	Tooltip.prototype.enter = function (obj) {
		var self = obj instanceof this.constructor ?
			obj : $(obj.currentTarget).data('bs.' + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data('bs.' + this.type, self);
		}

		if (obj instanceof $.Event) {
			self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
		}

		if (self.tip().hasClass('in') || self.hoverState == 'in') {
			self.hoverState = 'in';
			return;
		}

		clearTimeout(self.timeout);

		self.hoverState = 'in';

		if (!self.options.delay || !self.options.delay.show) return self.show();

		self.timeout = setTimeout(function () {
			if (self.hoverState == 'in') { self.show(); }
		}, self.options.delay.show);
	};

	Tooltip.prototype.isInStateTrue = function () {
		for (var key in this.inState) {
			if (this.inState[key]) { return true; }
		};

		return false;
	};

	Tooltip.prototype.leave = function (obj) {
		var self = obj instanceof this.constructor ?
			obj : $(obj.currentTarget).data('bs.' + this.type);

		if (!self) {
			self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
			$(obj.currentTarget).data('bs.' + this.type, self);
		}

		if (obj instanceof $.Event) {
			self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
		}

		if (self.isInStateTrue()) return;

		clearTimeout(self.timeout);

		self.hoverState = 'out';

		if (!self.options.delay || !self.options.delay.hide) return self.hide();

		self.timeout = setTimeout(function () {
			if (self.hoverState == 'out') self.hide();
		}, self.options.delay.hide);
	};

	Tooltip.prototype.show = function () {
		var e = $.Event('show.bs.' + this.type);

		if (this.hasContent() && this.enabled) {
			this.$element.trigger(e);

			var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (e.isDefaultPrevented() || !inDom) return;
			var that = this;

			var $tip = this.tip();

			var tipId = this.getUID(this.type);

			this.setContent();
			$tip.attr('id', tipId);
			this.$element.attr('aria-describedby', tipId);

			if (this.options.animation) $tip.addClass('fade');

			var placement = typeof this.options.placement == 'function' ?
				this.options.placement.call(this, $tip[0], this.$element[0]) :
				this.options.placement;

			var autoToken = /\s?auto?\s?/i;
			var autoPlace = autoToken.test(placement);
			if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

			$tip
				.detach()
				.css({ top: 0, left: 0, display: 'block' })
				.addClass(placement)
				.data('bs.' + this.type, this)
				.addClass(this.$element.data('class')); // ThemeFusion edit for Avada theme

			this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
			this.$element.trigger('inserted.bs.' + this.type);

			var pos          = this.getPosition();
			var actualWidth  = $tip[0].offsetWidth;
			var actualHeight = $tip[0].offsetHeight;

			if (autoPlace) {
				var orgPlacement = placement;
				var viewportDim = this.getPosition(this.$viewport);

				placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
										placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
										placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
										placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
										placement;

				$tip
					.removeClass(orgPlacement)
					.addClass(placement);
			}

			var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

			this.applyPlacement(calculatedOffset, placement);

			var complete = function () {
				var prevHoverState = that.hoverState;
				that.$element.trigger('shown.bs.' + that.type);
				that.hoverState = null;

				if (prevHoverState == 'out') that.leave(that);
			};

			$.support.transition && this.$tip.hasClass('fade') ?
				$tip
					.one('bsTransitionEnd', complete)
					.emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
				complete();
		}
	};

	Tooltip.prototype.applyPlacement = function (offset, placement) {
		var $tip   = this.tip();
		var width  = $tip[0].offsetWidth;
		var height = $tip[0].offsetHeight;

		// manually read margins because getBoundingClientRect includes difference
		var marginTop = parseInt($tip.css('margin-top'), 10);
		var marginLeft = parseInt($tip.css('margin-left'), 10);

		// we must check for NaN for ie 8/9
		if (isNaN(marginTop))  marginTop  = 0;
		if (isNaN(marginLeft)) marginLeft = 0;

		offset.top  += marginTop;
		offset.left += marginLeft;

		// $.fn.offset doesn't round pixel values
		// so we use setOffset directly with our own function B-0
		$.offset.setOffset($tip[0], $.extend({
			using: function (props) {
				$tip.css({
					top: Math.round(props.top),
					left: Math.round(props.left)
				});
			}
		}, offset), 0);

		$tip.addClass('in');

		// check to see if placing tip in new offset caused the tip to resize itself
		var actualWidth  = $tip[0].offsetWidth;
		var actualHeight = $tip[0].offsetHeight;

		if (placement == 'top' && actualHeight != height) {
			offset.top = offset.top + height - actualHeight;
		}

		var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

		if (delta.left) {
		offset.left += delta.left;
	} else {
			offset.top += delta.top;
	}

		var isVertical          = /top|bottom/.test(placement);
		var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
		var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

		$tip.offset(offset);
		this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
	};

	Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
		this.arrow()
			.css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
			.css(isVertical ? 'top' : 'left', '');
	};

	Tooltip.prototype.setContent = function () {
		var $tip  = this.tip();
		var title = this.getTitle();

		$tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
		$tip.removeClass('fade in top bottom left right');
	};

	Tooltip.prototype.hide = function (callback) {
		var that = this;
		var $tip = $(this.$tip);
		var e    = $.Event('hide.bs.' + this.type);

		function complete() {
			if (that.hoverState != 'in') $tip.detach();
			that.$element
				.removeAttr('aria-describedby')
				.trigger('hidden.bs.' + that.type);
			callback && callback();
		};

		this.$element.trigger(e);

		if (e.isDefaultPrevented()) return;

		$tip.removeClass('in');

		$.support.transition && $tip.hasClass('fade') ?
			$tip
				.one('bsTransitionEnd', complete)
				.emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
			complete();

		this.hoverState = null;

		return this;
	};

	Tooltip.prototype.fixTitle = function () {
		var $e = this.$element;
		if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
			$e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
		}
	};

	Tooltip.prototype.hasContent = function () {
		return this.getTitle();
	};

	Tooltip.prototype.getPosition = function ($element) {
		$element   = $element || this.$element;

		var el     = $element[0];
		var isBody = el.tagName == 'BODY';

		var elRect    = el.getBoundingClientRect();
		if (elRect.width == null) {
			// width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
			elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
		}
		var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset();
		var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
		var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

		return $.extend({}, elRect, scroll, outerDims, elOffset);
	};

	Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
		return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
					 placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
					 placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
				/* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };

	};

	Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
		var delta = { top: 0, left: 0 };
		if (!this.$viewport) return delta;

		var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
		var viewportDimensions = this.getPosition(this.$viewport);

		if (/right|left/.test(placement)) {
			var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll;
			var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
			if (topEdgeOffset < viewportDimensions.top) { // top overflow
				delta.top = viewportDimensions.top - topEdgeOffset;
			} else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
				delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
			}
		} else {
			var leftEdgeOffset  = pos.left - viewportPadding;
			var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
			if (leftEdgeOffset < viewportDimensions.left) { // left overflow
				delta.left = viewportDimensions.left - leftEdgeOffset;
			} else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
				delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
			}
		}

		return delta;
	};

	Tooltip.prototype.getTitle = function () {
		var title;
		var $e = this.$element;
		var o  = this.options;

		title = $e.attr('data-original-title')
			|| (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title);

		return title;
	};

	Tooltip.prototype.getUID = function (prefix) {
		do {
		prefix += ~~(Math.random() * 1000000);
		}
		while (document.getElementById(prefix));
		return prefix;
	};

	Tooltip.prototype.tip = function () {
		if (!this.$tip) {
			this.$tip = $(this.options.template);
			if (this.$tip.length != 1) {
				throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
			}
		}
		return this.$tip;
	};

	Tooltip.prototype.arrow = function () {
		return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
	};

	Tooltip.prototype.enable = function () {
		this.enabled = true;
	};

	Tooltip.prototype.disable = function () {
		this.enabled = false;
	};

	Tooltip.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	};

	Tooltip.prototype.toggle = function (e) {
		var self = this;
		if (e) {
			self = $(e.currentTarget).data('bs.' + this.type);
			if (!self) {
				self = new this.constructor(e.currentTarget, this.getDelegateOptions());
				$(e.currentTarget).data('bs.' + this.type, self);
			}
		}

		if (e) {
			self.inState.click = !self.inState.click;
			if (self.isInStateTrue()) {
			self.enter(self);
		} else {
			self.leave(self);
		}
		} else {
			self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
		}
	};

	Tooltip.prototype.destroy = function () {
		var that = this;
		clearTimeout(this.timeout);

		this.hide(function () {
			that.$element.off('.' + that.type).removeData('bs.' + that.type);
			if (that.$tip) {
				that.$tip.detach();
			}
			that.$tip = null;
			that.$arrow = null;
			that.$viewport = null;
		});
	};


	// TOOLTIP PLUGIN DEFINITION
	// =========================

	function Plugin(option) {
		return this.each(function () {
			var $this   = $(this);
			var data    = $this.data('bs.tooltip');
			var options = typeof option == 'object' && option;

			if (!data && /destroy|hide/.test(option)) return;
			if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};

	var old = $.fn.tooltip;

	$.fn.tooltip             = Plugin;
	$.fn.tooltip.Constructor = Tooltip;


	// TOOLTIP NO CONFLICT
	// ===================

	$.fn.tooltip.noConflict = function () {
		$.fn.tooltip = old;
		return this;
	};

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
	'use strict';

	// POPOVER PUBLIC CLASS DEFINITION
	// ===============================

	var Popover = function (element, options) {
		this.init('popover', element, options);
	};

	if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

	Popover.VERSION  = '3.3.5';

	Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
		placement: 'right',
		trigger: 'click',
		content: '',
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});


	// NOTE: POPOVER EXTENDS tooltip.js
	// ================================

	Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

	Popover.prototype.constructor = Popover;

	Popover.prototype.getDefaults = function () {
		return Popover.DEFAULTS;
	};

	Popover.prototype.setContent = function () {
		var $tip    = this.tip();
		var title   = this.getTitle();
		var content = this.getContent();

		$tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
		$tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
			this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
		](content);

		$tip.removeClass('fade top bottom left right in');

		// IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
		// this manually by checking the contents.
		if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
	};

	Popover.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	};

	Popover.prototype.getContent = function () {
		var $e = this.$element;
		var o  = this.options;

		return $e.attr('data-content')
			|| (typeof o.content == 'function' ?
						o.content.call($e[0]) :
						o.content);
	};

	Popover.prototype.arrow = function () {
		return (this.$arrow = this.$arrow || this.tip().find('.arrow'));
	};


	// POPOVER PLUGIN DEFINITION
	// =========================

	function Plugin(option) {
		return this.each(function () {
			var $this   = $(this);
			var data    = $this.data('bs.popover');
			var options = typeof option == 'object' && option;

			if (!data && /destroy|hide/.test(option)) return;
			if (!data) $this.data('bs.popover', (data = new Popover(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};

	var old = $.fn.popover;

	$.fn.popover             = Plugin;
	$.fn.popover.Constructor = Popover;


	// POPOVER NO CONFLICT
	// ===================

	$.fn.popover.noConflict = function () {
		$.fn.popover = old;
		return this;
	};

}(jQuery);

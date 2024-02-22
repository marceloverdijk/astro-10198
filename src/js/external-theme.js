"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();

var e = {
    
    init: function () {
        e.dropdownHover(),
        e.aosFunc()
    },

    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },

    select: function (selectors) {
        return document.querySelector(selectors);
    },

    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    // START: Menu Dropdown Hover
    dropdownHover: function () {
        // console.log(bootstrap)
        if (window.matchMedia('(min-width: 992px)').matches) {
          (function($bs) {
            document.querySelectorAll('.dropdown-hover .dropdown').forEach(function(dd) {
                dd.addEventListener('mouseenter', function(e) {
                    let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                    if (!toggle.classList.contains('show')) {
                        $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                    }
                });
                dd.addEventListener('mouseleave', function(e) {
                    let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
                    if (toggle.classList.contains('show')) {
                        $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                    }
                });
            });
          })(bootstrap);
        }
      },
      // END: Menu Dropdown Hover

    // START: AOS Animation
    /* @required https://github.com/michalsnik/aos/tree/v2 */

    aosFunc: function () {
        var aos = e.select('.aos');
        if (e.isVariableDefined(aos)) {
            AOS.init({
                duration: 500,
                easing: 'ease-out-quart',
                once: true
            });
        }
    },
    // END: AOS Animation

};

e.init();

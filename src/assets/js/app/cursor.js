jQuery(document).ready(function() {
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Cursor = function() {
        function Cursor(el, target) {
            _classCallCheck(this, Cursor);
            this.el = el;
            this.target = target;
            console.log("--->target: " + el);
            this.triggerDistance = 10;

            this.bind();
        }

        _createClass(Cursor, [{
            key: 'bind',
            value: function bind() {
                window.addEventListener('mousemove', this.move.bind(this), false);
            }
        }, {
            key: 'move',
            value: function move(
                e) {
                var top_offset = window.pageYOffset + e.clientY;
                var cursorPosition = {
                    left: e.clientX,
                    top: top_offset
                };


                var targetPosition = {
                    left: window.left + this.target.getBoundingClientRect().width / 2,
                    top: window.top + this.target.getBoundingClientRect().height / 2
                };

                /*var targetPosition = {
                    left: window.left,
                    top: window.top
                };*/


                var distance = {
                    x: targetPosition.left - cursorPosition.left,
                    y: targetPosition.top - cursorPosition.top
                };


                // var angle = Math.atan2(distance.x, distance.y);
                var hypotenuse = Math.sqrt(distance.x * distance.x + distance.y * distance.y);
                var class_target_element = event.target;
                // console.log(class_target_element.classList.contains('target'));
                // console.log(class_target_element.classList.contains('item-project-inner'));
                if (class_target_element.classList.contains('target')) {
                    this.el.classList.add('expanded');
                    this.target.classList.add('expanded');
                    TweenMax.to(this.el, 0.3, {
                        left: cursorPosition.left,
                        top: cursorPosition.top
                    });

                } else {
                    this.el.classList.remove('expanded');
                    this.target.classList.remove('expanded');

                    TweenMax.to(this.el, 0.3, {
                        left: cursorPosition.left,
                        top: cursorPosition.top
                    });

                }
                $('.item-project-inner,.slide-content').hover(
                    function() {
                        $('.cursor').addClass('beehance-cursor');
                    },
                    function() {
                        $('.cursor').removeClass('beehance-cursor');
                    }
                );
            }
        }]);
        return Cursor;
    }();


    var element = document.getElementById('cursor');
    var target = document.getElementById('target');
    console.log("Cursor");
    var cursor = new Cursor(element, target);
});
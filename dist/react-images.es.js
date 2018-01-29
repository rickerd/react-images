import PropTypes from 'prop-types';
import React, { Children, Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import ScrollLock from 'react-scrolllock';
import { BounceLoader } from 'react-spinners';
import { StyleSheet as StyleSheet$1, css as css$1 } from 'aphrodite/no-important';
import { CSSTransitionGroup } from 'react-transition-group';
import { render } from 'react-dom';

// ==============================
// THEME
// ==============================

var theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10
	},
	zIndex: 2001
};

// header
theme.header = {
	height: 40
};
theme.close = {
	fill: 'white'
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em'
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5
	}
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function deepMerge(target) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var extended = Object.assign({}, target);

	Object.keys(source).forEach(function (key) {
		if (_typeof(source[key]) !== 'object' || !source[key]) {
			extended[key] = source[key];
		} else {
			if (!target[key]) {
				extended[key] = source[key];
			} else {
				extended[key] = deepMerge(target[key], source[key]);
			}
		}
	});

	return extended;
}

var arrowLeft = (function (fill) {
	return "<svg width=\"43px\" height=\"27px\" viewBox=\"0 0 43 27\" fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-280.000000, -414.000000)\">\n\t\t\t<g id=\"popup\" fill=\"#FFFFFF\">\n\t\t\t\t<g id=\"arrows\" transform=\"translate(280.000000, 414.000000)\">\n\t\t\t\t\t<path d=\"M42.5971821,12.5219626 L31.1304006,0.442694171 C30.5971952,-0.10489933 29.7266754,-0.168374701 29.103647,0.386797948 C28.5475081,0.887021769 28.532219,1.85620542 29.0472686,2.39621977 L38.2522274,12.077635 L1.43334768,12.077635 C0.642139763,12.077635 0,12.7142835 0,13.4987254 C0,14.2831673 0.642139763,14.9198158 1.43334768,14.9198158 L38.2522274,14.9198158 L29.0472686,24.601231 C28.532219,25.1412453 28.5694861,26.0886389 29.103647,26.6106528 C29.6674304,27.1620359 30.6038842,27.1137188 31.1304006,26.5547566 L42.5971821,14.4754882 C43.1800768,13.8208392 43.0864314,13.0809248 42.5971821,12.5219626 Z\" id=\"Page-1-Copy\" transform=\"translate(21.500000, 13.500000) scale(-1, 1) translate(-21.500000, -13.500000) \"></path>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</g>\n\t</svg>";
});

var arrowRight = (function (fill) {
	return "<svg width=\"43px\" height=\"27px\" viewBox=\"0 0 43 27\" fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n\t    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(-1147.000000, -414.000000)\">\n\t        <g id=\"popup\" fill=\"#FFFFFF\">\n\t\t\t\t\t\t<g id=\"arrows\" transform=\"translate(280.000000, 414.000000)\">\n\t\t\t\t\t\t\t\t<path d=\"M909.597182,12.5219626 L898.130401,0.442694171 C897.597195,-0.10489933 896.726675,-0.168374701 896.103647,0.386797948 C895.547508,0.887021769 895.532219,1.85620542 896.047269,2.39621977 L905.252227,12.077635 L868.433348,12.077635 C867.64214,12.077635 867,12.7142835 867,13.4987254 C867,14.2831673 867.64214,14.9198158 868.433348,14.9198158 L905.252227,14.9198158 L896.047269,24.601231 C895.532219,25.1412453 895.569486,26.0886389 896.103647,26.6106528 C896.66743,27.1620359 897.603884,27.1137188 898.130401,26.5547566 L909.597182,14.4754882 C910.180077,13.8208392 910.086431,13.0809248 909.597182,12.5219626 Z\" id=\"Page-1\"></path>\n\t\t\t\t\t\t</g>\n\t        </g>\n\t    </g>\n\t</svg>";
});

var close = (function (fill) {
	return "<svg fill=\"" + fill + "\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"48px\" height=\"48px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n\t\t<path d=\"M97.3,111.4c-14,14-27.2,27.2-40.4,40.4c-12.1,12.1-24.3,24.3-36.4,36.4c-1.2,1.2-2.3,2.4-3.6,3.4\n\tc-4.4,3.3-9.8,2.9-13.7-0.8c-3.8-3.8-4.3-9.3-1-13.6c1.1-1.5,2.5-2.7,3.7-4C30,149.1,54,125.1,78,101c1.3-1.3,2.5-2.6,3.9-4.1\n\tc-1.4-1.5-2.7-2.8-3.9-4.1C53.6,68.4,29.2,44,4.8,19.6c-3.5-3.5-6-7.2-4.1-12.4C3,0.4,10.7-2.1,16.5,2c1.6,1.1,3,2.6,4.4,4.1\n\tC44.8,30,68.8,53.9,92.7,77.9c1.3,1.3,2.2,2.9,3.6,4.6c2.1-1.9,3.4-3.1,4.7-4.4c24-24,48.1-48.1,72.1-72.1c1.3-1.3,2.5-2.7,4-3.8\n\tc4.4-3.3,9.8-2.9,13.7,0.8c3.8,3.8,4.3,9.3,1,13.6c-1.1,1.5-2.5,2.7-3.7,4c-24,24-48.1,48.1-72.1,72.1c-1.3,1.3-2.5,2.6-3.9,4.1\n\tc1.4,1.5,2.7,2.8,3.9,4.1c24.4,24.4,48.8,48.8,73.2,73.2c3.5,3.5,6,7.2,4.1,12.4c-2.4,6.8-10,9.3-15.9,5.2c-1.6-1.1-3-2.6-4.4-4.1\n\tc-23.9-23.9-47.9-47.8-71.8-71.8C99.9,114.7,98.9,113.2,97.3,111.4z\"/>\n\t</svg>";
});

var icons = { arrowLeft: arrowLeft, arrowRight: arrowRight, close: close };

var Icon = function Icon(_ref) {
	var fill = _ref.fill,
	    type = _ref.type,
	    props = objectWithoutProperties(_ref, ['fill', 'type']);

	var icon = icons[type];

	return React.createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: icon(fill) }
	}, props));
};

Icon.propTypes = {
	fill: PropTypes.string,
	type: PropTypes.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
	fill: 'white'
};

function Arrow(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var direction = _ref.direction,
	    icon = _ref.icon,
	    onClick = _ref.onClick,
	    size = _ref.size,
	    props = objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

	var classes = StyleSheet$1.create(deepMerge(defaultStyles$1, theme$$1));

	return React.createElement(
		'button',
		_extends({
			type: 'button',
			className: css$1(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		React.createElement(Icon, { fill: !!theme$$1.arrow && theme$$1.arrow.fill || theme.arrow.fill, type: icon })
	);
}

Arrow.propTypes = {
	direction: PropTypes.oneOf(['left', 'right']),
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
	size: 'medium'
};
Arrow.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$1 = {
	arrow: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area
		position: 'absolute',
		top: '50%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	},

	// sizes
	arrow__size__medium: {
		height: theme.arrow.height,
		marginTop: theme.arrow.height / -2,
		width: 40,

		'@media (min-width: 768px)': {
			width: 70
		}
	},
	arrow__size__small: {
		height: theme.thumbnail.size,
		marginTop: theme.thumbnail.size / -2,
		width: 30,

		'@media (min-width: 500px)': {
			width: 40
		}
	},

	// direction
	arrow__direction__right: {
		right: theme.container.gutter.horizontal
	},
	arrow__direction__left: {
		left: theme.container.gutter.horizontal
	}
};

function Container(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var props = objectWithoutProperties(_ref, []);

	var classes = StyleSheet$1.create(deepMerge(defaultStyles$2, theme$$1));

	return React.createElement('div', _extends({ id: 'lightboxBackdrop',
		className: css$1(classes.container)
	}, props));
}

Container.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$2 = {
	container: {
		alignItems: 'center',
		backgroundColor: theme.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: theme.container.gutter.vertical,
		paddingLeft: theme.container.gutter.horizontal,
		paddingRight: theme.container.gutter.horizontal,
		paddingTop: theme.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: theme.container.zIndex
	}
};

function Footer(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var caption = _ref.caption,
	    countCurrent = _ref.countCurrent,
	    countSeparator = _ref.countSeparator,
	    countTotal = _ref.countTotal,
	    showCount = _ref.showCount,
	    props = objectWithoutProperties(_ref, ['caption', 'countCurrent', 'countSeparator', 'countTotal', 'showCount']);

	if (!caption && !showCount) return null;

	var classes = StyleSheet$1.create(deepMerge(defaultStyles$3, theme$$1));

	var imageCount = showCount ? React.createElement(
		'div',
		{ className: css$1(classes.footerCount) },
		countCurrent,
		countSeparator,
		countTotal
	) : React.createElement('span', null);

	return React.createElement(
		'div',
		_extends({ className: css$1(classes.footer) + ' footer' }, props),
		caption ? React.createElement('figcaption', { className: css$1(classes.footerCaption) + ' footerCaption', dangerouslySetInnerHTML: { __html: caption } }) : React.createElement('span', null),
		imageCount
	);
}

Footer.propTypes = {
	caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	countCurrent: PropTypes.number,
	countSeparator: PropTypes.string,
	countTotal: PropTypes.number,
	showCount: PropTypes.bool
};
Footer.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$3 = {
	footer: {
		boxSizing: 'border-box',
		color: theme.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: theme.footer.gutter.vertical,
		paddingLeft: theme.footer.gutter.horizontal,
		paddingRight: theme.footer.gutter.horizontal,
		paddingTop: theme.footer.gutter.vertical
	},
	footerCount: {
		color: theme.footer.count.color,
		fontSize: theme.footer.count.fontSize,
		paddingLeft: '1em' // add a small gutter for the caption
	},
	footerCaption: {
		flex: '1 1 0'
	}
};

function Header(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var customControls = _ref.customControls,
	    onClose = _ref.onClose,
	    showCloseButton = _ref.showCloseButton,
	    closeButtonTitle = _ref.closeButtonTitle,
	    props = objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

	var classes = StyleSheet$1.create(deepMerge(defaultStyles$4, theme$$1));

	return React.createElement(
		'div',
		null,
		!!showCloseButton && React.createElement(
			'button',
			{
				title: closeButtonTitle,
				className: css$1(classes.close),
				onClick: onClose
			},
			React.createElement(Icon, { fill: !!theme$$1.close && theme$$1.close.fill || theme.close.fill, type: 'close' })
		),
		React.createElement(
			'div',
			_extends({ className: css$1(classes.header) }, props),
			customControls ? customControls : React.createElement('span', null)
		)
	);
}

Header.propTypes = {
	customControls: PropTypes.array,
	onClose: PropTypes.func.isRequired,
	showCloseButton: PropTypes.bool
};
Header.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$4 = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		height: theme.header.height
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'absolute',
		top: 20,
		right: 20,
		verticalAlign: 'bottom',

		// increase hit area
		height: 40,
		padding: 10,
		width: 40
	}
};

function Thumbnail(_ref, _ref2) {
	var index = _ref.index,
	    src = _ref.src,
	    thumbnail = _ref.thumbnail,
	    active = _ref.active,
	    _onClick = _ref.onClick;
	var theme$$1 = _ref2.theme;

	var url = thumbnail ? thumbnail : src;
	var classes = StyleSheet$1.create(deepMerge(defaultStyles$5, theme$$1));

	return React.createElement('div', {
		className: css$1(classes.thumbnail, active && classes.thumbnail__active),
		onClick: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
			_onClick(index);
		},
		style: { backgroundImage: 'url("' + url + '")' }
	});
}

Thumbnail.propTypes = {
	active: PropTypes.bool,
	index: PropTypes.number,
	onClick: PropTypes.func.isRequired,
	src: PropTypes.string,
	thumbnail: PropTypes.string
};

Thumbnail.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$5 = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: theme.thumbnail.size,
		margin: theme.thumbnail.gutter,
		overflow: 'hidden',
		width: theme.thumbnail.size
	},
	thumbnail__active: {
		boxShadow: 'inset 0 0 0 2px ' + theme.thumbnail.activeBorderColor
	}
};

var classes = StyleSheet$1.create({
	paginatedThumbnails: {
		bottom: theme.container.gutter.vertical,
		height: theme.thumbnail.size,
		padding: '0 50px',
		position: 'absolute',
		textAlign: 'center',
		whiteSpace: 'nowrap',
		left: '50%',
		transform: 'translateX(-50%)'
	}
});

var arrowStyles = {
	height: theme.thumbnail.size + theme.thumbnail.gutter * 2,
	width: 40
};

var PaginatedThumbnails = function (_Component) {
	inherits(PaginatedThumbnails, _Component);

	function PaginatedThumbnails(props) {
		classCallCheck(this, PaginatedThumbnails);

		var _this = possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

		_this.state = {
			hasCustomPage: false
		};

		_this.gotoPrev = _this.gotoPrev.bind(_this);
		_this.gotoNext = _this.gotoNext.bind(_this);
		return _this;
	}

	createClass(PaginatedThumbnails, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Component should be controlled, flush state when currentImage changes
			if (nextProps.currentImage !== this.props.currentImage) {
				this.setState({
					hasCustomPage: false
				});
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'getFirst',
		value: function getFirst() {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    offset = _props.offset;

			if (this.state.hasCustomPage) {
				return this.clampFirst(this.state.first);
			}
			return this.clampFirst(currentImage - offset);
		}
	}, {
		key: 'setFirst',
		value: function setFirst(event, newFirst) {
			var first = this.state.first;


			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			if (first === newFirst) return;

			this.setState({
				hasCustomPage: true,
				first: newFirst
			});
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			this.setFirst(event, this.getFirst() - this.props.offset);
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			this.setFirst(event, this.getFirst() + this.props.offset);
		}
	}, {
		key: 'clampFirst',
		value: function clampFirst(value) {
			var _props2 = this.props,
			    images = _props2.images,
			    offset = _props2.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

			if (value < 0) {
				return 0;
			} else if (value + totalCount > images.length) {
				// Too far
				return images.length - totalCount;
			} else {
				return value;
			}
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.getFirst() <= 0) return null;

			return React.createElement(Arrow, {
				direction: 'left',
				size: 'small',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				style: arrowStyles,
				title: 'Previous (Left arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			var _props3 = this.props,
			    offset = _props3.offset,
			    images = _props3.images;

			var totalCount = 2 * offset + 1;
			if (this.getFirst() + totalCount >= images.length) return null;

			return React.createElement(Arrow, {
				direction: 'right',
				size: 'small',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				style: arrowStyles,
				title: 'Next (Right arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'render',
		value: function render$$1() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    offset = _props4.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
			var thumbnails = [];
			var baseOffset = 0;
			if (images.length <= totalCount) {
				thumbnails = images;
			} else {
				// Try to center current image in list
				baseOffset = this.getFirst();
				thumbnails = images.slice(baseOffset, baseOffset + totalCount);
			}

			return React.createElement(
				'div',
				{ className: css$1(classes.paginatedThumbnails) },
				this.renderArrowPrev(),
				thumbnails.map(function (img, idx) {
					return React.createElement(Thumbnail, _extends({ key: baseOffset + idx
					}, img, {
						index: baseOffset + idx,
						onClick: onClickThumbnail,
						active: baseOffset + idx === currentImage }));
				}),
				this.renderArrowNext()
			);
		}
	}]);
	return PaginatedThumbnails;
}(Component);

PaginatedThumbnails.propTypes = {
	currentImage: PropTypes.number,
	images: PropTypes.array,
	offset: PropTypes.number,
	onClickThumbnail: PropTypes.func.isRequired
};

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	inherits(PassContext, _Component);

	function PassContext() {
		classCallCheck(this, PassContext);
		return possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
	}

	createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return Children.only(this.props.children);
		}
	}]);
	return PassContext;
}(Component);

PassContext.propTypes = {
	context: PropTypes.object.isRequired
};
PassContext.childContextTypes = {
	theme: PropTypes.object
};

var Portal = function (_Component) {
	inherits(Portal, _Component);

	function Portal() {
		classCallCheck(this, Portal);

		var _this = possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

		_this.portalElement = null;
		return _this;
	}

	createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';

			render(React.createElement(
				PassContext,
				{ context: this.context },
				React.createElement(
					'div',
					null,
					React.createElement(
						'style',
						null,
						styles
					),
					React.createElement(CSSTransitionGroup, _extends({
						component: 'div',
						transitionName: 'fade',
						transitionEnterTimeout: duration,
						transitionLeaveTimeout: duration
					}, this.props))
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return null;
		}
	}]);
	return Portal;
}(Component);

Portal.contextTypes = {
	theme: PropTypes.object.isRequired
};

/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
}

// Return true if window + document

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var Lightbox = function (_Component) {
	inherits(Lightbox, _Component);

	function Lightbox(props) {
		classCallCheck(this, Lightbox);

		var _this = possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

		_this.theme = deepMerge(theme, props.theme);
		_this.classes = StyleSheet.create(deepMerge(defaultStyles, _this.theme));
		_this.state = { imageLoaded: false };

		bindFunctions.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput', 'handleImageLoaded']);
		return _this;
	}

	createClass(Lightbox, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				theme: this.theme
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.isOpen && this.props.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!canUseDom) return;

			// preload images
			if (nextProps.preloadNextImage) {
				var currentIndex = this.props.currentImage;
				var nextIndex = nextProps.currentImage + 1;
				var prevIndex = nextProps.currentImage - 1;
				var preloadIndex = void 0;

				if (currentIndex && nextProps.currentImage > currentIndex) {
					preloadIndex = nextIndex;
				} else if (currentIndex && nextProps.currentImage < currentIndex) {
					preloadIndex = prevIndex;
				}

				// if we know the user's direction just get one image
				// otherwise, to be safe, we need to grab one in each direction
				if (preloadIndex) {
					this.preloadImage(preloadIndex);
				} else {
					this.preloadImage(prevIndex);
					this.preloadImage(nextIndex);
				}
			}

			// preload current image
			if (this.props.currentImage !== nextProps.currentImage || !this.props.isOpen && nextProps.isOpen) {
				var img = this.preloadImage(nextProps.currentImage, this.handleImageLoaded);
				this.setState({ imageLoaded: img.complete });
			}

			// add/remove event listeners
			if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'preloadImage',
		value: function preloadImage(idx, onload) {
			var image = this.props.images[idx];
			if (!image) return;

			var img = new Image();

			// TODO: add error handling for missing images
			img.onerror = onload;
			img.onload = onload;
			img.src = image.src;
			img.srcSet = image.srcSet || image.srcset;

			if (img.srcSet) img.setAttribute('srcset', img.srcSet);

			return img;
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    images = _props.images;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === images.length - 1) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			var currentImage = this.props.currentImage;
			var imageLoaded = this.state.imageLoaded;


			if (!imageLoaded || currentImage === 0) return;

			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			this.props.onClickPrev();
		}
	}, {
		key: 'closeBackdrop',
		value: function closeBackdrop(event) {
			// make sure event only happens if they click the backdrop
			// and if the caption is widening the figure element let that respond too
			if (event.target.id === 'lightboxBackdrop' || event.target.tagName === 'FIGURE') {
				this.props.onClose();
			}
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				// left
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				// right
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				// esc
				this.props.onClose();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleImageLoaded',
		value: function handleImageLoaded() {
			this.setState({ imageLoaded: true });
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;

			return React.createElement(Arrow, {
				direction: 'left',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				title: this.props.leftArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;

			return React.createElement(Arrow, {
				direction: 'right',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				title: this.props.rightArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props2 = this.props,
			    backdropClosesModal = _props2.backdropClosesModal,
			    isOpen = _props2.isOpen,
			    showThumbnails = _props2.showThumbnails,
			    width = _props2.width;
			var imageLoaded = this.state.imageLoaded;


			if (!isOpen) return React.createElement('span', { key: 'closed' });

			var offsetThumbnails = 0;
			if (showThumbnails) {
				offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
			}

			return React.createElement(
				Container,
				{
					key: 'open',
					onClick: backdropClosesModal && this.closeBackdrop,
					onTouchEnd: backdropClosesModal && this.closeBackdrop
				},
				React.createElement(
					'div',
					{ className: css(this.classes.wrapper), style: this.theme.wrapper },
					imageLoaded && this.renderHeader(),
					React.createElement(
						'div',
						{
							className: css(this.classes.content),
							style: { marginBottom: offsetThumbnails, maxWidth: width }
						},
						this.renderImages(),
						this.renderSpinner()
					),
					imageLoaded && this.renderFooter(),
					imageLoaded && this.renderThumbnails(),
					imageLoaded && this.renderArrowPrev(),
					imageLoaded && this.renderArrowNext(),
					this.props.preventScroll && React.createElement(ScrollLock, null)
				)
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _props3 = this.props,
			    currentImage = _props3.currentImage,
			    images = _props3.images,
			    onClickImage = _props3.onClickImage,
			    showThumbnails = _props3.showThumbnails;
			var imageLoaded = this.state.imageLoaded;


			if (!images || !images.length) return null;

			var image = images[currentImage];
			image.srcSet = image.srcSet || image.srcset;

			var srcSet = void 0;
			var sizes = void 0;

			if (image.srcSet) {
				srcSet = image.srcSet.join();
				sizes = '100vw';
			}

			var thumbnailsSize = showThumbnails ? this.theme.thumbnail.size : 0;
			var heightOffset = this.theme.header.height + this.theme.footer.height + thumbnailsSize + this.theme.container.gutter.vertical + 'px';

			return React.createElement(
				'figure',
				{ className: css(this.classes.figure) },
				React.createElement('img', {
					className: css(this.classes.image, imageLoaded && this.classes.imageLoaded),
					onClick: onClickImage,
					sizes: sizes,
					alt: image.alt,
					src: image.src,
					srcSet: srcSet,
					style: {
						cursor: onClickImage ? 'pointer' : 'auto',
						maxHeight: 'calc(100vh - ' + heightOffset + ')'
					}
				})
			);
		}
	}, {
		key: 'renderThumbnails',
		value: function renderThumbnails() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    showThumbnails = _props4.showThumbnails,
			    thumbnailOffset = _props4.thumbnailOffset;


			if (!showThumbnails) return;

			return React.createElement(PaginatedThumbnails, {
				currentImage: currentImage,
				images: images,
				offset: thumbnailOffset,
				onClickThumbnail: onClickThumbnail
			});
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var _props5 = this.props,
			    closeButtonTitle = _props5.closeButtonTitle,
			    customControls = _props5.customControls,
			    onClose = _props5.onClose,
			    showCloseButton = _props5.showCloseButton;


			return React.createElement(Header, {
				customControls: customControls,
				onClose: onClose,
				showCloseButton: showCloseButton,
				closeButtonTitle: closeButtonTitle
			});
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter() {
			var _props6 = this.props,
			    currentImage = _props6.currentImage,
			    images = _props6.images,
			    imageCountSeparator = _props6.imageCountSeparator,
			    showImageCount = _props6.showImageCount;


			if (!images || !images.length) return null;

			return React.createElement(Footer, {
				caption: images[currentImage].caption,
				countCurrent: currentImage + 1,
				countSeparator: imageCountSeparator,
				countTotal: images.length,
				showCount: showImageCount
			});
		}
	}, {
		key: 'renderSpinner',
		value: function renderSpinner() {
			var _props7 = this.props,
			    spinner = _props7.spinner,
			    spinnerColor = _props7.spinnerColor,
			    spinnerSize = _props7.spinnerSize;
			var imageLoaded = this.state.imageLoaded;

			var Spinner = spinner;

			return React.createElement(
				'div',
				{ className: css(this.classes.spinner, !imageLoaded && this.classes.spinnerActive) },
				React.createElement(Spinner, {
					color: spinnerColor,
					size: spinnerSize
				})
			);
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return React.createElement(
				Portal,
				null,
				this.renderDialog()
			);
		}
	}]);
	return Lightbox;
}(Component);

var DefaultSpinner = function DefaultSpinner(props) {
	return React.createElement(BounceLoader, props);
};

Lightbox.propTypes = {
	backdropClosesModal: PropTypes.bool,
	closeButtonTitle: PropTypes.string,
	currentImage: PropTypes.number,
	customControls: PropTypes.arrayOf(PropTypes.node),
	enableKeyboardInput: PropTypes.bool,
	imageCountSeparator: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string.isRequired,
		srcSet: PropTypes.array,
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		thumbnail: PropTypes.string
	})).isRequired,
	isOpen: PropTypes.bool,
	leftArrowTitle: PropTypes.string,
	onClickImage: PropTypes.func,
	onClickNext: PropTypes.func,
	onClickPrev: PropTypes.func,
	onClose: PropTypes.func.isRequired,
	preloadNextImage: PropTypes.bool,
	preventScroll: PropTypes.bool,
	rightArrowTitle: PropTypes.string,
	showCloseButton: PropTypes.bool,
	showImageCount: PropTypes.bool,
	showThumbnails: PropTypes.bool,
	spinner: PropTypes.func,
	spinnerColor: PropTypes.string,
	spinnerSize: PropTypes.number,
	theme: PropTypes.object,
	thumbnailOffset: PropTypes.number,
	width: PropTypes.number
};

Lightbox.defaultProps = {
	closeButtonTitle: 'Close (Esc)',
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	leftArrowTitle: 'Previous (Left arrow key)',
	onClickShowNextImage: true,
	preloadNextImage: true,
	preventScroll: true,
	rightArrowTitle: 'Next (Right arrow key)',
	showCloseButton: true,
	showImageCount: true,
	spinner: DefaultSpinner,
	spinnerColor: 'white',
	spinnerSize: 100,
	theme: {},
	thumbnailOffset: 2,
	width: 1024
};

Lightbox.childContextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles = {
	wrapper: {
		color: '#000'
	},
	content: {
		position: 'relative'
	},
	figure: {
		margin: 0 // remove browser default
	},
	image: {
		display: 'block', // removes browser default gutter
		height: 'auto',
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none',

		// opacity animation on image load
		opacity: 0,
		transition: 'opacity 0.3s'
	},
	imageLoaded: {
		opacity: 1
	},
	spinner: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',

		// opacity animation to make spinner appear with delay
		opacity: 0,
		transition: 'opacity 0.3s'
	},
	spinnerActive: {
		opacity: 1
	}
};

export default Lightbox;

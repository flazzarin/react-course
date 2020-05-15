'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Human = function () {
    function Human() {
        _classCallCheck(this, Human);

        this.gender = 'male';
    }

    _createClass(Human, [{
        key: 'printGender',
        value: function printGender() {
            console.log(this.gender);
        }
    }]);

    return Human;
}();

var Person = function (_Human) {
    _inherits(Person, _Human);

    function Person() {
        _classCallCheck(this, Person);

        var _this = _possibleConstructorReturn(this, (Person.__proto__ || Object.getPrototypeOf(Person)).call(this));

        _this.name = 'Max';
        _this.gender = 'female';
        return _this;
    }

    _createClass(Person, [{
        key: 'printMyName',
        value: function printMyName() {
            console.log(this.name);
        }
    }]);

    return Person;
}(Human);

var person = new Person();
person.printMyName();
person.printGender();
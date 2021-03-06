"use strict";
var Component = require('game/engine/Component');

function UseComponent() {
    Component.call(this);
    this.name = "use";
    this.allocator = UseData.bind({}, this);
}
UseComponent.prototype = Object.create(Component.prototype);
UseComponent.prototype.constructor = UseComponent;
UseComponent.$inject = [];

function UseData(comp, options) {
    options = options || {};

    this.cooldown = 1000;
}
UseData.prototype.toJSON = function toJSON() {
    return null;
};

module.exports = UseComponent;

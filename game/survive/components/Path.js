"use strict";
var Component = require('game/engine/Component');

function PathComponent() {
    Component.call(this);
    this.name = "path";
    this.allocator = PathData.bind({}, this);
}
PathComponent.prototype = Object.create(Component.prototype);
PathComponent.prototype.constructor = PathComponent;
PathComponent.prototype.dependencies = ["placement", "movable"];
PathComponent.$inject = [];

function PathData(comp, entity, options) {
    options = options || {};

    this.path = [];
    this.currentWaypoint = null;
    this.targetEntityId = null;
}
PathData.prototype.toJSON = function toJSON() {
    return null; // no sync
};

module.exports = PathComponent;

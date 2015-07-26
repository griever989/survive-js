"use strict";
var Entity = require('game/engine/Entity');

function DisplayEntity(Placement, Model, options) {
    Entity.call(this);
    options = options || {};
    this.addComponent(Placement, options[Placement.name]);
    this.addComponent(Model, options[Model.name]);
}
DisplayEntity.prototype = Object.create(Entity.prototype);
DisplayEntity.prototype.constructor = DisplayEntity;

module.exports = DisplayEntity;
module.exports.$inject = ['component/Placement', 'component/Model'];

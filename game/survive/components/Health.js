"use strict";
var Component = require('game/engine/Component');

function HealthComponent() {
    Component.call(this);
    this.name = "health";
    this.allocator = HealthData.bind({}, this);
}
HealthComponent.prototype = Object.create(Component.prototype);
HealthComponent.prototype.constructor = HealthComponent;
HealthComponent.$inject = [];

function HealthData(comp, entity, options) {
    options = options || {};

    this._currentHealth = options.currentHealth || 1;
    Object.defineProperty(this, 'currentHealth', {
        get: function () { return this._currentHealth; },
        set: function (raw) {
            var val = Number(raw);
            if (this._currentHealth != val) {
                this._currentHealth = val;
                comp.entityDataChanged(entity);
            }
        }
    });

    this._maximumHealth = options.maximumHealth || 100;
    Object.defineProperty(this, 'maximumHealth', {
        get: function () { return this._maximumHealth; },
        set: function (raw) {
            var val = Number(raw);
            if (this._maximumHealth != val) {
                this._maximumHealth = val;
                comp.entityDataChanged(entity);
            }
        }
    });
}
HealthData.prototype.toJSON = function toJSON() {
    return {
        injector: this.injector,
        currentHealth: this.currentHealth,
        maximumHealth: this.maximumHealth
    };
};
HealthComponent.prototype.reconstruct = function reconstruct(serialized, initialize) {
    this._currentHealth = serialized.currentHealth;
    this._maximumHealth = serialized.maximumHealth;
};

module.exports = HealthComponent;

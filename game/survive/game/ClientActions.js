"use strict";

var Promise = require('bluebird');

var rpc = null;

function ClientActions(container, game, world, socket, rpcClientPromise, pixi) {
    var self = this;

    var rpc = null;

    var load = rpcClientPromise.then(function (rpcClient) {
        return rpcClient.loadChannel('player-actions').then(function (actions) {
            console.log('rpc channel connected');
            rpc = actions;

            actions.notifyIdentifier(socket.id);
            return actions;
        }, function (err) {
            if (err) {
                console.log(err);
            }
        });
    });

    self.spawnEnemy = function spawnEnemy() {
        if (!rpc) {
            return;
        }
        rpc.spawnEnemy();
    };

    self.selectWeapon = function selectWeapon(id) {
        if (!rpc) {
            return;
        }
        rpc.selectWeapon(id);
    };

    self.attack = function attack(targetPoint) {
        if (!rpc) {
            return Promise.resolve();
        }
        return rpc.attack(targetPoint);
    };

    self.completeAction = function completeAction(actionIdentifier) {
        if (!rpc) {
            return;
        }
        rpc.completeAction(actionIdentifier);
    };

    self.cancelAction = function cancelAction(actionIdentifier) {
        if (!rpc) {
            return;
        }
        rpc.cancelAction(actionIdentifier);
    };

    self.sendChatMessage = function sendChatMessage(message) {
        if (!rpc) {
            return;
        }
        rpc.sendChatMessage(message);
    };
}

module.exports = ClientActions;
module.exports.$inject = ['$container', 'Game', 'World', 'socket', 'rpcClient', 'lib/pixi.js'];

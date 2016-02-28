/*
== Raindrops.js
Raindrops effect plugin for jQuery UI
http://daniellaharel.com/raindrops/
https://github.com/d-harel/raindrops

Modified version:
- Remove dependencies on jQuery/jQuery UI
- Resize canvas to always fill viewport's width
*/
var Raindrops = function(o) {
    var self = this;
    self._options = {};
    self._options.color = o.color || '#00aeef';
    self._options.canvasHeight = o.canvasHeight || 100;
    self._options.waveLength = o.waveLength || 340;
    self._options.waveHeight = o.waveHeight || 100;
    // Raindrops frequency. Higher number means more frequent raindrops.
    self._options.frequency = o.frequency || 3;
    // Water density. Higher number means shorter ripples.
    self._options.density = o.density || 0.02;
    // Speed of the ripple effect. Higher number means faster ripples.
    self._options.rippleSpeed = o.rippleSpeed || 0.1;
    // To cover unwanted gaps created by the animation.
    self._options.rightPadding = o.rightPadding || 20;

    self._element = o.element;
    self._create();
};

Raindrops.prototype = {
    _getViewportWidth: function() {
        var w = window, d = document, e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth;
        return x;
    },

    _create: function() {
        var self = this, o = self._options;
        var canvas = window.document.createElement('canvas');
        canvas.height = o.canvasHeight;
        canvas.width = o.realWidth = self._getViewportWidth() + o.rightPadding;

        self.ctx = canvas.getContext('2d');
        self._element.appendChild(canvas);

        canvas.parentElement.style.overflow = 'hidden';
        canvas.parentElement.style.position = 'relative';
        canvas.style.position = 'absolute';
        canvas.style.bottom = 0;
        canvas.style.left = 0;

        self.springs = [];
        for (var i = 0; i < o.waveLength; i++) {
            self.springs[i] = new self.Spring();
        }

        self._raindropsAnimationTick();
    },

    Spring: function () {
        this.p = 0;
        this.v = 0;
        this.update = function (density, rippleSpeed) {
            this.v += (-rippleSpeed * this.p - density * this.v);
            this.p += this.v;
        };
    },

    _updateSprings: function(spread) {
        var self = this, o = self._options;
        var i;
        var springs = self.springs;
        for (i = 0; i < o.waveLength; i++) {
            springs[i].update(o.density, o.rippleSpeed);
        }

        var leftDeltas = [], rightDeltas = [];
        for (var t = 0; t < 8; t++) {
            for (i = 0; i < o.waveLength; i++) {
                if (i > 0) {
                    leftDeltas[i] = spread * (springs[i].p - springs[i - 1].p);
                    springs[i - 1].v += leftDeltas[i];
                }
                if (i < o.waveLength - 1) {
                    rightDeltas[i] = spread * (springs[i].p - springs[i + 1].p);
                    springs[i + 1].v += rightDeltas[i];
                }
            }

            for (i = 0; i < o.waveLength; i++) {
                if (i > 0)
                    springs[i - 1].p += leftDeltas[i];
                if (i < o.waveLength - 1)
                    springs[i + 1].p += rightDeltas[i];
            }
        }
    },

    _renderWaves: function (){
        var self = this, ctx = self.ctx, o = self._options;
        var i;
        ctx.beginPath();
        ctx.moveTo(0, o.canvasHeight);
        for (i = 0; i < o.waveLength; i++) {
            ctx.lineTo(i * (o.realWidth / o.waveLength), (o.canvasHeight / 2) + self.springs[i].p);
        }
        ctx.lineTo(o.realWidth, o.canvasHeight);
        ctx.fill();
    },

    _raindropsAnimationTick: function() {
        var self = this, ctx = self.ctx, o = self._options;
        if ((Math.random() * 100) < o.frequency) {
            self.springs[Math.floor(Math.random() * o.waveLength)].p = o.waveHeight;
        }

        var w = self._getViewportWidth();
        if (ctx.canvas.width < w) {
            // 100% viewport width
            ctx.canvas.width = o.realWidth = w + o.rightPadding;
        }
        ctx.fillStyle = o.color;
        ctx.clearRect(0, 0, o.realWidth, o.canvasHeight);
        self._updateSprings(0.1);
        self._renderWaves();

        requestAnimationFrame(function () {
            self._raindropsAnimationTick();
        });
    },
};

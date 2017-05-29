var canvas = {
    element: document.getElementById('canvas'),
    width: 600,
    height: 400,
    initialize: function () {
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        document.body.appendChild(this.element);
    }
};

var ball = {
    element: document.createElement('div'),
    width: 40,
    height: 40,
    dx: 4,
    dy: 3,
    initialize: function () {
        this.element.className += ' ball';
        this.element.style.width = this.width + 'px';
        this.element.style.height = this.height + 'px';
        canvas.element.appendChild(this.element);
    },
    moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },
    changeDirectionIfNecessary: function (x, y) {
        if (x < 0 || x > canvas.width - ball.width) {
            this.dx = -this.dx;
        }
        if (y < 0 || y > canvas.height - ball.height) {
            this.dy = -this.dy;
        }
    },
    draw: function (x, y) {
        this.moveTo(x, y);
        var ball = this;
        setTimeout(function () {
            ball.changeDirectionIfNecessary(x, y);
            ball.draw(x + ball.dx, y + ball.dy);
        }, 1000 / 60);
    }
};

canvas.initialize();
ball.initialize();
ball.draw(0, 0);
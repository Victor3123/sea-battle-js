function Screen() {
    let sizeX = 10;
    let sizeY = 10;
    let screen = [];

    for ( let x = 0; x < sizeX; x++ ) {
        for (let y = 0; y < sizeY; y++ ) {
            screen[x][y] = ' ';
        }
    }

    return {
        clear: function () {
            for ( let x = 0; x < sizeX; x++ ) {
                for (let y = 0; y < sizeY; y++ ) {
                    screen[x][y] = ' ';
                }
            }
        },

        // %s = ship
        // %d = damaged ship
        // %f = free space

        setPoint: function (point, key) {
            if ( key === '%s' ) {
                screen[point.x][point.y] = 'ship';
            } else if ( key === '%d' ) {
                screen[point.x][point.y] = 'damagedShip';
            } else if ( key === '%f') {
                screen[point.x][point.y] = 'freeSpace';
            }
        }
    }
}

var degreesPerRadian = (180 / Math.PI);
var radiansPerDegree = (Math.PI / 180);
var twoPI = Math.PI * 2;

// Circle functions

var toRadians  = function(degrees) {
    return degrees * radiansPerDegree;
};

var toDegrees  = function(radians) {
    return radians * degreesPerRadian;
};

// http://www.math.com/tables/geometry/circles.htm

var circleDiameter = function(radius) {
    return radius / 2;
};

var circleRadius = function(diameter) {
    return diameter * 2;
};

var circleCircumference = function(radius) {
    return twoPI * radius;
};

var circleArea = function(radius) {
    return Math.PI * square(radius);
};

var circularArcLength = function(angle, radius) {
    return angle * radius;
};

var circleSliceArea = function(angle, radius) {
    return (angle / twoPI) * Math.PI * square(radius);
};


// Trigometry functions

// SOH-CAH-TOA
// 
//               /|
//              / |
//  hypotenuse /  |
//            /   | opposite
//           /    |
//          /     |
//         /      |
//  angle /--------
//          adjacent 

var pythagorasHypotenuse = function(side, otherSide) {
    return Math.sqrt(square(side) + square(otherSide));
};

var pythagorasSide = function(otherSide, hypotenuse) {
    return Math.sqrt(square(hypotenuse) - square(otherSide));
};

var calcAdjacentWithHypotenuse = function(angle, hypotenuse) {
    return Math.cos(angle) * hypotenuse;
};

var calcAdjacentWithOpposite = function(angle, opposite) {
    return opposite / Math.tan(angle);
};

var calcHypotenuseWithAdjacent = function(angle, adjacent) {
    return adjacent / Math.cos(angle);
};

var calcHypotenuseWithOpposite = function(angle, opposite) {
    return opposite / Math.sin(angle);
};

var calcOppositeWithHypotenuse = function(angle, hypotenuse) {
    return Math.sin(angle) * hypotenuse;
};

var calcOppositeWithAdjacent = function(angle, adjacent) {
    return Math.tan(angle) * adjacent;
};

var calcAngleWithAdjacentAndOpposite = function(adjacent, opposite) {
    return Math.atan(opposite / adjacent);
};

var calcAngleWithAdjacentAndHypotenuse = function(adjacent, hypotenuse) {
    return Math.acos(adjacent / hypotenuse);
};

var calcAngleWithOppositeAndHypotenuse = function(opposite, hypotenuse) {
    return Math.asin(opposite / hypotenuse);
};

// Performance
// http://jorshasaur.us/faster-multiplication-and-division-in-javascript/

var timesTwo = function(n) {
    return ( n << 1 );
};

var divideTwo = function(n) {
    return ( n >> 1 );
};


// Misc function

var square = function(n) {
    return n * n;
};


// Time

var deltaTime = function(oldTime, newTime) {
    newTime = newTime || Date.now();
    return newTime - oldTime;
};

var moveMultiply = function(interval, deltaTime) {
    return interval / deltaTime;
};

var interval = function(fps) {
    return 1000 / fps;
};

exports.degreesPerRadian = degreesPerRadian;
exports.radiansPerDegree = radiansPerDegree;
exports.twoPI = twoPI;
exports.toRadians = toRadians;
exports.toDegrees = toDegrees;
exports.toRadians = toRadians;

exports.pythagorasHypotenuse = pythagorasHypotenuse;
exports.pythagorasSide = pythagorasSide;

exports.calcAdjacentWithHypotenuse = calcAdjacentWithHypotenuse;
exports.calcAdjacentWithOpposite = calcAdjacentWithOpposite;
exports.calcHypotenuseWithAdjacent = calcHypotenuseWithAdjacent;
exports.calcHypotenuseWithOpposite = calcHypotenuseWithOpposite;
exports.calcOppositeWithHypotenuse = calcOppositeWithHypotenuse;
exports.calcOppositeWithAdjacent = calcOppositeWithAdjacent;
exports.calcAngleWithAdjacentAndOpposite = calcAngleWithAdjacentAndOpposite;
exports.calcAngleWithAdjacentAndHypotenuse = calcAngleWithAdjacentAndHypotenuse;
exports.calcAngleWithOppositeAndHypotenuse = calcAngleWithOppositeAndHypotenuse;

exports.square = square;

exports.deltaTime = deltaTime;
exports.moveMultiply = moveMultiply;
exports.interval = interval;

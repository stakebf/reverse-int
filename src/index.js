module.exports = function reverse (n) {
    return n > 0 ? n.toString().split('').reverse().join('') : n.toString().replace('-', '').split('').reverse().join('');
}

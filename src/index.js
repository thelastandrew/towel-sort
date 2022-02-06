// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (arguments.length === 0) {
        return res;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                for (let q = 0; q < matrix[i].length; q++) {
                    res.push(matrix[i][q]);
                }
            } else {
                for (let w = matrix[i].length - 1; w >= 0; w--) {
                    res.push(matrix[i][w]);
                }
            }
        }
        return res;
    }
};

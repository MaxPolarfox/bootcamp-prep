// YOUR CODE BELOW
const makeGrid = (col, row) => {
    let grid = [];
    let colArr = [];

    for  (let i = 1; i <= col; i++) colArr.push(i);
    for (let i = 0; i < row; i++) grid.push(colArr);

    return grid
}
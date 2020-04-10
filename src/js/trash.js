// const 는 콘솔에서 재정의가안대니 선언은 var로 하도록합시다
var quickFunc = (arr = [], start = 0, end) => {
    console.log('?', end, arr.length);
    if (!end) {
        end = arr.length - 1;
    }
    console.log('1', start, end);
    if (start < end) {
        console.log('2');
        var pivotIndex = devideFunc(arr, start, end);
        if (pivotIndex > start) {
            quickFunc(arr, start, pivotIndex - 1);
        } else {
            quickFunc(arr, pivotIndex + 1, end);
        }
    }
    var devideFunc = (arr, start, end) => {
        var pivotIndex = start - 1;
        for (var i = start; i < end; i += 1) {
            if (arr[end] > arr[i]) {
                pivotIndex += 1;
                swapFunc(arr, i, pivotIndex);
            }
        }
        pivotIndex += 1;
        swapFunc(arr, end, pivotIndex);
        return pivotIndex;
    };
};

var swapFunc = (arr, prev, next) => {
    var temp = arr[prev];
    arr[prev] = arr[next];
    arr[next] = temp;
};

var bubbleFunc = (arr) => {
    var swapCount = 0;
    for (var i = 0; i < arr.length; i += 1) {
        for (var j = 0; j < arr.length - 1; j += 1) {
            if (arr[i] > arr[j + 1]) {
                swapCount += 1;
                swapFunc(arr, i, j + 1);
            }
        }
    }
    console.log('swapcount', swapCount);
    return arr;
};

function testFunction(arr) {
    let maxSum = null;
    var maxRowLength = arr.length;
    for (let i = 0; i < maxRowLength - 2; i += 1) {
        var maxColLength = arr[i].length;
        for (let j = 0; j < maxColLength - 2; j += 1) {
            if (arr[i + 1] && arr[i + 2] && arr[j + 1] && arr[j + 2]) {
                var rowOne = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                var rowTwo = arr[i + 1][j + 1];
                var rowThree = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
                var sum = rowOne + rowTwo + rowThree;
                if (maxSum === null) {
                    maxSum = sum;
                } else {
                    maxSum = Math.max(maxSum, sum);
                }
            }
        }
    }
    return maxSum;
}

const buyToy = () => {

    // Complete the maximumToys function below.
    function maximumToys(prices, k) {
        var prices = quickSort(prices);
        var buyedToys = buyToys(prices, k);
        return buyedToys.length;
    };

    function buyToys(prices, k) {
        return prices.filter(item => {
            if (k > item) {
                k -= item;
                return item;
            }
        });
    };

    function quickSort(arr = [], start = 0, end) {
        if (start >= end) {
            return;
        }
        if (typeof end === 'undefined') {
            end = arr.length - 1;
        }
        var pivotIndex = devideFunc(arr, start, end);
        if (start < pivotIndex) {
            quickSort(arr, 0, pivotIndex - 1);
        } else {
            quickSort(arr, pivotIndex + 1, end);
        }
        return arr;
    };
    function devideFunc(arr, start, end) {
        if (start > end) {
            return 0;
        }
        var pivotIndex = start - 1;
        for (var i = start; i < end; i += 1) {
            if (arr[end] > arr[i]) {
                pivotIndex += 1;
                swapFunc(arr, pivotIndex, i);
            }
        }
        pivotIndex += 1;
        swapFunc(arr, pivotIndex, end);
        return pivotIndex;
    };
    function swapFunc(arr, start, end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    };
}


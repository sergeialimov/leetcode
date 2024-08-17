const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

function flatSingle(arr) {
    if (!arr?.length) {
        return [];
    }

    const res = [];

    function handleArr(localArr) {
        localArr.forEach((x) => res.push(x));
    }

    arr.forEach((x) => {

    });

    return res;
};

flatSingle(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

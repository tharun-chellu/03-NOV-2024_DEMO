function findSecondLargestAndSmallest(arr) {
    if (arr.length < 2) {
        return "Array must have at least 2 elements";
    }

    let sorted = [...new Set(arr)].sort((a, b) => a - b);

    return {
        secondSmallest: sorted[1],
        secondLargest: sorted[sorted.length - 2]
    };
}

console.log(findSecondLargestAndSmallest([5, 1, 9, 3, 14, 2]));

page.on('dialog', async dialog => {
    await dialog.accept();
});
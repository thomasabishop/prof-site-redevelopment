const linearTime = {
  labels: [2, 3, 4, 5, 6],
  datasets: [
    {
      label: 'O(n)',
      data: ['2', '3', '4', '5', '6'],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

const quadraticTime = {
  labels: (function () {
    const store = [];
    for (let i = 0; i < 25; i++) {
      store.push(i);
    }
    return store;
  })(),
  datasets: [
    {
      label: 'O(n^2)',
      data: (function () {
        const store = [];
        for (let i = 0; i < 25; i++) {
          let square = i * i;
          store.push(String(square));
        }
        return store;
      })(),
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

const logTime = {
  labels: [
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
    180, 190, 200, 210, 220, 230, 240, 250,
  ],
  datasets: [
    {
      label: 'O(log n)',
      data: [
        '1',
        '1.301029996',
        '1.477121255',
        '1.602059991',
        '1.698970004',
        '1.77815125',
        '1.84509804',
        '1.903089987',
        '1.954242509',
        '2',
        '2.041392685',
        '2.079181246',
        '2.113943352',
        '2.146128036',
        '2.176091259',
        '2.204119983',
        '2.255272505',
        '2.278753601',
        '2.301029996',
        '2.322219295',
        '2.342422681',
        '2.361727836',
        '2.380211242',
        '2.397940009',
      ],
      fill: false,
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 0.5)',
    },
  ],
};

console.log(logTime.labels);

export { linearTime, quadraticTime, logTime };

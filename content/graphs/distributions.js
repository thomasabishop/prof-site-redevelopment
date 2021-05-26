const linearTime = {
  labels: ['2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'O(n)',
      data: [2, 3, 4, 5, 6],
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

export { linearTime, quadraticTime };

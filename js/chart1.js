const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Sales of Money Plant ",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [1, 5, 15, 17, 23, 35, 47, 50],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    scales: {
      padding: 20,
      y: {
        beginAtZero: true,
      },
    },
  },
};
const label = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

const dats = {
  labels: label,
  datasets: [
    {
      label: "Sales of Zamia ZZ Black Plant",
      backgroundColor: "#0ee049",
      borderColor: "#0ee049",
      data: [1, 7, 19, 23, 30, 33, 37, 60],
    },
  ],
};

const confi = {
  type: "line",
  data: dats,
  options: {
    scales: {
      padding: 20,
      y: {
        beginAtZero: true,
      },
    },
  },
};
const myChart = new Chart(document.getElementById("myChart"), config);
const myChar = new Chart(document.getElementById("myChar"), confi);

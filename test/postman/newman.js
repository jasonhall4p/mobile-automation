const newman = require("newman");

newman.run({
  collection:
    "https://api.postman.com/collections/26591470-a2197189-b802-44ba-b984-58e043f8c4ca?access_key=PMAT-01HG915RRMH29X4ZMJW1ZK8947",
  reporters: ["htmlextra", "cli"],
  folder: "dev",
  iterationCount: 1,
  reporter: {
    htmlextra: {
      export: "./reports/postman_results.html",
      logs: true,
      browserTitle: "QA-AUTOMATION",
      title: "API AUTOMATION",
      titleSize: 4,
      showFolderDescription: true,
      displayProgressBar: true,
    },
  },
});

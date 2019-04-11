const fetch = require("node-fetch");
const queryString = require("query-string");

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions;

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins;

  const processJob = job => {
    const nodeId = job.reference;
    const nodeContent = JSON.stringify(job);
    const nodeData = Object.assign({}, job, {
      id: createNodeId(nodeId),
      parent: null,
      children: [],
      internal: {
        type: `JobOffer`,
        content: nodeContent,
        contentDigest: createContentDigest(job)
      }
    });

    return nodeData;
  };

  if (!configOptions.access_token || !configOptions.organization_reference) {
    console.log(
      " - [welcomekit] You have to specify both your Welcome kit API token and your organization reference"
    );

    return null;
  }

  const apiOptions = queryString.stringify(configOptions);
  const apiUrl = "https://www.welcomekit.co/api/v1/";
  const publicEndpoint = `embed/?${apiOptions}`;

  return fetch(apiUrl + publicEndpoint)
    .then(response => response.json())
    .then(data => {
      data.jobs.forEach(job => {
        let nodeData = processJob(job);
        createNode(nodeData);
      });
      console.log(
        ` - gatsby-source-welcomekit - Retrieving ${data.jobs.length} entries`
      );
    });
};

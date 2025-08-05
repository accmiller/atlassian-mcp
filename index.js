const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// 👉 Serve .well-known/ai-plugin.json
app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

// Root check (optional)
app.get('/', (req, res) => {
  res.send('MCP server is running!');
});

// MCP search endpoint — this is what ChatGPT needs
app.post('/actions/search', (req, res) => {
  const query = req.body.query;
  console.log("Received search for:", query);

  // Respond with fake search results
  res.json({
    results: [
      {
        id: "1",
        title: "Using Jira Workflows",
        url: "https://example.atlassian.net/wiki/page1",
        snippet: "This page explains how to configure workflows in Jira."
      },
      {
        id: "2",
        title: "Confluence Permissions Guide",
        url: "https://example.atlassian.net/wiki/page2",
        snippet: "Learn how to manage permissions in Confluence spaces."
      }
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`MCP server listening at http://localhost:${port}`);
});

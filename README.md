# Mithril with Fusion.js (Uber)

This project show how to use Mithril with Fusion.js (Uber).

These are the components:

- [Mithril](https://mithril.js.org/) - Mithril is a modern client-side JavaScript framework for building Single Page Applications. It's small (< 10kb gzip), fast and provides routing and XHR utilities out of the box.
- [Fusion.js](https://fusionjs.com/) - Fusion.js gives you the developer experience you expect from a React setup and provides tools to take project quality to the next level.
- [Mithril Router](https://github.com/barneycarroll/mithril-router) - A Router component for Mithril in the vein of react-router, using universal-router & history. Designed for the browser. Light & assumptuous. (fork)
- [Universal Router](https://www.kriasoft.com/universal-router/) - A simple middleware-style router that can be used in both client-side and server-side applications.
- [History](https://github.com/ReactTraining/history) - The history library lets you easily manage session history anywhere JavaScript runs.
- [Mithril Node Render](https://github.com/MithrilJS/mithril-node-render) - Use mithril views to render server side.

## Usage

```bash
# Clone the repo.
git clone https://github.com/josephspurrier/mithril-fusion

# CD to the folder.
cd mithril-fusion

# Install the packages.
npm install

# Start the dev server using either dev or dev-legacy (for Edge and older browsers).
# Legacy browsers: https://fusionjs.com/api/fusion-cli/docs/progressively-enhanced-bundles
npm run dev
npm run dev-legacy

# Your browser will open to: http://localhost:8080
```

You can read about the fusion-cli commands here: https://fusionjs.com/api/fusion-cli
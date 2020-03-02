# Sample repo for [Jest issue #9628](https://github.com/facebook/jest/issues/9628)

Jest [`projects`](https://jestjs.io/docs/en/configuration.html#projects-arraystring--projectconfig) and [`collectCoverageFrom`](https://jestjs.io/docs/en/configuration.html#collectcoveragefrom-array) do not work together.

## Structure

This monorepo contains two packages - `add` and `mul`.

Both packages have an `index.js` file at their root.

Package `add` is configured to test coverage for its `index.js`.

Package `mul` is configured *not* to test coverage for its `index.js`.

When running `jest` (or `yarn test`) at each package's root, Jest behaves correctly - tests coverage for `add`'s `index.js` and does not test coverage for `mul`'s `index.js`.

The problem is when running `jest` (or `yarn test`) at the repo root, using the [projects](https://jestjs.io/docs/en/configuration.html#projects-arraystring--projectconfig) feature.

## Reproducing the issue

Clone the repo and run `yarn` at the root.

Then run `yarn test` or `yarn test2` (see below).

## Expected behavior

When using projects, we should be able to configure Jest to exclude `index.js` at package `mul` while including `index.js` at package `add`.

## Actual behavior

There is no way to configure the above.

### Attempt 1 - inherit `collectCoverageFrom`

Run `yarn test`.

This uses `jest.config.json` which does not specify `collectCoverageFrom`.

Result: Coverage is collected from both packages.

### Attempt 2 - specify `collectCoverageFrom` with package paths

Run `yarn test2`.

This uses `jest.config.2.json` which specifies `collectCoverageFrom`.

Result: Coverage is *not* collected from any package.

Same result when specifying the full path in `collectCoverageFrom`

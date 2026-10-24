# @x12i/condix usage example

Safe condition evaluation for x12i — thin CEL wrapper with a stable Condix API.

This consuming application demonstrates **evaluate and reuse a condition** using the published npm package, pinned to `1.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Evaluate a CEL condition against an explicit input object.
- Compile a recurring condition once and reuse it for several records.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/condix)
- [Implementation monorepo](https://github.com/x12i/condix)
- [Reviewed package source](https://github.com/x12i/condix/tree/136d95655572d4cffab91e3b3b8c97cc930df460/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

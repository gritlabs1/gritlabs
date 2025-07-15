# Module Federation

## Introduction

As modern web applications grow ever larger and more complex, teams are searching for new ways to scale, maintain, and deploy their front-ends efficiently. Enter **Module Federation**—a revolutionary feature introduced in Webpack 5 that enables truly independent, yet seamlessly integrated, codebases. Module Federation has become a foundational technique for building **micro frontends**—breaking up a monolithic front-end into smaller, manageable, and independently deployable pieces.

## What is Module Federation?

**Module Federation** allows JavaScript applications to dynamically share code and dependencies at runtime. It means one application (the "host") can load code from another, separately built application (the "remote")—without the need to redeploy or re-bundle.

Think of it as a way for apps to "plug in" to each other, fetching features, UI, or even entire sections of code, on the fly. This has major implications for scaling large applications, organizational autonomy, and faster release cycles.

## Why is Module Federation Important?

Before Module Federation, sharing code between separate front-end projects was cumbersome and brittle:

- Teams had to publish shared components to npm or private registries.
- Upgrades required all consumers to update their dependencies and rebuild.
- True runtime code sharing was nearly impossible.

**Module Federation changes the game by enabling:**

- **Micro frontends:** Teams can own and deploy individual features without waiting for the monolith.
- **Incremental upgrades:** Old and new code can coexist, easing migrations.
- **Shared dependencies:** Libraries (e.g., Angular, React) can be loaded once, avoiding bloat and duplication.

## How Does Module Federation Work?

At build time, you configure your apps to expose or consume specific modules using Webpack's Module Federation plugin. At runtime, the host app loads remote code dynamically—fetching only what it needs, when it needs it.

**Key Concepts:**

- **Host:** The main app that loads remote modules.
- **Remote:** An app exposing features or components to other apps.
- **Shared Libraries:** Dependencies (like Angular, React) can be configured as shared singletons.

**Example config (simplified):**

```js
// webpack.config.js for a remote app
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./Widget": "./src/Widget",
      },
      shared: ["@angular/core"],
    }),
  ],
};
```

```js
// webpack.config.js for a host app
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js",
      },
      shared: ["@angular/core"],
    }),
  ],
};
```

## Module Federation in Angular

While initially a Webpack innovation, the Angular team quickly integrated support. Since **Angular 12** (May 2021), Angular projects can use Module Federation natively, making it easier to build scalable micro frontend architectures.

Community plugins such as [`@angular-architects/module-federation`](https://www.npmjs.com/package/@angular-architects/module-federation) further simplify setup, handling boilerplate and advanced scenarios.

## Benefits and Use Cases

- **Autonomous Teams:** Teams can build, test, and deploy their own frontends independently.
- **Scalable Applications:** Large organizations can break apps into logical domains or products.
- **Incremental Migration:** Move legacy code to new frameworks or versions one piece at a time.
- **Shared Libraries:** Reduce duplication by sharing common dependencies at runtime.
- **Faster Delivery:** Smaller deployable units mean faster CI/CD pipelines and less risk.

**Industries using Module Federation:**
E-commerce, fintech, SaaS platforms, enterprise dashboards, and any organization where speed, scale, and autonomy matter.

## Challenges and Considerations

While powerful, Module Federation is not without challenges:

- **Complexity:** Architecture, deployment, and versioning need careful planning.
- **Shared State:** Managing cross-app state can be tricky.
- **Performance:** Loading too many remote entries or duplicating dependencies can impact load times.
- **Tooling:** While mature, Module Federation still requires understanding Webpack and sometimes tweaking configurations.

## Conclusion

**Module Federation** represents a huge leap forward in how we think about building web applications. It brings the benefits of microservices to the frontend, allowing organizations to scale development and delivery without the pain of monolithic codebases.

As the web ecosystem continues to evolve, Module Federation stands as a key technique for ambitious teams looking to future-proof their front-end architectures.

---

### Further Reading

- Webpack 5 Module Federation Docs
- Angular Micro Frontends with Module Federation
- The Micro Frontends Revolution
- [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation)


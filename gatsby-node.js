exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: "/legal",
    component: require.resolve("./src/templates/legal.js"),
    context: {},
    defer: true,
  })
}

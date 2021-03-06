const models = {
  'le-password': require('./input').default
}
const modelContext = require.context('.', false, /\.vue$/)
modelContext.keys().forEach(path => {
  const model = modelContext(path).default
  models[model.name] = model;
})
export default models

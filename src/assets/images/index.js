// svg 图标
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
// 字体图标

// jpg png 图标
export { default as logo } from './logo.png';

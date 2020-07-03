import { isFunction } from '@/utils'

export default {
  name: 'le-render',
  functional: true,
  render(h, context) {
    if (isFunction(context.props.render)) {
      return context.props.render(h)
    }
    return <span>{context.props.render}</span>
  }
}

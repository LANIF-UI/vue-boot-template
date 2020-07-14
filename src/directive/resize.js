import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import _ from 'lodash';

const initOptions = {
  delay: 150
}

function createResizeSensor(el, { value, arg = 'throttle', options }) {
  let onResize = () => value(getSize(el), el);
  switch (arg) {
    case 'debounce':
      onResize = _.debounce(onResize, options.delay);
      break;

    case 'throttle':
      onResize = _.debounce(onResize, options.delay, { leading: true, trailing: true, maxWait: options.delay });
      break;
  }

  const res = new ResizeSensor(el, onResize);
  return res;
}

function getSize(el) {
  const {
    width,
    height,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom
  } = getComputedStyle(el);

  const size = {
    width:
      parseInt(width, 10) -
      parseInt(paddingLeft, 10) -
      parseInt(paddingRight, 10),
    height:
      parseInt(height, 10) -
      parseInt(paddingTop, 10) -
      parseInt(paddingBottom, 10)
  };
  return size
}

export default {
  name: 'resize',
  inserted(el, { value, arg, modifiers }, { context: component }) {
    if (!value || typeof value !== 'function') {
      console.warn('v-resize should received a function as value')
      return;
    }
    const delay = Object.keys(modifiers).filter(m => parseInt(m))[0];
    const options = Object.assign({}, initOptions, delay && { delay })
    if (component && component.$el === el) {
      component.$once('hook:deactivated', () => {
        this.unbind(el);
        component.$once('hook:activated', () => {
          this.inserted(el, { value, arg, modifiers }, { context: component });
        })
      })
    }
    if (el.offsetParent) {
      createResizeSensor(el, { value, arg, options });
      return;
    }
  },
  unbind(el) {
    if (!el.resizeSensor) {
      return;
    }
    ResizeSensor.detach(el);
  }
}

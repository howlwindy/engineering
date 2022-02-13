import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App.vue', () => {
  it('renders', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('navigator')
  })
})

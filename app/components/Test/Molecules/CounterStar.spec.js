import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import CounterStar from '~/components/Molecules/CounterStar'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('Button', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('count 0', () => {
    const props = {
      counter: 0,
    }
    const wrapper = mount(CounterStar, {
      localVue,
      vuetify,
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('counter')).toBe(props.counter)
    expect(wrapper.vm.buttonStar).toEqual('ButtonStarOutline')
  })

  it('count 1', () => {
    const props = {
      counter: 1,
    }
    const wrapper = mount(CounterStar, {
      localVue,
      vuetify,
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('counter')).toBe(props.counter)
    expect(wrapper.vm.buttonStar).toEqual('ButtonStarFill')
  })
})

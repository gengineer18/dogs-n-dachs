import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import CounterHeart from '~/components/Molecules/CounterHeart'

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
    const wrapper = mount(CounterHeart, {
      localVue,
      vuetify,
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('counter')).toBe(props.counter)
    expect(wrapper.vm.buttonHeart).toEqual('ButtonHeartOutline')
  })

  it('count 1', () => {
    const props = {
      counter: 1,
    }
    const wrapper = mount(CounterHeart, {
      localVue,
      vuetify,
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('counter')).toBe(props.counter)
    expect(wrapper.vm.buttonHeart).toEqual('ButtonHeartFill')
  })
})

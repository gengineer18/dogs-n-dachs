import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import ImageWithName from '~/components/Molecules/ImageWithName'

const localVue = createLocalVue()
Vue.use(Vuetify)

describe('Button', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('Props', () => {
    const props = {
      src:
        'https://firebasestorage.googleapis.com/v0/b/dogs-n-dachs.appspot.com/o/IMG_8254.jpg?alt=media&token=b1fe6015-23c9-4ddf-9809-aaff5c67b42b',
      name: 'ロンロン',
    }
    const wrapper = mount(ImageWithName, {
      localVue,
      vuetify,
      propsData: props,
    })
    // propsに指定したデータが正しく表示されること
    expect(wrapper.props('src')).toBe(props.src)
    expect(wrapper.props('name')).toBe(props.name)
  })
})

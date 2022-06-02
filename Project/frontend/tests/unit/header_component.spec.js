import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders header with router links', () => {
    const routerLinkTag = '<router-link to'
    const wrapper = shallowMount(Header);
    expect(wrapper.html()).toContain(routerLinkTag);
  })
})

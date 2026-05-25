import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

const signature = () =>
  h('div', { class: 'author-signature' }, [
    h('span', { class: 'signature-name' }, 'Lixian ZHANG'),
    h('span', { class: 'signature-divider' }, '·'),
    h('span', { class: 'signature-role' }, 'CTTQ'),
  ])

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': signature,
    })
  },
}

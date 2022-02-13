import { createI18n } from 'vue-i18n'
import cn from './cn/index'
import en from './en/index'

export default createI18n({
  legacy: true,
  globalInjection: true,
  locale: 'cn',
  fallbackLocale: 'en',
  messages: {
    cn,
    en
  }
})

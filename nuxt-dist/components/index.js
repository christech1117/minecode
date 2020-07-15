export { default as Advantage } from '../../components/Advantage.vue'
export { default as Banner } from '../../components/Banner.vue'
export { default as Calculation } from '../../components/Calculation.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NavBar } from '../../components/NavBar.vue'
export { default as NavFooter } from '../../components/NavFooter.vue'
export { default as Service } from '../../components/Service.vue'
export { default as Transmit } from '../../components/Transmit.vue'
export { default as Privacy } from '../../components/privacy.js'
export { default as ServiceTerms } from '../../components/serviceTerms.js'
export { default as Terms } from '../../components/terms.vue'

export const LazyAdvantage = import('../../components/Advantage.vue' /* webpackChunkName: "components/Advantage'}" */).then(c => c.default || c)
export const LazyBanner = import('../../components/Banner.vue' /* webpackChunkName: "components/Banner'}" */).then(c => c.default || c)
export const LazyCalculation = import('../../components/Calculation.vue' /* webpackChunkName: "components/Calculation'}" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo'}" */).then(c => c.default || c)
export const LazyNavBar = import('../../components/NavBar.vue' /* webpackChunkName: "components/NavBar'}" */).then(c => c.default || c)
export const LazyNavFooter = import('../../components/NavFooter.vue' /* webpackChunkName: "components/NavFooter'}" */).then(c => c.default || c)
export const LazyService = import('../../components/Service.vue' /* webpackChunkName: "components/Service'}" */).then(c => c.default || c)
export const LazyTransmit = import('../../components/Transmit.vue' /* webpackChunkName: "components/Transmit'}" */).then(c => c.default || c)
export const LazyPrivacy = import('../../components/privacy.js' /* webpackChunkName: "components/privacy'}" */).then(c => c.default || c)
export const LazyServiceTerms = import('../../components/serviceTerms.js' /* webpackChunkName: "components/serviceTerms'}" */).then(c => c.default || c)
export const LazyTerms = import('../../components/terms.vue' /* webpackChunkName: "components/terms'}" */).then(c => c.default || c)

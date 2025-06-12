import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7c3069ca = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _4fab0b61 = () => interopDefault(import('..\\pages\\associate-company.vue' /* webpackChunkName: "pages/associate-company" */))
const _737c1f2c = () => interopDefault(import('..\\pages\\benefit.vue' /* webpackChunkName: "pages/benefit" */))
const _2c1b0c30 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _198a1369 = () => interopDefault(import('..\\pages\\our-client.vue' /* webpackChunkName: "pages/our-client" */))
const _12ca4e9b = () => interopDefault(import('..\\pages\\services.vue' /* webpackChunkName: "pages/services" */))
const _21d2c1e5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _7c3069ca,
    name: "about-us"
  }, {
    path: "/associate-company",
    component: _4fab0b61,
    name: "associate-company"
  }, {
    path: "/benefit",
    component: _737c1f2c,
    name: "benefit"
  }, {
    path: "/contact-us",
    component: _2c1b0c30,
    name: "contact-us"
  }, {
    path: "/our-client",
    component: _198a1369,
    name: "our-client"
  }, {
    path: "/services",
    component: _12ca4e9b,
    name: "services"
  }, {
    path: "/",
    component: _21d2c1e5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

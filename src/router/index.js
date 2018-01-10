import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

const createRoute = (name, path, children) => ({
  name, path, children
})

const routes = [
  createRoute('home', '/home'),
  createRoute('pets', '/pets', [

    createRoute('legs', '/legs', [
      createRoute('cat', '/cat', [
        createRoute('samsee', '/samsee'),
        createRoute('praco', '/praco'),
      ]),
      createRoute('rabbit', '/rabbit', [
        createRoute('yenrudee', '/yenrudee'),
        createRoute('luangsug', '/luangsug'),
      ]),
      createRoute('hamster', '/hamster', [
        createRoute('nok', '/nok'),
        createRoute('nu', '/nu'),
      ]),
    ]),

    createRoute('noleg', '/noleg', [
      createRoute('fish', '/fish', [
        createRoute('antonio', '/antonio'),
      ]),
    ]),
  ]),
]

export const router = createRouter(routes)
.usePlugin(listenersPlugin())
.usePlugin(browserPlugin())

export default router

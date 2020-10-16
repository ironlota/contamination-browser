'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'ImageController.index')

// Those routes should be only accessible
// when you are not logged in
Route.group(() => {
  Route.get('login', 'SessionController.create')
  Route.post('login', 'SessionController.store')

  //   Route.get('register', 'UserController.create')
  //   Route.post('register', 'UserController.store')
}).middleware(['guest'])

// Those routes should be only accessible
// when you are logged in
Route.group(() => {
  Route.get('logout', 'SessionController.delete')

  //   Route.get('posts/create', 'PostController.create')
  //   Route.post('posts', 'PostController.store')

  Route.get('/p/:page', 'ImageController.index')
  Route.get('/images/:id', 'ImageController.show')

  // Route.get('images/:id/edit', 'ImageController.edit')
  // Route.get('images/:id/delete', 'ImageController.delete')
  // Route.put('images/:id', 'ImageController.update')
}).middleware(['auth'])

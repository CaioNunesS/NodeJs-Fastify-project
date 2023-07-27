import { env } from './env/index'

import { app } from './app'

const port = env.PORT

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running on the port: ${port}`)
  })

import express from 'express'
import cors from 'cors'
import path from 'path'
import bookRouter from './routes/book.route'

const app = express()

app.use(cors())
app.use(express.json())

// API routes
app.use('/books', bookRouter)

// In production, serve static files from the frontend build directory
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist2')))
  
  // For all other routes, serve the index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist2/index.html'))
  })
// }

export default app

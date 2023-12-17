import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value 
    // is preserved across module reloads caused by HMR (Hot Module Replacement). 
    if (!(global as any)._mongoClientPromise) {
        const client = new MongoClient(uri, options)
        ;(global as any)._mongoClientPromise = client.connect()
    }
    clientPromise = (global as any)._mongoClientPromise
} else {
    // In production mode, it's best not to use a global variable.
    const client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
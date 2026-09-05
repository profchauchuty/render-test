import postgres from 'postgres'

const urlConnection = process.env.DATABASE_URL

const sql = postgres(urlConnection, {
    ssl: true
})

export default sql
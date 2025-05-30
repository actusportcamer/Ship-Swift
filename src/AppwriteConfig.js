import { Client, Account, Databases} from 'appwrite'

const client = new Client()

client.setProject('6838dcb900399bf0839b').setEndpoint('https://fra.cloud.appwrite.io/v1')
export const account = new Account(client)
export const databases = new Databases(client)
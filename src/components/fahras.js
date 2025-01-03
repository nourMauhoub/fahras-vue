import { ref } from 'vue'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:80/api'

export default function useFahras() {
const books = ref([])
const book =ref([])


const getBooks = async ()=>{
    const response = await axios.get('books')
    books.value =response.data.data.map(book => ({
        id:     book.id,
        title: book.title,
        description: book.description,
        image: book.image,
        author: book.author, 
    
    }))
console.log(books.value)
}


return {
    books,
    book,
    getBooks
}
}
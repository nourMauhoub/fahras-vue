<template>
<div class=""
id="books">
<div class="text-[#2f4f4f] m-4 ml-12   ">
    <h1 class=" md:ml-16 ml-8 lg:ml-28 text-2xl font-oswald font-bold uppercase">Books</h1>
</div>
  <div  class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-20 m-12 lg:mx-40 xl:mx-60">

    <div v-for="book in books" :key="book.id">
        <div class="relative h-80   bg-white rounded-lg  overflow-hidden"  >

        <img
        :src="book.image"
        :alt="book.title"
              class=" h-52 w-full object-cover  rounded-lg "
            />
            <div class="p-1 ">
              <h2 class="text-l font-bold mb-2 text-[#2f4f4f] capitalize">{{book.title}}</h2>

            </div>
  <div class="p-1 text-[#4b9c9c] ">
  <p >{{ book.author }}</p>
  </div>
  
  
    </div>
</div>
  </div>
</div>
</template>




<script setup>
import useFahras from '../../components/fahras'
import { onMounted} from 'vue'
const { books, getBooks } = useFahras()
onMounted(() => getBooks())



</script>
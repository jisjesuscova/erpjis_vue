<template>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Total Empleados Activos
          </p>
        </div>
        <div class="p-4 md:p-5 text-center">
          <h3 class="text-sm font-bold text-gray-800 dark:text-white">
            188 Empleados
          </h3>
        </div>
      </div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Distribución de Planta
          </p>
        </div>
        <div class="p-4 md:p-5">
          <div class="grid grid-cols-2 gap-2 text-center">
            <h4 class="text-sm font-bold text-gray-800 dark:text-white">
              Full-Time: 150
            </h4>
            <h4 class="text-sm font-bold text-gray-800 dark:text-white">
              Part-Time: 38
            </h4>
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Distribución de Generos
          </p>
        </div>
        <div class="p-4 md:p-5">
          <div class="grid grid-cols-2 gap-2 text-center">
            <h4 class="text-sm font-bold text-gray-800 dark:text-white">
              Masculino: 150
            </h4>
            <h4 class="text-sm font-bold text-gray-800 dark:text-white">
              Femenino: 38
            </h4>
          </div>
        </div>
      </div>
      <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-gray-800 dark:border-gray-700">
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Saldo de Vacaciones
          </p>
        </div>
        <div class="p-4 md:p-5 text-center">
          <h3 class="text-sm font-bold text-gray-800 dark:text-white">
            2576 Días
          </h3>
        </div>
      </div>
    </div>
    
    
  </div>
</template>
<script>
import Searcher from '../components/Searcher.vue';
import axios from 'axios';

export default {
    components: {
      Searcher
    },
    data() {
        return {
          banks: [],
        }
    },
    async created() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/banks/', {
          headers: {
            accept: 'application/json',
          },
        });
        this.banks = response.data.message;
      } catch (error) {
        console.error('Error al obtener la lista de bancos:', error);
      }
    },
}
</script>
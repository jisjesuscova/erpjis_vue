<template>
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
      <SearchForm />
      
      <div class="flex flex-col pt-10">
          <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                  <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead class="bg-gray-50 dark:bg-gray-700">
                      <tr>
                          <th scope="col" class="py-3 px-4 pr-0">
                          <div class="flex items-center h-5">
                              <input id="hs-table-pagination-checkbox-all" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                              <label for="hs-table-pagination-checkbox-all" class="sr-only">Checkbox</label>
                          </div>
                          </th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                          <td class="py-3 pl-4">
                          <div class="flex items-center h-5">
                              <input id="hs-table-pagination-checkbox-1" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                              <label for="hs-table-pagination-checkbox-1" class="sr-only">Checkbox</label>
                          </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                          </td>
                      </tr>

                      <tr>
                          <td class="py-3 pl-4">
                          <div class="flex items-center h-5">
                              <input id="hs-table-pagination-checkbox-2" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                              <label for="hs-table-pagination-checkbox-2" class="sr-only">Checkbox</label>
                          </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                          </td>
                      </tr>

                      <tr>
                          <td class="py-3 pl-4">
                          <div class="flex items-center h-5">
                              <input id="hs-table-pagination-checkbox-3" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                              <label for="hs-table-pagination-checkbox-3" class="sr-only">Checkbox</label>
                          </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                          </td>
                      </tr>

                      <tr>
                          <td class="py-3 pl-4">
                          <div class="flex items-center h-5">
                              <input id="hs-table-pagination-checkbox-4" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                              <label for="hs-table-pagination-checkbox-4" class="sr-only">Checkbox</label>
                          </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Edward King</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">16</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">LA No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                          </td>
                      </tr>

                      <tr>
                          <td class="py-3 pl-4">
                          <div class="flex items-center h-5">
                              <input id="hs-table-pagination-checkbox-5" type="checkbox" class="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800">
                              <label for="hs-table-pagination-checkbox-5" class="sr-only">Checkbox</label>
                          </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Red</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Melbourne No. 1 Lake Park</td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
                          </td>
                      </tr>
                      </tbody>
                  </table>
                  </div>
                  <div class="py-1 px-4">
                  <nav class="flex items-center space-x-2">
                      <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
                      <span aria-hidden="true">«</span>
                      <span class="sr-only">Previous</span>
                      </a>
                      <a class="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
                      <a class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
                      <a class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
                      <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
                      <span class="sr-only">Next</span>
                      <span aria-hidden="true">»</span>
                      </a>
                  </nav>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Searcher from '../components/SearchForm.vue';

export default {
  components: {
    SearchForm
  },
  data() {
      return {
          contador: 0
      }
  },
}
</script>
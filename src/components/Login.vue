<template>
    <main class="w-full max-w-md mx-auto p-6">
        <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div class="p-4 sm:p-7">
                <div class="text-center">
                    <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Iniciar Sesión</h1>
                </div>
  
                <div class="mt-5">
                    <!-- Form -->
                    <form @submit.prevent="login">
                        <div class="grid gap-y-4">
                            <!-- Form Group -->
                            <div>
                                <label for="email" class="block text-sm mb-2 dark:text-white">RUT</label>
                                <div class="relative">
                                    <input
                                        type="text"
                                        id="username"
                                        class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="RUT"
                                        required
                                        v-model="username"
                                        />
                                    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                            </div>
                            <!-- End Form Group -->
  
                            <!-- Form Group -->
                            <div>
                                <div class="flex justify-between items-center">
                                    <label for="password" class="block text-sm mb-2 dark:text-white">Contraseña</label>
                                    <a class="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">¿Olvidastes la contraseña?</a>
                                </div>
                                <div class="relative">
                                    <input
                                    type="password"
                                    id="password"
                                    class="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Contraseña"
                                    required
                                    v-model="password"
                                    />
                                    <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                        <svg class="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                        </svg>
                                    </div>
                                </div>
                                <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                            </div>
                            <!-- End Form Group -->
                            <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Ingresar</button>
                        </div>
                    </form>
                    <!-- End Form -->
                </div>
            </div>
        </div>
    </main>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        accessToken: '',
      };
    },
    methods: {
        login() {
            const formData = new FormData();
            formData.append('username', this.username);
            formData.append('password', this.password);

            axios.post('http://127.0.0.1:8000/login_users/token', formData)
            .then(response => {
                // Maneja la respuesta del backend
                this.accessToken = response.data.access_token;
                        
                // Guarda el token en el almacenamiento local (localStorage)
                localStorage.setItem('accessToken', this.accessToken);

                // Refrescar la página
                window.location.reload();
            })
            .catch(error => {
            // Manejar el error aquí
            });
        },
    },
  };
  </script>
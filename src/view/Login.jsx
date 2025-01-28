import React from "react";

function Login() {
  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Iniciar sesión
        </h2>

        <form className="space-y-4">
          <div>
            <label
              for="email"
              className="block text-sm font-medium text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="tucorreo@ejemplo.com"
              required
            />
          </div>

          <div>
            <label
              for="password"
              className="block text-sm font-medium text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="mr-2 text-blue-500 focus:ring-blue-500"
              />
              Recuérdame
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-4">
          ¿No tienes cuenta?
          <a href="#" className="text-blue-500 hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;

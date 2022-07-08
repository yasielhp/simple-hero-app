import { render, screen } from "@testing-library/react";
import { PublicRouter } from '../../src/router/PublicRouter';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';

describe("Pruebas en <PublicRouter />", () => {
  test("Debe de mostrar el children si no está autenticado", () => {

    const contextValue = {
      logged: false,
    }

    render(
      <AuthContext.Provider value={ contextValue}>
        <PublicRouter>
          <div>Hola Mundo</div>
        </PublicRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Hola Mundo')).toBeTruthy()
  })

  test("Debe de navegar si está autenticado", () => {

      const contextValue = {
        logged: true,
        user: {
          name: 'Miguel',
          id: 'ABD123'
        }
      }

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="login" element={
              <PublicRouter>
                <h1>Hola Mundo</h1>
              </PublicRouter>
            } />
            <Route path='marvel' element={ <h1>Página Marvel</h1>}/>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText("Página Marvel")).toBeTruthy()
  })
})
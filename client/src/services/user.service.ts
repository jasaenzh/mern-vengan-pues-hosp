const urlUser = 'http://localhost:3001/api/auth/iniciar-sesion'
const urlApartamentos = 'http://localhost:3001/api/apartamentos'

export const login = async (email: string, password: string) => {
    return await fetch(urlUser).then(res => res.json())
}

export const getApartamentos = async () => {
    const response = await fetch(urlApartamentos)
    const data = await response.json()
    return data
}


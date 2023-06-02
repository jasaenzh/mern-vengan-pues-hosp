// Persistir la informacion en la Base de Datos
export const persistLocalStorageUser = <T,>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify({ ...value }))
}

// Limpiar la informacion en la Base de Datos
export const clearLocalStorageUser = (key: string) => {
    localStorage.removeItem(key);
};
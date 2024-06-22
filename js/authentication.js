export default function IsLoggedIn() {
    // Lê dados da autenticação salva
    let loggedIn = window.localStorage.getItem('logged-in') ?? '[]';
    loggedIn = JSON.parse(loggedIn);

    // Se não estiver logado, retorna false
    if (loggedIn !== true) 
    {
        return false;
    }
    return true;
};

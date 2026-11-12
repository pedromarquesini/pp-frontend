type LoginResponse = {
    token: string;
}

type User = {
    id: string;
    nome: string;
    email: string;
    fotoDePerfil: string | null;
}

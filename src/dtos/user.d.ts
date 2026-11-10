type UserAPIRole = "user";

type UserAPIResponse = {
    token: string;
    user: {
        id: string;
        nome: string;
        email: string;
        avatar: string | null;   
    }
    role: UserAPIRole;     
}
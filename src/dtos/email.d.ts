type EmailListItem = {
    titulo: string;
    enviado_por: string;
    jaVisto: boolean;
    email_id: string;
};

type MyEmailsResponse = {
    emails: EmailListItem[];
};

type EmailDetail = {
    titulo: string;
    content: string;
    enviado_por: string;
};

type SentEmailItem = {
    titulo: string;
    enviado_para: string;
    jaVisto: boolean;
    email_id: string;
};

type SentEmailsResponse = {
    emails: SentEmailItem[];
};

import { api } from "./api";

export async function getMyEmails(): Promise<EmailListItem[]> {
    const { data } = await api.get<MyEmailsResponse>("/my-emails");
    return data.emails;
}

export async function getEmail(emailId: string): Promise<EmailDetail> {
    const { data } = await api.get<EmailDetail>(`/email/${emailId}`);
    return data;
}

export async function getSentEmails(): Promise<SentEmailItem[]> {
    const { data } = await api.get<SentEmailsResponse>("/sent-emails");
    return data.emails;
}

export async function deleteEmail(emailId: string): Promise<void> {
    await api.delete(`/email/${emailId}`);
}
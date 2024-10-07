export default interface Message {
    role: MessageRole;
    content: string;
}

type MessageRole = "user" | "ai"
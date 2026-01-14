import { User } from "better-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarProps { user: User | undefined }

export function UserAvatar({ user }: UserAvatarProps) {

    if (!user) {
        return null;
    }

    return (
        <Avatar>
            <AvatarImage src={user.image as string} />
            <AvatarFallback>{user.name?.[0]?.toUpperCase()}</AvatarFallback>
        </Avatar>
    )
}

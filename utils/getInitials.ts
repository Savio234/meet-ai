
export function getInitials(fullName?: string) {
    if (!fullName) return '';
    const names = fullName?.split(' ');
    const initials = names?.map((name: string) => 
        name?.charAt(0)?.toUpperCase())?.join('');
    return initials
}
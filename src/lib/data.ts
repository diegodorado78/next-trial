const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function fetchUsers() {
    try {
        const response = await fetch(`${baseUrl}/users/`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }
}

export async function fetchUserById({ id }: { id: string | number | undefined | null }) {
    if (id === undefined || id === null || id === '') {
        return null;
    }
    try {
        const response = await fetch(`${baseUrl}/users/id/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return null;
    }
}

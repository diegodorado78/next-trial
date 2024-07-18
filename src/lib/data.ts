export async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/users');
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

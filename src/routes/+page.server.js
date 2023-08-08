// Disallows other users to access site... for now.
import { PUBLIC_CURRENT_MODE } from '$env/static/public';
import { redirect } from '@sveltejs/kit';

export function load() {
	if (PUBLIC_CURRENT_MODE == "development") {
        throw redirect(307, '/notallowed');
    }
}

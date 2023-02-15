/** @type {import('./$types').PageServerLoad} */
let item = [
    {
        title: '',
        brand: '',
        asking_price: '',
        listed: '',
        description: '',

    }
]

export async function load() {
    return {
        item
    };
};

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData()
        console.log(formData);
    }
}
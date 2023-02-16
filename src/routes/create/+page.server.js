import JOI from 'joi';
import { TABLE } from '$lib/utils/supabase.js'

const ADD_ITEM_SCHEMA = JOI.object({
    title: JOI.string().required(),
    brand: JOI.string(),
    description: JOI.string(),
    asking_price: JOI.number(),
})

/** @type {import('./$types').Actions} */
export const actions = {

    add: async ({request}) => {

        const DATA = await request.formData();

        const { title, brand, description, asking_price } = Object.fromEntries(DATA);

        const result = await ADD_ITEM_SCHEMA.validateAsync({title, brand, description, asking_price});

        const post = await TABLE.items.insert(result)
        console.log(post);
    }
}

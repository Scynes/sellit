import JOI from 'joi';

const ADD_ITEM_SCHEMA = JOI.object({
    title: JOI.string().required(),
    brand: JOI.string(),
    description: JOI.string(),
    asking_price: JOI.number(),
})

/** @type {import('./$types').Actions} */
export const actions = {

    add: async ({request}) => {

        const data = await request.formData();

        const { error, result } = ADD_ITEM_SCHEMA.validate(data);

        if (error) console.log(error)

        console.log(result)
    }
}

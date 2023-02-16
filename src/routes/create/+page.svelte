<script>
	import {
		Label,
		Fileupload,
		Textarea,
		Input,
		Checkbox,
	} from 'flowbite-svelte';
	let sizesModal = true;
	let size;
	let textareaprops = {
		id: 'message',
		name: 'description',
		label: 'Item Description',
		rows: 4,
		placeholder: 'Describe your item ...',
	};

	let fileuploadprops = {
		id: 'user_avatar',
	};

	let fileuploadprops2 = {
		id: 'user_avatar2',
	};
	import { Button, Modal } from 'flowbite-svelte';
	let placement;
	let open = false;

	const setPlacement = (ev) => {
		placement = ev.target.textContent; // text in the button
		open = !open;
	};
</script>

<Button
	size="xl"
	on:click={() => {
		size = 'xl';
		sizesModal = true;
	}}>Add Item</Button
>
<form
	action="?/add"
	method="POST"
>
	<Modal
		title="Add Item"
		bind:open={sizesModal}
		{size}
		autoclose
		class="w-full"
	>
		<Label
			for="default-input"
			class="block mb-2">What are you selling?</Label
		>
		<Input
			id="default-input"
			placeholder="Item Name"
			for="title"
			name="title"
		/>
		<Label
			for="default-input"
			class="block mb-2">Brand</Label
		>
		<Input
			id="default-input"
			placeholder="..."
			for="brand"
			name="brand"
		/>
		<Label
			for="default-input"
			class="block mb-2">Asking Price</Label
		>
		<Input
			id="default-input"
			placeholder="$"
			for="asking_price"
			name="asking_price"
			type="number"
		/>
		<Textarea
			{...textareaprops}
			for="description"
		/>
		<svelte:fragment slot="footer">
			<input
				type="submit"
				value="Submit"
			/>
			<Button color="alternative">Cancel</Button>
		</svelte:fragment>
		<Fileupload {...fileuploadprops} />
	</Modal>
</form>

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
		name: 'message',
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
<form action="POST">
	<Modal
		title="Add Item"
		bind:open={sizesModal}
		{size}
		autoclose
	>
		<Label
			for="name"
			class="block mb-2">Name</Label
		>
		<Input
			id="default-input"
			placeholder="Item Name"
			for="title"
		/>
		<Label
			for="default-input"
			class="block mb-2">Brand</Label
		>
		<Input
			id="default-input"
			placeholder="..."
			for="brand"
		/>
		<Label
			for="default-input"
			class="block mb-2">Asking Price</Label
		>
		<Input
			id="default-input"
			placeholder="$"
			for="asking_price"
		/>
		<Label class="pb-2">Item Description</Label>
		<Textarea
			{...textareaprops}
			for="description"
		/>
		<Checkbox checked>List Item</Checkbox>
		<svelte:fragment slot="footer">
			<Button>Add Item</Button>
			<Button color="alternative">Cancel</Button>
		</svelte:fragment>
		<Label class="pb-2">Upload file</Label>
		<Fileupload {...fileuploadprops} />
	</Modal>
</form>

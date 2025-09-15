import toast from "react-hot-toast";

export const copyText = (text: string) => {
	if (navigator.clipboard && navigator.permissions) {
		navigator.clipboard.writeText(text);
	} else if (document.queryCommandSupported("copy")) {
		const ele = document.createElement("textarea");
		ele.value = text;
		document.body.appendChild(ele);
		ele.select();
		// const done = document.execCommand("copy");
		document.body?.removeChild(ele);
	}
};

export const handleCopy = async (text: string) => {
	try {
		await navigator.clipboard.writeText(text);
		toast.success("Copied!");
		// eslint-disable-next-line
	} catch (error: any) {
		toast.error("Failed to copy text");
		console.log('Error', error);
	}
};

export const useWindowSize = () => {
	const width = ref<number>(1200);
	const height = ref<number>(900);

	const updateSize = () => {
		if (typeof window !== "undefined") {
			width.value = window.innerWidth;
			height.value = window.innerHeight;
		}
	};

	onMounted(() => {
		updateSize();
		window.addEventListener("resize", updateSize);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", updateSize);
	});

	return { width, height };
};

<template>
    <header class="bg-teal-800 py-4">
        <div class="container">
            <h1 class="text-white font-black text-xl">
                Vue3 Icon
            </h1>
        </div>
    </header>
	<main class="container">
		<div>
			<h3 class="text-sm mt-4 uppercase font-bold">MDI icon, rotated 90deg</h3>
			<SvgIcon :path="mdiAccount" :rotate="90" type="mdi" size="96" no-namespace class="testing" />
		</div>
		<div>
			<h3 class="text-sm mt-4 uppercase font-bold">FontAwesome Icon, flipped horizontal</h3>
			<SvgIcon :fa-icon="faCoffee" size="96" flip="horizontal" />
		</div>
		<div>
			<h3 class="text-sm mt-4 uppercase font-bold">Simple Icon</h3>
			<SvgIcon type="simple-icons" size="96" :path="siCaffeine" />
		</div>
		<div>
			<h3 class="text-sm mt-4 uppercase font-bold">Custom Icon</h3>
			<SvgIcon size="96" viewbox="0 0 24 24" :path="customIcon" />
		</div>
		<div>
			<h3 class="text-sm mt-4 uppercase font-bold">Custom Icon, with multiple paths</h3>
			<SvgIcon class="size-20" viewbox="0 0 512 512" :path="multiplePathIcon" no-styles no-namespace no-dimensions />
		</div>
		<div>
			<h3 class="text-sm mt-4 uppercase font-bold">Custom Icon, with multiple paths and some path styles</h3>
			<SvgIcon size="96" viewbox="0 0 512 512" :path="multiplePathIconWithStyles" class="text-red-300" />
		</div>
	</main>
</template>

<script setup>
import { siCaffeine } from "simple-icons/icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { mdiAccount } from "@mdi/js";

const customIcon = "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z";

const multiplePathIcon = [
	"M434.26,139.29H128v-2L428.54,43.11a10.22,10.22,0,0,0-6.12-19.5L114.29,120a10.22,10.22,0,0,0-7.15,10.21v9.6H77.74c-32.57,0-70.65,18.48-70.65,70.65V435.06c0,32.57,18.48,70.65,70.65,70.65H434.26c52.17,0,70.65-38.08,70.65-70.65V210.45C504.91,157.77,466.83,139.29,434.26,139.29Zm50.23,295.26c0,15.11-4.9,50.23-50.23,50.23H77.74c-45.33,0-50.23-35.12-50.23-50.23V209.94c0-45.33,35.12-50.23,50.23-50.23H434.26c15.11,0,50.23,4.9,50.23,50.23Z",
	"M403,284.57a49.47,49.47,0,0,0,0-98.93H113.78a49.47,49.47,0,0,0,0,98.93ZM84.79,235.36a29.08,29.08,0,0,1,29-29H403a29,29,0,0,1,0,58.09H201.58v-29.1a10.21,10.21,0,0,0-20.42,0v28.79H113.78A29.09,29.09,0,0,1,84.79,235.36Z",
	"M387.5,303.25A73.72,73.72,0,1,0,461.21,377v-.51A73.82,73.82,0,0,0,387.5,303.25Zm0,127a53,53,0,1,1,.51,0Z",
	"M251.3,343.68H102.86a10.21,10.21,0,1,0,0,20.42h148a10.21,10.21,0,0,0,0-20.42Z",
	"M251.3,389.83H102.86a10.21,10.21,0,1,0,0,20.42h148a10.21,10.21,0,0,0,0-20.42Z"
];

const multiplePathIconWithStyles = [
	{
		d: "M434.26,139.29H128v-2L428.54,43.11a10.22,10.22,0,0,0-6.12-19.5L114.29,120a10.22,10.22,0,0,0-7.15,10.21v9.6H77.74c-32.57,0-70.65,18.48-70.65,70.65V435.06c0,32.57,18.48,70.65,70.65,70.65H434.26c52.17,0,70.65-38.08,70.65-70.65V210.45C504.91,157.77,466.83,139.29,434.26,139.29Zm50.23,295.26c0,15.11-4.9,50.23-50.23,50.23H77.74c-45.33,0-50.23-35.12-50.23-50.23V209.94c0-45.33,35.12-50.23,50.23-50.23H434.26c15.11,0,50.23,4.9,50.23,50.23Z",
        class: "fill-red-700"
	},
	{
		d: "M403,284.57a49.47,49.47,0,0,0,0-98.93H113.78a49.47,49.47,0,0,0,0,98.93ZM84.79,235.36a29.08,29.08,0,0,1,29-29H403a29,29,0,0,1,0,58.09H201.58v-29.1a10.21,10.21,0,0,0-20.42,0v28.79H113.78A29.09,29.09,0,0,1,84.79,235.36Z"
	},
	{ d: "M387.5,303.25A73.72,73.72,0,1,0,461.21,377v-.51A73.82,73.82,0,0,0,387.5,303.25Zm0,127a53,53,0,1,1,.51,0Z" },
	{ d: "M251.3,343.68H102.86a10.21,10.21,0,1,0,0,20.42h148a10.21,10.21,0,0,0,0-20.42Z" },
	{ d: "M251.3,389.83H102.86a10.21,10.21,0,1,0,0,20.42h148a10.21,10.21,0,0,0,0-20.42Z" }
];
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

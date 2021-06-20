<template>
    <main>
        <vue3-icon :path="mdiAccount" :rotate="90" type="mdi" size="96"></vue3-icon>
        <vue3-icon :fa-icon="faCoffee" size="96" flip="horizontal" />
        <vue3-icon type="simple-icons" size="96" :path="siAndela" />
        <vue3-icon size="96" viewbox="0 0 24 24" :path="customIcon" />
    </main>
</template>

<script setup>
import siAndela from 'simple-icons/icons/andela';
import { faCamera, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { mdiAccount } from "@mdi/js";

const customIcon = "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z";
</script>

<template>
    <div>
        <cadr :data='state.cardsdata' />
    </div>
</template>
<script setup>
import { reactive } from "vue";

import cadr from "../componenets/cadr.vue";

const state = reactive({
    cardsdata: [
        {
            title: 'card1',
            number: 290,
            icon: 'bx bxs-playlist',
        },
        {
            title: 'card2',
            number: 2600,
            icon: 'bx bxs-ev-station',
        },
        {
            title: 'd3',
            number: 3500,
            icon: 'fa fa-edit',
            iconId: 'cube',
        },
        {
            title: 'd4',
            number: 2000,
            icon: 'fa-solid fa-trash',
            iconId: 'cube',
            cardclass: 'FrCardclass'
        }
    ],
});

</script>

<style>
#cube {
    background-color: #ffd4d4;
    color: #ff7979;
}

#cube:hover {
    background-color: #de6b6b;
}

.FrCardclass {
    background: yellow;
}
</style>
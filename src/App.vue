
<template>
  <div>
   <router-view></router-view>
  </div>
  
</template>
<script setup>
import { reactive } from "vue";
import AmhVueTable from "am_table_vue";

// import css
import "am_table_vue/dist/style.css";

// import card from 'dynamic_cards_componenets';
// import 'dynamic_cards_componenets/dist/card-component.css'
import cadr from "./componenets/cadr.vue";

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
    data: [{
      name: 'ahmed',
    adresse:'casa',
    age: 22,
    aviable: 1,
    date: new Date('12/05/2022'),
    image: 'https://via.placeholder.com/640x480.png/0033aa?text=dolore'
  },
  {
    name: 'hasan',
    adresse: 'essaouira',
    age: 33,
    aviable: 1,
    date: new Date('12/06/2022'),
    image: 'https://via.placeholder.com/640x480.png/0033aa?text=dolore'
  },
  {
    name: 'adam',
    adresse: 'taza',
    age: 17,
    aviable: 0,
    date: new Date('12/05/2024'),
    image: 'https://via.placeholder.com/640x480.png/0033aa?text=dolore'

  }
    ,
  {
    name: 'abdo',
    adresse: 'chaoueen',
    age: 13,
    aviable: 0,
    date: new Date('12/05/2024')

  }
    ,
  {
    name: 'mhend',
    adresse: 'tantan',
    age: 14,
    aviable: 0,
    date: new Date('12/05/2024')

  }
    ,
  {
    name: 'samir',
    adresse: 'dakhla',
    age: 30,
    aviable: 0,
    date: new Date('12/05/2024')

  }
    ,
  {
    name: 'hsen',
    adresse: 'laayoun',
    age: 12,
    aviable: 0,
    date: new Date('12/05/2024')

  }
    ,
  {
    name: 'hamid',
    adresse: 'rabat',
    age: 12,
    aviable: 0,
    date: new Date('12/05/2024')

  }
    ,
  {
    name: 'marwan',
    adresse: 'safi',
    age: 1,
    aviable: 0,
    date: new Date('12/05/2024')

  }
    ,
  {
    name: 'mostafa',
    adresse: 'agadir',
    age: 1,
    aviable: 0,
    date: new Date('12/05/2024')

  },
  ],

  columns: [
    {
      title: "Name",
      field: "name",
      EnableFilter: true,
      sortable: true,
      filterOptions: {
        InputType: "text",
        placeholder: "filter By Name",
      },
    },
    {
      title: "Adresse",
      field: "adresse",
      hidden:true,
      EnableFilter: true,
      sortable: true,
      filterOptions: {
        InputType: "text",
        placeholder: "filter By Name",
      },
    },
    
    {
      title: "AGE",
      field: "age",
      EnableFilter: true,
      sortable: true,
      filterOptions: {
        InputType: "text",
        placeholder: "filter By age",
      },
    },
    {
      title: "Aviable",
      field: "aviable",
      EnableFilter: true,
      sortable: true,
      filterOptions: {
        InputType: "select",
        placeholder: "filter By aviablity",
        filterSelectOptions: [
          { title: "all", selected: true },
          { title: "aviable", value: "1" },
          { title: "non aviable", value: "0" },
        ],
      },
    },
    {
      title: "Date",
      field: "date",
      isDate: true,
      dateMomentFormat: "L", // use momentjs formats
      EnableFilter: true,
      filterOptions: {
        InputType: "date",
        placeholder: "filter By Date",
      },
    },
    {
      title: "Image",
      field: "image",
      Cssclass: "imageClass",
      isImage: true,
      EnableFilter: false,
    },
    {
      title: "Actions",
      isHtml: true,
      EnableFilter: false,
    },
  ],
  config: {
    EnableSearch: true,
    searchplaceholder: "Search in Table",
    EnableUseDarkMode: true,
    EnableCardsTemp: true,
    EnableselectOptions: true,
    SearchInFields: ["name", "age", "date"],
    EnablePagination: true,
    PaginationConfig: {
      itemsPerPage: 3,
      CurrentPage: 1,
    },
  },
});

const add = (name) => { 
  console.log(name)
}
const GetCheckedData = (data) => {
  // selected data 
  console.log(data)
}
</script>

<style>
#cube{
   background-color: #ffd4d4;
   color: #ff7979;
}
#cube:hover{
   background-color: #de6b6b;
}

.FrCardclass{
   background: yellow;
}
</style>
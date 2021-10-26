<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="4">
          <IdeaList :items="items" @select="select($event)"/>
        </v-col>

        <v-col cols="8">
          <Details :key="selected" v-if="selected" :item="selected"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import IdeaList from './components/IdeaList';
import Details from './components/Details';

export default {
  name: 'App',

  components: {
    IdeaList,
    Details
  },

  data: () => ({
    items: [],
    selected: false,
  }),

  methods: {
    select(item){
      this.selected = item;
    }
  },

  mounted() {

    this.items = [
      {
        id: 10,
        created: '1635183856988',
        updted: '1635183856988',
        title: 'Ali Connors',
        text: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      {
        id: 20,
        created: '1635183856988',
        updted: '1635183856988',
        text: `Wish I could come, but I'm out of town this weekend.`,
        title: 'me, Scrott, Jennifer',
      },
      {
        id: 30,
        created: '1635183856988',
        updted: '1635183856988',
        text: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams',
      },
      {
        id: 40,
        created: '1635183856988',
        updted: '1635183856988',
        text: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen',
      },
      {
        id: 50,
        created: '1635183856988',
        updted: '1635183856988',
        text: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt',
      },
    ];

  }
};
</script>

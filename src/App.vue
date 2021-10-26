<template>
  <v-app>
    <v-main>
      <v-row style="height: 100vh; padding: 10px">
        <v-col cols="4" style="max-height: 100%">
          <v-row>
            <v-col cols="2">
              <v-btn color="primary" v-on:click="copyLog()" block>
                <!-- Copy Log --> <v-icon dark>mdi-content-copy</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="10">
              <v-btn color="primary" v-on:click="newItem()" block>
                New <v-icon right dark>mdi-plus-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <IdeaList :selected="selected" :items="items" @select="select($event)"/>
          </v-row>
        </v-col>

        <v-col cols="8" style="max-height: 100%">
          <Details :key="selected" v-if="selected" :item="selected" @save="save($event)" @remove="remove($event)"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import IdeaList from './components/IdeaList';
import Details from './components/Details';

import {ls_set, ls_get} from './utility/localDB';

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
    },
    save(item){
      this.items.map((obj) => {
        if(obj.id == item.id){
          item.updted = Date.now();
          return item;
        }
      });
      this.selected = item;
      ls_set('ideas', this.items);
    },
    remove(item){
      this.items = this.items.filter((obj) => {
        if(obj.id != item.id){
          return obj;
        }
      });
      this.selected = this.items[0];
      ls_set('ideas', this.items);
    },
    newItem(){
      let newItem = {
        id: Date.now(),
        created: Date.now(),
        updted: Date.now(),
        title: "",
        text: "",
      }

      this.items.push(newItem);
      this.selected = newItem;
      ls_set('ideas', this.items);
    },
    copyLog(){
      navigator.clipboard.writeText(JSON.stringify(this.items));
    }
  },

  mounted() {

    let db = ls_get('ideas');

    if(db == null){
      ls_set('ideas', []);
      db = ls_get('ideas');
    }

    this.items = db;
    this.selected = this.items[0];
  }
};
</script>

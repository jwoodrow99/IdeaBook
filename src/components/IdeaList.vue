<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-list two-line>

            <template v-for="(item, index) in items">
              <v-list-item v-on:click="select(item)" :class="(selected == item)?'active':''" :key="item.id">
                <template>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-html="item.text"></v-list-item-subtitle> <!-- v-text="item.text" -->
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-list-item-action-text v-text="item.created"></v-list-item-action-text>
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>

        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'IdeaList',

    props: [
      'items',
    ],

    data: () => ({
      selected: {},
    }),

    methods: {
      select(item){
        this.$emit('select', item);
        this.selected = item;
      }
    },

    mounted() {
      this.selected = this.items[0];
    },
  }
</script>

<style lang="scss" scoped>
  .active {
    background-color: LightGray;
  }
</style>
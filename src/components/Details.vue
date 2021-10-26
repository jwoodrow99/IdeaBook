<template>
    <v-row style="height: 100%;">
      <v-col cols="12">

        <v-text-field
          label="Title"
          outlined
          v-model="item.title"
        ></v-text-field>

        <ckeditor :editor="editor" v-model="item.text" :config="editorConfig"></ckeditor>

        <v-row>
          <v-col cols="6">
            <v-btn color="primary" style="margin-top: 10px" v-on:click="save(item)" block>Save</v-btn>
          </v-col>

          <v-col cols="6">
            <v-btn color="error" style="margin-top: 10px" @click="confirmDelete = true" block>Delete</v-btn>
          </v-col>
        </v-row>

      <v-dialog
        v-model="confirmDelete"
        max-width="300"
      >
        <v-card>
          <v-card-title class="justify-center">Confirm Delete</v-card-title>
          <v-card-text>{{item.title}}</v-card-text>
          <v-card-text v-html="formattedTest"></v-card-text>
          <v-card-actions class="justify-space-between">
            <v-btn color="error" text @click="remove(item)">Delete</v-btn>
            <v-btn color="primary" text @click="confirmDelete = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      </v-col>
    </v-row>
</template>

<script>

  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    name: 'Details',

    components: {

    },

    props: [
      'item'
    ],

    data: () => ({
      confirmDelete: false,
      editor: ClassicEditor,
      editorConfig: {
        // plugins: [	
        //   Alignment,
        //   Base64UploadAdapter,
        //   Bold,
        //   Code,
        //   Essentials,
        //   FindAndReplace,
        //   FontBackgroundColor,
        //   FontColor,
        //   FontFamily,
        //   FontSize,
        //   Highlight,
        //   Image,
        //   ImageResize,
        //   Italic,
        //   Link,
        //   List,
        //   PageBreak,
        //   Paragraph,
        //   Strikethrough,
        //   Subscript,
        //   Superscript,
        //   Table,
        //   TableCaption,
        //   TableCellProperties,
        //   TableProperties,
        //   TableToolbar,
        //   Underline,
        //   WordCount
        // ],
        toolbar: {
					items: [
						'bold',
						'italic',
						'underline',
						'strikethrough',
						'|',
						'fontFamily',
						'fontSize',
						'fontColor',
						'fontBackgroundColor',
						'highlight',
						'|',
						'alignment',
						'bulletedList',
						'numberedList',
						'|',
						'link',
						'insertTable',
						'pageBreak',
						'findAndReplace',
						'|',
						'undo',
						'redo'
					]
				},
				language: 'en',
				table: {
					contentToolbar: [
						'tableColumn',
						'tableRow',
						'mergeTableCells',
						'tableCellProperties',
						'tableProperties'
					]
				},
        placeholder: 'Write out your idea here...'
      }
    }),

    computed: {
      formattedTest: function(){
        return this.item.text.slice(0, 100);
      }
    },

    methods: {
      save(item){
        this.$emit('save', item);
      },
      remove(item){
        this.confirmDelete = false;
        this.$emit('remove', item);
      },
    },

    mounted() {

    },
  }
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
  .ck-editor__editable {
    height: 60vh;
   }
</style>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">

        <v-text-field
          label="Outlined"
          outlined
          v-model="title"
        ></v-text-field>

        <ckeditor :key="text" :editor="editor" v-model="text" :config="editorConfig"></ckeditor>

        <v-btn v-on:click="save()" block>Save</v-btn>

      </v-col>
    </v-row>
  </v-container>
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
      title: "",
      text: "",
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
      }
    }),

    methods: {
      save(){
        console.log(this.title);
        console.log(this.text);
      }
    },

    mounted() {
      this.title = this.item.title;
      this.text = this.item.text;
    },
  }
</script>

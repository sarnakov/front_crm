<template>
  <div class="flex">
    <div class="search-full-container w-full h-full absolute left-0 top-0" :class="{'flex': showFullSearch}" v-show="showFullSearch">
      <div v-if="options" class="flex flex-col ml-5" style="border-right:1px solid rgba(0,0,0,.3);">
        <div class="text-sm mt-3 -mb-3 font-bold">Поиск по</div>
        <v-select style="min-width: 200px;" :clearable="false" :value="$store.state.searchNavbar.selectedOption" @input="selectOption" :options="options" dir="ltr" />
      </div>
      <input autofocus :value="searchInput" @input="setSearchInput" ref="searchInput" type="text" placeholder="Поиск..." class="pl-4 text-lg pr-4 border-transparent flex-1">
      <vs-button class="mr-12 self-center" style="max-height:40px" color="primary" type="filled">Поиск</vs-button>
      <div class="absolute right-0 h-full z-50">
        <feather-icon
          icon="XIcon"
          class="px-4 cursor-pointer h-full close-search-icon"
          @click="toggle(false)" />
      </div>
    </div>
    <!-- <feather-icon icon="SearchIcon" @click="showFullSearch = true" class="cursor-pointer navbar-fuzzy-search mr-4" /> -->
  </div>
</template>

<script>
import VxAutoSuggest from '@/components/vx-auto-suggest/VxAutoSuggest.vue';
import vSelect from 'vue-select';
import {mapGetters, mapMutations} from 'vuex';
export default {
  components: {
    VxAutoSuggest,
    'v-select': vSelect,
  },
  data() {
    return {
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
    }
  },
  methods: {
    selected(item) {
      item.pages ?  this.$router.push(item.pages.url).catch(() => {}) : null
      this.showFullSearch = false;
    },
    hnd_search_query_update(query) {
      // Show overlay if any character is entered
      this.$store.commit('TOGGLE_CONTENT_OVERLAY', query ? true : false)
    },
    ...mapMutations('searchNavbar',{
      toggle: 'toggle',
      selectOption: 'selectOption',
      setSearchInput:'setSearchInput'
      
    })
  },
  computed:{
    ...mapGetters('searchNavbar',{
      showFullSearch: 'IS_OPEN',
      options:'GET_OPTIONS',
      selectedOption:'GET_SELECTED_OPTION',
      searchInput:'GET_SEARCH_INPUT'
    })
  },
  watch:{
    showFullSearch(payload){
      if(payload){
        // console.dir(this.$refs.searchInput.children[0].focus())
        
        // this.$refs.searchInput.focus();
      }
      return;
    }
  }
}

</script>

<style >
.search-full-container .vs__selected, .search-full-container .vs__selected-options{
  margin-left:0;
  padding-left:0;
}
.search-full-container .vs__selected {
  border-left: 0;
}
.search-full-container .vs__dropdown-toggle {
  border:none;
}
</style>
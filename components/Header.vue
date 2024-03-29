<template>
  <div class="menu-bar sticky top-0 z-50"> 
    <nav class="bg-gray relative z-50">
      <div class="container flex flex-wrap items-center justify-between mx-auto py-1 px-3 lg:px-2 xl:px-3">
        <nuxt-link @click="closeMenu()" to="/" class="flex items-center justify-center w-full md:w-auto">
          <img src="../assets/images/BT3-logo.webp" class="md:h-20 h-12 xl:mr-3" alt="Baan Thai Logo" />
        </nuxt-link>
        <div class="font-bold hidden md:flex">
          <div>
            <nuxt-link to="https://drive.google.com/file/d/1SarQEYhfWAqUNkFflbBNz_UEoluLDwmO/view?usp=drive_link" target="_blank" class="px-8 py-2">JOM BUKA MENU</nuxt-link>
          </div>
          <div>
            <nuxt-link to="https://drive.google.com/file/d/17IdlgDNTpTfrbjZJ-pAV3yyvGwiXO6Ql/view?usp=drive_link" target="_blank" class="px-8 py-2">MENU</nuxt-link>
          </div>
          <div>
            <nuxt-link to="#Galeri" class="px-8 py-2">GALERI</nuxt-link>
          </div>
          <div>
            <nuxt-link to="https://wa.link/sfeypg" target="_blank" class="bg-primary text-white mx-6 px-6 py-2 rounded-full">HUBUNGI KAMI</nuxt-link>
          </div>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {

  data() {
    return {
      isMenuOpen: false,
    };
  },

  mounted() {
    // initCollapses();
  },

  methods: {

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (this.isMenuOpen) {
        // Add a click event listener to the document when the menu is open
        document.addEventListener('click', this.closeMenuOnClickOutside);
      } else {
        // Remove the click event listener when the menu is closed
        document.removeEventListener('click', this.closeMenuOnClickOutside);
      }
    },

    closeMenuOnClickOutside(clickEvent) {
      const header = this.$el; // Reference to the header element
      const menu = this.$refs.menu; // Reference to the menu element
      // Check if the click occurred outside the header and the menu
      if (!header.contains(clickEvent.target) && !menu.contains(clickEvent.target)) {
        this.isMenuOpen = false;
        // Remove the click event listener
        document.removeEventListener('click', this.closeMenuOnClickOutside);
      }
    },

    // Close the menu when a navigation link is clicked
    closeMenu(type = null) {
      this.isMenuOpen = false;
      if (type) {
        useTrackEvent(type, {
          method: 'Website'
        })
      }
    },


  },
};
</script>
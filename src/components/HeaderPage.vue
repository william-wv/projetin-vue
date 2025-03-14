<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(window.innerWidth < 768);
const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isMenuOpen.value = false;
    isDropdownOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
  isDropdownOpen.value = false;
};

onMounted(() => {
  window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
});
</script>


<template>
  <header class="header">
    <div class="container-header">
      <img src="/src/components/icons/logo.png" alt="Logo" class="logo">

      <button v-if="isMobile" class="menu-btn" @click="toggleMenu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>

      <nav :class="{ open: isMenuOpen || !isMobile }" class="nav">
        <ul class="nav-links">
          <li @click="closeMenu">
            <router-link to="/">home</router-link>
          </li>
          <!-- Dropdown de Stocks -->
          <li class="dropdown" @click="toggleDropdown">
            <a>action </a><img class="img" src="../assets/img/drop.png" alt="dropdown">
            <ul v-if="isDropdownOpen" class="dropdown-menu">
              <li>
                <router-link to="/stocks">STOCK</router-link>
              </li>
              <li>
                <router-link to="/fund">FUND</router-link>
              </li>
              <li>
                <router-link to="/brd">BDR</router-link>
              </li>
              <li>
                <router-link to="/asc">maiores</router-link>
              </li>
            </ul>
          </li>
          <li @click="closeMenu">
            <router-link to="/fav">favorite</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
li {
  color: black !important;
  position: relative;
}

.img{
  width: 20px !important;
}

.header {
  background-color: var(--Green-primary);
  margin-bottom: 25px !important;
  padding: 15px 40px !important;
  box-shadow: 5px 3px 2px 2px rgba(0, 0, 0, 0.5);
}

.container-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  position: relative;
  display: flex;
  background-color: var(--Green-primary) !important;
  top: 0px !important;
}

.nav-links {
  display: flex;
  gap: 10px;
  list-style: none;
  justify-content: flex-end;
}

.nav-links li {
  font-size: 1.3rem;
  text-transform: uppercase;
  color: var(--White-primary);
}

.nav-links a {
  text-decoration: none;
  color: white !important;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.menu-btn span {
  display: block;
  width: 30px;
  height: 4px;
  background: white;
  transition: 0.3s;
}

.menu-btn span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-btn span.open:nth-child(2) {
  opacity: 0;
}

.menu-btn span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Estilo para o dropdown */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--Green-primary);
  list-style: none;
  padding: 10px 0;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dropdown-menu li {
  padding: 10px;
  color: white;
}

.dropdown-menu li:hover {
  background: var(--Brown);
}

@media (max-width: 767px) {
  .nav {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: var(--Brown);
    flex-direction: column;
    align-items: center;
    display: none;
  }

  .nav.open {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
  }

  .dropdown-menu {
    position: relative;
    background: var(--Brown);
    box-shadow: none;
    text-align: center;
  }
}
</style>

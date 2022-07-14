<template>
  <header>
    <nav class="container">
      <a href="/"
        ><img
          alt="WDEV"
          id="logo"
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
      /></a>
      <img
        v-on:click="openMenu"
        alt="abrir menu"
        id="menu-button"
        src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg"
      />

      <div v-on:click="closeMenu" id="menu-overlay" v-if="menuActive"></div>
      <!-- :class="aqui aceita código javascript", no caso, {}:um objeto, "active": o nome
      da chave(no caso, a classe)e condição para ser verdadeiro. A classe "active"
      estará dentro desta "div", ou não -->
      <div id="menu-items" :class="{ active: menuActive }">
        <img
          alt="WDEV"
          id="menu-logo"
          src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg"
        />
        <ul>
          <li><a href="/home">Home</a></li>

          <!--  <router-link :to="{ name: 'home' }"
            > Inicio</router-link> -->

            <a href=""></a>

           <!--  <router-link><a href="<router-link>"name: 'home'}">Homeee</a>Home</router-link> -->

          <li><a href="/videos">Video</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/contato">Contato</a></li>

          <li></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",

  /* data(){}: Estado "local" do componente.
     Guardando as variáveis que poderão ser
     usadas, dentro deste componente
     Retorna uma lista de objetos */
  data() {
    return {
      menuActive: false,
    };
  },
  methods: {
    openMenu: function () {
      this.menuActive = true;
    },
    closeMenu: function () {
      this.menuActive = false;
    },
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

#logo {
  width: 130px;
}

#menu-button {
  width: 30px;
}

#menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.65;
}

#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-items {
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

/* id menu-items e classe active */
#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: var(--color-text-light);
}

@media (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #menu-overlay {
    display: none;
  }
  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }
  ul {
    display: flex;
    flex-direction: row;
    height: 60px;
    align-items: center;
  }
  ul li {
    margin: 0;
    margin-left: 10px;
  }
}
</style>

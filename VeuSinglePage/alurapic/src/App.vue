<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="liata-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" alt="foto.titulo">
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shered/painel.vue';

export default {
  name: "App",
  components: {
    'meu-painel': Painel
  },
  data() {
    return {
      titulo: "AluraPIC",
      fotos: [],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then(
        (fotos) => (this.fotos = fotos),
        (err) => console.log(err)
      );
  },
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}
.centralizado {
  text-align: center;
}
.liata-fotos {
  list-style: none;
}
.liata-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva{
  width: 95%;
}
</style>

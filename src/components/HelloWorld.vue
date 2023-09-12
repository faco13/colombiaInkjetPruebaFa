<template>
<div class="parent">
<div class="div1"> </div>
<div class="div2"> </div>
<div class="div3"> </div>
</div> 
 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.parent {
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(8, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 9 / 7; }
.div2 { grid-area: 1 / 4 / 9 / 7; }
.div3 { grid-area: 2 / 5 / 8 / 6; }

</style>

<template>
  <p>Footer Title</p>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
  </ul>
  <p>Netflix South Africa</p>
</template>

<style scoped>
footer {
  @apply px-10 flex flex-col items-center justify-center;
}

ul {
  @apply grid grid-cols-4 content-center text-center;
}

li {
  @apply border;
}
</style>

<template>
  <div
    class="
      mt-0
      mb-auto
      w-10/12
      sm:w-1/2
      md:w-3/8
      lg:w-1/3
      xl:w-1/4
      rounded-b-2xl
      flex flex-col
      justify-center
      items-center
      bg-white bg-opacity-50
      backdrop-filter backdrop-blur-lg
      shadow-2xl
      py-8
    "
  >
    <h1 class="font-extrabold text-2xl text-gray-900">Page Not Found</h1>
    <img class="h-60 -mt-3" src="/error.svg" alt="notfound" />
    <p class="m-0 -mt-3 text-gray-900 font-semibold">
      The link you entered does not exist.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Notfound',
};
</script>

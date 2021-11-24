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
    <h1 class="font-extrabold text-2xl text-gray-900 mb-4">Pomotime</h1>
    <p class="mx-6 font-light text-sm text-center">
      Pomotime is a timer specifically made for implementing Pomodoro Technique
      to accomplish your tasks. I hope this helps.
    </p>
    <p class="mt-4 mx-6 font-light text-sm text-left">
      <span class="italic">
        The secret of getting ahead is getting STARTED.
      </span>
      <span class="float-right italic"> - Mark Twain </span>
    </p>
    <h1 class="mt-6 text-center font-extralight">
      Created by &nbsp;
      <a
        class="font-semibold underline"
        href="https://github.com/joashdev"
        title="visit github.com/joashdev"
      >
        joash
      </a>
    </h1>
    <p class="font-extralight">
      Created for <span class="font-normal text-sm">Dev Jam</span>
    </p>
    <p class="font-extralight">
      Images by
      <a
        class="font-light underline"
        href="https://unsplash.com/@karsten_wuerth?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Karsten Würth</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

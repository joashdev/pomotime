<template>
    <div
        class="
            w-10/12
            sm:w-1/2
            md:w-3/8
            lg:w-1/3
            rounded-2xl
            flex flex-col
            justify-center
            items-center
            bg-white bg-opacity-50
            backdrop-filter backdrop-blur-lg
            shadow-2xl
        "
    >
        <h1 class="font-extrabold text-4xl text-gray-900 mt-6">Settings</h1>
        <button class="my-10" @click="gotoHome" title="Go to Home">Home</button>
    </div>
</template>

<script>
export default {
    name: 'Settings',
    components: {},
    methods: {
        gotoHome() {
            this.$router.push('/')
        },
    },
}
</script>

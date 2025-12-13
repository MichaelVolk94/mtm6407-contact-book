<script setup>
import { ref, computed, onMounted } from 'vue';
import { contacts as initialContacts } from '../data';
import { RouterLink } from 'vue-router';


const contacts = ref([]);

onMounted(() => {
    const stored = JSON.parse(localStorage.getItem('contacts'));
    if (stored && stored.length > 0) {
        contacts.value = stored;
    } else {
        contacts.value = initialContacts;
        localStorage.setItem('contacts', JSON.stringify(initialContacts));
    }
});
</script>

<template>

    <div v-for="contact in contacts">
        <div class="contact"> 
            <RouterLink :to="`/contact/${contact.id}`">
                <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
            </RouterLink>
        </div>
    </div>

    <button>
        <RouterLink to="/new">Add Contact</RouterLink>
    </button>

</template>

<style scoped>

</style>
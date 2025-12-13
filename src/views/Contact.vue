<script setup>
import { useRoute, useRouter, RouterLink } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const contactId = Number(route.params.id);
const contact = ref(null);

const load = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contact.value = contacts.find(c => c.id === contactId);
}

load();

const deleteContact = () => {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts = contacts.filter(c => c.id !== contactId);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    router.push('/');
}
</script>

<template>

    <div v-if="contact">
        <div class="single-contact">
            <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
            <h3>{{ contact.email }}</h3>
            <button>
                <RouterLink :to="`/edit/${contact.id}`">Edit</RouterLink>
            </button>
            &nbsp;
            <button>
                <RouterLink to="/">Back</RouterLink>
            </button>
            &nbsp;
            <button @click="deleteContact">
                Delete?
            </button>
        </div>
    </div>

</template>

<style scoped>
.single-contact {
  max-width: 800px;
  margin: 1rem auto;
  padding: 0.5rem;
  border-radius: 7px;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
}
</style>
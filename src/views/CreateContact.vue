<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const firstName = ref('');
const lastName = ref('');
const email = ref('');

const saveContact = () => {

    const newContact = {
        id: Math.random(), 
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    };

 
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    router.push(`/contact/${newContact.id}`);
}

</script>

<template>

    <div>
        <form>
            <div>
                <label for="firstName">First Name:</label>
                <input id="firstName" v-model="firstName" type="text" required />
            </div>
            <div>
                <label for="lastName">Last Name:</label>
                <input id="lastName" v-model="lastName" type="text" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input id="email" v-model="email" type="email" required />
            </div>
            <button type="button" @click="saveContact">Save Contact</button>
        </form>
    </div>

</template>

<style scoped>

</style>
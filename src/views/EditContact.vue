<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const contactId = Number(route.params.id);

const contact = ref(null);

const load = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const foundContact = contacts.find(c => c.id === contactId);
    if (foundContact) {
    
        contact.value = {
            ...foundContact,
            tags: foundContact.tags ? foundContact.tags.join(', ') : ''
        };
    }
};

load();

const updateContact = () => {

    const tagsArray = contact.value.tags 
        ? contact.value.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
        : [];
    
    const contactToSave = {
        ...contact.value,
        tags: tagsArray
    };

    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    
    const index = contacts.findIndex(c => c.id === contactId);
    if (index !== -1) {
        contacts[index] = contactToSave;
        localStorage.setItem('contacts', JSON.stringify(contacts));
        router.push(`/contact/${contactId}`);
    }
};

</script>

<template>

    <div>
        <div v-if="contact">
            <form>
                <div>
                    <label for="name">First Name:</label>
                    <input type="text" id="firstName" v-model="contact.firstName" required />
                </div>
                                <div>
                    <label for="name">Last Name:</label>
                    <input type="text" id="lastName" v-model="contact.lastName" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" v-model="contact.email" required />
                </div>
                <button type="button" @click="updateContact">Update Contact</button>
            </form>
        </div>
    </div>

</template>

<style scoped>
label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
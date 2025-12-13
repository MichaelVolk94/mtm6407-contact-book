import { createRouter, createWebHistory } from 'vue-router';

import Contact from '../views/Contact.vue';
import Contacts from '../views/Contacts.vue';
import CreateContact from '../views/CreateContact.vue';
import EditContact from '../views/EditContact.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Contacts
        },
        {
            path: '/new',
            component: CreateContact
        },
        {
            path: '/edit/:id',
            component: EditContact
        },
        {
            path: '/contact/:id',
            component: Contact
        },
    ]
});

export default router;
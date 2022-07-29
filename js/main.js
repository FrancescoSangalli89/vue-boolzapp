// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, 
// vengono visualizzati solo i contatti il cui nome contiene 
// le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” 
//     rimangono solo Marco e Martina)

const app = new Vue({
    el: '#app',
    data: {
        activeContact: 0,
        newMessage: '',
        searchValue: '',
        contacts: [
            {
                'name': 'Michele',
                'image': 'img/avatar_1.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Sofia',
                'image': 'img/avatar_io.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato il cane dal veterinario?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di cucinare la cena',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Samuele',
                'image': 'img/avatar_3.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Alessandro B',
                'image': 'img/avatar_4.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Alessandro L',
                'image': 'img/avatar_5.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Claudia',
                'image': 'img/avatar_6.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Federico',
                'image': 'img/avatar_7.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                'name': 'Davide',
                'image': 'img/avatar_8.jpg',
                'visible': true,
                'messages': [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        selectContact(position) {
            this.activeContact = position;
            console.log(position);
        },
        addMessage() {

            this.contacts[this.activeContact].messages.push(
                {
                    date: '10/01/2020 15:30:55',
                    message: this.newMessage,
                    status: 'sent'
                }

            );

            this.newMessage = '';

            setTimeout(() => {
                console.log(this);
                this.contacts[this.activeContact].messages.push(

                    {
                        date: '10/01/2020 15:30:55',
                        message: 'ok!',
                        status: 'received'
                    }
                );
            }, 1000)
        },
    },
    computed: {
        filteredContacts() {
            let filtered = this.contacts

            if (this.searchValue != '' && this.searchValue) {
                filtered = filtered.filter((item) => {
                    return item.name.toLowerCase().includes(this.searchValue.toLowerCase())
                })
            }
            console.log(filtered)
            return filtered
            
        }
    }

})
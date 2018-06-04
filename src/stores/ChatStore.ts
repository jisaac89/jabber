import { Collection, Document } from 'firestorter';
import { action, observable } from 'mobx';

class chatStore {

    @observable chats = new Collection('chats');
    @observable selectedChat = new Document();

    @action message = () => {
        const message = this.chats.add({
            message: false,
            roomId: '',
            author: ''
        });
    }
};
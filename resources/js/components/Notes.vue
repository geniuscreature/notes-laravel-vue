<template>
    <div class="content">
        <div class="add-btn-wrapper">
            <button class="add-btn dark fab" @click="dialog = !dialog">
                +
            </button>
        </div>
        <v-dialog v-model="dialog" width="700px" color="#001a2b">
            <v-card class="card">
                <v-container>
                    <form action="" method="post" class="notes-form">
                        <div class="add-note-title-input">
                            <input type="text" class="title-input add-note-input" v-bind:placeholder="$t('noteTitle')" v-model="post.title">
                            <input type="text" v-model="post.id" hidden>
                        </div>
                        <div class="add-note-subtitle-input">
                            <textarea v-model="post.content" class="textarea" v-bind:placeholder="$t('note')"></textarea>
                        </div>
                    </form>
                </v-container>
                <v-card-actions>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <img src="/images/icons/fontfamilywhite.svg" alt="" class="img-action">
                            </v-btn>
                        </template>

                        <v-list color="#001a2b">
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title">Nunito</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title">Bebas</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title">Montserrat</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title">Rubik</v-list-item-title></v-list-item>
                        </v-list>
                    </v-menu>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <img src="/images/icons/colorwhite.svg" alt="" class="img-action">
                            </v-btn>
                        </template>

                        <v-list color="#001a2b">
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text1">color</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text2">color</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text3">color</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text4">color</v-list-item-title></v-list-item>
                        </v-list>
                    </v-menu>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <img src="/images/icons/voice.svg" alt="" class="img-action">
                            </v-btn>
                        </template>
                    </v-menu>
                    <v-spacer />
                    <v-btn @click.prevent="createPost(post)" class="saveEdit">{{ $t('save') }}</v-btn>
                    <v-btn text color="primary" @click="dialog = false">{{ $t('cancel') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- показ записей -->
        <div class="notes">
            <div class="notes-field" v-for="(post, i) in posts" :key="i" @click="showPost(post.id), dialog2 = true">
                <p class="note-title">{{ truncateTitle(post.title) }}</p>

                <p class="note-content">{{ truncateText(post.content) }}</p>
                <button @click="deletePost(post), dialog2 = false, dialog = false" class="delete-post-btn"><img src="/images/icons/bin_white.svg" alt="bin" class="img-bin"></button>
            </div>
        </div>

        <v-dialog v-model="dialog2" width="700px" color="#001a2b">
            <v-card class="card">
                <v-container>
                    <form action="" method="post" class="notes-form">
                        <div class="add-note-title-input">
                            <input type="text" class="title-input add-note-input" v-bind:placeholder="$t('noteTitle')" v-model="post.title">
                            <input type="text" v-model="post.id" hidden>
                        </div>
                        <div class="add-note-subtitle-input">
                            <textarea v-model="post.content" class="textarea" v-bind:placeholder="$t('note')"></textarea>
                        </div>
                    </form>
                </v-container>
                <v-card-actions>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <img src="/images/icons/fontfamilywhite.svg" alt="notes icon font" class="img-action">
                            </v-btn>
                        </template>

                        <v-list color="#001a2b">
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text1">Nunito</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text2">Bebas</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text3">Montserrat</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text4">Rubik</v-list-item-title></v-list-item>
                        </v-list>
                    </v-menu>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <img src="/images/icons/colorwhite.svg" alt="notes icon font" class="img-action">
                            </v-btn>
                        </template>

                        <v-list color="#001a2b">
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text1">Nunito</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text2">Bebas</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text3">Montserrat</v-list-item-title></v-list-item>
                            <v-list-item class="list-item"><v-list-item-title class="list-item-title text4">Rubik</v-list-item-title></v-list-item>
                        </v-list>
                    </v-menu>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <img src="/images/icons/voice.svg" alt="notes icon color" class="img-action">
                            </v-btn>
                        </template>
                    </v-menu>
                    <v-spacer />
                    <v-btn @click.prevent="editPost(post), dialog2 = false" class="saveEdit">{{ $t('save') }}</v-btn>
                    <v-btn text color="primary" @click="dialog2 = false">{{ $t('cancel') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                dialog2: false,
                dialog: false,
                post: {
                    id: '',
                    title: '',
                    content: ''
                },
            }
        },
        mounted() {
            this.$store.dispatch('fetchPosts')
        },
        methods: {
            deletePost(post) {
                this.$store.dispatch('deletePost',post)
            },
            showPost(postId) {
                axios.get(`/posts/${postId}`)
                    .then(res => {
                        // console.log(res)
                        this.post = res.data
                    }).catch(err => {
                    console.log(err)
                })
            },
            createPost(post) {
                this.dialog = false;
                this.$store.dispatch('createPost', post);
            },
            editPost(id) {
                axios.put(`/posts-update`, id)
                    .then(res => {
                        this.$store.dispatch('deletePost', id);
                        this.$store.dispatch('createPost', id);
                    })
            },
            setLocale(locale) {
                this.$i18n.locale = locale
            },
            truncateTitle(title) {
                if(title.length > 14) {
                    return `${title.substr(0, 14)}...`
                }
                return title;
            },
            truncateText(text) {
                if(text.length > 50) {
                    return `${text.substr(0, 50)}...`
                }
                return text;
            },
        },
        computed: {
            ...mapGetters([
                'posts'
            ]),
            isValid() {
                return this.post.title !== '' && this.post.content !== ''
            },
        },
    }
</script>

<style scoped>
    .img-action {
        width: 25px;
        height: 25px;
    }
</style>

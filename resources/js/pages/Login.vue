<template>
    <section class="reg reg-login">
        <div class="alert alert-danger" v-if="has_error">
            <p>{{ $t('loginError') }}</p>
        </div>
        <form autocomplete="on" @submit.prevent="login" method="post" id="form" class="form">
            <h2 class="form-title registration">{{ $t('login') }}</h2>
            <div class="form-group form-email">
                <input type="email" id="email" class="form-email-input reg-input" v-bind:placeholder="$t('yourEmail')" v-model="email" required>
<!--                <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>-->
            </div>
            <div class="form-group form-password">
                <input type="password" id="password" class="form-password-input reg-input" v-model="password" v-bind:placeholder="$t('yourPassword')" required>
<!--                <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>-->
            </div>
            <div class="form-btn">
                <button type="submit" class="form-btn-reg">{{ $t('login') }}</button>
            </div>
            <div class="form-have-account">
                <router-link to="/register" class="form-have-account-link">
                    {{ $t('createAnAccount') }}
                </router-link>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                email: null,
                password: null,
                has_error: false
            }
        },
        mounted() {
            //
        },
        methods: {
            login() {
                // get the redirect object
                var redirect = this.$auth.redirect()
                var app = this
                this.$auth.login({
                    params: {
                        email: app.email,
                        password: app.password
                    },
                    success: function() {
                        // handle redirection
                        const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === 2 ? 'admin.dashboard' : 'dashboard'
                        this.$router.push({name: redirectTo})
                    },
                    error: function() {
                        app.has_error = true
                    },
                    rememberMe: true,
                    fetchUser: true
                })
            }
        }
    }
</script>

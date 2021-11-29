<template>
    <section class="index">
        <section class="info">
            <div class="info-top">
                <div class="info-title">
                    <img src="images/logo/logo_white.svg" alt="notes app logo" class="logo">
                    <h1 class="title">ote.it</h1>
                </div>
                <ul class="info-lang">
                    <li @click="setLocale('ru')" class="set-locale"><flag iso="ru" /></li>
                    <li @click="setLocale('en')" class="set-locale"><flag iso="us" /></li>
                </ul>
            </div>
            <div class="info-content">
                <ul class="list">
                    <li class="list-thing"><img src="/images/icons/pen.svg" class="list-thing-img">{{ $t('about1') }}</li>
                    <li class="list-thing"><img src="/images/icons/remind.svg" class="list-thing-img">{{ $t('about2') }}</li>
                    <li class="list-thing"><img src="/images/icons/stages.svg" class="list-thing-img">{{ $t('about3') }}</li>
                    <li class="list-thing"><img src="/images/icons/passw.svg" class="list-thing-img">{{ $t('about4') }}</li>
                    <li class="list-thing"><img src="/images/icons/voice.svg" class="list-thing-img">{{ $t('about5') }}</li>
                </ul>
            </div>
            <div class="info-contacts">
                {{ $t('created') }}
            </div>
        </section>
        <section class="reg">
            <div class="alert alert-danger" v-if="has_error && !success">
                <p v-if="error == 'registration_validation_error'">{{ $t('validError') }}</p>
                <p v-else>{{ $t('registerError') }}</p>
            </div>
            <form autocomplete="on" @submit.prevent="register" v-if="!success" method="post" id="form" class="form">
                <h2 class="form-title registration">{{ $t('registration') }}</h2>
                <div class="form-group form-name" v-bind:class="{ 'has-error': has_error && errors.name }">
                    <input type="text" id="name" class="form-control form-email-input reg-input" v-bind:placeholder="$t('yourName')" v-model="name">
                    <span class="help-block" v-if="has_error && errors.name">{{ errors.name }}</span>
                </div>
                <div class="form-group form-email" v-bind:class="{ 'has-error': has_error && errors.email }">
                    <input type="email" id="email" class="form-email-input reg-input" v-bind:placeholder="$t('yourEmail')" v-model="email">
                    <span class="help-block" v-if="has_error && errors.email">{{ errors.email }}</span>
                </div>
                <div class="form-group form-password" v-bind:class="{ 'has-error': has_error && errors.password }">
                    <input type="password" id="password" class="form-password-input reg-input" v-model="password" v-bind:placeholder="$t('yourPassword')">
                    <span class="help-block" v-if="has_error && errors.password">{{ errors.password }}</span>
                </div>
                <div class="form-group form-password" v-bind:class="{ 'has-error': has_error && errors.password }">
                    <input type="password" id="password_confirmation" class="form-password-input reg-input" v-model="password_confirmation" v-bind:placeholder="$t('passwordAgain')">
                </div>
                <div class="form-btn">
                    <button type="submit" class="form-btn-reg">{{ $t('registration') }}</button>
                </div>
                <div class="form-have-account">
                    <router-link to="/login" class="form-have-account-link">
                        {{ $t('haveAnAccount') }}
                    </router-link>
                </div>
            </form>
        </section>
    </section>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        has_error: false,
        error: '',
        errors: {},
        success: false,
      }
    },

    methods: {
      register() {
        let app = this
        this.$auth.register({
          data: {
            name: app.name,
            email: app.email,
            password: app.password,
            password_confirmation: app.password_confirmation
          },
          success: function () {
            app.success = true
            this.$router.push({name: 'login', params: {successRegistrationRedirect: true}})
          },
          error: function (res) {
            console.log(res.response.data.errors)
            app.has_error = true
            app.error = res.response.data.error
            app.errors = res.response.data.errors || {}
          }
        })
      },
        setLocale(locale) {
            this.$i18n.locale = locale
        },
    },
  }
</script>


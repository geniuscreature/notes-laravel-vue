<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" clipped app color="#003252">
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <div class="colorful-circle red-circle">2</div>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><router-link class="router-link" to="/">Life</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <div class="colorful-circle blue-circle">1</div>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><router-link class="router-link" to="/about">Work</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <div class="colorful-circle green-circle">2</div>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><router-link class="router-link" to="/create/post">Entertainment</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <div class="colorful-circle pink-circle">1</div>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><router-link class="router-link" to="/">Education</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <div class="colorful-circle cyan-circle">1</div>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><router-link class="router-link" to="/about">Sport</router-link></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
<!--                <v-list-item link>-->
<!--                    <v-list-item-action>-->
<!--                        <div class="colorful-circle yellow-circle">0</div>-->
<!--                    </v-list-item-action>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title><router-link to="/create/post">section</router-link></v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
<!--                <v-list-item link>-->
<!--                    <v-list-item-action>-->
<!--                        <div class="colorful-circle pass-circle">0</div>-->
<!--                    </v-list-item-action>-->
<!--                    <v-list-item-content>-->
<!--                        <v-list-item-title><router-link to="/create/post">section</router-link></v-list-item-title>-->
<!--                    </v-list-item-content>-->
<!--                </v-list-item>-->
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="#001e32" clipped-left hide-on-scroll height="46px">
            <template v-slot:img="{ props }">
                <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)" color="#fff"></v-img>
            </template>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#fff"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <v-avatar size="32px" class="logo-img">
                    <img src="/images/logo/logo_white.svg" alt="notes logo" class="header-logo-img">
                </v-avatar>
                <p class="header-logo-name">ote.it</p>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="user-stuff">
                <p class="username">Username</p>
            </div>

            <v-menu bottom left>
                <template v-slot:activator="{ on }">
                    <v-btn icon color="white" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list color="#001e32">
                    <v-list-item class="list-item"><v-list-item-title class="list-item-title">{{ $t('profile') }}</v-list-item-title></v-list-item>
                    <v-list-item class="list-item">
                        <v-menu>
                            <template v-slot:activator="{ on }">
                                <p v-on="on" class="list-item-title">{{ $t('language') }}</p>
                            </template>

                            <v-list>
                                <v-list-item @click="setLocale('ru')">{{ $t('russian') }}<flag iso="ru" /></v-list-item>
                                <v-list-item @click="setLocale('en')">{{ $t('english') }}<flag iso="us" /></v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item>
                    <v-list-item class="list-item"><v-list-item-title class="list-item-title">{{ $t('darkTheme') }}</v-list-item-title></v-list-item>
                    <v-list-item class="list-item"><v-list-item-title class="list-item-title logout-item"><a href="#" @click.prevent="$auth.logout()" class="list-item-title">{{ $t('logout') }}</a></v-list-item-title></v-list-item>
                </v-list>
            </v-menu>

            <template v-slot:extension class="switches-link">
                <v-tabs centered fixed-tabs>
                    <v-tab class="tab"><router-link to="/dashboard/notes" class="router-link link">{{ $t('notes') }}</router-link></v-tab>
                    <v-tab class="tab"><router-link to="/dashboard/reminders" class="router-link link">{{ $t('reminders') }}</router-link></v-tab>
                    <v-tab class="tab"><router-link to="/dashboard/todo" class="router-link link">{{ $t('todo') }}</router-link></v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <!--    ================================= content =================================== -->
        <v-content>
            <router-view></router-view>
        </v-content>

        <!--     ======================================== footer ============================================= -->
<!--        <v-footer color="#001e32" app>-->
<!--            <span class="white&#45;&#45;text">weather</span>-->
<!--        </v-footer>-->
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
            primaryDrawer: {
                clipped: false
            },
        }),
        methods: {
            setLocale(locale) {
                this.$i18n.locale = locale
            },
        }
    }
</script>

<style scoped>
    .header-logo-name {
        margin: 0;
        padding-top: 10px;
    }

    .v-avatar {
        border-radius: 0;
    }

    .v-toolbar__title {
        display: flex;
        align-items: center;
    }

    .tab {
        max-width: 240px;
    }

    .router-link {
        padding: 15px 0;
        width: 100%;
        text-decoration: none;
        color: #fff;
        font-family: 'MontserratR', sans-serif;
    }

    .logout-item {
        border-top: 1px solid #fff;
        padding-top: 10px;
        color: #fff;
    }

    .list-item-title {
        font-family: 'MontserratR', sans-serif;
        font-size: 1.2rem;
    }

    .list-item-title:hover {
        color: #8150eb;
    }

    .v-application a {
        color: #fff;
    }

    .v-application a:hover {
        text-decoration: none;
        color: #8150eb;
    }

    .colorful-circle {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: 'MontserratR', sans-serif;
    }

    .red-circle {
        border: 2px solid #b50710;
    }
    .blue-circle {
        border: 2px solid #7e0cf5;
    }
    .green-circle {
        border: 2px solid #04db48;
    }
    .pink-circle {
        border: 2px solid #d102ce;
    }
    .cyan-circle {
        border: 2px solid #95bcfc;
    }
    .yellow-circle {
        border: 2px solid #fff64c;
    }
    .pass-circle {
        border: 2px solid #090057;
    }

    @media screen and (max-width: 464px) {
        .logo-img {
            min-width: 25px;
            width: 25px;
            height: 25px;
        }

        .header-logo-img {
            width: 25px;
            height: 25px
        }
    }
</style>

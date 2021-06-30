<template>
    <div class="form container">
        <h1>Sauvez simplement vos pertes</h1>
        <h3 class="subheader mb-4">Si vous gerez un commerce, rejoignez nos 20 227 partenaires</h3>
            <ValidationObserver v-slot="{errors , failed, untouched, handleSubmit}">
                <form method="post" @submit.prevent="handleSubmit(onSubmit)" >
                    <!-- dans une blade, utiliser @csrf -->
                    <div role="group" class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-briefcase fa-w-16"><path fill="currentColor" d="M464 128H352V56c0-13.26-10.74-24-24-24H184c-13.26 0-24 10.74-24 24v72H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM192 64h128v64H192V64zm288 368c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V288h160v40c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-40h160v144zM224 320v-32h64v32h-64zm256-64H32v-80c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v80z" class=""></path></svg>
                            </div>
                            <ValidationProvider rules="required" v-slot="{ errors }" >
                                <input v-model="businessName" type="text" id="business-name" name="business-name" class="form-control" :class="{formControlError : errors.length > 0}" placeholder="Nom de votre magasin">
                                <small v-if="errors.length > 0" class="error invalid-feedback">{{errors[0]}}</small>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div role="group" class="input-group">
                        <div @click="preventLetters($event)" class="input-group-prepend phone">
                            <ValidationProvider mode="lazy" rules="required|phone" v-slot="{ errors }">
                                <vue-tel-input type="phone" v-model="phone" id="phone-number" name="phone-number" class="form-control" placeholder="Numéro de portable"></vue-tel-input>
                                <small class="error">{{errors[0]}}</small>
                            </ValidationProvider>
                        </div>
                    </div>

                    <div role="group" class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" class=""></path></svg>
                            </div>
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <input v-model="emailAddress" type="email" id="email-address" name="email-address" class="form-control" placeholder="Adresse mail">
                                <small class="error">{{errors[0]}}</small>
                            </ValidationProvider>
                        </div>
                    </div>            

                    <div role="group" class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg> 
                            </div>
                            <ValidationProvider rules="required|password" v-slot="{ errors }">
                                <input v-model="password" type="password" id="password" name="password" class="form-control" placeholder="Mot de passe">
                                <small class="error">{{errors[0]}}</small>
                            </ValidationProvider>
                        </div>
                    </div>         
                    
                    <vue-recaptcha id="g-recaptcha"
                                    class="g-recaptcha mt-4" 
                                    @verify="onCaptchaVerified"
                                    :sitekey="captchaClientKey"></vue-recaptcha>

                    <div class="text-center mt-4">
                        <button  :disabled="errors.length > 0 || untouched || failed || captchaError" type="submit" class="btn-submit">
                            Sauver mes invendus
                        </button>
                    </div>
                </form>
            </ValidationObserver>                   

    </div>
</template>

<script>
    import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
    import { VueTelInput } from 'vue-tel-input';
    import 'vue-tel-input/dist/vue-tel-input.css';
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: 'SecureForm',
        components: {
            ValidationObserver,
            ValidationProvider,
            VueTelInput,
            VueRecaptcha
        },
        data(){
            return {
                businessName: '',
                phone: '',
                emailAddress: '',
                password: '',
                captchaClientKey: process.env.VUE_APP_CAPTCHA_CLIENT_KEY,
                captchaError: true,
            }
        },
        beforeMount() {
            extend('required', {
                validate(value) {
                    if(value !== '') {
                        return true ;
                    } else {
                        return 'Ce champs est obligatoire'
                    }
                },
                computesRequired: true
            });
            extend('phone', {
                validate(value) {
                    const phoneRegex = /^[0-9].{6,15}/;
                    if(value.search(phoneRegex) != -1) {
                        return true ;
                    } else {
                        return 'Format de numéro de téléphone invalide'
                    }
                },
                computesPhone: true
            });
            extend('password', {
                validate(value) {
                    const passwordRegex = /^(?=.*([A-Z]){1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,25}$/;
                    if(value.length < 6) {
                        return 'Le mot de passe doit faire minimum 6 caractères.'
                    }else if(value.search(passwordRegex) != -1) {
                        return true ;
                    }else{
                        return 'Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial.'
                    }
                },
                computesPassword: true
            });
        },
        methods: {
            onSubmit(){
                alert('Le formulaire à été envoyé !');
            },
            preventLetters(e){        
                e.currentTarget.querySelector('input').addEventListener('keydown', (event) => {
                    const regex = /^[0-9]/;
                    if(!regex.test(event.key) && event.keyCode != 8 && event.keyCode != 9 &&  event.keyCode != 13){
                        event.preventDefault();                    
                    }
                })

            },
            onCaptchaVerified(){
                this.captchaError = false;
            }
        },
    }
</script>

<style lang="scss">
    h1{
        text-align: left;
        color: $primary;
        text-transform: uppercase;
        font-size: 3.5rem;
        line-height: 4rem;
        margin: 0;
    }
    h3{    
        text-align: left;
        font-weight: 400;
        color: $secondary;
        font-size: 1.75rem;
        text-transform: uppercase;
        line-height: 2rem;
    }
    .input-group{
        font-weight: 400;
        line-height: 1.5;
        text-align: left;
        box-sizing: border-box;
        margin-top: 1.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: stretch;
        width: 100%;
        color: $primary;
        font-size: 1rem;
        background-color: #fff;
        border-radius: 30px;
        box-shadow: 0 5px 15px 0 #eee6db;
        border: none;
        
        .vti__flag{
            min-width: 20px;
        }

        &-prepend {
            font-weight: 400;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            margin-right: -1px;
            font-size: 1rem!important;
            padding: .5rem 0 .5rem .75rem;

            span{
                width: 100%;
                
                input{
                    width: 100%;
                }
            }

            .error{
                position: absolute;
                color: $error;
                top: .25rem;
                left: 4.5rem;
                font-size: 10px;
            }
        }

        &-text{
            border: none;
            border-radius: 30px 0 0 30px;
            background-color: #fff;
            color: $text-light;
            display: flex;

            .svg-inline--fa, svg:not(:root).svg-inline--fa{
                overflow: visible;
                width: 1rem;
                height: 1rem;
                padding: 0.5rem 1rem 0.5rem 0.75rem;
            }
        }


        .form-control {
            box-sizing: border-box;
            margin: 0;
            font-family: inherit;
            overflow: visible;
            display: flex;
            height: calc(1.5em + .75rem + 2px);
            padding: .375rem .75rem;
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1.5;
            background-color: #fff;
            background-clip: padding-box;
            transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            position: relative;
            flex: 1 1 auto;
            margin-bottom: 0;
            color: #114d4d;
            border: none;
            border-left: none!important;
            border-radius: 0 30px 30px 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &::placeholder{
                opacity: .75
            }
        }
        .custom-select:not(:first-child), .form-control:not(:first-child){
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }
    .vti__input::placeholder{
        font-size: 1.25rem;
        font-weight: 400;
        opacity: .75rem;
        color: grey;
        opacity: .75
    }

    .mt-4{
        margin-top: 1rem;
    }
    .btn-submit{
        max-width: 100%;
        background-color: #114d4d;
        color: #fff;
        text-transform: uppercase;
        font-size: 1rem;
        min-width: 200px;
        text-align: center;
        border-radius: 120px;
        border:none;
        font-weight: 600;
        box-shadow: 0 12px 40px $secondary-light;
        background-color: $secondary;
        white-space: normal!important;
        display: inline-block;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        line-height: 1.5;
        padding: 1rem 1.5rem;
        width: 100%;
        cursor: pointer;
        &:disabled{
            background-color: $secondary-light;
        }
        &:active{
            background-color: $primary;
        }
    }
    @media (min-width: 576px){
        .container, .container-sm {
            max-width: 540px;
            padding: 0 15px
        }
    }
    input{
        min-width: 10rem;
        &:valid {
            border-color: green;
        }

        &:invalid {
            border-color: red;
        }
    }

</style>

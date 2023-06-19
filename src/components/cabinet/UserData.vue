<template>
    <div>
        <div class="cabinet__body cabinet__body--lg ">
            <form class="cabinet__form">
                <div class="cabinet__avatar">
                    <label class="cabinet__avatar-label">
                    <input class="cabinet__avatar-input" type="file" />
                    <div class="cabinet__avatar-img">
                        <img src="@/assets/images/avatar.svg" />
                    </div>
                    </label>
                </div>
                <h2 class="cabinet__body-title">Данные пользователя</h2>
                <div class="cabinet__form-field">
                    <label for="secondName">Фамилия</label>
                    <input
                    class="cabinet__form-input"
                    type="text"
                    name="second name"
                    id="secondName"
                    />
                </div>
                <div class="cabinet__form-field">
                    <label for="name">Имя</label>
                    <input
                    class="cabinet__form-input"
                    type="text"
                    name="name"
                    id="name"
                    />
                </div>
                <div class="cabinet__form-field">
                    <label for="fathersName">Отчество</label>
                    <input
                    class="cabinet__form-input"
                    type="text"
                    name="Fathers name"
                    id="fathersName"
                    />
                </div>
                <div class="cabinet__form-field">
                    <label for="email">E-mail</label>
                    <input
                    class="cabinet__form-input"
                    type="text"
                    name="email"
                    id="email"
                    />
                </div>
                <div class="cabinet__form-field">
                    <label for="phone">Телефон</label>
                    <input
                    class="cabinet__form-input"
                    type="text"
                    name="phone"
                    id="phone"
                    />
                </div>
                <div class="cabinet__form-field">
                    <label for="address">Адрес</label>
                    <input
                    class="cabinet__form-input"
                    type="text"
                    name="address"
                    id="address"
                    />
                </div>
            </form>
        </div>
        <!-- Мобильный Личный Кабинет -> Данные пользователя-->
        <div class="mob-profile mob-cabinet__body ">
            <h1 class="mob-cabinet__title">Личный кабинет</h1>
            <div class="mob-cabinet__tabs">
                <a href="#" class="mob-cabinet__tab active" @click.prevent="$emit('close')">Данные пользователя</a>
            </div>
            <form class="cabinet__form">
                <div class="cabinet__avatar">
                <label class="cabinet__avatar-label">
                    <input class="cabinet__avatar-input" type="file" />
                    <div class="cabinet__avatar-img">
                    <img src="@/assets/images/avatar.svg" />
                    </div>
                </label>
                </div>
                <h2 class="cabinet__body-title">Данные пользователя</h2>
                <div class="cabinet__form-field">
                <label for="secondName">Фамилия</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="second name"
                    id="secondName"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="name">Имя</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="name"
                    id="name"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="fathersName">Отчество</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="Fathers name"
                    id="fathersName"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="email">E-mail</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="email"
                    id="email"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="phone">Телефон</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="phone"
                    id="phone"
                />
                </div>
                <div class="cabinet__form-field">
                <label for="address">Адрес</label>
                <input
                    class="cabinet__form-input"
                    type="text"
                    name="address"
                    id="address"
                />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserData',
}
</script>

<style>

</style>